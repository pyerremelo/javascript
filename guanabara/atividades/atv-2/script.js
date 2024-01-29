function verificar() {

    // DATA DO ANO ATUAL
    var data = new Date()
    data = data.getFullYear()

    var section = document.getElementById('section')

    // ANO DE NASCIMENTO DO USUÁRIO
    var inasc = document.getElementById('inasc')

    // LOCAL ONDE VAI APARECER O RESULTADO PARA O USUÁRIO
    var msg = document.getElementById('msg')

    // LOCAL ONDE VAI APARECER AS IMAGENS
    var imagem = document.getElementById('imagem')

    if (inasc.value < 1900 || inasc.value > data) {
        alert('Verifique os dados')

    } else {
        var idade = data - inasc.value

        // SEXO INFORMADO PELO USUÁRIO
        var sexo = document.getElementsByName('sexo')

        // IMAGENS DO SEXO MASCULINO
        if (sexo[0].checked) {

            msg.innerHTML = `Você tem ${idade} anos de idade`
            
            section.style.height = '365px'
            section.style.transition = '0.9s'
            
            imagem.style.height = '200px'            
            imagem.style.transition = '1.1s'
            
            if (idade <= 17) {
                msg.innerHTML = `Você é uma criança de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/crianca-mas.jpg)"
                
            } else if (idade <= 30) {
                msg.innerHTML = `Você é um jovem de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/jovem-mas.jpg)"
                
            } else if (idade <= 55) {
                msg.innerHTML = `Você é um adulto de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/adulto-mas.jpg)"
            } else {
                msg.innerHTML = `Você é um idoso de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/idoso-mas.jpg)"
            }
            
            // IMAGENS DO SEXO FEMININO
        } else {

            msg.innerHTML = `Você tem ${idade} anos de idade`

            section.style.height = '365px'
            section.style.transition = '0.9s'

            imagem.style.height = '200px'            
            imagem.style.transition = '1.1s'
            
            if (idade <= 17) {
                msg.innerHTML = `Você é uma criança de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/crianca-fem.jpg)"

            } else if (idade <= 30) {
                msg.innerHTML = `Você é uma jovem de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/jovem-fem.jpg)"

            } else if (idade <= 55) {
                msg.innerHTML = `Você é uma adulta de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/adulto-fem.jpg)"
            } else {
                msg.innerHTML = `Você é uma idosa de ${idade} anos de idade`
                imagem.style.backgroundImage = "url(img/idoso-fem.jpg)"
            }
        }
    }
}