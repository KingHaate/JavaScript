var agora = new Date()
var diaSem = agora.getDay()
//console.log(diaSem)
/*if (diaSem == 0){
  console.log('Domingo')
}else if (diaSem == 1){
  console.log('Segunda')
}else if (diaSem == 2){
  console.log('Terça-Feira')
}else if (diaSem == 3){
  console.log('QUarta-Feira')
}else if (diaSem == 4){
  console.log('Quinta-Feira')
}*/
switch(diaSem){
  case 0:
      console.log('Domingo')
    break
  case 1:
      console.log('Segunda-Feira')
    break
  case 2:
      console.log('Terça-Feira')
    break
  case 3:
    console.log('Quarta-Feira')
    break
  case 4:
    console.log('Quinta-Feira')
    break
  case 5:
    console.log('Sexta-Feira')
    break
  case 6:
    console.log('Sábado')
    break
  default:
    console.log('[ERRO] Dia da semana inválido')
    break
}

