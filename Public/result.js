// Logged In user fetching data, interface,...
const userId = sessionStorage.getItem("userId")
const otherNaviUl = document.getElementById('otherNaviUl')
const signInBtn = document.getElementById('signInBtn')
if (userId){
    async function GetUserData() {
        const res = await fetch('http://localhost:3000/userData', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({message: userId})
        })
        const user = await res.json() 
        otherNaviUl.innerHTML = `
            <li class="naviLi search"  id="searchBtn"><i class="fa fa-search" id="searchBtnIcon" aria-hidden="true"></i></li>
            <li class="naviLi notification"><i class="fa fa-bell" aria-hidden="true"></i></li>
            <li class="naviLi user"><img id="userAvatar" class="avatar" src="${user.userImg}"></li>
        `
        const userDetail = document.getElementById('userDetail')
        userDetail.innerHTML = `
            <p class="userGreet", id="userGreet">Welcome back, ${user.userName}</p>
            <ul class="userDetailIUl">
                <li class="userDetailLi" id="preference">Preferences</li>
                <li class="userDetailLi" id="LogOut">Log Out</li>
            </ul>
        `

        const userAvatar = document.getElementById("userAvatar")
        const LogOut = document.getElementById("LogOut")
        const preference = document.getElementById("preference")
        userAvatar.addEventListener('mouseover', function(){
            userDetail.style.display = 'block'
        })
        document.addEventListener('click', function(event){
            userDetail.style.display = 'none'
        })

        LogOut.addEventListener('click', function(){
            // Remove userIdstorage, reload window
            sessionStorage.removeItem('userId')
            window.location.reload()
        })

        preference.addEventListener('click', function(){
            window.location.href = ''
        })


        // If user exist
        const search = document.getElementById('searchingDiv')
        const searchBtn = document.getElementById('searchBtn')
        const searchBtnicon = document.getElementById('searchBtnIcon')
        const searchEngine = document.getElementById('search')
        let searchOn = false

        searchBtn.addEventListener('click', function(){
            if (searchOn){//Off
                console.log(1)
                searchOn = false
                search.style.display = "none"
                searchEngine.value = ''
                sessionStorage.setItem('find', '') // reset data
            }else{//On
                console.log(1)
                searchOn = true
                search.style.display = "block"
                sessionStorage.setItem('find', '') // reset data
            }
        })

        searchEngine.addEventListener('keydown', function(key){
            if (key.key == "Enter"){
                sessionStorage.setItem('find', searchEngine.value)
                window.location.href = "./result.html"
            }
        })
    }
    GetUserData()
}

const keyValue = sessionStorage.getItem('find')
const header = document.getElementById('movieHeader')
header.innerText = `Search result for "${keyValue}"`

async function searchResult(key) {
    const response = await fetch('./Data/moviesDatabase.json')
    const result = await response.json()

    const movies_list = result.filter(movie => movie.movieName.toLowerCase().includes(key.toLowerCase()))
    const container = document.getElementById('display')
    container.innerHTML = ''

    if (movies_list.length == 0){
        const message = document.createElement('div')
        message.style.position = 'fixed'
        message.style.top = "0px"
        message.style.width = '100%'
        message.style.height = '100vh'
        message.style.display = 'flex'
        message.style.justifyContent = 'center'
        message.style.alignItems = 'center'
        message.innerHTML = `
            <h1 style="color: white; width: 100%; text-align:center; font-weight: 300">We can't find any result for "${key}"</h1>
        `
        document.body.appendChild(message)
        return
    }
    movies_list.forEach(movie => {
        const current_movie = document.createElement("div")
        current_movie.classList.add("movie")
        current_movie.classList.add("tagMovie")
        current_movie.setAttribute('id', movie.movieId)
        current_movie.innerHTML = `
            <img src="${movie.moviePoster}" class="moviePoster" alt="Movie Poster">
        `
        container.appendChild(current_movie)
    });
}

searchResult(keyValue)

// Searching
const search = document.getElementById('searchingDiv')
const searchBtn = document.getElementById('searchBtn')
const searchBtnicon = document.getElementById('searchBtnIcon')
const searchEngine = document.getElementById('search')
let searchOn = false

searchBtn.addEventListener('click', function(){
    if (searchOn){//Off
        searchOn = false
        search.style.display = "none"
        searchEngine.value = ''
        sessionStorage.setItem('find', '') // reset data
    }else{//On
        searchOn = true
        search.style.display = "block"
        sessionStorage.setItem('find', '') // reset data
    }
})

searchEngine.addEventListener('keydown', function(key){
    if (key.key == "Enter"){
        sessionStorage.setItem('find', searchEngine.value)
        window.location.href = "./result.html"
    }
})