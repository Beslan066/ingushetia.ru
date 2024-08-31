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
use App\Models\SocialEconomicDevelopment;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegionController extends Controller
{
    public function index()
    {
        return Inertia::render('Region/Region');
    }

    public function economic()
    {
        return Inertia::render('Region/Economic');
    }

    public function history()
    {
        return Inertia::render('Region/History');
    }

    public function municipality()
    {

        $cities = Municipality::query()->with('supervisor')->where('type', 2)->get();
        $districts = Municipality::query()->with('supervisor')->where('type', 20)->get();

        return Inertia::render('Region/Municipality', [
            'cities' => $cities,
            'districts' => $districts
        ]);
    }

    public function socialEconomicDevelopment()
    {

        $socialEconomicDevelopment = SocialEconomicDevelopment::query()->orderBy('id', 'desc')->get();

        return Inertia::render('Region/SocialEconomicDevelopment', [
            'socialEconomicDevelopment' => $socialEconomicDevelopment
        ]);
    }
}
