import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cl } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
	className?: string;
	isOpen?: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
	className,
	isOpen,
	onClose,
	...otherProps
}) => {
	const { t } = useTranslation();

	return (
		<Modal
			className={cl(cls.LoginModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
			{...otherProps}
		>
			<LoginForm />
		</Modal>
	);
};