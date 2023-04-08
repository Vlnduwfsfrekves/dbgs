const form = document.getElementById('form')

const passwordInPr = prompt('Пароль який')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value
    if(password === passwordInPr){
      alert(`Дякую за ввод ${username}`)
    }else{
      alert('Ти не той за кого себе видаєш...')
    }
})
