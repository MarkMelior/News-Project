import { UnknownAction } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from 'features/AuthByUsername';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { FC, ReactNode, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames as cl } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
	children?: ReactNode;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(
	({ className, children, ...otherProps }) => {
		const { t } = useTranslation();
		const dispatch = useDispatch();
		const username = useSelector(getLoginUsername);
		const password = useSelector(getLoginPassword);
		const isLoading = useSelector(getLoginIsLoading);
		const error = useSelector(getLoginError);

		const onChangeUsername = useCallback(
			(value: string) => {
				dispatch(loginActions.setUsername(value));
			},
			[dispatch],
		);

		const onChangePassword = useCallback(
			(value: string) => {
				dispatch(loginActions.setPassword(value));
			},
			[dispatch],
		);

		const onLoginClick = useCallback(() => {
			dispatch(
				loginByUsername({ username, password }) as unknown as UnknownAction,
			);
		}, [dispatch, password, username]);

		return (
			<DynamicModuleLoader reducers={initialReducers}>
				<div className={cl(cls.LoginForm, {}, [className])} {...otherProps}>
					<Text title={t('Форма авторизации')} />
					{error && <Text text={error} theme={TextTheme.ERROR} />}
					<Input
						type='text'
						className={cls.input}
						placeholder={t('Введите логин')}
						onChange={onChangeUsername}
						value={username}
					/>
					<Input
						type='text'
						className={cls.input}
						placeholder={t('Введите пароль')}
						onChange={onChangePassword}
						value={password}
					/>
					<Button
						className={cls.loginBtn}
						onClick={onLoginClick}
						disabled={isLoading}
					>
						{t('Войти')}
					</Button>
				</div>
			</DynamicModuleLoader>
		);
	},
);

export default LoginForm;
