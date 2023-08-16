document.getElementById('btn-submit').addEventListener('click',function(){
   const userEmail = document.getElementById('user-email');
   const email = userEmail.value;
   const userPassword = document.getElementById('user-password');
   const password = userPassword.value;
//    console.log(userEmail,userPassword);
//    danger

    if(email === "sontan@baap.com" && password ==='freemony'){
        console.log("Valid user")
        location.href ='main.html'
    }
    else{
        alert('You are not my soon !!')
    }
   userEmail.value =""
    userPassword.value =''
})