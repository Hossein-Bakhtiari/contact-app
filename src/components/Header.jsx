import React from 'react'
import  styles  from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://github.com/Hossein-Bakhtiari">GitHub</a> | First React.js Project
        </p>
    </div>
  )
}

export default Header