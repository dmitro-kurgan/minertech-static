const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const php = require('./webpack/php');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'bundle': PATHS.source + '/bundle/bundle.js',
			'blog': PATHS.source + '/components/js/blog.js',
			'service': PATHS.source + '/components/js/service.js',
			'product': PATHS.source + '/components/js/product.js',
			// 'send': PATHS.source + '/components/js/send.js',
			// 'intlTelInput.min': PATHS.source + '/components/libs/jquery.form-sender/intlTelInput.min.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'product.html',
				chunks: ['bundle', 'product'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/product.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['bundle', 'blog'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'article.html',
				chunks: ['bundle', 'blog'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/article.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'service.html',
				chunks: ['bundle', 'service'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/service.pug'
			}),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
				"window.$": "jquery"
			}),
			new webpack.ProvidePlugin({
				wow: 'wowjs',
				WOW: 'wowjs'
			})
		]
	},
	pug(),
	images(),
	fonts(),
	php()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};