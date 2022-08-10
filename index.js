//add an eventListener to the from
const form = document.querySelector('#Form'); // select form
const firstNameInput = document.querySelector('#firstNameInput'); // select input box from form
const lastNameInput = document.querySelector('#lastNameInput'); // select input box from form
const passInput = document.querySelector('#passInput'); // select input box from form
const passMatchInput = document.querySelector('#passMatchInput'); // select input box from form
const emailsInput = document.querySelector('#emailsInput'); // select input box from form
const ageInput = document.querySelector('#ageInput'); // select input box from form
const phoneInput = document.querySelector('#phoneInput'); // select input box from form

const fN = document.getElementById('fName');
const lN = document.getElementById('lName');
const psw = document.getElementById('pass');
const mPass = document.getElementById('mPass');
const eml = document.getElementById('email');
const ag = document.getElementById('age');
const phn = document.getElementById('phone');

let flagPsw=false;
let flagEmail=false;
let flagAge=false;
let flagPhone=false;



//is password valid
const passwordValid = function (pass) {
    var lowerCaseLetters = /[a-z]/g;
    if (!passInput.value.match(lowerCaseLetters)) {
        return false;
    }

    var upperCaseLetters = /[A-Z]/g;
    if (!passInput.value.match(upperCaseLetters)) {
        return false;
    }

    var numbers = /[0-9]/g;
    if (!passInput.value.match(numbers)) {
        return false;
    }

    if (!passInput.value.length >= 8) {
        return false;
    }
    return true;
}


//pass match fn
const passwordMatch = function (pass, passMatch) {
    return pass == passMatch;
}


//age validation fn
const ageValidation = function (age) {
    return age >= 18 && age <= 151 ? true : false;
}



//contact validation fn
const contactValidation = function (phone) {
    if (isNaN(phone)) {
        return false;
    } else {
        if (phone.length == 11) {
            return true;
        } else {
            return false;
        }
    }
}


//email validation fn
const emailsValidation = function (myEmailsArray) {
    for (let i = 0; i < myEmailsArray.length; i++) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!myEmailsArray[i].match(mailformat)) {
            return false;
        }
    }
    return true;
}


//form event listener 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const fName = firstNameInput.value;
    const lName = lastNameInput.value;
    const pass = passInput.value;
    const passMatch = passMatchInput.value;
    const emails = emailsInput.value;
    const age = ageInput.value;
    const phone = phoneInput.value;
    const myEmailsArray = emails.split(',');

    if (!emailsValidation(myEmailsArray)) {
        eml.innerHTML="* Invalid Email";
        flagEmail=false;
    }
    else{
        eml.innerHTML="Notifications Emails";
        flagEmail=true;
    }


    if (!contactValidation(phone)) {
        phn.innerHTML="* Phone Number Should be 11 digits";
        flagPhone=false;
    }
    else{
        phn.innerHTML="Phone";
        flagPhone=true;
    }



    if (!ageValidation(age)) {
        ag.innerHTML="* Age should be between 18 and 151";
        flagAge=false;
    }else{
        ag.innerHTML="Age";
        flagAge=true;
    }



    if (passwordMatch(pass, passMatch)) {
        if (!passwordValid(pass)) {
            psw.innerHTML="* Password is weak";
            mPass.innerHTML="* Password is weak";
            flagPsw=false;
        }else{
            psw.innerHTML="Password";
            mPass.innerHTML="Re-Enter Password";
            flagPsw=true;
        }
    } else {
        psw.innerHTML="* Password Mismatch";
        mPass.innerHTML="* Password Mismatch";
        flagAge=false;
    }


    
    if(flagAge&&flagEmail&&flagPhone&&flagPsw){
        this.submit();
    }






});



