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
            $table->foreignId('genres_id')->constrained();
            $table->foreignId('type_products_id')->constrained();
            $table->foreignId('platforms_id')->constrained();
            $table->foreignId('developers_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('genres_id');
            $table->dropColumn('type_products_id');
            $table->dropColumn('platforms_id');
            $table->dropColumn('developers_id');
        });
    }
};
