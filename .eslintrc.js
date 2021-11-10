module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
	plugins: ['@typescript-eslint', 'jest', 'prettier', 'import'],
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	rules: {
		'import/prefer-default-export': 0,
		'no-console': 1,
		'object-curly-spacing': [2, 'always'],

		// Spacing
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'indent-legacy': 0, // disable the legacy indent rules
	},
	overrides: [
		{
			files: ['src/**/*.test.js'],
			env: {
				jest: true,
			},
		},
	],
	env: {
		browser: true,
		node: true,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts'],
			},
		},
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
			},
		],
	},
};
