import './App.css'
import Header from './composents/Header/Header.jsx'
import ContactForm from './composents/contact_form/contact_form.jsx'
import ContactList from './composents/contact_list/contact_list.jsx'
import Footer from './composents/footer/footer.jsx'
import { useState } from 'react'

function App() {
  const [contacts, setContacts] = useState([])

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  return (
    <div className="App">
      <Header />
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
      <Footer />
    </div>
  )
}

export default App