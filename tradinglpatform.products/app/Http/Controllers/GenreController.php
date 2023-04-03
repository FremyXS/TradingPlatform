<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Genre;
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
}
