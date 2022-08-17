// step-1 add click handler with the submit button---//
document.getElementById('btn-submit').addEventListener('click', function(){
// step-2 get the email address inside the email input field...//

 const emailField = document.getElementById('user-email');
 const email = emailField.value;
//  console.log(email);
//  step-3 get password...//
// 3.a: set id on the html element..//
// 3.b : get the elemrnt....//
// 3.c: get the value from the element..//

const passwordField = document.getElementById('user-pass');
const password = passwordField.value;
// console.log(email,password);

//syep-4  verify email and password to check whether valid user or not...//
if(email === 'prantaroy186@gmail.com' && password === "pranta"){
 window.location.href = 'bank.html';
}
else{
    alert('invalid user')
}
})



 