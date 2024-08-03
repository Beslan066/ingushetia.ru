<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\News;
use Inertia\Inertia;

class NewsController extends Controller {

    public function index()
    {

        $mainPosts = News::query()
            ->with('category')
            ->where('main_material', 1)
            ->take(10)
            ->get();
        $categories = Category::query()->take(10)->get();

        $news = News::query()
            ->with('category')
            ->orderBy('id', 'desc')
            ->get();

        return Inertia::render('News/News', [
            'news' => $news,
            'categories' => $categories,
            'mainPosts' => $mainPosts
        ]);
    }


}
