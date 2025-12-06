Orka Legal Law Firm

Strength In Law — Trust In Integrity — Your Partner in Every Legal Step


Ditujukan untuk menjadi Landing Page, mengenalkan semua mengenai Orka Legal, termasuk layanan yang ditawarkan.

Dimulai sebagai Landing Page, berbentuk Single Page App atau sebuah website satu halaman yang.

Merupakan website pertama saya yang akan diupload online untuk dijadikan Landing Page Profesional Start-Up Hukum Bernama "Orka Legal".

Karena merupakan website pertama yang berfungsi End-to-End, projek ini dijadikan pembelajaran menggunakan platform, programming-language, dan framework yang relevan untuk masa ini.

Alih-alih menggunakan MERN (MongoDB + Express.Js + React.Js + Node.Js), aku berusaha belajar menggunakan Laravel + React.js (+ Vite) untuk belajar menggunakan framework MVC (Model - View - Controller).

Dalam Project ini, yang dipakai adalah:

Front-End: React.Js
Back-End: PHP

“Is there a way to avoid copying my existing React code manually?”

Short answer: no.
Longer answer: still no,

Then:

Installation steps:

composer create-project laravel/laravel orka-legal-backend
cd orka-legal-backend
composer require inertiajs/inertia-laravel

Install Breeze:
composer require laravel/breeze --dev

Install React scaffolding:
php artisan breeze:install react

Run npm:
npm install && npm run dev

Copy your React project into resources/js/...
because automatic merging does not exist.


Modify the Composer.json, package.json, copy the tailwind.config.js and postcss.config.js as well as vite.config.js
