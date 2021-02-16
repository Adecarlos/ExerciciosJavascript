var vetor = []
var res = window.document.getElementById("res")

var restotal = window.document.getElementById("total")
var resmaior = window.document.getElementById("maior")
var resmenor = window.document.getElementById("menor")
var ressoma = window.document.getElementById("soma")
var resmedia = window.document.getElementById("media")

function adicionar (){
    var txtnum = window.document.getElementById("txtnum")
    var num = Number(txtnum.value)
    var tab = window.document.getElementById("lista")

    if (vetor.indexOf(num) != -1){
        alert("Número já adicionada na lista")
    } else if(num < 0 || num > 100){
        alert("Número inválido")
    } else if(num == 0){
        alert("Preencha a caixa de texto")
    } else{
    vetor.push(num)
    console.log(vetor)
    let item = document.createElement('option')
    item.text = `Valor ${num} adicionado nessa porra`
    tab.appendChild(item)
    limpar()
    }

    txtnum.value = ``
    txtnum.focus()
}

function total(){
    return vetor.length
}

function maiorValor(){
    vetor.sort(function(a, b){return a-b})
    return vetor[(vetor.length)-1]
}

function menorValor(){
    vetor.sort(function(a, b){return a-b})
    return vetor[0]
}

function somar(){
    var s = 0
    for(let pos in vetor){
        s += vetor[pos]
    }
    return s
}

function media(){
    return (somar() / vetor.length)
}

function limpar(){
    restotal.innerHTML = ``
    resmaior.innerHTML = ``
    resmenor.innerHTML = ``
    ressoma.innerHTML = ``
    resmedia.innerHTML = ``
}

function finalizar(){
    if (vetor.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
    restotal.innerHTML = `Ao todo, temos ${total()} números cadastrados.`
    resmaior.innerHTML = `O maior valor informado foi ${maiorValor()}.`
    resmenor.innerHTML = `O menor valor informado foi ${menorValor()}.`
    ressoma.innerHTML = `Somando todos os valores, temos ${somar()}.`
    resmedia.innerHTML = `A média dos valores digitados é ${media()}.`
    }
}

