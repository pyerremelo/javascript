var num = document.getElementById('inum')
var select = document.querySelector('select#result')
var res = document.querySelector('div#res')
var numeros = []

function estaContido (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function verficaNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return false
    } else {
        return true
    }
}

function adicionarDados() {
    if (num.value.length == 0) {
        alert('Por favor insira um número.')
        
    } else if (verficaNumero(num.value)) {
        alert('Por favor, insira um número de 1 a 100')
        
    } else if (estaContido(num.value, numeros)) {
        alert ('Esse número já foi inserido anteriormente')
    } else {
        
        numeros.push(Number(num.value))
        
        var item = document.createElement('option')
        item.text = `Adicionado o nº ${num.value}`
        select.appendChild(item)
        res.innerHTML = ''

    }
    num.value = ''
    num.focus()
}

function apresentarDados() {
    
    if (numeros.length == 0) {
        alert('Adicione números antes de finalizar')
    } else {
        
        var tt = numeros.length        
        
        numeros = numeros.sort()
        var menor = numeros[0]
        var maior = numeros[tt-1]
        var soma = 0
        
        for (var i in numeros) {
            soma += numeros[i]
        }

        var media = soma/tt
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tt} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é: ${maior}.</p>`
        res.innerHTML += `<p>O menor número é: ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números digitados são: ${soma}.</p>`
        res.innerHTML += `<p>A média dos números digitados é: ${media}.</p>`
    }
}
