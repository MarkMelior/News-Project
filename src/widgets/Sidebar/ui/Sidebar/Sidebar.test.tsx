import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
	test('with only first param', () => {
		renderWithTranslation(<Sidebar></Sidebar>)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('with only first param', () => {
		renderWithTranslation(<Sidebar></Sidebar>)
		const toggleBtn = screen.getByTestId('sidebar-toggle')
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
