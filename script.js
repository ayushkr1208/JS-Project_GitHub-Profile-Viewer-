let user = document.getElementById('userID')

async function fetchApi(userid){
    const response = await fetch(`https://api.github.com/users/${userid}`);
    const result = await response.json()
    displayUser(result)
}

document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById("profile").innerHTML=`<span class="loader-container"><span class="loader"></span></span>`
    let userid=user.value;
    fetchApi(userid)
})


function displayUser(result){
  const {avatar_url, name, bio, public_repos, followers, following, html_url}= result

    if(!avatar_url){
      document.getElementById('profile').innerHTML=` <p class="message">User Not Found!</p>`
      return
    }
    
  document.getElementById('profile').innerHTML=
    `<div class="left-section">
        <img src="${avatar_url}" alt="Profile Picture" class="profile-pic">
        <div class="username">${name}</div>
        <div class="bio">${bio}</div>
      </div>

      <div class="right-section">
        <div class="stats">
          <div class="stat">
            <div>${public_repos}</div>
            <div>Repositories</div>
          </div>
          <div class="stat">
            <div>${followers}</div>
            <div>Followers</div>
          </div>
          <div class="stat">
            <div>${following}</div>
            <div>Following</div>
          </div>
        </div>

        <a href=${html_url} target='_blank'>
          <div class="button-container">
          <button class="profile-button">View Profile</button>
        </div>
        </a>
      </div>`
}


