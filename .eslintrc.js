module.exports = {
	root: true,
	extends: 'eslint:recommended',
	env: {
		es6: true,
		node: true,
	},
	rules: {

		// # --->>> best practices

		curly: 'error',
		'eol-last': 'error',
		'newline-per-chained-call': ['error', {
			ignoreChainWithDepth: 3,
		}],
		'no-use-before-define': ['error', 'nofunc'],
		'no-console': ['off'],

		// # --->>> style enforcement

		camelcase: ['error', {
			properties: 'always',
		}],
		'comma-dangle': ['error', 'only-multiline'],
		'id-length': ['error', {
			min: 2,
			max: 25,
			exceptions: ['$', '_'],
		}],
		'max-len': ['error', {
			code: 140,
			ignoreUrls: true,
		}],
		'max-params': 'error',
		'max-statements-per-line': ['error', {
			max: 2,
		}],
		'no-extra-semi': 'error',
		'object-property-newline': 'error',
		'one-var': ['error', 'never'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],

		// # --->>> white spacing pedantry

		'indent': ['error', 'tab'],
		'no-multi-spaces': 'error',
		// # dagnabbit, we can't do this yet...see https://github.com/eslint/eslint/issues/1229 'no-trailing-spaces': 'error',
		'no-whitespace-before-property': 'error',

		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': 'error',
		'comma-spacing': ['error', {
			before: false,
			after: true,
		}],
		'computed-property-spacing': ['error', 'never'],
		// # 'func-call-spacing': 'error',
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
		}],
		'keyword-spacing': ['error', {
			before: true,
			after: true,
		}],
		'object-curly-spacing': ['error', 'always'],
		'semi-spacing': ['error', {
			before: false,
		}],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error', {
			int32Hint: false,
		}],
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
		}],
		// # 'spaced-comment': ['error', 'always'],

		'arrow-spacing': 'error',
		'generator-star-spacing': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'template-curly-spacing': 'error',
		'yield-star-spacing': 'error',

	},
	globals: {
	},
};
