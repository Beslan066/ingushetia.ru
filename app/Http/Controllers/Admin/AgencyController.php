<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Agency\StoreRequest;
use App\Http\Requests\Admin\Agency\UpdateRequest;
use App\Models\Agency;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AgencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $agencies = Agency::orderBy('id', 'desc')->paginate(10);

        return view('admin.agency.index', compact('agencies'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $authors = User::query()->where('role', 10)->get();
        return view('admin.agency.create', compact('authors'));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $agency = Agency::firstOrCreate($data);

        $agency->save();


        return to_route('admin.agencies.index');
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
    public function edit(Agency  $agency)
    {
       return view('admin.agency.edit', compact('agency'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Agency $agency)
    {
        $data = $request->validated();


        $agency->update($data);

        return to_route('admin.agencies.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Agency $agency)
    {
        $agency->delete();

        return to_route('admin.agencies.index');
    }
}
