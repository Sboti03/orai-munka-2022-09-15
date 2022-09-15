import {add, average} from './lista.js'

function numberAdd() {
    add(document.getElementById('szam_mezo').value)
    document.getElementById('kimenet').innerHTML = average()
}

document.getElementById('enter').addEventListener('click', numberAdd)