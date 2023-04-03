<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\TypeProduct;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TypeProductController extends Controller
{
    public function index()
    {
        return TypeProduct::all();
    }
    public function create(Request $request){
        $data = $request->all();
        $developer = new TypeProduct();
        $developer->name = $data["name"];
        $developer->save();
        return response($developer, Response::HTTP_CREATED);
    }
}
