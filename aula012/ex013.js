var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getSeconds()
var segundos = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas, ${minutos} minutos e ${segundos} segundos.`)
if (hora <= 5){
  console.log('Boa Madrugada!')
} else if (hora < 12){
  console.log('Bom Dia!')
 } else if (hora < 18) {
  console.log('Boa Tarde!')
 } else if (hora < 24) {
  console.log('Boa noite!')
} 

