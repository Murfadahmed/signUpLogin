let firstName = document.querySelector('.Fname')

let lastName = document.querySelector('.Lname')

let password = document.querySelector('.password')

let email = document.querySelector('.email')

let signUpBtn = document.querySelector('.signUp')

let gender = document.querySelectorAll('.gender')

let signIn = document.querySelector('.signIn')

let loginEmail = document.querySelector('.loginEmail')

let loginPassword = document.querySelector('.loginPassword')

let loginBtn = document.querySelector('.loginBtn')

let get = 1;


// console.log(loginPassword);
// console.log(loginBtn);



// let user = JSON.parse(localStorage.getItem('userData')) || []
// console.log(user);


function signUp() {
    
    var userData = {
        name: `${firstName.value} ${lastName.value}`,
        signUpEmail: email.value,
        signUpPassword: password.value,
    }
    if(userData.name && userData.signUpEmail && userData.signUpPassword){

        
        localStorage.setItem('userData', JSON.stringify(userData));
        // console.log(get);
         get = JSON.parse(localStorage.getItem('userData'))
         
         console.log(get);
       
        
        firstName.value = ''
        lastName.value = ''
        email.value = ''
        password.value = '';

        
            window.location.href = 'login.html'
        
    }
    else{
        alert("field to fill up krley bhai;")
    }
}

function login(para){

    console.log(get);
    console.log(para);
    let userSignupData = JSON.parse(localStorage.getItem("userData"))
    
    console.log(userSignupData.signUpEmail);
    console.log(userSignupData.signUpPassword);
    // if(loginEmail.value == JSON.parse(localStorage.getItem('userData')).signUpEmail && loginPassword.value == JSON.parse(localStorage.getItem('userData')).signUpPassword ){
    //     console.log(loginEmail.value,loginPassword.value);
    if(loginEmail.value == userSignupData.signUpEmail && loginPassword.value == userSignupData.signUpPassword ){
        // console.log(loginEmail.value,loginPassword.value);

        window.open()
    }
    else{
        alert("password or email is wrong")
    }
   
}

// localStorage.setItem('userEmail', "malikmurfad@gmail.com")

