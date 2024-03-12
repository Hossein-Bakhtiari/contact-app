import React from 'react'
import styles from "./ConatctItem.module.css"
function ContactItem({data:{name , lastName , email , phone ,id} , deleteHandler}) {
  return (
    <li className={styles.item} >
                  <p>
                    {name} {lastName}
                  </p>
                  <p>
                    <span>✉️</span>
                    {email}
                  </p>
                  <p>
                    <span>📞</span>
                    {phone}
                  </p>
                  <button onClick={() => deleteHandler(id)}>
                    🗑️
                  </button>

        </li>
  )
}

export default ContactItem