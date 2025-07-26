function minhaFuncao(mensagem, userName){
    console.log(`${mensagem} bla bla ${userName}`);

    return console.log('terminou')

    alert('alerta')
}

minhaFuncao("primeira mensagem", "Paulo");
minhaFuncao("segunda mensagem", "Andressa");
const person = {
    fName: "Elon",
    lName: "Musk",
    fullName() {
        return `${this.fName} ${this.lName}`
    }
}
console.log(person.fullName())