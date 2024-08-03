import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/index.jsx"],
            refresh: true,
        }),
        viteStaticCopy({
            targets: [
                {
                    src: "resources/js/assets/*",
                    dest: "../assets",
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
