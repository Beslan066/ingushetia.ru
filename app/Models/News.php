<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $guarded = false;

    protected $fillable = [
        'id',
        'title',
        'lead',
        'content',
        'image_main',
        'news_id',
        'category_id',
        'user_id',
        'published_at',
        'main_material',
        'agency_id',
        'views',
        'reportage_id',
        'video_id',
    ];

    public function translate()
    {
        return $this->belongsTo(NewsIng::class, 'translate_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }


    public  function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function agency()
    {
        return $this->belongsTo(Agency::class, 'agency_id', 'id');
    }

    public function incrementViews()
    {
        $this->increment('views');
    }

    public function video()
    {
        return $this->belongsTo(Video::class, 'video_id', 'id');
    }

    public function reportage()
    {
        return $this->belongsTo(PhotoReportage::class, 'reportage_id');
    }

}
