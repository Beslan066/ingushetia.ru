<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Agency;
use App\Models\Anticorruption;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Document;
use App\Models\EconomicSupport;
use App\Models\Implementation;
use App\Models\MilitarySupport;
use App\Models\Mountain;
use App\Models\Municipality;
use App\Models\NationalProject;
use App\Models\News;
use App\Models\PhotoReportage;
use App\Models\Resource;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index(Request $request)
  {
    $categories = Category::query()->take(10)->get();
    $resources = Resource::query()->where('agency_id', 5)->get();
    $photoReportages = PhotoReportage::query()->take(4)->orderBy('published_at', 'desc')->get();
    $videos = Video::query()->take(4)->orderBy('published_at', 'desc')->get();

    $cities = Municipality::query()->with('supervisor')->where('type', 2)->get();
    $districts = Municipality::query()->with('supervisor')->where('type', 20)->get();

    $mountains = Mountain::with('reportage')->get();

    $mainPosts = News::query()
      ->with('category', 'video', 'reportage')
      ->where('main_material', 1)
      ->where('agency_id', 5)
      ->orderBy('published_at', 'desc')
      ->take(10)
      ->get();

    $posts = News::query()
      ->with('category', 'video', 'reportage')
      ->where('main_material', 0)
      ->where('agency_id', 5)
      ->take(6)
      ->orderBy('published_at', 'desc')
      ->get();

    $postsIds = $posts->pluck('category_id');

    $related = News::query()
      ->with('category')
      ->whereIn('category_id', $postsIds)  // Поиск по той же категории
      ->orderBy('published_at', 'desc')
      ->get();

    $posts->map(function ($post) use ($related) {
      $filtered = $related->where('category_id', $post->category_id)->whereNotIn('id', [$post->id])->take(3);
      $post->relatedPosts = $filtered;
      return $post;
    });

    $agencies = Agency::query()->where('id', '!=', 5)->get();
    $agencyNews = News::query()
      ->where('agency_id', '!=', 5)
      ->with('category')  // Добавляем связку с категориями
      ->get();

    $relatedPostIds = $agencyNews->pluck('id');
    $relatedPosts = News::query()
      ->with('category')  // Подгружаем категорию для связанных новостей
      ->where('agency_id', '!=', 5)
      ->whereIn('category_id', $relatedPostIds)
      ->get();

    $agencyNewsWithRelated = $agencyNews->map(function ($newsItem) use ($relatedPosts) {
      $posts = $relatedPosts->filter(function ($post) use ($newsItem) {
        return $post->id !== $newsItem->id && $post->category_id = $newsItem->category_id;
      })->take(3);

      $newsItem->relatedPosts = $posts;
      return $newsItem;
    });

    $openedNews = null;
    if ($request->route('id')) {
      $type = is_int($request->route('id')) ? 'id' : 'url';

      $openedNews = News::query()
        ->with('category', 'video', 'reportage')
        ->where($type, $request->route('id'))
        ->first();

      if ($openedNews) {
        $relatedPosts = News::query()
          ->with('category')  // Подгружаем категорию для связанных новостей
          ->where('agency_id', '!=', 5)
          ->where('category_id', $openedNews->category_id)
          ->where('id', '!=', $openedNews->id)
          ->take(3)
          ->get();
        $openedNews->relatedPosts = $relatedPosts;
      }
    }

    $documentTypes = Document::getTypes();
    $documentTypes = collect($documentTypes)->mapWithKeys(function ($type) {
      return [$type['id'] => $type];
    })->all();
    $documents = Document::query()
      ->whereNotNull('published_at')
      ->take(5)
      ->get()
      ->map(function ($document) use ($documentTypes) {
        $document->type = $documentTypes[$document->type]['title'];
        return $document;
      });

    return Inertia::render('Index', [
      'posts' => $posts,
      'categories' => $categories,
      'mainPosts' => $mainPosts,
      'resources' => $resources,
      'photoReportages' => $photoReportages,
      'videos' => $videos,
      'media' => collect($photoReportages)->merge($videos)->sortByDesc('published_at'),
      'cities' => $cities,
      'districts' => $districts,
      'mountains' => $mountains,
      'agencies' => $agencies,
      'agencyNews' => $agencyNewsWithRelated,
      'showNews' => $openedNews,
      'documents' => $documents,
    ]);
  }

  public function nationalProjects()
  {
    $natProjects = NationalProject::all();
    return Inertia::render('Home/NatProjects', [
      'natProjects' => $natProjects
    ]);
  }

  public function svoSupport()
  {
    $supports = MilitarySupport::all();

    return Inertia::render('Region/MilitarySupport', [
      'documents' => $supports
    ]);
  }

  public function contacts()
  {
    $contacts = Contact::where('agency_id', request()->input('agency_id', 5))->get();
    return Inertia::render('Contacts/Contacts', [
      'contacts' => $contacts
    ]);
  }

  public function implementations()
  {
    $implementations = Implementation::query()->orderBy('id', 'desc')->get();

    return Inertia::render('Region/PresidentImplementations', [
      'implementations' => $implementations
    ]);
  }

  public function anticorruptions()
  {
    $anticorruptions = Anticorruption::query()->orderBy('id', 'desc')->get();

    return Inertia::render('Anticorruption', [
      'anticorruptions' => $anticorruptions
    ]);
  }

  public function economicSupport()
  {
    $economicSupports = EconomicSupport::query()->where('type', 0)->orderBy('id', 'desc')->get();
    $economicSupportsBuisness = EconomicSupport::query()->where('type', 1)->orderBy('id', 'desc')->get();

    return Inertia::render('Region/CitizenSupport', [
      'citizenSupportPackages' => $economicSupports,
      'businessSupportPackages' => $economicSupportsBuisness
    ]);
  }

  public function media()
  {
    $videos = Video::query()->orderBy('published_at', 'desc')->get();
    $photoReportages = PhotoReportage::query()->orderBy('published_at', 'desc')->get();

    return Inertia::render('Media/Media', [
      'videos' => $videos,
      'photoReportages' => $photoReportages,
      'media' => collect($photoReportages)->merge($videos)->sortByDesc('published_at')->flatten()->toArray(),
    ]);
  }

  public function documents()
  {
    $documentTypes = Document::getTypes();
    $documentTypes = collect($documentTypes)->mapWithKeys(function ($type) {
      return [$type['id'] => $type];
    })->all();

    $documents = Document::query()->orderBy('published_at', 'desc');
    request()->input('agency_id') ? $documents->where('agency_id', request()->input('agency_id')) : $documents->whereNull('agency_id');
    $documents = $documents->get()->map(function ($document) use ($documentTypes) {
      $document->type = $documentTypes[$document->type]['title'];
      return $document;
    });

    return Inertia::render('Documents/Documents', ['documents' => $documents]);
  }
}
