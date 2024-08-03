<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ProjectsDataService;

class GenerateProjectsData extends Command
{
    protected $signature = 'projects:generate-data';
    protected $description = 'Generate projects data and save to JSON file';

    protected $projectsDataService;

    public function __construct(ProjectsDataService $projectsDataService)
    {
        parent::__construct();
        $this->projectsDataService = $projectsDataService;
    }

    public function handle(): void
    {
        $this->projectsDataService->generateProjectsData();
        $this->info('Projects data generated successfully.');
    }
}
