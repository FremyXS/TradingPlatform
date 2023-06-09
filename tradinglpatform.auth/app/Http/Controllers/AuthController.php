<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;

class AuthController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'refresh']]);
    }

    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
            'address' => 'string',
            'role' => 'string|nullable'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $role = $validator->validated()['role'];

        if($role == null){
            $role = 'Normal';
        }

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password), 'role' =>  $role],
        ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized', $validator->validated()], 401);
        }
        return $this->createNewToken($token);
    }
    public function logout(){
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    public function refresh() {
        $user = auth()->user();
        $token = auth()->refresh();
        return $this->createNewToken($token);
    }
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            // 'expires_in' => auth()->factory()->getTTL() * 60,
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'role' => auth()->user()->role
        ]);
    }
    public function userProfile(Request $request){
        $user = auth()->user();
        return response()->json($user, 201);
    }
}
