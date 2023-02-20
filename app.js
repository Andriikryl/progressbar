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






document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault()
    if(localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme')
    } else {
        localStorage.setItem('theme', 'dark')
    }
    addDarckToHtml()
})

function addDarckToHtml() {
        try{
            if(localStorage.getItem('theme') === 'dark'){
                document.querySelector('html').classList.add('dark')
            }else {
                document.querySelector('html').classList.remove('dark')
            }

        } catch(err) {}
}

addDarckToHtml()











