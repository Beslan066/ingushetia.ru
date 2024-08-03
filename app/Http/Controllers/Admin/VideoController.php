<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Video\UpdateRequest;
use App\Http\Requests\Admin\Video\StoreRequest;
use App\Models\Agency;
use App\Models\Category;
use App\Models\News;
use App\Models\Video;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        $videos = Video::with('user')->orderBy('id', 'desc')->paginate(10);

        return view('admin.video.index', compact('videos', ));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


        $authors = User::query()->where('role', 10)->get();
        $news = News::query()->orderBy('id', 'desc')->get();

        return view('admin.video.create', compact('authors', 'news'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image_main'])) {
            $path = Storage::put('images', $data['image_main']);
            $data['image_main'] = $path ?? null;
        }

        if (isset($data['video'])) {
            $path = Storage::put('videos', $data['video']);
            $data['video'] = $path ?? null;
        }

        $videos = Video::create($data);

        return redirect()->route('admin.videos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {

        $news = News::query()->orderBy('id', 'desc')->get();
        $authors = User::query()->where('role', 10)->get();

        return view('admin.video.edit', compact('video', 'news', 'authors'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Video $video)
    {
        $data = $request->validated();

        if (isset($data['image_main'])) {
            $path = Storage::put('images', $data['image_main']);
            $data['image_main'] = $path ?? null;
        }

        if (isset($data['video'])) {
            $path = Storage::put('videos', $data['video']);
            $data['video'] = $path ?? null;
        }
        $video->update($data);

        return redirect()->route('admin.videos.index')->with('success', 'News updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        $video->delete();

        return to_route('admin.videos.index');
    }
}
