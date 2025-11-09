<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'    => ['required', 'string', 'max:100'],
            'email'   => ['required', 'email', 'max:150'],
            'phone'   => ['nullable', 'string', 'max:50'],
            'subject' => ['nullable', 'string', 'max:150'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        Contact::create($data);

        // Optional: send email notification (configure mail in .env first)
        // Mail::to('contact@orkalegal.com')->send(new \App\Mail\ContactSubmitted($data));

        return back()->with('success', 'Thank you. We will reach out shortly.');
    }
}
