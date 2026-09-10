<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApiController;

Route::get('/berita', [ApiController::class, 'getBerita']);
Route::get('/berita/{slug}', [ApiController::class, 'getBeritaBySlug']);
Route::get('/galeri', [ApiController::class, 'getGaleri']);
Route::post('/kontak', [ApiController::class, 'storeKontak']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
