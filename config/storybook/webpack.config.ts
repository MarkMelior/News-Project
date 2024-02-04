import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');

	// config.module?.rules?.push({
	// 	test: /\.(ts|tsx)$/,
	// 	loader: require.resolve('babel-loader'),
	// 	options: {
	// 		presets: [
	// 			'@babel/preset-env',
	// 			'@babel/preset-react',
	// 			'@babel/preset-typescript',
	// 		],
	// 	},
	// });

	// eslint-disable-next-line no-param-reassign
	config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});
	config.module?.rules?.push(buildCssLoader(true));

	return config;
};
