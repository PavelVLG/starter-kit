export const isLoading = (value: boolean) => {
    return {
        type: "IS_LOADING",
        payload: value,
    };
};

export const usToken = (token: string) => {
    return {
        type: "TOKEN",
        payload: token,
    };
};
export const user = (data: any) => {
    return {
        type: "USER_INFO",
        payload: data,
    };
};
export const initApp = (initApp: any) =>{
    return{
        type: "INIT_APP",
        payload: initApp,
    }
};