import React, { useState } from 'react'
import ContactList from './ContactList';

function Contacts() {
  const [contact , setContact ] = useState({
    name:"",
    lastName: "",
    email: "",
    phone: "",
  })

  const [contacts , setContacts ] = useState([]);

  const changHandlar = (event) => {
    const name = event.target.name
    const value = event.target.value

    setContact((contact) =>( { ...contact , [name] : value }))
  }

  const addHandler = () => {
       setContacts((contacts) => ([ ...contacts , contact ]))
       setContact( {
        name:"",
        lastName: "",
        email: "",
        phone: "",
      } )

  }


  
return (
    
    <div>
        <input 
        type="text" 
        placeholder='Name' 
        name='name' 
        value={contact.name} 
        onChange={changHandlar} 
        />

        <input 
        type="text" 
        placeholder='Last Name' 
        name='lastName' 
        value={contact.lastName} 
        onChange={changHandlar} 
        />

        <input 
        type="email" 
        placeholder='Email' 
        name='email' 
        value={contact.email} 
        onChange={changHandlar} 
        />

        <input 
        type="phone" 
        placeholder='Phone'
        name='phone' 
        value={contact.phone} 
        onChange={changHandlar} 
        />

        <button onClick={addHandler}>Add</button>
        <ContactList contacts={contact}/>
    </div>
  )
}

export default Contacts