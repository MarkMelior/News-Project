import { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = (LOCAL_STORAGE_THEME_KEY as Theme) || Theme.LIGHT

type Props = {
	children: React.ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme
		}),
		[theme]
	)

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
