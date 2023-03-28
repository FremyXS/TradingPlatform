<?php

namespace Database\Seeders;

use App\Models\Developer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeveloperSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('developers')->insert([
            ['name' => 'Петушки'],
            ['name' => 'Донатная помойка'],
            ['name' => 'ValShit'],
        ]);
    }
}
