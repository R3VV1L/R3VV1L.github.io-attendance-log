import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import reducer from './table/reducer.tsx';

const rootReducer = combineReducers({
    auth: authReducer,
    data: reducer,
});

export default rootReducer;
