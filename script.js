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