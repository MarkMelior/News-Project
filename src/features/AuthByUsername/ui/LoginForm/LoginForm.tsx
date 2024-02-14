import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cl } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
	children?: ReactNode;
}

export const LoginForm: FC<LoginFormProps> = ({
	className,
	children,
	...otherProps
}) => {
	const { t } = useTranslation();

	return (
		<div className={cl(cls.LoginForm, {}, [className])} {...otherProps}>
			<Input
				type='text'
				className={cls.input}
				placeholder={t('Введите логин')}
			/>
			<Input
				type='text'
				className={cls.input}
				placeholder={t('Введите пароль')}
			/>
			<Button className={cls.loginBtn}>{t('Войти')}</Button>
		</div>
	);
};
