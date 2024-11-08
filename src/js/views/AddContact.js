import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="d-flex justify-content-center align-items-center">Add new conatct</h1>
			<div class="mb-3">
				<label for="nameUser" class="form-label">Full Name</label>
				<input type="email" class="form-control" id="nameUser" aria-describedby="nameHelp" placeholder="Full Name" />
			</div>
			<div class="mb-3">
				<label for="Email" class="form-label">Email</label>
				<input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter Email" />
			</div>
			<div class="mb-3">
				<label for="Phone" class="form-label">Phone</label>
				<input type="email" class="form-control" id="Phone" aria-describedby="emailHelp" placeholder="Enter Phone" />
			</div>
			<div class="mb-3">
				<label for="address" class="form-label">Address</label>
				<input type="email" class="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter address" />
			</div>

			<br />
			<div class="mb-3 align-items-center justify-content-center">

				<button className="d-block p-2 btn btn-primary w-100" onClick={actions.createContacts}>Save</button>

			</div>
			<div class="mb-3">
				<Link to="/">
					or get back to contacts
				</Link>
			</div>
		</div>
	);
};
