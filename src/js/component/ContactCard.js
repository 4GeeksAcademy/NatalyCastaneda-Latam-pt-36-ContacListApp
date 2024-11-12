import React, { useState, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        actions.deleteContacts(contact.id);
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <div className="mastercontainer">
            <div>
                <img className="profile" src="https://media.istockphoto.com/id/1385509556/es/foto/hombre-de-negocios-maduro-sonriendo-y-mirando-hacia-otro-lado-aislado-en-la-cocina.jpg?s=612x612&w=0&k=20&c=WUIotZhGosLGZuc6pwJur7tE3VeQeoxLROGjuJxRLRY=" />
            </div>
            <div className="secondContainer">
                <div className="information">
                    <div className="name">
                        <span className="nameContact">{contact.name}</span>
                    </div>

                    <div className="info-item">
                        <span className="icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <span>{contact.address}</span>
                    </div>
                    <div className="info-item">
                        <span className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <span>{contact.phone}</span>
                    </div>
                    <div className="info-item">
                        <span className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <span>{contact.email}</span>
                    </div>
                </div>

                <div className="icons-container">
                        <Link to={`/edit-contact/${contact.id}`}>
                            <FontAwesomeIcon icon={faPencil} />
                        </Link>
                        <span onClick={handleDeleteClick}>
                            <FontAwesomeIcon icon={faTrash} />
                        </span>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h4>Are you sure you want to delete this contact?</h4>
                        <div className="modalButtons">
                            <button className="btn btn-success" onClick={handleConfirmDelete}>Yes, Delete</button>
                            <button className="btn btn-danger" onClick={handleCancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};