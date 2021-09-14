const pagamento = 15;
var idadeCliente = 18;
const idadeMinima = 16;

console.log("Olá! Bem vindo ao Cinema. O preço do ingresso é R$15,00. Tem que ter no mínimo 16 anos. \n\n");
if(idadeCliente >= idadeMinima && pagamento >= 15){
    console.log("Ok, vc pode assistir.");
} else{
    console.log("Não pode ver o filme.");
}