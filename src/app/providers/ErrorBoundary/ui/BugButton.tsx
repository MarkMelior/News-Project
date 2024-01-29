import { FC, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

interface BugButtonProps {
	className?: string
}

// Компонент для тестирования ErrorBoundary
export const BugButton: FC<BugButtonProps> = ({ className, ...otherProps }) => {
	const [error, useError] = useState(false)

	const onThrow = () => {
		useError(true)
	}

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])

	return (
		<Button onClick={onThrow} {...otherProps}>
			throw error
		</Button>
	)
}
