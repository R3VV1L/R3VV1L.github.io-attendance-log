const initialState = {
  tableLength: 0,
};

// @ts-ignore
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TABLE_LENGTH":
      return {
        ...state,
        tableLength: action.payload,
      };
    default:
      return state;
  }
};
