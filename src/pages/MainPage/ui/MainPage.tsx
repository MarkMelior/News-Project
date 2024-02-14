// import style from './MainPage.module.scss'

import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
	const { t } = useTranslation('main');

	return (
		<>
			<BugButton />
			<div>{t('Главная страница')}</div>
			<Counter />
		</>
	);
}
