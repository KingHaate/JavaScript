function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  //var hora = 20
  var hora = data.getHours()
  if (hora>=0 && hora < 12){
    msg.innerHTML = `Bom Dia!<br>`
    img.src ='manha.png'
    document.body.style.background = '#e2cd9f'
  }else if (hora >= 12 && hora < 18){
    msg.innerHTML = `Boa Tarde!<br>`
    // BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background = 'orange'
  } else if ( hora >= 18 && hora < 24){
    msg.innerHTML = `Boa Noite!<br>`
    // BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background = 'black'
  }
  msg.innerHTML += `Agora são ${hora} horas`


}