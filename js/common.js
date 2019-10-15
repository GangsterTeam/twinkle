var elem_reg = document.getElementById("submit_reg");
if(elem_reg != null){
    elem_reg.addEventListener('click', function(event){
    element_terms = document.getElementById("terms");
    if(element_terms.checked != true){
        window.alert("Please check terms and conditions")
    }else{
        password = document.getElementById("password_reg")
        password_conf = document.getElementById("password_reg_conf")
        username = document.getElementById("username_reg").value
        if(password.value != password_conf.value){
            window.alert("Password doesn't match")
        }else if(username.length <= 1 || password.value.length <= 1){
            window.alert("Enter valid username and password")
        }else{
            localStorage.removeItem("username")
            localStorage.removeItem("password")
            localStorage.setItem("username", username)
            localStorage.setItem("password", password.value)
            sessionStorage.setItem("logged_in", username)
            window.location.href = "index.html"
         }
        }
    })
}

var elem_login = document.getElementById("login_btn")
if(elem_login != null){
    elem_login.addEventListener('click', function(event){
    console.log("log in")
    username = document.getElementById('username_login').value
    password = document.getElementById('username_password').value

    user_storage = localStorage.getItem("username")
    pwd_storage = localStorage.getItem("password")

    if(username == user_storage && password == pwd_storage){
        sessionStorage.setItem("logged_in", username)
        window.location.href = "index.html"
    }else{
        window.alert("Invalid username/password")
    }
    })
}