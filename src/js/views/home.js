import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.contacts && store.contacts.length === 0) {
			actions.getAgendaContacts();
		}
	}, [store.contacts]);

	return (
		<div className="text-center mt-5">
			<div>
				{store.contacts && store.contacts.length > 0 && (
					store.contacts.map((singleContact, index) => (
						<ContactCard contact={singleContact} key={index} />
					))
				)}
			</div>
		</div>
	);
};