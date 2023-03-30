<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Developer;
use App\Models\Genre;
use App\Models\Platform;
use App\Models\Product;
use App\Models\TypeProduct;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function getAllFilters(){
        return response()->json(
            [
                'developers' => Developer::all('name'),
                'genre' => Genre::all('name'),
                'platforms' => Platform::all('name'),
                'typeProducts' => TypeProduct::all('name')
            ]
        );
    }

    public function show($id)
    {
        return Product::find($id);
    }

    public function store(Request $request)
    {
        $product = Product::create($request->only('title', 'price'));

        return response($product, Response::HTTP_CREATED);
    }

    public function update($id, Request $request)
    {
        $product = Product::find($id);

        $product->update($request->only('title', 'image'));

//        ProductUpdated::dispatch($product->toArray())->onQueue('main_queue');

        return response($product, Response::HTTP_ACCEPTED);
    }

    public function destroy($id)
    {
        Product::destroy($id);

        // ProductDeleted::dispatch($id)->onQueue('main_queue');

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
