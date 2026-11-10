const galeria = document.getElementById("galeria")
const botoesFiltro = document.querySelectorAll(".btn-filtros")

function renderizarProjetos(categoriaFiltro = "todas") {
    galeria.innerHTML = "";

    projetos.forEach(projeto => {
        if (categoriaFiltro === "todos" || projeto.categoria === categoriaFiltro) {
            const card = document.createElement("article")
            card.className ="card";

            if (projeto.destaque === true) {
                card.classList.add("destaque")
            }

            card.innerHTML = `
        <div class="card-imagem">
            <img src="${projeto.imagem}" alt="Print do projeto ${projeto.titulo}">
        </div>
        <div class="card-conteudo">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank" class="btn-link">
                 Acessar Projeto
            </a>
        </div>
        `
            galeria.appendChild(card)
        }
    })
}

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
        botoesFiltro.forEach(b => b.classList.remove("ativo"))
        botao.classList.add("ativo")
        const filtroEscolhido = botao.getAttribute("data-filtro");
        renderizarProjetos(filtroEscolhido)
    })
})

renderizarProjetos("todos");