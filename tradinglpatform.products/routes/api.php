<?php

use App\Http\Controllers\ProductController;
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
