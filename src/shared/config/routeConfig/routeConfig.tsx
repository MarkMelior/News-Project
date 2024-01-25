import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about'
	// PROFILE = 'profile',
	// ARTICLES = 'articles',
	// ARTICLE_DETAILS = 'article_details',
	// NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<
	AppRoutes,
	{ path: string; element: JSX.Element }
> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />
	}
}
