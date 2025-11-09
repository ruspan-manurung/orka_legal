<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'    => 'required|string|max:120',
            'email'   => 'required|email|max:160',
            'phone'   => 'nullable|string|max:40',
            'message' => 'nullable|string|max:2000',
        ]);

        Lead::create($data);

        return back()->with('flash', [
            'type' => 'success',
            'message' => 'Thanks. Our lawyers will contact you soon.',
        ]);
    }
}
