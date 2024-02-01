let i //contador
let num = [5,'aaa', 7, 'c', 6, 'bb']
num[5] = 9
num.push(8)
num.sort()

console.log('--------')
console.log('Método 1')
console.log('--------')

for (i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('')

console.log('--------')
console.log('Método 2')
console.log('--------')

// Se lê: "Para cada posição em num (variável composta)"
for (i in num) {
    // essa função só funciona para arrays e objetos
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log("")

console.log('Está na posição ' + num.indexOf('aaa'))
console.log('Está na posição ' + num.indexOf('aa'))
// OBS - Lembre-se que o array está organizado de forma crescente