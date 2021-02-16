function contar(){
    var txtinicio = window.document.getElementById("txtinicio")
    var inicio = Number(txtinicio.value)
    var txtfim = window.document.getElementById("txtfim")
    var fim = Number(txtfim.value)
    var txtpasso = window.document.getElementById("txtpasso")
    var passo = Number(txtpasso.value)
    var res = window.document.getElementById("contando")
    var s = ""

 //   console.log(txtinicio)
 //     console.log(txtinicio<0)

  if(document.getElementById("txtinicio").value.length == 0 || document.getElementById("txtfim").value.length == 0 || document.getElementById("txtpasso").value.length == 0)
{
    res.innerHTML = `Impossível contar!`

  } else if(txtpasso.value <= 0 && inicio < fim){
    for(inicio; inicio<=fim; inicio++){
      s+=inicio+" 🍔"
  }
  window.alert("Você digitou passo '0', iremos considerar como passo '1'")
  res.innerHTML = `Contando:<br>${s}🏁`

  } else if(txtpasso.value <= 0 && inicio > fim){
    for(inicio; inicio>=fim; inicio--){
      s+=inicio+" 🍔"
  }
  window.alert("Você digitou passo '0', iremos considerar como passo '1'")
  res.innerHTML = `Contando:<br>${s}🏁`

  } else if (inicio > fim) {
    for(inicio; inicio>=fim; inicio-=passo){
      s+=inicio+" 🍔"
  }
  res.innerHTML = `Contando:<br>${s}🏁`
  }

  else{
    for(inicio; inicio<=fim; inicio+=passo){
        s+=inicio+" 🍔"
    }
    res.innerHTML = `Contando:<br>${s}🏁`
}
}