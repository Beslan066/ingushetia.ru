<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoReportage extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'content',
        'image_main',
        'slides',
        'user_id',
        'news_id',
        'published_at',
        'agency_id'
    ];

    public  function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function agency()
    {
        return $this->belongsTo(Agency::class, 'agency_id', 'id');
    }

    public  function news() {
        return $this->belongsTo(News::class, 'news_id', 'id');
    }

}
