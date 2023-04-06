<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use App\Models\product;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GenreController extends Controller
{
    public function index()
    {
        return Genre::all();
    }
    public function create(Request $request){
        $data = $request->all();
        $developer = new Genre();
        $developer->name = $data["name"];
        $developer->save();
        return response($developer, Response::HTTP_CREATED);
    }
    public function delete($name){
        $data = Genre::find($name);
        $data->delete();
        return response($name, 'Record deleted successfully');
    }

    public function update($name, Request $request){
        $products = product::all()
            ->where('genres_name', '=', $name);


        foreach($products->values() as $product){
            $product->update(['genres_name' => null]);
            $product->save();
        }

        $data = Genre::find($name);
        $data->name = $request->only('name');
        $data->save();

        foreach($products->values() as $product){
            $product->update(['genres_name' => $request->only('name')]);
            $product->save();
        }

        return response($$request->input('name'),  Response::HTTP_ACCEPTED);
    }
}
