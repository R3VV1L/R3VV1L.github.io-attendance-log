export const SET_TABLE_LENGTH = 'SET_TABLE_LENGTH';

export const setTableLength = (tableLength: number) => ({
    type: SET_TABLE_LENGTH,
    payload: tableLength,
});
