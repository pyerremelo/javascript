function parImpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

console.log(parImpar(-14))

console.log('----------------------')

function soma(n1=0, n2=0) {
    // Se o n1 ou n2 não for passado, ambos receberão 0
    return n1 + n2
}

console.log(`A soma é ${soma(1,9)}`)

console.log('----------------------')

// Aqui a variável está recebendo uma função
let v = function (x) {
    return x * 2
}

console.log (v(9))

console.log('----------------------')

function fatorial (num) {
    var fat = 1
    // Ou for (var i = 1; i <= num; i++)
    for (var i = num; i > 1; i--) {
        fat = fat * i
    }
    return fat

    // RECURSIVIDADE
    /* if (num == 1 || num == 0) {
        return 1
    } else {
        return num * fatorial (num-1)
    } */
}

console.log(fatorial(5))