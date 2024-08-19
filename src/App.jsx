import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('Something went wrong while fetching the phonebook.')
        console.log(error)
      })
    }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Search</h2>
      <Filter persons={persons} />
      <h2>Add New</h2>
      <PersonForm persons={persons} handleSetPersons={setPersons} />
      <h2>Numbers</h2>
      <PersonList persons={persons} handleSetPersons={setPersons} />
    </div>
  )
}

export default App