import axios from 'axios';
const API_url = "https://api.github.com/users"

const data = axios.get(API_url);

console.log(data);




