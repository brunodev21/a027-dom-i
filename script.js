let frutas = ["laranja", "limão", "uva"];

    let laranja = document.getElementById("fruta-1")
    laranja.innerHTML += frutas[0]

    let limao = document.getElementById("fruta-2")
    limao.innerHTML += frutas[1]

    let uva = document.getElementById("fruta-3")
    uva.innerHTML += frutas[2]

let inpuFruta = () => {
    let fruta = document.getElementById("fruta")
    console.log(fruta.value += "")
}

let adicionarFruta = () => {
    let fruta = document.getElementById("fruta-4")
    let novaFruta = document.getElementById("fruta")
    let adicionarNovaFruta = fruta.innerHTML += novaFruta.value 
    adicionarNovaFruta.value = ""
}