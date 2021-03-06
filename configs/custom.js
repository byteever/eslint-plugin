module.exports = {
    plugins: [ '@wordpress', '@byteever' ],
    rules: {
        '@byteever/dependency-group': 'error',
    },
    settings: {
        jsdoc: {
            mode: 'typescript',
        },
    },
    overrides: [
        {
            files: [
                '**/@(test|__tests__)/**/*.js',
                '**/?(*.)test.js',
                '**/tests/**/*.js',
            ],
            extends: [
                'plugin:@wordpress/eslint-plugin/test-unit',
                require.resolve( './react-testing-library' ),
            ],
        },
    ],
};