var num = [5, 8, 2, 9, 3]
num.sort()
//num[5] = 6 - acrescentar um número em um espaço escolhido
//num.push(7) -  acrescentar um número
//num.sort() - para colocar em ordem os números
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(4)
if (pos == -1){
  console.log('O valor não foi encontrado!')
}else {
  console.log(`O valor está na posição ${pos}`)
}
// console.log(`o valor 8 está na posição ${pos}`)