<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Exception;
use Illuminate\Support\Env;

class ContactController extends Controller
{
    public function contact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'message' => 'required|string|min:20',
            'phone' => 'required|regex:/^([^0-9]*[0-9]){7,11}[^0-9]*$/'
        ]);

        // Do something with the data, e.g., save to database
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {
            try {
                // Mail::to(Env::get('MAIL_FROM_ADDRESS'))->send(new PashaFormSubmitMail(str($request->name), str($request->email), str($request->phone), str($request->message)));
                return response()->json(['message' => 'پیام شما با موفقیت ارسال شد.']);
            } catch (Exception $e) {
                return response()->json(['message' => $e->getMessage()], 422);
            }
        }
    }
}
