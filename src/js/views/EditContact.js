import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const contact = store.contacts.find(contact => contact.id === parseInt(id)); 
        if (contact) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setAddress(contact.address);
        }
    }, [id, store.contacts]);

    const handleSubmit = async () => {
        const updatedContact = { id: parseInt(id), name, email, phone, address };
        await actions.updateContacts(updatedContact); 
        navigate("/"); 
    };

    
    return (
        <div className="container">
            <h1 className="d-flex justify-content-center align-items-center">Edit Contact</h1>
            <div class="mb-3">
                <label for="nameUser" class="form-label">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="nameUser" aria-describedby="nameHelp" placeholder="Full Name" />
            </div>
            <div class="mb-3">
                <label for="Email" class="form-label">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div class="mb-3">
                <label for="Phone" class="form-label">Phone</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control" id="Phone" aria-describedby="emailHelp" placeholder="Enter Phone" />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter address" />
            </div>

            <br />
            <div class="mb-3 align-items-center justify-content-center">

                <button className="d-block p-2 btn btn-primary w-100" onClick={handleSubmit}>Save</button>

            </div>

        </div>
    );
};