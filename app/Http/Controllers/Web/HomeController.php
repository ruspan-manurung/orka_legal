<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\Partner;
use App\Models\Testimonial;
use App\Models\SiteMetric;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'services' => Service::all(),
            'partners' => Partner::all(),
            'testimonials' => Testimonial::all(),
            'metrics' => SiteMetric::all(),
        ]);
    }
}
