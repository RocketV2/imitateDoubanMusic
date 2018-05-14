
/**
 * 最基础的webpack配置
 * 
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


var path = require('path');
var ROOT_PATH = path.resolve(__dirname); // 项目跟路径
var APP_PATH = path.resolve(ROOT_PATH, 'app'); // 项目开发目录src
var APP_FILE = path.resolve(APP_PATH, 'app.js'); // 项目入口的index.js
var DIST_PATH = path.resolve(ROOT_PATH, 'build'); // 项目打包输出路径


module.exports = {
	// entry: __dirname + 'app/app.js',// 唯一的入口文件
	entry: APP_FILE,
	output: {
		// path: __dirname + "/build",
		path: DIST_PATH,
        filename: "bundle.js"
	},
	mode: 'development',

	// 模块查找规则
	resolve: {
		extensions: [".js",".jsx", ".json", ".css",'.json5']
	},

	// 配置DevServer
	devServer:{
		contentBase: '/build',
	},

	// 配置需要的loader
	module:{
		rules:[{
				test: /(\.jsx|\.js)$/,
	            use: ["babel-loader?presets[]=es2015,presets[]=react"],
	            exclude: /node_modules/
			},{
				test: /\.css$/,
				use: ["style-loader","css-loader"],
				exclude: /node_modules/
			},{
				test: /(\.png|\.jpg|\.gif)$/,
				use: ["file-loader"],
				exclude: /node_modules/
			},{
				test: /\.json$/,
				use: ["json-loader"],
				exclude: /node_modules/
			},{
				test: /\.json5$/,
				use: ["json5-loader"],
				exclude: /node_modules/
			}

		]
	},

	// 配置需要的plugins
	plugins:[
		new HtmlWebpackPlugin({
            template: __dirname + "/app/app.html"// 入口文件HTML
        }),
	]

}