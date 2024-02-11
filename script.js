const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name1 = document.querySelector('#name1').value
    const name2 = document.querySelector('#name2').value
    const name3 = document.querySelector('#name3').value
    const name4 = document.querySelector('#name4').value

    const Users = JSON.parse(localStorage.getItem('users')) || []

    const isUserRegistered1 = Users.find(user => user.name1 === name1 || user.name1 === name2  || user.name1 === name3  || user.name1 === name4)
    const isUserRegistered2 = Users.find(user => user.name2 === name1 || user.name2 === name2  || user.name2 === name3  || user.name2 === name4)
    const isUserRegistered3 = Users.find(user => user.name3 === name1 || user.name3 === name2  || user.name3 === name3  || user.name3 === name4)
    const isUserRegistered4 = Users.find(user => user.name4 === name1 || user.name4 === name2  || user.name4 === name3  || user.name4 === name4)
    if(isUserRegistered1){
        return alert('USUARIO EXISTENTE')
    }   
    else if(isUserRegistered2){
        return alert('USUARIO EXISTENTE')
    }    
    else if(isUserRegistered3){
        return alert('USUARIO EXISTENTE')
    }
    else if(isUserRegistered4){
        return alert('USUARIO EXISTENTE')
    }

var userList = []

Users.push({name1}, {name2}, {name3}, {name4})
localStorage.setItem('users',JSON.stringify(Users))
 // REDIRECCION
 window.location.href = 'size-carton.html'
})

function getUsers(){
    var storedList = localStorage.getItem('users');
    if (storedList == null){
        userList = [];
    } else{
        userList = JSON.parse(storedList);
    }

    return userList;

}



window.onload = function () {
    window.datos = [];
  };

function agregarElemento() {
let dato = document.getElementById("texto").value;
dato.push(dato);

function mostrarArreglo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (const dato of datos) {
    let datoParrafo = document.createElement("p");
    datoParrafo.innerText = dato;

    resultado.appendChild(datoParrafo);
    }
}
}

function sorpresa() {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
function toMainMenu() {
    location.href = "http://127.0.0.1:5500/Microproyecto-1/index.html"
}