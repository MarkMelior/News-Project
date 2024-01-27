import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found'
	// PROFILE = 'profile',
	// ARTICLES = 'articles',
	// ARTICLE_DETAILS = 'article_details',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*'
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
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />
	}
}
