let btnEye = document.querySelector("#button-eye")
let sendForm = document.querySelector('#send_form')
let openEye = document.querySelector('#open-eye')
let closeEye= document.querySelector('#close-eye')
let passwordUser= document.querySelector('#password-user')

btnEye.addEventListener("click", notSendForm)
btnEye.addEventListener("click", changeIcon)
btnEye.addEventListener("click", showPassword)

function notSendForm(event) {
    event.preventDefault()
}



function changeIcon() {
    openEye.classList.toggle('delete_eyes')
    closeEye.classList.toggle('delete_eyes')

}



function showPassword() {
    if (passwordUser.getAttribute('type')== 'password') {
        passwordUser.setAttribute('type', 'text') 
    }else{
        passwordUser.setAttribute('type', 'password') 
    }
}

