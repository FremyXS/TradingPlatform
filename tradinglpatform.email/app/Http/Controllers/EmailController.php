<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use stdClass;

class EmailController extends Controller
{
    public function send(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        Mail::to($data['email'])->send(new SendMail($data));

        return response('Email is Send');
    }
}
