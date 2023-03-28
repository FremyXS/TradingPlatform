<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $hidden = [
        'created_at',
        'updated_at',
        'genres_id',
        'type_products_id',
        'platforms_id',
        'developers_id'
    ];

    public function genre()
    {
        return $this->belongsTo(Genre::class, 'genres_id');
    }

    public function developer()
    {
        return $this->belongsTo(Developer::class, 'developers_id');
    }

    public function platform()
    {
        return $this->belongsTo(Platform::class, 'platforms_id');
    }

    public function typeProduct()
    {
        return $this->belongsTo(TypeProduct::class, 'type_products_id');
    }
}
