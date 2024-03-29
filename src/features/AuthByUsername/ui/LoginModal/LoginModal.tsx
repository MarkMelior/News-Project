import { FC, Suspense } from 'react';
import { classNames as cl } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
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
}) => {
	return (
		<Modal
			className={cl(cls.LoginModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	);
};
