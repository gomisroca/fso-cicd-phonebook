import React from 'react'
import personsService from '../services/persons'

function PersonList({persons, handleSetPersons}) {
  const handleDelete = id => {
    personsService
    .remove(id)
    .then(removedPerson => {
      const newPersons = persons.filter(person => person.id != removedPerson.id)
      handleSetPersons(newPersons)
    })
    .catch(error => {
      console.log('Something went wrong while deleting the person from the phonebook.')
      console.log(error)
    })
  }

  if (persons.length == 0) {
    return <p>No contacts in the phonebook</p>
  }
  return (
    <div>
        {persons.sort((a, b) => a.id - b.id).map(person => 
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </p>)}
    </div>
  )
}

export default PersonList