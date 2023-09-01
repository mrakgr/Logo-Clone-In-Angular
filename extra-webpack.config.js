const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [new MonacoWebpackPlugin()]
};
