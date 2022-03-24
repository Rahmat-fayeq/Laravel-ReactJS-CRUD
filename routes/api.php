<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/posts',[PostController::class,'index']);
Route::post('/posts',[PostController::class,'store']);
Route::get('/posts/{id}/edit',[PostController::class,'edit']);
Route::put('/posts/{id}',[PostController::class,'update']);
Route::delete('/posts/{id}',[PostController::class,'destroy']);

