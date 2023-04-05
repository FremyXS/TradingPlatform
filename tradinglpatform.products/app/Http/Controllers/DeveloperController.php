<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Developer;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DeveloperController extends Controller
{
    public function index()
    {
        return Developer::all();
    }

    public function create(Request $request){
        $data = $request->all();
        $developer = new Developer();
        $developer->name = $data["name"];
        $developer->save();
        return response($developer, Response::HTTP_CREATED);
    }

    public function delete($name){
        $data = Developer::find($name);
        $data->delete();
        return response($name, 'Record deleted successfully');
    }

    public function update($name, Request $request){
        $data = Developer::find($name);
        $data->name = $request->input('name');
        $data->save();
        return response($$request->input('name'),  Response::HTTP_ACCEPTED);
    }
}
