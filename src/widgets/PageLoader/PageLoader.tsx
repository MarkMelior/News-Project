import { FC } from 'react'
import cls from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
	className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({
	className,
	...otherProps
}) => {
	return (
		<div
			className={classNames(cls.PageLoader, {}, [className])}
			{...otherProps}
		>
			<Loader />
		</div>
	)
}
