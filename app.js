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

var get;
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
        // console.log(ge);
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

    console.log(para);
    let poka = JSON.parse(localStorage.getItem("userData"))
    console.log(  typeof poka);
    // console.log(  typeof poka);
    console.log(poka.signUpEmail);
    console.log(poka.signUpPassword);
    // if(loginEmail.value == JSON.parse(localStorage.getItem('userData')).signUpEmail && loginPassword.value == JSON.parse(localStorage.getItem('userData')).signUpPassword ){
    //     console.log(loginEmail.value,loginPassword.value);
    if(loginEmail.value == poka.signUpEmail && loginPassword.value == poka.signUpPassword ){
        // console.log(loginEmail.value,loginPassword.value);

        window.open()
    }
    else{
        alert("password or email is wrong")
    }
   
}

// localStorage.setItem('userEmail', "malikmurfad@gmail.com")

