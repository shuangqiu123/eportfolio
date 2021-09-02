const { when, whenDev, whenProd } = require('@craco/craco');
const webpack = require("webpack");
const CracoLessPlugin = require('craco-less');
const CracoVtkPlugin = require('craco-vtk');
const WebpackBar = require('webpackbar');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const FastRefreshCracoPlugin = require('craco-fast-refresh');
const TerserPlugin = require('terser-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const {	BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DashboardPlugin = require('webpack-dashboard/plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const path = require('path');
  
const isBuildAnalyzer = process.env.BUILD_ANALYZER === "true";
  
const pathResolve = pathUrl => path.join(__dirname, pathUrl);

module.exports = {
	webpack: {
		alias: {
			"@": pathResolve("src"),
		},
		plugins: [
			new WebpackBar({
				profile: true
			}),
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			new SimpleProgressWebpackPlugin(),
			new AntdDayjsWebpackPlugin(),
			...whenDev(
				() => [
					new CircularDependencyPlugin({
						exclude: /node_modules/,
						include: /src/,
						failOnError: true,
						allowAsyncCycles: false,
						cwd: process.cwd()
					}),
					new DashboardPlugin(),
					new webpack.HotModuleReplacementPlugin()
				], []
			),
			...when(
				isBuildAnalyzer, () => [
					new BundleAnalyzerPlugin({
						analyzerMode: "static",
						openAnalyzer: false,
						reportFilename: resolve(__dirname, "analyzer/index.html")
					})
				], []
			),
			...whenProd(
				() => [
					new TerserPlugin({
						  terserOptions: {
							ecma: undefined,
							parse: {},
							compress: {
								warnings: false,
								drop_console: true,
								drop_debugger: true,
								pure_funcs: ["console.log"]
							}
						}
					}),
					new CompressionWebpackPlugin({
						algorithm: 'gzip',
						test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
						threshold: 1024,
						minRatio: 0.8
					})
				], []
			)
		],
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						chunks: "initial",
						minChunks: 2,
						maxInitialRequests: 5,
						minSize: 0
					},
					vendor: {
						test: /node_modules/,
						chunks: "initial",
						name: "vendor",
						priority: 10,
						enforce: true
					}
				}
			}
		},
		configure: (webpackConfig, {
			env, paths
		}) => {
			paths.appPath='public';
			paths.appBuild = "dist";
			webpackConfig.output = {
				...webpackConfig.output,
				...{
				  filename: whenDev(() => "static/js/bundle.js", "static/js/[name].js"),
				  chunkFilename: "static/js/[name].js"
				},
				path: path.resolve(__dirname, "dist"),
				publicPath: "/"
			};
			webpackConfig.optimization.splitChunks = {
				...webpackConfig.optimization.splitChunks,
				...{
					chunks: "all",
					name: true
				}
			};
			return webpackConfig;
		}
	},
	babel: {
		presets: [],
		plugins: [
			["import", {
				libraryName: "antd",
				libraryDirectory: "es",
				style: true
			}, "antd"],
			["@babel/plugin-proposal-decorators", {
				legacy: true
			}]
		],
		loaderOptions: {},
		loaderOptions: (babelLoaderOptions, {
			env, paths
		}) => {
			return babelLoaderOptions;
		}
	},
	plugins: [
		...whenDev(
			() => [{
				plugin: FastRefreshCracoPlugin
			}, {
				plugin: CracoVtkPlugin()
			}, {
				plugin: new AntdDayjsWebpackPlugin()
			}], []
		),
		{
		  plugin: CracoLessPlugin,
		  options: {
			lessLoaderOptions: {
				lessOptions: {
					modifyVars: { "@primary-color": "#1DA57A" },
					javascriptEnabled: true
				}
			}
		  }
		},
	],
	devServer: {
		port: 5000,
		proxy: {
			"/api": {
				target: "http://localhost:3000",
			}
		}
	}
};