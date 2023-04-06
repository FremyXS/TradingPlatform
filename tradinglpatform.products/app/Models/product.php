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
    ];

    protected $fillable = [
        'title',
        'image_url',
        'description',
        'release_date',
        'price',
        'genres_name',
        'type_products_name',
        'platforms_name',
        'developers_name',
        'seller_id',
    ];

    public function genre()
    {
        return $this->belongsTo(Genre::class, 'genres_name');
    }

    public function developer()
    {
        return $this->belongsTo(Developer::class, 'developers_name');
    }

    public function platform()
    {
        return $this->belongsTo(Platform::class, 'platforms_name');
    }

    public function typeProduct()
    {
        return $this->belongsTo(TypeProduct::class, 'type_products_name');
    }
}
