export const ADD_POST = "ADD_POST"
export const REMOVE_POST = "REMOVE_POST"
export const ACTIVE_POST = "ACTIVE_POST"
export const EDIT_POST = "EDIT_POST"

export const removePostAction = (id) => dispatch => {
    dispatch({
        type: REMOVE_POST,
        payload: {
            id
        }
    })
}