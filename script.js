let links = document.querySelectorAll('a')
function col3(link){
    return function(){
    link.style.color = '#118DA8'}
}
function coloff(link){
    return function (){
        link.style.color = '#FFF'
    }
}
for (let i = 0 ; i<links.length; i++){
    links[i].addEventListener('mouseenter',col3(links[i]))
    links[i].addEventListener('mouseleave',coloff(links[i]))
}









let smallHeading= document.querySelector('h2')
console.log(smallHeading)
function col(){
    smallHeading.style.color='#118DA8'
}
smallHeading.addEventListener('mouseenter',col)
function col1(){
    smallHeading.style.color='#FFF'
}
smallHeading.addEventListener('mouseleave',col1)

