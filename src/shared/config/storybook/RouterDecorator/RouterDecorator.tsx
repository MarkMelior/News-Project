import { StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: StoryObj) => (
	<BrowserRouter>{Story()}</BrowserRouter>
);
