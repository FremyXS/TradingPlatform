<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\PlatformController;
use App\Http\Controllers\TypeProductController;
use App\Http\Controllers\DeveloperController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::apiResource('products', ProductController::class);

Route::group([
    'middleware'=>'api',
    'prefix'=>"products"
], function($router){
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/filters', [ProductController::class, 'getAllFilters']);
    Route::get('/{id}', [ProductController::class, 'show']);
});

Route::group([
    'middleware'=>'api',
    'prefix'=>"filters"
], function($router){
    Route::group([
        'prefix'=>"genres"
    ], function($router){
        Route::get('/', [GenreController::class, 'index']);
        Route::post('/', [GenreController::class, 'create']);
        Route::delete('/{name}', [GenreController::class, 'delete']);
        Route::patch('/{name}', [GenreController::class, 'update']);
    });
    Route::group([
        'prefix'=>"platforms"
    ], function($router){
        Route::get('/', [PlatformController::class, 'index']);
        Route::post('/', [PlatformController::class, 'create']);
        Route::delete('/{name}', [PlatformController::class, 'delete']);
        Route::patch('/{name}', [PlatformController::class, 'update']);
    });
    Route::group([
        'prefix'=>"type-products"
    ], function($router){
        Route::get('/', [TypeProductController::class, 'index']);
        Route::post('/', [TypeProductController::class, 'create']);
        Route::delete('/{name}', [TypeProductController::class, 'delete']);
        Route::patch('/{name}', [TypeProductController::class, 'update']);
    });
    Route::group([
        'prefix'=>"developers"
    ], function($router){
        Route::get('/', [DeveloperController::class, 'index']);
        Route::post('/', [DeveloperController::class, 'create']);
        Route::delete('/{name}', [DeveloperController::class, 'delete']);
        Route::patch('/{name}', [DeveloperController::class, 'update']);
    });
});
