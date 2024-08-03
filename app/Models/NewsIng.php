<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsIng extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'lead',
        'content',
        'image_main',
        'category_id',
        'translate_id',
        'published_at',
        'user_id',
    ];

    public  function category() {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public  function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
