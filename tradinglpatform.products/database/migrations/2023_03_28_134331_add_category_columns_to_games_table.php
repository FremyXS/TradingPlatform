<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->foreign('genres_name')->references("name")->on("genres");
            $table->foreign('type_products_name')->references("name")->on("type_products");
            $table->foreign('platforms_name')->references("name")->on("platforms");
            $table->foreign('developers_name')->references("name")->on("developers");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign('genres_name');
            $table->dropForeign('type_products_name');
            $table->dropForeign('platforms_name');
            $table->dropForeign('platforms_name');
        });
    }
};
