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


//exercício 8:
const equipe = ["Laura", "Sofia", "Mariana", "Ana.h", "Ana.k"];

for (let i = 0; i < equipe.length; i++) {
    console.log(`Integrante: ${equipe[i]}`);
}


//exercício 9:
// VENDAS DA SEMANA //

const vendas = [100, 250, 400, 150, 300, 500, 200];

let total = 0;
let maior = vendas[0];
let menor = vendas[0];

for (let i = 0; i < vendas.length; i++) {
    total += vendas[i];

    if (vendas[i] > maior) {
        maior = vendas[i];
    }

    if (vendas[i] < menor) {
        menor = vendas[i];
    }
}

let media = total / vendas.length;

console.log(`Total Vendido: R$ ${total.toFixed(2)}`);
console.log(`Média de Vendas: R$ ${media.toFixed(2)}`);
console.log(`Maior Venda: R$ ${maior.toFixed(2)}`);
console.log(`Menor Venda: R$ ${menor.toFixed(2)}`);


//exercício 10:
// CONTROLE DE ESTOQUE //

const produtos = [
    { nome: "Teclado", quantidade: 12 },
    { nome: "Mouse", quantidade: 3 },
    { nome: "Monitor", quantidade: 8 },
    { nome: "Headset", quantidade: 2 },
    { nome: "Webcam", quantidade: 6 }
];

for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];

    if (produto.quantidade < 5) {
        console.log(`Produto: ${produto.nome} - Repor Estoque`);
    } else {
        console.log(`Produto: ${produto.nome} - Estoque OK`);
    }
}