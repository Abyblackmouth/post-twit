import React from "react";

export default function PostItem(props) {
	const { id, avatar, name, user, content, date, done } = props.data
	const { remove, edit } = props
	return (

		<>
			<div className="card mb-3">
				<img src={avatar} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}<span>{user}</span> </h5>
					<p className="card-text">{content}</p>
					<p className="card-text"><small className="text-body-secondary">Last updated {date}</small></p>
					<button className="card-texttext-secondary text-primary text-body-secondary" onClick={() => { edit(id) }}>Edit post</button>
					<button className="ms-5 text-secondary text-danger card-text" onClick={() => { remove(id) }}>Remove Post</button>
				</div>
			</div>
		</>
	)
}