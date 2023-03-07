import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => axios.get(baseUrl);
export const getUser = (id) => axios.get(`${baseUrl}/${id}`);
export const deleteUser = (id) => axios.delete(`${baseUrl}/${id}`);
