import React from 'react'
import ContactItem from './ContactItem'

function ContactList({contacts}) {
  console.log(contacts)
  return (
    <div>
      <h3>Contact List</h3>
          {
            contacts.length ? (
              <ul>
              {contacts.map((contact) => (
                <ContactItem key={contact.id} data={contact}/>
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