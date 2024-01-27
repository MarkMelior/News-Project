import { FC, ReactNode, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
	className?: string
	children?: ReactNode
}

export const Sidebar: FC<SidebarProps> = ({
	className,
	children,
	...otherProps
}) => {
	const { t } = useTranslation()

	const [collapsed, useCollapsed] = useState(false)

	const onToggle = () => {
		useCollapsed(!collapsed)
	}

	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className
			])}
			{...otherProps}
		>
			<Button onClick={onToggle}>{t('Переключить')}</Button>
			{children}
			<div className={classNames(cls.swithers, {}, [])}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
