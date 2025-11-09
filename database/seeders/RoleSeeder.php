<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $staff = Role::firstOrCreate(['name' => 'staff']);
        $client = Role::firstOrCreate(['name' => 'client']);

        // Create an admin if not exists
        $user = User::firstOrCreate(
            ['email' => 'admin@orkalegal.com'],
            ['name' => 'Orka Admin', 'password' => Hash::make('password')]
        );
        $user->assignRole($admin);
    }
}
