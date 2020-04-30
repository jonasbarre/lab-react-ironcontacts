import React, { Component } from 'react';
import './App.css';
import Contacts from './contacts.json';
import ContactsTwo from './components/Contacts/Contacts.jsx';


export default class App extends Component {

  state = {
    contacts: Contacts
  } 

  showMeFirstFiveContacts = () => {
    let slicedContacts = this.state.contacts.splice(0,5)
    console.log(Math.random() * Contacts.length)
    this.setState({contacts: slicedContacts})
  }

  showMeAllContacts = () => {
    this.setState({contacts: Contacts})
  }

  addRandomContact = () => {
    let initialState = this.state.contacts
    initialState.push(Contacts[Math.floor(Math.random()* Contacts.length)])
    this.setState({contacts: initialState})
  }

  sortName = () => {
    let initialState = this.state.contacts
    initialState.sort((a,b) => a.name < b.name ? -1 : 1)
    this.setState({contacts: initialState})
  }

  sortpopularity = () => {
    let initialState = this.state.contacts
    initialState.sort((a,b) => a.popularity - b.popularity)
    this.setState({contacts: initialState})
  }

  render() {
    return (
      <>
      <div>
        <button onClick={this.showMeFirstFiveContacts}>Show only six contacts</button>
        <button onClick={this.showMeAllContacts}>Show all contacts</button>
        <button onClick={this.addRandomContact}>Add a random contact</button>
        <button onClick={this.sortName}>sort by name</button>
        <button onClick={this.sortpopularity}>sort by popularity</button>
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

