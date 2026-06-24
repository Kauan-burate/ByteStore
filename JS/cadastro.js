const formulario = document.querySelector("form");

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const termos = document.getElementById("termos");
const mensagem = document.getElementById("mensagem");


formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(nome.value == ""){
        alert("Digite seu nome");
        return;
    }

    if(sobrenome.value == ""){
        alert("Digite seu sobrenome");
        return;
    }

    if(email.value == ""){
        alert("Digite seu e-mail");
        return;
    }

    if(cpf.value == ""){
        alert("Digite seu CPF");
        return;
    }

    if(cidade.value == ""){
        alert("Digite sua cidade");
        return;
    }

    if(estado.value == ""){
        alert("Selecione um estado");
        return;
    }

    if(senha.value == ""){
        alert("Digite uma senha");
        return;
    }

    if(senha.value != confirmarSenha.value){
        alert("As senhas não são iguais");
        return;
    }

    if(!termos.checked){
        alert("Aceite os termos");
        return;
    }

    let usuario = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        cpf: cpf.value,
        cidade: cidade.value,
        estado: estado.value,
        senha: senha.value
    };

    let usuarios = [];

    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensagem.innerHTML = `
    <div class="alert alert-success text-center fw-bold rounded-3">
        Cadastro realizado com sucesso!
    </div>
    `;
    
    setTimeout(() => {
        mensagem.innerHTML = "";
    }, 3000);



    formulario.reset();

});