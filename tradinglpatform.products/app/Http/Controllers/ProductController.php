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

    public function getBySellerId(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);


        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        return Product::all()->where('seller_id', '=', $validator->validate()['id']);
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
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image_url' => 'required',
            'description' => 'required',
            'release_date' => 'required',
            'price' => 'required',
            'genres_name' => 'required',
            'type_products_name' => 'required',
            'platforms_name' => 'required',
            'developers_name' => 'required',
            'seller_id' => 'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $product = Product::create($validator->validated());

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
