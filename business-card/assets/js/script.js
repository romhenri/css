const CMD = document.getElementById('buttonColorMode')
const BODY = document.querySelectorAll("body")

CMD.addEventListener("click", change)

function change() {
    alert('Funcionou')

    BODY.style.backgroundColor= "#ffff"
}