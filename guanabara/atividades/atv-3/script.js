function contar() {
    // Valor de início da contagem informado pelo usuário
    var ini = document.querySelector('input#inicio')

    // Valor de fim da contagem informado pelo usuário
    var fim = document.querySelector('input#fim')

    // Valor do passo da contagem informado pelo usuário
    var passo = document.querySelector('input#passo')

    // Local onde aparecerá a contagem
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Caso os inputs não contenham valoes, aparecerá uma mensagem de erro de conteúdo vazio

        alert('[ERRO] Conteúdo vazio')
        res.innerHTML = 'Preparando a contagem...'

    } else {
        // Aqui entra caso os inputs contenham valores

        // Essas 3 variáveis recebem os valores numéricos deles mesmos
        ini = Number(ini.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        } if (ini > fim && passo < 0) {
            // Aqui conta os números de forma regressiva

            res.innerHTML = 'Contando: '

            for (ini; ini >= fim; ini += passo) {
                res.innerHTML += ini + ' ' + String.fromCodePoint(0x1F449) + ' '
            }

            res.innerHTML += ' ' + String.fromCodePoint(0x1F3C1)

        } else if (ini < fim && passo > 0) {
            // Aqui conta os números de forma progressiva

            res.innerHTML = 'Contando: '

            for (ini; ini <= fim; ini += passo) {
                res.style.display = 'block'
                res.innerHTML += `${ini}  ${String.fromCodePoint(0x1F449)} ` // Outra maneira de poder colocar variável com emoji
            }

            res.innerHTML += ` \u{1F3C1}` // Outra maneira de adicionar um emoji

        } else {
            // Caso os valores inseridos não sejam válidos, aparecerá uma mensagem de erro para verificar os dados inseridos
            alert('[ERRO] Verifique os dados e tente novamente')
            res.innerHTML = 'Preparando a contagem...'
        }
}