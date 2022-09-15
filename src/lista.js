let lista = []


function add(number) {
    if(number > 0){
        lista.push(number)
    } else {
        console.log("Hiba")
    }
}

function average(){
    let count = 0
    for(let i = 0; i < lista.length; i++) {
        count += parseInt(lista[i])
    }
    return count / lista.length
}

export {average, add}