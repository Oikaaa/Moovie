// const { spawn } = require('child_process');

// const pythonProcess = spawn('python3', ['../modifyData.py', 'arg1', 'arg2']);

// pythonProcess.stdout.on('data', (data) => {
//   console.log(`Python Output: ${data}`);
// });

// pythonProcess.stderr.on('data', (data) => {
//   console.error(`Python Error: ${data}`);
// });

// pythonProcess.on('close', (code) => {
//   console.log(`Python process exited with code ${code}`);
// });
//--------

const create = document.getElementById("createBtn")

create.addEventListener('click', function createAccount(){
    const username = document.getElementById("username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const con_password = document.getElementById("confirmPassword")
    let fail = false

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
    }
    if (fail){
      return // Don't create account
    }
})