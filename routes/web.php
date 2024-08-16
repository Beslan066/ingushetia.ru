<?php

use App\Http\Controllers\Frontend\AgencyController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\NewsController;
use App\Http\Controllers\Frontend\RegionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index']);
Route::get('/national-projects', [HomeController::class, 'nationalProjects'])->name('natProjects');
Route::get('/support-svo', [HomeController::class, 'svoSupport'])->name('svoSupport');
Route::get('/contacts', [HomeController::class, 'contacts'])->name('contacts');


Route::get('/region', [RegionController::class, 'index'])->name('region');
Route::get('/economic', [RegionController::class, 'economic'])->name('economic');
Route::get('/municipalities', [RegionController::class, 'municipality'])->name('municipality');
Route::get('/history', [RegionController::class, 'history'])->name('history');

Route::get('/agencies', [AgencyController::class, 'index'])->name('agencies.index');
Route::get('/agencies/{agency}', [AgencyController::class, 'singleAgency'])->name('agencies.single');

Route::get('/region', function () {
    return Inertia::render('Region/Region');
});
Route::get('/economic', function () {
    return Inertia::render('Region/Economic');
});
Route::get('/history', function () {
    return Inertia::render('Region/History');
});

Route::get('/municipality', function () {
    return Inertia::render('Region/Municipality');
});
Route::get('/pravitelstvo', function () {
    return Inertia::render('Authority/Authority');
});

Route::get('/sostav-pravitelstva', function () {
    return Inertia::render('Authority/GovernmentTeam');
});


Route::get('/news', [NewsController::class, 'index'])->name('news.index');
Route::get('/news-by-category/{categoryId}', [NewsController::class, 'getPostsByCategory'])->name('posts.by.tag');


Route::group(['namespace' => 'Admin', 'middleware' => \App\Http\Middleware\Admin::class], function () {
    Route::get('/admin', [\App\Http\Controllers\Admin\IndexController::class, 'index'])->middleware(['auth', 'verified'])->name('admin');


    Route::group(['namespace' => 'News', 'prefix' => 'admin'], function () {
        Route::get('/news', [App\Http\Controllers\Admin\NewsController::class, 'index'])->name('admin.news.index');
        Route::get('/news/create', [App\Http\Controllers\Admin\NewsController::class, 'create'])->name('admin.news.create');
        Route::post('/news/store', [App\Http\Controllers\Admin\NewsController::class, 'store'])->name('admin.news.store');
        Route::get('/news/{news}/edit', [App\Http\Controllers\Admin\NewsController::class, 'edit'])->name('admin.news.edit');
        Route::patch('/news/{news}', [App\Http\Controllers\Admin\NewsController::class, 'update'])->name('admin.news.update');
        Route::delete('/news/{news}', [App\Http\Controllers\Admin\NewsController::class, 'destroy'])->name('admin.news.delete');

    });

    Route::group(['namespace' => 'NewsIng', 'prefix' => 'admin'], function () {
        Route::get('/news-ing', [App\Http\Controllers\Admin\NewsIngController::class, 'index'])->name('admin.newsIng.index');
        Route::get('/news-ing/create', [App\Http\Controllers\Admin\NewsIngController::class, 'create'])->name('admin.newsIng.create');
        Route::post('/news-ing/store', [App\Http\Controllers\Admin\NewsIngController::class, 'store'])->name('admin.newsIng.store');
        Route::get('/news-ing/{news}/edit', [App\Http\Controllers\Admin\NewsIngController::class, 'edit'])->name('admin.newsIng.edit');
        Route::patch('/news-ing/{news}', [App\Http\Controllers\Admin\NewsIngController::class, 'update'])->name('admin.newsIng.update');
        Route::delete('/news-ing/{news}', [App\Http\Controllers\Admin\NewsIngController::class, 'destroy'])->name('admin.newsIng.delete');

    });


    Route::group(['namespace' => 'Video', 'prefix' => 'admin'], function () {
        Route::get('/videos', [App\Http\Controllers\Admin\VideoController::class, 'index'])->name('admin.videos.index');
        Route::get('/videos/create', [App\Http\Controllers\Admin\VideoController::class, 'create'])->name('admin.videos.create');
        Route::post('/videos/store', [App\Http\Controllers\Admin\VideoController::class, 'store'])->name('admin.videos.store');
        Route::get('/videos/{video}/edit', [App\Http\Controllers\Admin\VideoController::class, 'edit'])->name('admin.videos.edit');
        Route::patch('/videos/{video}', [App\Http\Controllers\Admin\VideoController::class, 'update'])->name('admin.videos.update');
        Route::delete('/videos/{video}', [App\Http\Controllers\Admin\VideoController::class, 'destroy'])->name('admin.videos.delete');

    });

    Route::group(['namespace' => 'PhotoReportage', 'prefix' => 'admin'], function () {
        Route::get('/photo-reportage', [App\Http\Controllers\Admin\PhotoReportageController::class, 'index'])->name('admin.photoReportage.index');
        Route::get('/photo-reportage/create', [App\Http\Controllers\Admin\PhotoReportageController::class, 'create'])->name('admin.photoReportage.create');
        Route::post('/photo-reportage/store', [App\Http\Controllers\Admin\PhotoReportageController::class, 'store'])->name('admin.photoReportage.store');
        Route::get('/photo-reportage/{reportage}/edit', [App\Http\Controllers\Admin\PhotoReportageController::class, 'edit'])->name('admin.photoReportage.edit');
        Route::patch('/photo-reportage/{reportage}', [App\Http\Controllers\Admin\PhotoReportageController::class, 'update'])->name('admin.photoReportage.update');
        Route::delete('/photo-reportage/{reportage}', [App\Http\Controllers\Admin\PhotoReportageController::class, 'destroy'])->name('admin.photoReportage.delete');

    });

    Route::group(['namespace' => 'Category', 'prefix' => 'admin'], function () {
        Route::get('/categories', [App\Http\Controllers\Admin\CategoryController::class, 'index'])->name('admin.categories.index');

        Route::get('/categories/create', [App\Http\Controllers\Admin\CategoryController::class, 'create'])->name('admin.categories.create');
        Route::post('/categories/store', [App\Http\Controllers\Admin\CategoryController::class, 'store'])->name('admin.categories.store');
        Route::get('/categories/{category}/edit', [App\Http\Controllers\Admin\CategoryController::class, 'edit'])->name('admin.categories.edit');
        Route::patch('/categories/{category}', [App\Http\Controllers\Admin\CategoryController::class, 'update'])->name('admin.categories.update');
        Route::delete('/categories/{category}', [App\Http\Controllers\Admin\CategoryController::class, 'destroy'])->name('admin.categories.delete');

    });

    Route::group(['namespace' => 'Document', 'prefix' => 'admin'], function () {
        Route::get('/documents', [App\Http\Controllers\Admin\DocumentController::class, 'index'])->name('admin.documents.index');

        Route::get('/documents/create', [App\Http\Controllers\Admin\DocumentController::class, 'create'])->name('admin.documents.create');
        Route::post('/documents/store', [App\Http\Controllers\Admin\DocumentController::class, 'store'])->name('admin.documents.store');
        Route::get('/documents/{document}/edit', [App\Http\Controllers\Admin\DocumentController::class, 'edit'])->name('admin.documents.edit');
        Route::patch('/documents/{document}', [App\Http\Controllers\Admin\DocumentController::class, 'update'])->name('admin.documents.update');
        Route::delete('/documents/{document}', [App\Http\Controllers\Admin\DocumentController::class, 'destroy'])->name('admin.documents.delete');

    });

    Route::group(['namespace' => 'Page', 'prefix' => 'admin'], function () {
        Route::get('/pages', [App\Http\Controllers\Admin\PageController::class, 'index'])->name('admin.page.index');

        Route::get('/pages/create', [App\Http\Controllers\Admin\PageController::class, 'create'])->name('admin.page.create');
        Route::post('/pages/store', [App\Http\Controllers\Admin\PageController::class, 'store'])->name('admin.page.store');
        Route::get('/pages/{page}/edit', [App\Http\Controllers\Admin\PageController::class, 'edit'])->name('admin.page.edit');
        Route::patch('/pages/{page}', [App\Http\Controllers\Admin\PageController::class, 'update'])->name('admin.page.update');
        Route::delete('/pages/{page}', [App\Http\Controllers\Admin\PageController::class, 'destroy'])->name('admin.page.delete');

    });

    Route::group(['namespace' => 'Contact', 'prefix' => 'admin'], function () {
        Route::get('/contacts', [App\Http\Controllers\Admin\ContactController::class, 'index'])->name('admin.contacts.index');
        Route::get('/contacts/create', [App\Http\Controllers\Admin\ContactController::class, 'create'])->name('admin.contacts.create');
        Route::post('/contacts/store', [App\Http\Controllers\Admin\ContactController::class, 'store'])->name('admin.contacts.store');
        Route::get('/contacts/{contact}/edit', [App\Http\Controllers\Admin\ContactController::class, 'edit'])->name('admin.contacts.edit');
        Route::patch('/contacts/{contact}', [App\Http\Controllers\Admin\ContactController::class, 'update'])->name('admin.contacts.update');
        Route::delete('/contacts/{contact}', [App\Http\Controllers\Admin\ContactController::class, 'destroy'])->name('admin.contacts.delete');

    });

    Route::group(['namespace' => 'NationalProject', 'prefix' => 'admin'], function () {
        Route::get('/national-projects', [App\Http\Controllers\Admin\NationalProjectController::class, 'index'])->name('admin.natProjects.index');
        Route::get('/national-projects/create', [App\Http\Controllers\Admin\NationalProjectController::class, 'create'])->name('admin.natProjects.create');
        Route::post('/national-projects/store', [App\Http\Controllers\Admin\NationalProjectController::class, 'store'])->name('admin.natProjects.store');
        Route::get('/national-projects/{nationalProject}/edit', [App\Http\Controllers\Admin\NationalProjectController::class, 'edit'])->name('admin.natProjects.edit');
        Route::patch('/national-projects/{nationalProject}', [App\Http\Controllers\Admin\NationalProjectController::class, 'update'])->name('admin.natProjects.update');
        Route::delete('/national-projects/{nationalProject}', [App\Http\Controllers\Admin\NationalProjectController::class, 'destroy'])->name('admin.natProjects.delete');

    });

    Route::group(['namespace' => 'MilitarySupport', 'prefix' => 'admin'], function () {
        Route::get('/military-support', [App\Http\Controllers\Admin\MilitarySupportController::class, 'index'])->name('admin.militarySupport.index');
        Route::get('/military-support/create', [App\Http\Controllers\Admin\MilitarySupportController::class, 'create'])->name('admin.militarySupport.create');
        Route::post('/military-support/store', [App\Http\Controllers\Admin\MilitarySupportController::class, 'store'])->name('admin.militarySupport.store');
        Route::get('/military-support/{militarySupport}/edit', [App\Http\Controllers\Admin\MilitarySupportController::class, 'edit'])->name('admin.militarySupport.edit');
        Route::patch('/military-support/{militarySupport}', [App\Http\Controllers\Admin\MilitarySupportController::class, 'update'])->name('admin.militarySupport.update');
        Route::delete('/military-support/{militarySupport}', [App\Http\Controllers\Admin\MilitarySupportController::class, 'destroy'])->name('admin.militarySupport.delete');

    });

    Route::group(['namespace' => 'Resource', 'prefix' => 'admin'], function () {
        Route::get('/resources', [App\Http\Controllers\Admin\ResourceController::class, 'index'])->name('admin.resources.index');

        Route::get('/resources/create', [App\Http\Controllers\Admin\ResourceController::class, 'create'])->name('admin.resources.create');
        Route::post('/resources/store', [App\Http\Controllers\Admin\ResourceController::class, 'store'])->name('admin.resources.store');
        Route::get('/resources/{resource}/edit', [App\Http\Controllers\Admin\ResourceController::class, 'edit'])->name('admin.resources.edit');
        Route::patch('/resources/{resource}', [App\Http\Controllers\Admin\ResourceController::class, 'update'])->name('admin.resources.update');
        Route::delete('/resources/{resource}', [App\Http\Controllers\Admin\ResourceController::class, 'destroy'])->name('admin.resources.delete');

    });


    Route::group(['namespace' => 'Supervisor', 'prefix' => 'admin'], function () {
        Route::get('/supervisors', [App\Http\Controllers\Admin\SupervisorController::class, 'index'])->name('admin.supervisors.index');

        Route::get('/supervisors/create', [App\Http\Controllers\Admin\SupervisorController::class, 'create'])->name('admin.supervisors.create');
        Route::post('/supervisors/store', [App\Http\Controllers\Admin\SupervisorController::class, 'store'])->name('admin.supervisors.store');
        Route::get('/supervisors/{supervisor}/edit', [App\Http\Controllers\Admin\SupervisorController::class, 'edit'])->name('admin.supervisors.edit');
        Route::patch('/supervisors/{supervisor}', [App\Http\Controllers\Admin\SupervisorController::class, 'update'])->name('admin.supervisors.update');
        Route::delete('/supervisors/{supervisor}', [App\Http\Controllers\Admin\SupervisorController::class, 'destroy'])->name('admin.supervisors.delete');

    });

    Route::group(['namespace' => 'Municipality', 'prefix' => 'admin'], function () {
        Route::get('/municipalities', [App\Http\Controllers\Admin\MunicipalityController::class, 'index'])->name('admin.municipalities.index');

        Route::get('/municipalities/create', [App\Http\Controllers\Admin\MunicipalityController::class, 'create'])->name('admin.municipalities.create');
        Route::post('/municipalities/store', [App\Http\Controllers\Admin\MunicipalityController::class, 'store'])->name('admin.municipalities.store');
        Route::get('/municipalities/{supervisor}/edit', [App\Http\Controllers\Admin\MunicipalityController::class, 'edit'])->name('admin.municipalities.edit');
        Route::patch('/municipalities/{supervisor}', [App\Http\Controllers\Admin\MunicipalityController::class, 'update'])->name('admin.municipalities.update');
        Route::delete('/municipalities/{supervisor}', [App\Http\Controllers\Admin\MunicipalityController::class, 'destroy'])->name('admin.municipalities.delete');

    });

    Route::group(['namespace' => 'Agency', 'prefix' => 'admin'], function () {
        Route::get('/agencies', [App\Http\Controllers\Admin\AgencyController::class, 'index'])->name('admin.agencies.index');

        Route::get('/agencies/create', [App\Http\Controllers\Admin\AgencyController::class, 'create'])->name('admin.agencies.create');
        Route::post('/agencies/store', [App\Http\Controllers\Admin\AgencyController::class, 'store'])->name('admin.agencies.store');
        Route::get('/agencies/{agency}/edit', [App\Http\Controllers\Admin\AgencyController::class, 'edit'])->name('admin.agencies.edit');
        Route::patch('/agencies/{agency}', [App\Http\Controllers\Admin\AgencyController::class, 'update'])->name('admin.agencies.update');
        Route::delete('/agencies/{agency}', [App\Http\Controllers\Admin\AgencyController::class, 'destroy'])->name('admin.agencies.delete');

    });

    Route::group(['namespace' => 'Mountain', 'prefix' => 'admin'], function () {
        Route::get('/mountains', [App\Http\Controllers\Admin\MountainController::class, 'index'])->name('admin.mountains.index');

        Route::get('/mountains/create', [App\Http\Controllers\Admin\MountainController::class, 'create'])->name('admin.mountains.create');
        Route::post('/mountains/store', [App\Http\Controllers\Admin\MountainController::class, 'store'])->name('admin.mountains.store');
        Route::get('/mountains/{mountain}/edit', [App\Http\Controllers\Admin\MountainController::class, 'edit'])->name('admin.mountains.edit');
        Route::patch('/mountains/{mountain}', [App\Http\Controllers\Admin\MountainController::class, 'update'])->name('admin.mountains.update');
        Route::delete('/mountains/{mountain}', [App\Http\Controllers\Admin\MountainController::class, 'destroy'])->name('admin.mountains.delete');

    });

    Route::group(['namespace' => 'AgencyActivity', 'prefix' => 'admin'], function () {
        Route::get('/agencies-activity', [App\Http\Controllers\Admin\AgencyActivityController::class, 'index'])->name('admin.agenciesActivity.index');

        Route::get('/agencies-activity/create', [App\Http\Controllers\Admin\AgencyActivityController::class, 'create'])->name('admin.agenciesActivity.create');
        Route::post('/agencies-activity/store', [App\Http\Controllers\Admin\AgencyActivityController::class, 'store'])->name('admin.agenciesActivity.store');
        Route::get('/agencies-activity/{agencyActivity}/edit', [App\Http\Controllers\Admin\AgencyActivityController::class, 'edit'])->name('admin.agenciesActivity.edit');
        Route::patch('/agencies-activity/{agencyActivity}', [App\Http\Controllers\Admin\AgencyActivityController::class, 'update'])->name('admin.agenciesActivity.update');
        Route::delete('/agencies-activity/{agencyActivity}', [App\Http\Controllers\Admin\AgencyActivityController::class, 'destroy'])->name('admin.agenciesActivity.delete');

    });

    Route::group(['namespace' => 'User', 'prefix' => 'admin'], function () {
        Route::get('/users', [App\Http\Controllers\Admin\UserController::class, 'index'])->name('admin.users.index');

        Route::get('/users/create', [App\Http\Controllers\Admin\UserController::class, 'create'])->name('admin.users.create');
        Route::post('/users/store', [App\Http\Controllers\Admin\UserController::class, 'store'])->name('admin.users.store');
        Route::get('/users/{user}/edit', [App\Http\Controllers\Admin\UserController::class, 'edit'])->name('admin.users.edit');
        Route::patch('/users/{user}', [App\Http\Controllers\Admin\UserController::class, 'update'])->name('admin.users.update');
        Route::delete('/users/{user}', [App\Http\Controllers\Admin\UserController::class, 'destroy'])->name('admin.users.delete');

    });
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
