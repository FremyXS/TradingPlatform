<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Platform;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PlatformController extends Controller
{
    public function index()
    {
        return Platform::all();
    }
    public function create(Request $request){
        $data = $request->all();
        $developer = new Platform();
        $developer->name = $data["name"];
        $developer->save();
        return response($developer, Response::HTTP_CREATED);
    }
    public function delete($name){
        $data = Platform::find($name);
        $data->delete();
        return response($name, 'Record deleted successfully');
    }

    public function update($name, Request $request){
        $data = Platform::find($name);
        $data->name = $request->input('name');
        $data->save();
        return response($$request->input('name'),  Response::HTTP_ACCEPTED);
    }
}
