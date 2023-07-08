import { SET_TABLE_LENGTH } from './action.tsx';

const initialState = {
    tableLength: 0,
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TABLE_LENGTH:
            return {
                ...state,
                tableLength: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
