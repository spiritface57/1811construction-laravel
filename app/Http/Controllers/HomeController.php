<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Env;

class HomeController extends Controller
{
    public function postData(Request $request)
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
                Mail::to(Env::get('MAIL_FROM_ADDRESS'))->send(new ContactFormMail(str($request->name), str($request->email), str($request->phone), str($request->message)));
                return response()->json(['message' => 'Thank you for sending your request. We will contact you as soon as possible.']);
            } catch (Exception $e) {
                return response()->json(['message' => 'Something went Wrong!!! Try again later.'], 422);
            }
        }
    }
}
