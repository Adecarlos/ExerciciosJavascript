    let txthora = window.document.getElementById("txthora")
    let txtdias = window.document.getElementById("txtdias")
    let txtsal = window.document.getElementById("txtsal")
    let res = window.document.getElementById("res")

function calcular(){
    let valorHora = txtsal.value/((txthora.value*txtdias.value)*4)
    res.innerHTML = `<p> O valor da sua hora de trabalho é R$${valorHora}`
    
}