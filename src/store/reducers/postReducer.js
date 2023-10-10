import * as actionTypes from '../actions/postAction'

const initialState = {
    posts: [
        {
            id: 0,
            avatar: "Aqui va el avatar de Abraham",
            name: "Abraham Covarrubias",
            user: "@abrahamcovarrubias",
            content: "",
            date: "",
            done: false
        },
        {
            id: 1,
            avatar: "Aqui va el avatar de Andrew",
            name: "Andrew",
            user: "@andrewMentor",
            content: "",
            date: "",
            done: false
        },
        {
            id: 2,
            avatar: "Aqui va el avatar de Alexis",
            name: "Alexis Salazar",
            user: "@aalexsal",
            content: "",
            date: "",
            done: false
        }
    ]
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case actionTypes.REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.id)
            };
        case actionTypes.EDIT_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            };
        default:
            return state;
    }
}

export default postReducer;