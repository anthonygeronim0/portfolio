// function click2() {
//     document.getElementById("ficha").style.display = "none"
//     document.getElementById("estudo").style.display = "block"
//     document.getElementById("imgbutton1").src="imagens/mala black.png"
//     document.getElementById("imgbutton2").src="imagens/diplomado.png"
//     document.getElementById("imgbutton1").style.scale = "1.0"
// }

// function click1() {
//     document.getElementById("estudo").style.display = "none"
//     document.getElementById("ficha").style.display = "block"
//     document.getElementById("imgbutton2").src="imagens/chapeu black.png"
//     document.getElementById("imgbutton1").src="imagens/mala-de-viagem.png"
//     document.getElementById("imgbutton1").style.scale = "1.2"
// }

const buttons = Array.from(document.getElementsByClassName("button"))

buttons.forEach((button) => {
    button.addEventListener("click", focus)
})

function focus(event) {
    const eventImg = event.target
    eventImg.classList.add("focus")

    const especificacao = document.getElementById(eventImg.name)
    
    especificacao.classList.add("focus")

    eventImg.src = changeColor(eventImg.src, "black", "color")

    buttons.forEach((button) => {
        const img = button.querySelector("img")
        const especificacaoImg = document.getElementById(img.name)
        
        if (especificacaoImg != especificacao) {
            img.classList.remove("focus")
            especificacaoImg.classList.remove("focus")
            img.src = changeColor(img.src, "color", "black")
        }
    })
}

function changeColor(imgSrcName, oldColor, newColor) {
    const newimgSrcName = imgSrcName.replace(oldColor, newColor)

    return newimgSrcName
}