// Replace 'octocat' with any GitHub username
const username = "octocat";

fetch(`https://api.github.com/users/${username}`)
  .then(response => {
      return response.json(); // parse JSON body
    })
  .then(user => {
    console.log("GitHub User Details:");
    console.log("Login:", user.login);
    console.log("Name:", user.name);
    console.log("Bio:", user.bio);
    console.log("Public Repos:", user.public_repos);
    console.log("Followers:", user.followers);
    console.log("Following:", user.following);
    console.log("Profile URL:", user.html_url);
    console.log("Avatar:", user.avatar_url);
  })
  .catch(error => {
    console.error("Error fetching user:", error.message);
  });


















async function getGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    
    const user = await response.json();
    
    console.log("GitHub User Details:");
    console.log("Login:", user.login);
    console.log("Name:", user.name);
    console.log("Bio:", user.bio);
    console.log("Public Repos:", user.public_repos);
    console.log("Followers:", user.followers);
    console.log("Following:", user.following);
    console.log("Profile URL:", user.html_url);
    console.log("Avatar:", user.avatar_url);

  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
}

// call function
getGitHubUser("torvalds"); // try with 'octocat' or your GitHub username










    // if (!response.ok) {
    //   throw new Error(`User not found! Status: ${response.status}`);
    // }
    // if (!response.ok) {
    //   throw new Error(`User not found! Status: ${response.status}`);
    // }