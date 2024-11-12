const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			createAgenda: () => {

				fetch("https://playground.4geeks.com/contact/agendas/nath1710", { method: "POST" }).then(response => response.json()).then(data => setStore({ "foo": data.bar }))

			},
			getAgendaContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/nath1710/contacts")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: Array.isArray(data) ? data : data.contacts || [] });
					})
					.catch(error => console.error("Error fetching contacts:", error));
			},
			createContacts: (newContact) => {
				fetch("https://playground.4geeks.com/contact/agendas/nath1710/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				})
					.then(response => response.json())
					.then(data => {
						const currentContacts = getStore().contacts;
						setStore({ contacts: [...currentContacts, data] });
					})
					.catch(error => console.error("Error creating contact:", error));
			},
			updateContacts: async (updatedContact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/nath1710/contacts/${updatedContact.id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updatedContact)
					});

					if (response.ok) {
						const data = await response.json();
						const contacts = getStore().contacts.map(contact =>
							contact.id === updatedContact.id ? data : contact
						);
						setStore({ contacts });
					} else {
						console.error("Failed to update contact:", response.status);
					}
				} catch (error) {
					console.error("Error updating contact:", error);
				}
			},
			deleteContacts: (contactId) => {
				fetch(`https://playground.4geeks.com/contact/agendas/nath1710/contacts/${contactId}`, {
					method: "DELETE",
				})
					.then(response => {
						if (response.ok) {
							const currentContacts = getStore().contacts;
							const updatedContacts = currentContacts.filter(contact => contact.id !== contactId);
							setStore({ contacts: updatedContacts });
						}
					})
					.catch(error => console.error("Error deleting contact:", error));
			}
		}
	};
};

export default getState;