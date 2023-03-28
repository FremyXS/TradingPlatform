<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('platforms')->insert([
            ['name' => 'Steam'],
            ['name' => 'Epic Games'],
            ['name' => 'Origins'],
            ['name' => 'X-Box'],
            ['name' => 'PlayStation 5'],
            ['name' => 'PlayStation 4'],
            ['name' => 'PlayStation 3'],
        ]);
    }
}
