import axios from "axios";


const API_URL = "https://api.github.com/users/Asiyaa22"
const getUsers = async () => {
    let data = await axios.get(API_URL);
    // console.log(data)
    console.log(data.data.login);
    console.log(data.data.name);
    console.log(data.data.followers);
}

getUsers();