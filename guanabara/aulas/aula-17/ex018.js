let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log("Engordou")
        this.peso += p
    }
}
amigo.engordar(10)
console.log(amigo.peso)