<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\LeadController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/leads', [\App\Http\Controllers\Web\LeadController::class, 'store'])
    ->middleware('throttle:3,1')
    ->name('leads.store');

// contact/lead submission (rate-limited)
Route::post('/leads', [LeadController::class, 'store'])
    ->middleware('throttle:leads')   // defined in Kernel below
    ->name('leads.store');

/*
| Admin section sample (protect later with roles)
*/
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::view('/admin', 'admin.index')->name('admin.index');
    // later: Route::resource('services', Admin\ServiceController::class);
});

require __DIR__.'/auth.php';
