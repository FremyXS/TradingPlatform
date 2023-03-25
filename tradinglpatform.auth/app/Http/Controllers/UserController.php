<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequester;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class UserController extends Controller
{
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response(['message' => 'You have been successfully logged out']);
    }
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        if (!Auth::attempt($request->toArray())) {
            return response(['errors' => ['Invalid email or password']], 422);
        }

        $user = Auth::user();

        $token = $user->createToken('auth_token')->accessToken;

        return response(['user' => $user, 'access_token' => $token]);
    }

    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            // 'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $request['password'] = bcrypt($request['password']);

        $user = User::create($request->toArray());

        // $user = new User();
        // $user->name = $request->input('name');
        // $user->email = $request->input('email');
        // $user->password = bcrypt($request->input('password'));
        // $user->save();
        $token = $user->createToken('auth_token')->accessToken;

        return response(['user' => $user, 'access_token' => $token]);
    }
}
