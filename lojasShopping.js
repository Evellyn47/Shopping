const prompt = require("prompt-sync")();

class Shopping
{
    constructor()
    {
     this.shoppingLojas = [];
    }
 adiconarLoja ()
 {
    const nomeLoja = prompt ("Qual é o nome da sua loja ? ")
    const tipoLoja = prompt ("Digite o tipo da sua loja: ")

    if(nomeLoja)
    {
       this.shoppingLojas.push({nome: nomeLoja, tipo: tipoLoja})
     console.log(`Loja com o nome de ${nomeLoja} do tipo ${tipoLoja} está diponível no shopping`)
    }
 else 
   {
     console.log("Dados invalidos.")
    }
    
    const encontrarLoja = this.shoppingLojas.find( loja => loja.nome === nomeLoja);
 }

 listaLojas ()
 {
    this.shoppingLojas.forEach((loja, index) => 
    {console.log(`[${index}] Nome: ${loja.nomeLoja}, Tipo: ${loja.tipoLoja}`)});

 }

}

const  shopping = new Shopping();

let sair = false

do 
{
    console.log(" == BEM-VINDO AO SHOPPING PÁTIO PINDA ==")
    console.log(" == Cadastre a sua loja aqui :) ==")
    console.log("[1] Para cadastrar loja.")
    console.log("[2] Para verificar lojas cadastradas.")
    console.log("[3] Sair ")

    let escolha = parseInt(prompt(""))

    switch(escolha)
    {
        case 1:
            shopping.adiconarLoja();
        break;

        case 2:
            shopping.listaLojas();
        break;

        case 3:
            sair = true
            console.log("Até a próxima :) ...")
        break;

        default:
        console.log("Opção não encontrada tente novamente mais tarde!...")
            break;
    }

} while(!sair)
