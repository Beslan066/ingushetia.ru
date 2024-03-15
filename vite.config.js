import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


function providePlugin() {
    return {
        name: 'provide-plugin',
        transform(code) {
            const injectedCode = `
                import $ from 'jquery';
                import jQuery from 'jquery';
                ${code}
            `;
            return injectedCode;
        },
    };
}

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),

        react(),
    ],
});


