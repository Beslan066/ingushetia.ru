<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Agency;
use App\Models\AgencyActivity;
use App\Models\Category;
use App\Models\Municipality;
use App\Models\News;
use App\Models\PhotoReportage;
use App\Models\Resource;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgencyController extends Controller
{
    public function index()
    {
        $agencies = Agency::query()
            ->whereNotIn('id', [5])
            ->with('supervisor')
            ->get();

        return Inertia::render('Agency/Home', [
            'agencies' => $agencies
        ]);

    }

    public function singleAgency($slug)
    {
        $agency = Agency::where('slug', $slug)->firstOrFail();


        $agencys = Agency::query()
            ->where('id', $agency->id)
            ->get();

        $categories = Category::query()
            ->take(10)
            ->get();

        $resources = Resource::query()
            ->take(4)
            ->where('agency_id', $agency->id)
            ->get();


        $photoReportages = PhotoReportage::query()
            ->take(4)
            ->where('agency_id', $agency->id)
            ->orderBy('published_at', 'desc')
            ->get();


        $videos = Video::query()
            ->take(4)
            ->where('agency_id', $agency->id)
            ->orderBy('published_at', 'desc')
            ->get();



        $mainPosts = News::query()
            ->with('category')
            ->where('main_material', 1)
            ->where('agency_id', $agency->id)
            ->orderBy('published_at', 'desc')
            ->take(10)
            ->get();

        $posts = News::query()
            ->with('category', 'video', 'reportage')
            ->where('main_material', 0)
            ->where('agency_id', $agency->id)
            ->take(6)
            ->orderBy('published_at', 'desc')
            ->get();

        $activities = AgencyActivity::query()
            ->where('agency_id', $agency->id)
            ->take(7)
            ->get();

        return Inertia::render('Agency/Agency', [
            'agencys' => $agencys,
            'agency' => $agency,
            'posts' => $posts,
            'mainPosts' => $mainPosts,
            'videos' => $videos,
            'photoReportages' => $photoReportages,
            'categories' => $categories,
            'resources' => $resources,
            'activities' => $activities
        ]);
    }
}
