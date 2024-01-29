// import style from './MainPage.module.scss'

import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { useTranslation } from 'react-i18next'

export default function MainPage() {
	const { t } = useTranslation('main')

	return (
		<>
			<BugButton></BugButton>
			<div>{t('Главная страница')}</div>
		</>
	)
}
