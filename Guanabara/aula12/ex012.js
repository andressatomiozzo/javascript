var idade = 75
if(idade < 16){
    console.log('Não pode votar')
} else if (/* idade >= 16 && */ idade <18 || idade >=65){
    console.log('Pode votar se quiser')
} else {
    console.log('O voto é obrigatório')
}
