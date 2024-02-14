import { ChangeEvent, FC, InputHTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	children?: ReactNode;
	value?: string;
	type?: string;
	onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(
	({ className, value, type = 'text', onChange, children, ...otherProps }) => {
		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target.value);
		};

		return (
			<div
				data-testid='Input'
				className={classNames(cls.Input, {}, [className])}
				{...otherProps}
			>
				<input type={type} value={value} onChange={onChangeHandler} />
			</div>
		);
	},
);
