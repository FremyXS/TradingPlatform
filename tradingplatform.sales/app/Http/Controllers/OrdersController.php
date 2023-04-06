<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Orders;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class OrdersController extends Controller
{
    function store(Request $request){
        $validator = Validator::make($request->all(), [
            'orders' => [
                'product_id' => 'required',
                'buyer_id' => 'required',
                'seller_id' => 'required',
                'status' => 'required'
            ]
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $order = Orders::create($validator->validated());

        return response($order, Response::HTTP_CREATED);
    }
}
