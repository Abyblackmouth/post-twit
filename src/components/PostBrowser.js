import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreatePost from "./CreatePost";
import * as postsActions from "../store/actions/postAction"

export default function PostBrowser() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postReducer.posts)

    const navigate = useNavigate()

    function removePosts(id) {
        dispatch(postsActions.removePostAction(id))
    }
    function editPost(id) {
        navigate(`postlist/edit/${id}`)
    }

    return (
        <div>
            <CreatePost />
            {
                posts.map((post) => {
                    console.log(post)
                    return <PostItem key={post.id} data={post} remove={removePosts} edit={editPost} />
                })
            }
        </div>


    )
}