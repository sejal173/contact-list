import "./Home.css";
import  phonebook  from "../../Data/phonebook";
import React, { useEffect, useState } from 'react'
import ContactCards from "../../Components/ContactCard/ContactCard";

export default function Home() {
    // console.log(phonebook)
    const [Contacts ,setContacts] = useState(phonebook);
    const[searchTerm ,setsearchTerm] = useState('');

    useEffect(()=>{
        const filterdContacts = phonebook.filter((contact)=>{
            const name = contact.name.toLocaleLowerCase();
            const mobile = contact.mobile.toString();

            const query = searchTerm.toLocaleLowerCase();

            return (name.includes(query) || mobile.includes(query))
        })

        setContacts(filterdContacts);
    },[searchTerm])
  return (
    <>
        <h1 className="text-center"> Contact List</h1>

        <input type="text"
         placeholder="search" 
         className="search" 
         value={searchTerm}
         onChange={(e) =>{
            setsearchTerm(e.target.value)
         }}
         />

        


        <div>
            {
                Contacts.map((contact , index)=>{
                    const {name ,mobile} = contact;

                    return <ContactCards key={index} name={name} mobile={mobile}/>
                })
            }
        </div>

        {
            
            Contacts.length === 0 ? <h2 className="text-center">No Contacts Found </h2> : null
        }
    </>
  )
}
