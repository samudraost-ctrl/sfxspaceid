import {

auth

}

from "./firebase.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

sendEmailVerification

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const registerBtn =
document.getElementById(
"registerBtn"
);

if(registerBtn){

registerBtn.addEventListener(
"click",
async()=>{

const email =
document.getElementById(
"registerEmail"
).value;

const password =
document.getElementById(
"registerPassword"
).value;

try{

const userCredential =
await createUserWithEmailAndPassword(

auth,
email,
password

);

await sendEmailVerification(

userCredential.user

);

alert(
"Verification email sent"
);

window.location =
"login.html";

}catch(error){

alert(error.message);

}

});
}

const loginBtn =
document.getElementById(
"loginBtn"
);

if(loginBtn){

loginBtn.addEventListener(
"click",
async()=>{

const email =
document.getElementById(
"loginEmail"
).value;

const password =
document.getElementById(
"loginPassword"
).value;

try{

const userCredential =
await signInWithEmailAndPassword(

auth,
email,
password

);

if(
!userCredential.user.emailVerified
){

alert(
"Please verify your email first"
);

return;

}

window.location =
"index.html";

}catch(error){

alert(error.message);

}

});
}
