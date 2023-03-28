<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $genres = ['Action', 'MMORPG', 'RPG', 'Файтинги'];
        $developers = ['Петушки', 'Донатная помойка', 'ValShit'];
        $types = ['Ключ', 'Аккаунт'];
        $platforms = ['Steam', 'Epic Games', 'X-Box', 'PlayStation 5'];
        return [
            'title' => $this->faker->text(30),
            'image_url' => "https://gamebomb.ru/files/galleries/001/2/24/347929.jpg",
            'description' => $this->faker->text(1000),
            'release_date'=>$this->faker->date("d-m-Y"),
            'price' => 9.99,
            'genres_name' =>  $genres[rand(0, 3)],
            'type_products_name'=>$types[rand(0, 1)],
            'platforms_name'=>$platforms[rand(1, 3)],
            'developers_name'=>$developers[rand(0, 2)]
        ];
    }
}
