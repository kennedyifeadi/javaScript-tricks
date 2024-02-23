const contain = document.querySelector(".contain");
const firstCardWidth = contain.querySelector(".cards").offsetWidth;
const containChilderns = [...contain.children];

let isDragging = false, startX, startScrollLeft;

let cardPerView = Math.round(contain.offsetWidth / firstCardWidth)

containChilderns.slice(-cardPerView).reverse().forEach(card => {
    contain.insertAdjacentHTML("afterbegin", card.outerHTML)
}) 

containChilderns.slice(0, cardPerView).forEach(card => {
    contain.insertAdjacentHTML("beforeend", card.outerHTML)
}) 


const dragStart = (e) =>{
    isDragging = true;
    contain.classList.add('disable');
    startX = e.pageX;
    startScrollLeft = contain.scrollLeft;
}

const dragging = (e) =>{
    if(!isDragging) return;
    contain.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    contain.classList.remove("disable");
}

const infiniteScorll = () => {
    if(contain.scrollLeft === 0){
        contain.scrollLeft = contain.scrollWidth - (2 * contain.offsetWidth);
    }else if((contain.scrollLeft) === contain.scrollWidth - contain.offsetWidth){
        contain.scrollLeft = contain.offsetWidth
    }
}

contain.addEventListener('mousedown', dragStart )
contain.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop)
contain.addEventListener('scroll', infiniteScorll)
