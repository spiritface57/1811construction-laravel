<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;


// Route::get('/',[HomeController::class,'index']);
Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');

