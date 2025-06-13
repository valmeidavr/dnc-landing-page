var setadireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita(){
    Leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex; margin-top:55px"
    setaesquerda.style = "display:none"
}

