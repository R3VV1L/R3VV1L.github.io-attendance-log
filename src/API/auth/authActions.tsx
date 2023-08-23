export const setAdminStatus = (isAdmin: boolean) => {
    return {
        type: 'SET_ADMIN_STATUS',
        payload: isAdmin,
    };
};
