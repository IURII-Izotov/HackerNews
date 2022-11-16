const SET_DATA = 'SET_DATA'


const initialState = {
    data: {

    }
};

export const xxxReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_DATA:
            return {

            }

        default:
            return state
    }
}
export const setAuntUserData = () => {
    return {type: SET_DATA, data:{}}
}
