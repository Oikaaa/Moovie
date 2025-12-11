const create = document.getElementById("createBtn")

create.addEventListener('click', function createAccount(){
    const username = document.getElementById("username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const con_password = document.getElementById("confirmPassword")
    let fail = false

    async function CheckingEmail(){
        try{
            const res = await fetch('http://localhost:3000/accessDatabase', {method: 'GET',})
            const db = await res.json()

            if (username.value.length < 3 || username.length > 15){
                username.style.border = '1px rgba(255, 0, 0, 1) solid'
                document.getElementById("failUsername").style.display = "block"
                fail = true
            } else {
                username.style.border = '1px rgb(52, 52, 52) solid'
                document.getElementById("failUsername").style.display = "none"
            }

            if (email.value.includes("@gmail.com") == false && email.value.includes("@email.com") == false && email.value.includes("@yahoo.com")  == false){
                email.style.border = '1px rgba(255, 0, 0, 1) solid'
                document.getElementById("failEmail").style.display = "block"
                fail = true
            } else {
                email.style.border = '1px rgb(52, 52, 52) solid'
                document.getElementById("failEmail").style.display = "none"
            }

            let FailPass = false
            if (password.value.length < 6){
                password.style.border = '1px rgba(255, 0, 0, 1) solid'
                document.getElementById("failPass").style.display = "block"
                fail = true
                FailPass = true
            } else {
                password.style.border = '1px rgb(52, 52, 52) solid'
                document.getElementById("failPass").style.display = "none"
            }

            if (password.value != con_password.value || con_password.value == ""){
                password.style.border = '1px rgba(255, 0, 0, 1) solid'
                document.getElementById("failPass").style.display = "none"
                if (FailPass) {
                document.getElementById("failPass").style.display = "block"
                }
                con_password.style.border = '1px rgba(255, 0, 0, 1) solid'
                document.getElementById("failConPass").style.display = "block"
                fail = true
            } else {
                con_password.style.border = '1px rgb(52, 52, 52) solid'
                document.getElementById("failConPass").style.display = "none"
                password.style.border = '1px rgb(52, 52, 52) solid'
                document.getElementById("failPass").style.display = "none"
                if (FailPass) {
                document.getElementById("failPass").style.display = "block"
                password.style.border = '1px rgba(255, 0, 0, 1) solid'
                }
            }

            if (fail){
            return // Don't create account
            }

            // Checking existed email process
            let dualEmail = false
            db.forEach(existed_user => {
                if (existed_user.userEmail.replaceAll(' ','') == email.value.replaceAll(' ','')){
                    alert("Email existed")
                    dualEmail = true 
                }
            });
            if (dualEmail){
                return // Stop the process
            }
            // Proceed to create account
            const data = {
                username: username.value,
                email: email.value.replaceAll(' ',''),
                password: password.value.replaceAll(' ',''),
                avatar: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
                watchList: '',
            };

            fetch('http://localhost:3000/createAccount', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(response => response)
            .then(result => {
                console.log(result.status)
                alert("Account Created")
            })
            .catch(err => console.log(err))
        }catch (err){
            alert(err)
        }
    } 
    CheckingEmail()
})