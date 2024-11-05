import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ContactCard = ({contact}) => (
    <div className="mastercontainer">
        <div >
            <img className="profile" src="https://media.istockphoto.com/id/1385509556/es/foto/hombre-de-negocios-maduro-sonriendo-y-mirando-hacia-otro-lado-aislado-en-la-cocina.jpg?s=612x612&w=0&k=20&c=WUIotZhGosLGZuc6pwJur7tE3VeQeoxLROGjuJxRLRY=" />
        </div>
        <div className="information">
            <p>{contact.name}</p>
            <p> <FontAwesomeIcon icon={faLocationDot} /> <br/> {contact.address}</p>
            <p> <FontAwesomeIcon icon={faPhone} /> {contact.phone}</p>
            <p> <FontAwesomeIcon icon={faEnvelope} /> {contact.email}</p>
        </div>
        <div className="nosequenombreponer">
            <span> <FontAwesomeIcon icon={faPencil} /> </span>
            <span> <FontAwesomeIcon icon={faTrash} /> </span>
        </div>

    </div>
);