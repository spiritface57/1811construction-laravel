<?php

namespace App\Services;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;

class ProjectsDataService
{
    public function generateProjectsData(): void
    {
        Cache::lock('generating_projects_data')->get(function () {
            if (!app()->bound('projects_data_generated')) {
                $categories = ['remodeling', 'construction', 'repairs', 'design', 'Basement'];
                $projectsData = $this->getProjectsData($categories);

                $this->saveProjectsToFile($projectsData);

                Cache::put('projects_data', $projectsData, now()->addDay());

                app()->instance('projects_data_generated', true);
            }
        });
    }

    private function getProjectsData(array $categories): array
    {
        $directoryPath = resource_path('js/assets/img/projects');
        $folders = File::directories($directoryPath);

        return collect($folders)->map(function ($folderPath, $index) use ($categories) {
            $folderName = basename($folderPath);
            $imageFiles = File::files($folderPath);
            $imageFiles = array_filter($imageFiles, fn($file) => in_array($file->getExtension(), ['jpg', 'jpeg', 'png']));

            if (empty($imageFiles)) return null;

            return [
                'id' => $index + 1,
                'category' => $this->getRandomCategory($categories),
                'title' => "Project " . ($index + 1),
                'clientname' => "Client " . chr(65 + ($index % 26)),
                'projectlocation' => "Location " . chr(65 + ($index % 26)),
                'projectprice' => '$' . number_format(100000 + $index * 5000, 0),
                'description' => "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.\n\nSed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
                'mainImg' => "/assets/img/projects/{$folderName}/" . basename($imageFiles[0]),
                'images' => collect($imageFiles)->map(fn($file) => "/assets/img/projects/{$folderName}/" . $file->getFilename())->toArray(),
            ];
        })->filter()->values()->toArray();
    }

    private function getRandomCategory(array $categories): string
    {
        return $categories[array_rand($categories)];
    }

    private function saveProjectsToFile(array $data): void
    {
        $jsonFilePath = resource_path('js/data/projects.json');
        File::put($jsonFilePath, json_encode($data, JSON_PRETTY_PRINT));

        $this->updateProjectsJsxFile($jsonFilePath);
    }

    private function updateProjectsJsxFile(string $jsonFilePath): void
    {
        $jsonData = File::get($jsonFilePath);
        $jsxContent = "export const projects = {$jsonData};\n";
        $projectsJsxPath = resource_path('js/data/projects.jsx');
        File::put($projectsJsxPath, $jsxContent);
    }
}
