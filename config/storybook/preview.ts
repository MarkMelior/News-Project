import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	// decorators: [RouterDecorator(Story), ThemeDecorator()],
};

export default preview;
