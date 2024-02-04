import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
	(theme: Theme) => (StoryComponent: React.ComponentType) =>
		(
			<ThemeProvider initialTheme={theme}>
				<div className={`app ${theme}`}>
					<StoryComponent />
				</div>
			</ThemeProvider>
		);
