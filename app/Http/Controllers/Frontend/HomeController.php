<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Contact;
use App\Models\MilitarySupport;
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
    public function index()
    {

        $categories = Category::query()->take(10)->get();
        $resources = Resource::query()->take(4)->get();
        $photoReportages = PhotoReportage::query()->take(4)->orderBy('published_at', 'desc')->get();
        $videos = Video::query()->take(4)->orderBy('published_at', 'desc')->get();

        $cities = Municipality::query()->with('supervisor')->where('type', 2)->get();
        $districts = Municipality::query()->with('supervisor')->where('type', 20)->get();


        $mainPosts = News::query()
            ->with('category')
            ->where('main_material', 1)
            ->orderBy('published_at', 'desc')
            ->take(10)
            ->get();

        $posts = News::query()
            ->with('category', 'video', 'reportage')
            ->where('main_material', 0)
            ->take(6)
            ->orderBy('published_at', 'desc')
            ->get();

        return Inertia::render('Welcome', [
            'posts' => $posts,
            'categories' => $categories,
            'mainPosts' => $mainPosts,
            'resources' => $resources,
            'photoReportages' => $photoReportages,
            'videos' => $videos,
            'cities' => $cities,
            'districts' => $districts
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

        return Inertia::render('Home/SVOSupport', [
            'supports' => $supports
        ]);
    }

    public function contacts()
    {

        $contacts = Contact::all();
        return Inertia::render('Contacts', [
            'contacts' => $contacts
        ]);
    }
}
