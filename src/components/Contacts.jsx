import React, { useState } from 'react'

function Contacts() {
  const [contact , setContact ] = useState({
    name:"",
    lastName: "",
    email: "",
    phone: "",
  })

  const changHandlar = (event) => {
    const name = event.target.name
    const value = event.target.value

    setContact((contact) =>( { ...contact , [name] : value }))
  }

  const addHandler = () => {
        console.log(contact)
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
    </div>
  )
}

export default Contacts