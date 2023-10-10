import React from "react";

export default function PostItem(props) {
	const { id, avatar, name, user, content, date, done } = props.data
	const { remove, edit } = props
	return (
		<>
			<div className="main-container ">
			<div className="card mb-4 Regular shadow">
			<div className="row g-4">
				<div className="col-md-2">
				<img src={avatar} className="img-fluid rounded-circle p-3 " alt="avatar"/>
				</div>
				<div className="col-md-9">
				<div className="card-body">
					<h5 className="card-title">{name}<span className="card-tittle__user">{user}</span></h5>
					<p className="card-text">{content}</p>
					<p className="card-text"><small className="text-body-secondary">Last updated  {date}</small></p>
					<button className="card-texttext-secondary text-primary text-success" onClick={() => { edit(id) }}>Edit post</button>
					<button className="ms-5 text-secondary text-danger card-text" onClick={() => { remove(id) }}>Remove Post</button>
				</div>
				</div>
			</div>
			</div>
			</div>

		</>
	)
}