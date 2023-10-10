import React, { useRef } from "react";

import * as postActions from '../store/actions/postAction'
import { useDispatch, useSelector } from "react-redux";

export default function CreatePost() {
    const dispatch = useDispatch()

    const posts = useSelector((state) => state.postReducer.posts)

    const nameInput = useRef(null)
    const avatarInput = useRef(null)
    const userInput = useRef(null)
    const contentInput = useRef(null)
    const dateInput = useRef(null)

    function createPost() {
        const avatarPost = avatarInput.current.value
        const namePost = nameInput.current.value
        const userPost = userInput.current.value
        const contentPost = contentInput.current.value
        const datePost = dateInput.current.value

        const newPost = {
            id: posts.length,
            avatar: avatarPost,
            name: namePost,
            user: userPost,
            content: contentPost,
            date: datePost,
            done: false
        }

        console.log(newPost)

        dispatch({
            type: postActions.ADD_POST,
            payload: newPost
        })
    }

    return (
        <div className="card-body">
            <input ref={nameInput} type="text" className="form-control mb-2" placeholder="add name" />
            <input ref={avatarInput} type="text" className="form-control mb-2" placeholder="add avatar" />
            <input ref={userInput} type="text" className="form-control mb-2" placeholder="add username" />
            <input ref={dateInput} type="text" className="form-control mb-2" placeholder="date" />
            <textarea ref={contentInput} type="text" className="form-control mb-2" placeholder="Que esta pasando" />
            <button className="btn btn-primary" onClick={() => createPost()}>Create</button>
        </div>
    )
}