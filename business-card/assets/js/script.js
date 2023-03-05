const CMD = document.getElementById('buttonColorMode')
const BODY = document.getElementById('body')
CMD.addEventListener("click", change)

function change() {
    alert('Funcionou')

    BODY.style.backgroundColor= "#ffff"
}