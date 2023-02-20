let fullHeigth = document.body.scrollHeight;
let innerHeigth = window.innerHeight;
const progressbar = document.querySelector('.progressbar>.progressbar-line')
console.log(fullHeigth)

window.addEventListener('scroll', fillProgreesLine)
window.addEventListener('resize', fillProgreesLine)


function fillProgreesLine() {
    fullHeigth = document.body.scrollHeight;
    innerHeigth = window.innerHeight;
    progressbar.style.width = (pageYOffset * 100 / (fullHeigth - innerHeigth)
    ) + '%'
}

