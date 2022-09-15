import {add, average} from './lista.js'

function numberAdd() {
    add(document.getElementById('szam_mezo').value)
    alert(average())
}

document.getElementById('enter').addEventListener('click', numberAdd)