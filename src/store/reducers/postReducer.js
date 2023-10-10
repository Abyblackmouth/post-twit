import * as actionTypes from '../actions/postAction'

const initialState = {
    posts: [
        {
            id: 0,
            avatar: "https://ca.slack-edge.com/TCRFJBKB6-U038A83ACS0-6e1d55959f5a-512",
            name: "Abraham Covarrubias",
            user: "@abrahamcovarrubias",
            content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            date: "09/10/2023",
            done: false
        },
        {
            id: 1,
            avatar: "https://ca.slack-edge.com/TCRFJBKB6-U05P8LLAWHH-67c03e6ab491-512",
            name: "Andrew Rosales",
            user: "@andrewMentor",
            content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            date: "10/10/2023",
            done: false
        },
        {
            id: 2,
            avatar: "https://ca.slack-edge.com/TCRFJBKB6-U0275TN36E8-db6aee7f44f9-512",
            name: "Emilio de Leon  ",
            user: "@emmi007",
            content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            date: "11/10/2023",
            done: false
        }
    ]
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_POST:
 /*            return {
                ...state,
                posts: [...state.posts, action.payload]
            }; */
            return {
                ...state,
                posts: [action.payload, ...state.posts]
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