<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class ProjectsListMakerController extends Controller
{
    public function index(): JsonResponse
    {
        $projects = Cache::get('projects_data');
        
        if (!$projects) {
            return response()->json(['error' => 'Projects data not available'], 500);
        }

        return response()->json($projects);
    }
}
