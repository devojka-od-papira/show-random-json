import { FETCH_GENERATED_JSON, UPDATE_GENERATED_JSON } from '../constants';

interface UpdateGeneratedJson {
	about: string;
	address: string;
	age: number;
	balance: string;
	company: string;
	email: string;
	eyeColor: string;
	favoriteFruit: string;
	friends: any;
	gender: string;
	greeting: string;
	guid: string;
	index: number;
	isActive: boolean;
	latitude: number;
	longitude: number;
	name: string;
	phone: string;
	picture: string;
	registered: string;
	tags: any;
	_id: string;
}

export function fetchGeneratedJson(data: UpdateGeneratedJson[]) {
	return (dispatch: any) => {
		dispatch({ type: FETCH_GENERATED_JSON, payload: { data } });
	};
}

export function updateGeneratedJson(value: any, key: string, data: Array<UpdateGeneratedJson>, index: number): any {
	const newData = data.map((item: any, i: number): Array<UpdateGeneratedJson> => {
		if (item.index === index) {
			return {
				...item,
				[key]: value,
			};
		// eslint-disable-next-line no-else-return
		} else {
			return item;
		}
	});
	console.log('============', newData);
	return (dispatch: any) => {
		dispatch({
			type: UPDATE_GENERATED_JSON,
			payload: {
				data: newData,
			},
		});
	};
}
