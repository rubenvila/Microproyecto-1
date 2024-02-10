const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name1 = document.querySelector('#name1').value
    const name2 = document.querySelector('#name2').value
    const name3 = document.querySelector('#name3').value
    const name4 = document.querySelector('#name4').value

    const Users = JSON.parse(localStorage.getItem('users')) || []

    const isUserRegistered1 = Users.find(user => user.name1 === name1 || user.name1 === name2  || user.name === name3  || user.name1 === name4)
    if(isUserRegistered1){
        return alert('USUARIO EXISTENTE')
    }  // ASI CON TODOS, QUE LADILLA

    /*
    const isUserRegistered2 = Users.find(user => user.name2)
    if(isUserRegistered2){
        return null
    }
    const isUserRegistered3 = Users.find(user => user.name3)
    if(isUserRegistered3){
        return null
    }
    const isUserRegistered4 = Users.find(user => user.name4)
    if(isUserRegistered4){
        return alert('NO')
    } */

Users.push({name1, name2, name3, name4})
localStorage.setItem('users',JSON.stringify(Users))

})