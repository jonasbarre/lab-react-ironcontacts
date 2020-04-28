import React, { Component } from 'react';
import './App.css';
import Contacts from './contacts.json';
import ContactsTwo from './components/Contacts/Contacts.jsx';


export default class App extends Component {

  state = {
    contacts: Contacts
  } 

  showMeFirstFiveContacts = () => {
    var slicedContacts = this.state.contacts.slice(0,5)
    console.log(Math.random() * Contacts.length)
    this.setState({contacts: slicedContacts})
  }

  showMeAllContacts = () => {
    this.setState({contacts: Contacts})
  }

  addRandomContact = () => {
    console.log(this.slicedContacts)
    this.slicedContacts.push(Contacts[Math.floor(Math.random()* Contacts.length)])
    this.setState({contacts: this.slicedContacts})
  }

  render() {
    return (
      <>
      <div>
        <button onClick={this.showMeFirstFiveContacts}>Show only six contacts</button>
        <button onClick={this.showMeAllContacts}>Show all contacts</button>
        <button onClick={this.addRandomContact}>Add a random contact</button>
        {this.state.contacts.map(contact => (
        <ContactsTwo key={contact.id}
        popularity={contact.popularity}
        pictureUrl={contact.pictureUrl}
        name={contact.name}
        /> 
        ))}
             
      </div>
      </>
    )
  }
}

