<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('genres')->insert([
            ['name' => 'Action'],
            ['name' => 'MMORPG'],
            ['name' => 'RPG'],
            ['name' => 'Аркады'],
            ['name' => 'Головоломки'],
            ['name' => 'Гонки'],
            ['name' => 'Приключения'],
            ['name' => 'Симуляторы'],
            ['name' => 'Спортивные'],
            ['name' => 'Стратегии'],
            ['name' => 'Файтинги'],
        ]);
    }
}
