// var tempo = new Date ()
// tempo = tempo.getHours ()
tempo = 128

var hora = document.querySelector('div#hora')
var corpo = document.getElementsByTagName('body')[0]
var imagem = document.querySelector('div#imagem')


function carregar (){
    if (tempo >= 6 && tempo < 12){ //BOM DIA
        hora.style.color = "gold"
        hora.innerHTML = `Boa dia! Agora são ${tempo}hrs`
        imagem.style.backgroundImage = "url(img/morning-pexels.jpg)"
        corpo.style.backgroundColor = "#fecd2d"
        
    } else if (tempo >= 12 && tempo < 18){ //BOA TARDE
        hora.style.color = "orange"
        hora.innerHTML = `Boa tarde! Agora são ${tempo}hrs`
        imagem.style.backgroundImage = "url(img/afternoon-pexels.jpg)"
        corpo.style.backgroundColor = '#C76800'
        
    } else{ //BOA NOITE
        hora.style.color = "#0101bb"
        hora.innerHTML = `Boa noite! Agora são ${tempo}hrs`
        imagem.style.backgroundImage = "url(img/night-pexels.jpg)"
        corpo.style.backgroundColor = "#00103E"
    }
}
