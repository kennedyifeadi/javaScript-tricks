let tap = true
let tap1 = true
let tap2 = true
function drop(){
    if(tap){
        document.getElementById('text').style.display = 'block'
        tap = false
    }else{
        document.getElementById('text').style.display = 'none'
        tap = true
    }
}
function drop1(){
    if(tap1){
        document.getElementById('text1').style.display = 'block'
        tap1 = false
    }else{
        document.getElementById('text1').style.display = 'none'
        tap1 = true
    }
}
function drop2(){
    if(tap2){
        document.getElementById('text2').style.display = 'block'
        tap2 = false
    }else{
        document.getElementById('text2').style.display = 'none'
        tap2 = true
    }
}