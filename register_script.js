let errorMessage = document.getElementById('error-message');

function validate(){
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let birthDate = document.getElementById('input-date').value;
    let password = document.getElementById('input-password').value;
    let confirmPassword = document.getElementsByName('input-conf-password');
    let agreement = document.getElementById('input-agreement');

    if (validateName(name) == false){
        return;
    }else
    if(validateEmail(email) == false){
        return;
    }else
    if(validateDate(birthDate) == false){
        return;
    }else
    if(validatePassword(password) == false){
        return;
    }else
    if(validateAgreement(agreement) == false){
        return;
    }
}

// validasi nama min 5 char
function validateName(name){
    if(name.length < 5){
        errorMessage.innerHTML = "Please use 5 character or more!";
        return false;
    }
    return true;
}
// validasi type harus select
function validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
        errorMessage.innerHTML = "Please input the correct email!";
        return false;
    
    return true;
}
// validasi insurance harus diisi
function validateDate(birthDate){
    let selecteddate = "";
    for(let i = 0; i < date.length; i++){
        if(date[i].checked){
            selecteddate = date[i].value;
        }
    }
    if(selecteddate == ""){
        errorMessage.innerHTML = "Please input your bithday date!";
        return false;
    }
    return true;
}
function validatePassword(){
    if(password!=confirmPassword){
        errorMessage.innerHTML = "Your Password is false";
        return false;
    }
    else
        return true;
    }
// validasi type harus select
function validateAgreement(agreement){
    if(agreement.checked == false){
        errorMessage.innerHTML = "Please agree the terms and condition!";
        return false;
    }
    return true;
}
// validasi yang gak dinilai kalau:
// 1. regex
// 