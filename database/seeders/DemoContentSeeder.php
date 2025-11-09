<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\Partner;
use App\Models\Testimonial;
use App\Models\SiteMetric;

class DemoContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data
        Service::query()->delete();
        Partner::query()->delete();
        Testimonial::query()->delete();
        SiteMetric::query()->delete();

        // Services (boxes)
        $services = [
            [
                'title' => 'Corporate & Business Law',
                'description' => 'Contract negotiation, contract drafting (PPJB etc.), establishment of PT/Firma/CV/Koperasi/Yayasan, mergers & acquisition, company compliance, deed amendments, share sale & purchase, legal due diligence.',
            ],
            [
                'title' => 'Litigation & Dispute Resolution',
                'description' => 'General litigation; Small Claim Court (Gugatan Sederhana).',
            ],
            [
                'title' => 'Tax & Regulatory',
                'description' => 'Pelaporan, NPWP, and other tax-related compliance.',
            ],
            [
                'title' => 'Family Law',
                'description' => 'Divorce, prenuptial and post-nuptial agreements, adoption, child birth certificate (foreign parents), inheritance.',
            ],
            [
                'title' => 'Employment / Manpower Law',
                'description' => 'PKWTT, PKWT, freelance and outsourcing agreements, PHK letters, warning letters (SP), company regulation (PP), company liquidation.',
            ],
            [
                'title' => 'EV Regulatory & Licensing',
                'description' => 'Compliance consultation, contract drafting & negotiation, licensing (NIB, Sertifikat Standard, PJP, PBG, Halal certification, Jasa Konstruksi, etc.).',
            ],
        ];

        foreach ($services as $s) {
            Service::create($s);
        }

        // Partners (dummy scrolling)
        for ($i = 1; $i <= 10; $i++) {
            Partner::create([
                'name' => "Partner $i",
                'logo_url' => "https://dummyimage.com/300x120/eeeeee/111111&text=Partner+$i",
            ]);
        }

        // Testimonials
        Testimonial::insert([
            ['name' => 'Ruspan Manurung', 'text' => 'Orka Legal made me feel understood and protected. Diligent and empathetic team.'],
            ['name' => 'Jonathan Lee', 'text' => 'Corporate restructuring done cleanly. Professional and transparent.'],
            ['name' => 'Amira Putri', 'text' => 'Highly responsive and legally sharp. Best experience so far.'],
        ]);

        // Metrics
        SiteMetric::insert([
            ['label' => 'Cases Solved', 'value' => '20+'],
            ['label' => 'Corporate Clients', 'value' => '20+'],
            ['label' => 'Court Wins', 'value' => '20+'],
            ['label' => 'Years Combined', 'value' => '20+'],
        ]);
    }
}
