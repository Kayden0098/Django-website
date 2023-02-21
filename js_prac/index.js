console.log(
    'Its works'
)
function dosomething(){
    alert('I am Atomic')
}
animate_button = () => {
    console.log('I am animated button')
}
changeMessage = (e) => {
e.target.innerText = 'button clicked'
}


let btnul = document.querySelector('#btn-uplink')
let allLinks = document.querySelectorAll('a')
btnul.addEventListener('click', (e) => {
    allLinks.forEach((link, idx)=>{
        link.textContent = `Link ${idx +1}`
    })
})