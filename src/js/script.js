const mobileBtn = document.querySelector('.btn-mobile');
const listMenu = document.querySelector('.list-menu');
const icon = document.querySelector('.btn-mobile i');


mobileBtn.addEventListener('click', () => {
    listMenu.classList.toggle('show');
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x');
});


//Fidelidade


let pontosAtuais = 0;

// Novo Cadastro
function fazerCadastro() {
    let nome = document.getElementById("cad-nome").value;
    let cpf = document.getElementById("cad-cpf").value;
    let aceitou = document.getElementById("lgpd-cadastro").checked;

    if (nome === "" || cpf === "") {
        alert("Preencha seu nome e telefone/CPF para se cadastrar.");
    } else if (!aceitou) {
        alert("Marque a caixa de privacidade para concluir seu cadastro.");
    } else {
        pontosAtuais = 50;
        document.getElementById("usuario-logado").innerText = nome;
        document.getElementById("saldo-pontos").innerText = pontosAtuais;
        document.getElementById("painel-pontos").style.display = "block";
        alert("Cadastro realizado! Você ganhou 50 pontos de boas-vindas.");
    }
}

//  Autenticação (Login)
function fazerLogin() {
    let cpf = document.getElementById("login-cpf").value;
    let senha = document.getElementById("login-senha").value;

    if (cpf === "" || senha === "") {
        alert("Informe seu CPF/telefone e senha para entrar.");
    } else {
        pontosAtuais = 150;
        document.getElementById("usuario-logado").innerText = "Cliente Raízes";
        document.getElementById("saldo-pontos").innerText = pontosAtuais;
        document.getElementById("painel-pontos").style.display = "block";
    }
}


function resgatarPremio(custoPontos, nomePremio) {
    if (pontosAtuais >= custoPontos) {
        pontosAtuais = pontosAtuais - custoPontos; 
        document.getElementById("saldo-pontos").innerText = pontosAtuais;
        alert("Parabéns! Você resgatou: " + nomePremio + ". Mostre esta tela no balcão ou totem!");
    } else {
        alert("Você não tem pontos suficientes para este prêmio.");
    }
}


/*FUNÇÕES DA PÁGINA DE CARDÁPIO*/

let quantidade = 0;
let total = 0;


function filtrarCardapio() {
    let unidadeEscolhida = document.getElementById("unidade").value;
    let pratos = document.querySelectorAll(".prato-card");

    pratos.forEach(function(prato) {
        let unidadeDoPrato = prato.getAttribute("data-unidade");

        if (unidadeEscolhida === "todas" || unidadeDoPrato === unidadeEscolhida) {
            prato.style.display = "block";
        } else {
            prato.style.display = "none";
        }
    });
}


function adicionarPedido(nomePrato, preco) {
    quantidade = quantidade + 1;
    total = total + preco;

    document.getElementById("qtd-itens").innerText = quantidade;
    document.getElementById("valor-total").innerText = total.toFixed(2);

    alert(nomePrato + " adicionado ao seu pedido!");
}


function finalizarPedido() {
    let aceitouLGPD = document.getElementById("aceite-lgpd").checked;

    if (quantidade === 0) {
        alert("Escolha pelo menos um item do cardápio antes de finalizar.");
    } else if (!aceitouLGPD) {
        alert("Por favor, marque a caixa de privacidade para continuar.");
    } else {
        alert("Pedido enviado para pagamento externo! Total: R$ " + total.toFixed(2));
    }
}


