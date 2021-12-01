import { FETCH_GENERATED_JSON, UPDATE_GENERATED_JSON } from '../constants';

const initialState = {
	data: [],
};

const randomJson = (state = initialState, action: any) => {
	switch (action.type) {
	case FETCH_GENERATED_JSON:
		return {
			...state,
			data: action.payload.data,
		};
	case UPDATE_GENERATED_JSON:
		return {
			...state,
			data: action.payload.data,
		};
	default:
		return state;
	}
};
export default randomJson;
