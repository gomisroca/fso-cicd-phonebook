import axios from 'axios'
const baseUrl = '/api'

const getAll = () => {
    const req = axios.get(`${baseUrl}/persons`)
    return req.then(res => res.data)
}

const create = newPerson => {
    const req = axios.post(`${baseUrl}/persons`, newPerson)
    return req.then(res => res.data)
}

const update = (id, updatedPerson) => {
    const req = axios.put(`${baseUrl}/persons/${id}`, updatedPerson)
    return req.then(res => res.data)
}

const remove = id => {
    const req = axios.delete(`${baseUrl}/persons/${id}`)
    return req.then(res => res.data)
}

export default { getAll, create, update, remove }