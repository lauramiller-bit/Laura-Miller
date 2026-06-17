// exercício 1:
console.log("Bem-vindo ao ambiente de desenvolvimento JavaScript!")


// exercício 2:
const nome = "Laura Miller";
const cargo = "programador";
const experiencia = "5 meses";

// Exibindo informações
console.log("Nome:", nome);
console.log("Cargo:", cargo);
console.log("Experiência:", experiencia + " anos");


// exercício 3:
const vendas = 5000;
const bonificacao = vendas * 0.10; // 10% das vendas
const total = vendas + bonificacao;

// Exibindo os resultados
console.log("Vendas: R$ " + vendas);
console.log("Bonificação: R$ " + bonificacao);
console.log("Total: R$ " + total);


// exercício 4:
let idade = "15"

if (idade >= 18) {
    console.log("Acesso autorizado.");
} else {
    console.log("Acesso negado.");
}


//exercício 5:
let prioridade = 3;

if (prioridade === 1) {
    console.log("Prioridade: Baixa");
} else if (prioridade === 2) {
    console.log("Prioridade: Média");
} else if (prioridade === 3) {
    console.log("Prioridade: Alta");
} else {
    console.log("Código de prioridade inválido.");
}



//exercício 6:
let opcao = 4;

switch (opcao) {
    case 1:
        console.log("Setor: Financeiro");
        break;

    case 2:
        console.log("Setor: Comercial");
        break;

    case 3:
        console.log("Setor: Suporte Técnico");
        break;

    case 4:
        console.log("Setor: Recursos Humanos");
        break;

    default:
        console.log("Opção inválida.");
}


//exercício 7:
for (let tarefa = 1; tarefa <= 10; tarefa++) {
    console.log(`Executando tarefa ${tarefa}`);
}