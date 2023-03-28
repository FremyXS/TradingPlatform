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
        return [
            'title' => $this->faker->text(30),
            'image_url' => "https://gamebomb.ru/files/galleries/001/2/24/347929.jpg",
            'description' => $this->faker->text(1000),
            'release_date'=>$this->faker->date("d-m-Y"),
            'price' => 9.99,
            'genres_id' =>  rand(1, 11),
            'type_products_id'=>rand(1, 2),
            'platforms_id'=>rand(1, 7),
            'developers_id'=>rand(1, 5)
        ];
    }
}
