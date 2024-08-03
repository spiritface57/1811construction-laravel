<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ProjectsDataService;

class ProjectsDataServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(ProjectsDataService::class, function ($app) {
            return new ProjectsDataService();
        });
    }

    public function boot(ProjectsDataService $projectsDataService): void
    {
        $projectsDataService->generateProjectsData();
    }
}
