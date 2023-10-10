import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as actionTypes from "../store/actions/postAction"

export default function PostEdit() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const posts = useSelector((state) => state.postReduer.posts)

    const [activePost, setActivePost] = useState({})

    const postNameInput = useRef(null)
    const postAvatarInput = useRef(null)
    const postUserInput = useRef(null)
    const postContentInput = useRef(null)
    const postDateInput = useRef(null)

    function finishEdit(){
        const editedPost = {
            id: Number(id),
            avatar: postAvatarInput.current.value,
            name: postNameInput.current.value,
            user: postUserInput.current.value,
            content: postContentInput.current.value,
            date: postDateInput.current.value,
        }

        dispatch({
            type: actionTypes.EDIT_POST,
            payload: editedPost
        })

        navigate('/')
    }

    useEffect(()=>{
        const newPost = posts.find((post) => {
            return post.id === Number(id)
        })

        setActivePost(newPost)
    },[id])

    return (
        <div className="postEdit">
            {
                activePost.name ? (
                    <>
                    <Link to="/">Back to Post List</Link>
                    <h1>Task # {id} {activePost.name}</h1>
                    <div className="form-group">
                        <label htmlfor="todoName">Name</label>
                        <input ref={postNameInput} className="from-control" id="postName" defaultValue={activePost.name}/>
                    </div>
                    <div className="from-group">
                        <label htmlfor="postContent">que esta pasando</label>
                        <input ref={postContentInput} className="from-control" id="postContent" defaultValue={activePost.content}/>
                    </div>
                    <button className="btn btn-primary btn-sm pull-right" onClick={()=> finishEdit()}>Finish Edit</button>
                    <p>Status: {activePost.content}</p>
                    </>
                ) : ( 'Loading...')
            }
        </div>
    )
}