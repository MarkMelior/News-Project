import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
	className?: string
}

export default function Navbar({ className }: NavbarProps) {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					to={'/'}
					theme={AppLinkTheme.SECONDARY}
					className={cls.mainLink}
				>
					Главная
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
					About
				</AppLink>
			</div>
		</div>
	)
}
