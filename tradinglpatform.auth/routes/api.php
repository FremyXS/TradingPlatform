<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController as AC;

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

Route::group([
    'middleware'=>'api',
    'prefix'=>"auth"
], function($router){
    Route::post('/register', [AC::class, 'register']);
    Route::post('/login', [AC::class, 'login']);
    Route::post('/logout', [AC::class, 'logout']);
    Route::post('/refresh', [[AC::class, 'refresh']]);
    Route::get('/user-profile', [AC::class, 'userProfile']);
});
