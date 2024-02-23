const exit = document.querySelectorAll('.exit')
const popUp= document.querySelector('.popUp')
exit.forEach(each =>{
    each.addEventListener('click', (e)=>{
        popUp.classList.toggle('animation')
    })
})