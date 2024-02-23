function validate(){
    let message;
    if(document.formTwo.userPass.value.length > 5){
        message = 'good'
        document.getElementById('message').style.color = "green"
    }else{
        message ='poor'
        document.getElementById('message').style.color ='red'
    }
    document.getElementById('message').innerText = message
}

function check(){
    let passWord = document.getElementById('pass');
    if(passWord.type === 'password'){
        passWord.type = 'text';
    }else{
        passWord.type = 'password';
    }

}


function formValidtae(){
    let firstName = document.getElementById('Firstname').value;
    let passWord = document.getElementById('pass');
    if(firstName === null || firstName.length < 5){
        alert(' first name is null')
    }
}
