import React from 'react'
import './Contacts.css'

export default function Contacts(props) {
    return (
        <div className="idcard">
        <img src={props.pictureUrl} alt="" />
        <div className="idcard__info"> 
        <p><em>Name:</em> {props.name}</p>
        <p><em>Popularity:</em> {props.popularity}</p>
    </div>
    </div>
    )
}




