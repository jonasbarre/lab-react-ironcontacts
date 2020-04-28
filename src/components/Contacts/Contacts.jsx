import React from 'react'
import './Contacts.css'

export default function Contacts({name, pictureUrl, popularity, id}) {
    return (
        <div className="idcard">
        <img src={pictureUrl} alt="" />
        <div className="idcard__info"> 
        <p><em>Name:</em> {name}</p>
        <p><em>Popularity:</em> {popularity}</p>
    </div>
    </div>
    )
}
