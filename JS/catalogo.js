
const busca = document.getElementById("busca");
const produtos = document.querySelectorAll(".produto");
const contador = document.getElementById("contador");
const mensagem = document.querySelector(".fw-bold");

busca.addEventListener("input", () => {

    const termo = busca.value.toLowerCase();
    let quantidade = 0;

    produtos.forEach(produto => {

        const texto = produto.textContent.toLowerCase();
        

        if(texto.includes(termo)){
            produto.style.display = "block";
            quantidade++;
        } else {
            produto.style.display = "none";
        }

    });

    contador.textContent = quantidade;

    if(quantidade === 0){
        mensagem.textContent = "Nenhum produto encontrado";
    } else{
        mensagem.innerHTML = `
        Exibindo <span id="contador">${quantidade}</span> produtos
    `;
    
    }

});


