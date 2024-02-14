// import style from './MainPage.module.scss'

import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export default function MainPage() {
	const { t } = useTranslation('main');
	const [value, setValue] = useState('');

	const onChange = (value: string) => {
		setValue(value);
	};

	return (
		<>
			<BugButton />
			<div>{t('Главная страница')}</div>
			<Counter />
			<Input onChange={onChange} value={value} />
		</>
	);
}
