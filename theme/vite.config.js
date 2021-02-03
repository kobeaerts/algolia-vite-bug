import path from 'path';

import includePaths from 'rollup-plugin-includepaths';

export default {
    alias: {
        '~': path.resolve(__dirname, 'src'),
    },
    base: '/resources/',
    server: {
        hmr: {
            host: 'localhost',
            port: 3000,
        },
    },
    build: {
        emptyOutDir: true,
        outDir: '../public/resources',
        assetsDir: './',
        manifest: true,
        rollupOptions: {
            input: './src/index.js',
            plugins: [
                includePaths({
                    paths: ['./src'],
                }),
            ],
        },
    },
};
