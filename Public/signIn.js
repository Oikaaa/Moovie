const signInBtn = document.getElementById('signInBtn')

signInBtn.addEventListener('click', async function(){
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    
    const res = await fetch('http://localhost:3000/accessDatabase', {method: 'GET',})
    const db = await res.json()

    db.forEach(user_data => {
        if (user_data.userEmail == email.value.replaceAll(' ','') && user_data.userPassword == password.value.replaceAll(' ','')){
            // Login success
            sessionStorage.setItem("userId", user_data.userId)
            window.location.href = './index.html'
            success = true
            return 
        }
    });
    // Login failed
    const loginCredentialAlert = document.getElementById('failCredential')
    loginCredentialAlert.style.display = 'block'
    email.style.border = '1px rgba(255, 0, 0, 1) solid'
    password.style.border = '1px rgba(255, 0, 0, 1) solid'
})