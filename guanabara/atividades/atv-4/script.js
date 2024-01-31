function calcular() {
    var num = document.querySelector('input#num')
    num = num.value

    var limite = document.querySelector('input#limite')
    limite = limite.value

    var inicio = document.querySelector('input#inicio')
    inicio = inicio.value

    var res = document.querySelector('select#res')

    if (num == '' || limite == '' || inicio == '') {
        // Caso algum dos inputs estiverem vazios, aparecerá uma mensagem de erro

        alert('Valor não preenchido. Verifique e tente novamente.')
        res.innerHTML = '' // Limpa a tela
        res.setAttribute('size', 0)

    } else if (inicio > 0 && limite > 0 && inicio > limite || inicio < 0 && limite < 0 && inicio < limite) {
        // Caso apareça uma possibilidade impossível, como a descrita acima, aparecerá uma mensagem de erro

        alert('O número inicial da tabuada não pode ser maior que o limite. O inverso é possível. Por favor mude os valores.')
        res.innerHTML = '' // Limpa a tela
        res.setAttribute('size', 0)

    } else {
        // Se as condições forem atendidas, aparecerá a tabuada na tag SELECT

        let i = 1 // Contador para 'valor1', 'valor2', ... (importante para o PHP)
        res.innerHTML = '' // Limpa a tela
        num = Number(num)
        inicio = Number(inicio)
        limite = Number(limite)

        for (inicio; inicio <= limite; inicio++) {
            // Aqui é onde é realizada a conta e armazenado o valor na variável "item" que é uma tag "OPTION"
            var item = document.createElement('option')
            item.text = `${num} x ${inicio} = ${num * inicio}`
            item.value = `valor${i}` // Contador para 'valor1', 'valor2', ... (importante para o PHP)
            res.appendChild(item)
            i++
        }

        // Essa parte de baixo é para aparecer no SELECT somente os espaços necessários para aparecer todos os itens
        inicio = document.querySelector('input#inicio')
        inicio = inicio.value
        if (inicio > 0) {
            inicio = Math.abs(inicio)
        }
        limite = Math.abs(limite)
        let size = limite - inicio + 1
        res.setAttribute('size', size)
    }
}