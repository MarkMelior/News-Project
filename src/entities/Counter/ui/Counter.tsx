import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	const { t } = useTranslation();

	return (
		<div>
			<h1 data-testid='value-title'>Value = {counterValue}</h1>
			<Button data-testid='increment-btn' onClick={increment}>
				{t('increment')}
			</Button>
			<Button data-testid='decrement-btn' onClick={decrement}>
				{t('decrement')}
			</Button>
		</div>
	);
};
