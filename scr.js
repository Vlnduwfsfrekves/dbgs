const changeColorButt = document.querySelector('.changeColorButt')
const array = ['green','yellow','red']
let i = 0
changeColorButt.addEventListener('click',()=>{
    changeColorButt.style.background = array[i]
    if(i===2){
        i = 0
    }else{
        i++
    }
})