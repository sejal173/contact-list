import "./ContactCard.css";

import React from 'react'

export default function ContactCards({name,mobile}) {
  return (
   <>
        <div className="contact-card">
                <h1>{name}</h1>
                <span>{mobile}</span>
        </div>
   </>
  )
}