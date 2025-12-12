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
            <li class="naviLi search"><i class="fa fa-search" aria-hidden="true"></i></li>
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
    }
    GetUserData()
}
