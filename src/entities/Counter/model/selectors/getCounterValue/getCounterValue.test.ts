import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
	test('', () => {
		const state: StateSchema = {
			counter: {
				value: 10,
			},
			user: undefined,
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});
