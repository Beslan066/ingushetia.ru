<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Municipality extends Model
{
    use HasFactory;

    const TYPE_CITY = 2;
    const TYPE_DISTRICT = 20;



    public static function getTypes() {

        return [
            self::TYPE_CITY => 'Городские округа',
            self::TYPE_DISTRICT => 'Муниципальные районы',
        ];
    }

    protected $fillable = [
        'title',
        'year',
        'population',
        'image_main',
        'arms',
        'user_id',
        'square',
        'type',
        'content',
        'supervisor_id',

    ];
    public  function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }


    public  function supervisor() {
        return $this->belongsTo(Supervisor::class, 'supervisor_id', 'id');
    }
}
