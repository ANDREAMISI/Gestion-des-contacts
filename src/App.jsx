import './App.css'
import Header from './composents/Header/Header.jsx'
import ContactForm from './composents/contact_form/contact_form.jsx'
import ContactList from './composents/contact_list/contact_list.jsx'
import Footer from './composents/footer/footer.jsx'
import { useState } from 'react'

function App() {
  const [contacts, setContacts] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [search, setSearch] = useState("")

  const filteredContacts = contacts.filter(contact => 
     `${contact.firstName} ${contact.name} ${contact.email}`
    .toLowerCase()
    .includes(search.toLowerCase())
);


  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }
  const startEdit = (index) => {
  setEditingIndex(index)
}

  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index)
    setContacts(newContacts)
  }
  const editContact = (index, updatedContact) => {
    const newContacts = contacts.map((contact, i) =>
      i === index ? updatedContact : contact
    )
    setContacts(newContacts)
    setEditingIndex(null)
  }

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <ContactForm addContact={addContact} editContact={editContact} contacts={contacts} editingIndex={editingIndex} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} editContact={startEdit} />
      <Footer />
    </div>
  )
}

export default App