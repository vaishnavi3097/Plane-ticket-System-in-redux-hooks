import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/users"

export function getUser(id){
    return(
        axios.get(`${url}/${id}`)
    )
}