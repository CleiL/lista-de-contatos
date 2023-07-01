import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de Contatos</h1>
      <ContactList />
      <ContactForm />
    </div>
  );
}

export default App;
