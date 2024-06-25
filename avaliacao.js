//Funções com Arrays

//Array com avaliações
let avaliacoes = [
  {
    texto:
      "Os móveis são de excelente qualidade e superaram minhas expectativas. Recomendo!",
    nome: "Matheus S",
    nota: 4,
  },
  {
    texto:
      "O guarda-roupa é robusto e bonito, exatamente como nas fotos. Estou muito satisfeito!",
    nome: "Joao R",
    nota: 3,
  },
  {
    texto: "O guarda-roupa é robusto, porém não é tão bonito.",
    nome: "Kevin B",
    nota: 1,
  },
  {
    texto:
      "A experiência de compra foi ótima do início ao fim. Site bem organizado e entrega pontual.",
    nome: "Wendel C",
    nota: 5,
  },
  {
    texto: "Site bem organizado e entrega pontual.",
    nome: "Maycon J",
    nota: 3,
  },
  { texto: "Os móveis tem uma qualidade ruim.", nome: "Armando", nota: 2 },
  { texto: "Estou muito insatisfeito!", nome: "Anderson", nota: 1 },
  { texto: "Não superaram minhas expectativas.", nome: "Josef", nota: 2 },
  { texto: "A experiência de compra foi ruim.", nome: "Fred D", nota: 1 },
];

//Busca elementos no HTML
const mensagem1 = document.querySelector("#mensagem1");
const mensagem2 = document.querySelector("#mensagem2");
const mensagem3 = document.querySelector("#mensagem3");

const nomePessoa1 = document.querySelector("#nomePessoa1");
const nomePessoa2 = document.querySelector("#nomePessoa2");
const nomePessoa3 = document.querySelector("#nomePessoa3");

const avaliacao1 = document.querySelector("#avaliacao1");
const avaliacao2 = document.querySelector("#avaliacao2");
const avaliacao3 = document.querySelector("#avaliacao3");

//Marcado da posição do carrossel de avaliações
var posicaoAtual = 0;

//Primeira chama para preencher as avaliações quando a página é aberta
preencherAvaliacoes(posicaoAtual);

//Função que preenche a avaliações de acordo com a posição do parâmetro
function preencherAvaliacoes(posicao) {
  mensagem1.textContent = avaliacoes[0 + posicao * 3].texto;
  mensagem2.textContent = avaliacoes[1 + posicao * 3].texto;
  mensagem3.textContent = avaliacoes[2 + posicao * 3].texto;

  nomePessoa1.textContent = avaliacoes[0 + posicao * 3].nome;
  nomePessoa2.textContent = avaliacoes[1 + posicao * 3].nome;
  nomePessoa3.textContent = avaliacoes[2 + posicao * 3].nome;

  //Converte código para string do símblo de estrela
  const simboloEstrelaCheia = String.fromCodePoint(9733);
  const simboloEstrelaVazia = String.fromCodePoint(9734);

  //Repete as estrelas cheias/vazias de acordo com a nota da avaliação
  avaliacao1.textContent =
    simboloEstrelaCheia.repeat(avaliacoes[0 + posicao * 3].nota) +
    simboloEstrelaVazia.repeat(5 - avaliacoes[0 + posicao * 3].nota);
  avaliacao2.textContent =
    simboloEstrelaCheia.repeat(avaliacoes[1 + posicao * 3].nota) +
    simboloEstrelaVazia.repeat(5 - avaliacoes[1 + posicao * 3].nota);
  avaliacao3.textContent =
    simboloEstrelaCheia.repeat(avaliacoes[2 + posicao * 3].nota) +
    simboloEstrelaVazia.repeat(5 - avaliacoes[2 + posicao * 3].nota);
}

const scrollLeft = document.querySelector("#scrollLeft");

//Função para mover o carrossel de avaliações para a esquerda
scrollLeft.addEventListener("click", () => {
  posicaoAtual--;

  if (posicaoAtual < 0) posicaoAtual = 2;

  preencherAvaliacoes(posicaoAtual);
});

const scrollRight = document.querySelector("#scrollRight");

//Função para mover o carrossel de avaliações para a direita
scrollRight.addEventListener("click", () => {
  posicaoAtual++;

  if (posicaoAtual > 2) posicaoAtual = 0;

  preencherAvaliacoes(posicaoAtual);
});
