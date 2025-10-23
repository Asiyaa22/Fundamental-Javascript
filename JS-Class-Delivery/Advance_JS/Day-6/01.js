// const API_URL = "https://api.github.com/users/Asiyaa22"
const API_URL = "https://official-joke-api.appspot.com/random_joke"


// const para = document.getElementById("para_1");

// fetch(API_URL).then((response) => {
//   if(!response.ok){
//     throw new Error("invalid url")
//   }
//   console.log(response);
//   return response.json();
// }).then((users) => {
//   console.log(users)
// }).catch((err)=> {
//   console.log(err)
// })
const para = document.getElementById("para_1")

async function getJoke(){
  try{
  let response = await fetch(API_URL);
  if(!response.ok){
    throw new Error("Invalid url")
  }
  let joke = await response.json();
  para.innerText = `${joke.setup}`
  console.log(joke);
  }catch(err){
   console.log(err)
  }  
}

getJoke();






















// const getUsers = async ()=>{
//     let user = await fetch(API_URL);
//     let response = await user.json()

//     console.log(user);
//     console.log(response);
//     console.log(response.login)
//     console.log(response.id);
// }
// getUsers();
// fetch(API_URL).then((response) => {
// return response.json();
// }).then((user) => {
//    console.log(user)
// }).catch(err => {
//     console.log(err)
// })