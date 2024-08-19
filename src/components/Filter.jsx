import React, { useState } from 'react'

function Filter({persons}) {
    const [search, setSearch] = useState('')

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredPersons = search.length > 0 ? persons.filter(p => p.name.toLowerCase().includes(search.toLowerCase())) : []

    return (
        <div>
            <input value={search} onChange={handleSearchChange} />
            {filteredPersons.map(person => <p>{person.name}</p>)}
        </div>
    )
}

export default Filter