import React from 'react'

function ContactList({contacts}) {
  console.log(contacts)
  return (
    <div>
      <h3>Contact List</h3>
          {
            contacts.length ? (
              <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <p>
                    {contact.name} {contact.lastName}
                  </p>
                  <p>
                    <span>✉️</span>
                    {contact.email}
                  </p>
                  <p>
                    <span>📞</span>
                    {contact.phone}
                  </p>
                  <button>
                    🗑️
                  </button>

                </li>
              ))}
            </ul>
            ) : (
              <p>No Contact yet..!</p>
            )
          }
    </div>
  )
}

export default ContactList