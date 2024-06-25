import { montarMensagem } from './util.js';

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".botao-menu");

menuButton.addEventListener("click", () => {
  //Adicição de Eventos (addEventListener)
  navbar.classList.toggle("show-menu");
});

const contadorItems = document.querySelector("#contadorItems");
var numeroItemsCarrinho = 0; //Operadores de Atribuição (Atribuição Simples)
contadorItems.style.display = "none";
const botaoAdicionarCarrinho = document.querySelector(
  "#botaoAdicionarCarrinho"
);

const loadingIcon = document.querySelector(".loading-icon");
loadingIcon.style.display = "none";

botaoAdicionarCarrinho.addEventListener("click", () => {
  //Adicição de Eventos (addEventListener)
  numeroItemsCarrinho++; //Operadores Aritméticos (Incremento)
  contadorItems.style.display = "inline";
  contadorItems.textContent = numeroItemsCarrinho; //Comandos de saída (Manipulação do DOM)
});

(function () {
  const cep = document.querySelector("input[name=cep]");
  const buscarCepButton = document.getElementById("buscarCep"); //Comando de saída (getElementById)

  buscarCepButton.addEventListener("click", async (e) => {
    const value = cep.value.replace(/[^0-9]+/, "");
    const url = "https://viacep.com.br/ws/" + value + "/json/";

    try {
      loadingIcon.style.display = "inline";

      await delay(2000); //Funções Assíncronas: Adiciona um delay

      const response = await fetch(url);
      const json = await response.json();

      loadingIcon.style.display = "none";

      if (json.logradouro) {
        alert( //Comando de saída (alert)
            montarMensagem(json.cep, json.logradouro, json.localidade,"10R$") //Utilizando o import da função montarMensagem
        );
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    } finally {
      loadingIcon.style.display = "none";
    }
  });

  // Função delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
})();
