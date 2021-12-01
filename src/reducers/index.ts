import { combineReducers } from 'redux';
import randomJson from './randomJson';

const rootReducer = combineReducers({ randomJson });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
