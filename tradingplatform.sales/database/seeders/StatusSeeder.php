<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('statuses')->insert([
            ['name' => 'Новый'],
            ['name' => 'Оплачен'],
            ['name' => 'Собирается'],
            ['name' => 'Передан на доставку'],
            ['name' => 'Выполнен'],
        ]);
    }
}
