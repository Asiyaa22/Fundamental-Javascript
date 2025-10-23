import axios from "axios";

const API_URL = "https://api.github.com/users/Asiyaa22";

// axios.get(API_URL);


async function getUsers(){
    let response = await axios.get(API_URL);
    console.log(response);
}

getUsers();


