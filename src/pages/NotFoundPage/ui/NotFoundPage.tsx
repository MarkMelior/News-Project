import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
	children?: ReactNode;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
	className,
	children,
	...otherProps
}) => {
	const { t } = useTranslation();

	return (
		<div
			className={classNames(cls.NotFoundPage, {}, [className])}
			{...otherProps}
		>
			{t('Страница не найдена')}
		</div>
	);
};
