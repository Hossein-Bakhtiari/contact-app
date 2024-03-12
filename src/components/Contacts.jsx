import React, { useState } from 'react'
import ContactList from './ContactList';
import inputs from '../constant/inputs';
import { v4 } from 'uuid';



function Contacts() {
  const [contact , setContact ] = useState({
    id:"",
    name:"",
    lastName: "",
    email: "",
    phone: "",
  })

  const [contacts , setContacts ] = useState([]);
  const [alert , setAlert] = useState("");
  const changHandlar = (event) => {
    const name = event.target.name
    const value = event.target.value

    setContact((contact) =>( { ...contact , [name] : value }))
  }

  const addHandler = () => {
       
    if(
        !contact.name ||
        !contact.lastName ||
        !contact.email ||
        !contact.phone
    ) {
            setAlert("pleas enter valid data")
            return;
       }
       setAlert("");

       const newContact = {...contact , id: v4()}
       setContacts((contacts) => ([ ...contacts , newContact ]))
       setContact( {
        id:"",
        name:"",
        lastName: "",
        email: "",
        phone: "",
      } )

  }


  
return (
    
    <div>
      <div>
      {
          inputs.map((input , index) => (
            <input 
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changHandlar}
            />
          ))
        }
        


        <button onClick={addHandler}>Add</button>
      </div>
        <div>
            {alert && <p>{alert}</p>}
        </div>
        <ContactList contacts={contacts}/>
    </div>
  )
}

export default Contacts