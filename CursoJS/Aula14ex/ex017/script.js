function gerar(){
    var txtnum = window.document.getElementById("txtnum")
    var num = Number(txtnum.value)
    var lista = window.document.getElementById("from")

    if (num<-10 || num>10 || txtnum.value.length == 0 ){
        alert("Número inválido!")
    } else{
        window.document.getElementById("tab1").text = `${num} x 1 = ` + (num*1)
        window.document.getElementById("tab2").text = `${num} x 2 = ` + (num*2)
        window.document.getElementById("tab3").text = `${num} x 3 = ` + (num*3)
        window.document.getElementById("tab4").text = `${num} x 4 = ` + (num*4)
        window.document.getElementById("tab5").text = `${num} x 5 = ` + (num*5)
        window.document.getElementById("tab6").text = `${num} x 6 = ` + (num*6)
        window.document.getElementById("tab7").text = `${num} x 7 = ` + (num*7)
        window.document.getElementById("tab8").text = `${num} x 8 = ` + (num*8)
        window.document.getElementById("tab9").text = `${num} x 9 = ` + (num*9)
        window.document.getElementById("tab10").text = `${num} x 10 = ` + (num*10)
    }
}