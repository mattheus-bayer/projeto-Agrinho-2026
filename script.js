/* MODO ESCURO */

function modoEscuro(){

  document.body.classList.toggle("dark");

}

/* QUIZ */

let perguntaAtual = 0;

/* Lista perguntas */

const perguntas = [

  {

    pergunta:
    "1. Qual prática contribui para a preservação dos recursos hídricos no campo?",

    respostas:[
      "Uso consciente da água",
      "Desmatamento",
      "Queimadas ilegais"
    ],

    correta:0

  },

  {

    pergunta:
    "2. Qual tecnologia é utilizada para monitorar plantações em grandes áreas?",

    respostas:[
      "Máquina de escrever",
      "Drones agrícolas",
      "Televisão"
    ],

    correta:1

  },

  {

    pergunta:
    "3. O que significa agricultura sustentável?",

    respostas:[
      "Produzir sem preservar o meio ambiente",
      "Produzir preservando recursos naturais",
      "Aumentar queimadas"
    ],

    correta:1

  },

  {

    pergunta:
    "4. Qual recurso ajuda a economizar água na agricultura?",

    respostas:[
      "Irrigação inteligente",
      "Desperdício de água",
      "Poluição dos rios"
    ],

    correta:0

  },

  {

    pergunta:
    "5. Como a Inteligência Artificial ajuda no agronegócio?",

    respostas:[
      "Monitorando plantações e clima",
      "Destruindo lavouras",
      "Aumentando desperdícios"
    ],

    correta:0

  },

  {

    pergunta:
    "6. Qual dessas ações ajuda o meio ambiente?",

    respostas:[
      "Queimadas ilegais",
      "Preservação das florestas",
      "Poluição dos rios"
    ],

    correta:1

  },

  {

    pergunta:
    "7. Qual é um dos principais objetivos da sustentabilidade?",

    respostas:[
      "Utilizar recursos sem limites",
      "Preservar recursos para futuras gerações",
      "Aumentar o desperdício"
    ],

    correta:1

  }

];

/* Carrega pergunta */

function carregarPergunta(){

  document.getElementById("perguntaQuiz").innerHTML =

  perguntas[perguntaAtual].pergunta;

  document.getElementById("btn1").innerHTML =

  perguntas[perguntaAtual].respostas[0];

  document.getElementById("btn2").innerHTML =

  perguntas[perguntaAtual].respostas[1];

  document.getElementById("btn3").innerHTML =

  perguntas[perguntaAtual].respostas[2];

}

/* Verifica resposta */

function verificarResposta(indice){

  const resultado =

  document.getElementById("resultadoQuiz");

  if(indice === perguntas[perguntaAtual].correta){

    resultado.innerHTML =

    "✅ Resposta correta!";
  }

  else{

    resultado.innerHTML =

    "❌ Resposta incorreta.";
  }

}

/* Próxima pergunta */

function proximaPergunta(){

  perguntaAtual++;

  if(perguntaAtual >= perguntas.length){

    perguntaAtual = 0;
  }

  carregarPergunta();

  document.getElementById("resultadoQuiz").innerHTML = "";

}

/* Carrega primeira pergunta */

carregarPergunta();

/* CHATBOT IA */

function enviarPergunta(){

  let pergunta =

  document.getElementById("pergunta").value.toLowerCase();

  let resposta = "";

  if(pergunta.includes("agua")){

    resposta =
    "💧 Economizar água é essencial para a agricultura sustentável.";
  }

  else if(pergunta.includes("ia")){

    resposta =
    "🤖 A Inteligência Artificial ajuda no monitoramento agrícola.";
  }

  else if(pergunta.includes("drone")){

    resposta =
    "🚁 Drones agrícolas ajudam no monitoramento das lavouras.";
  }

  else if(pergunta.includes("sustentabilidade")){

    resposta =
    "🌱 Sustentabilidade significa produzir preservando o meio ambiente.";
  }

  else if(pergunta.includes("agricultura")){

    resposta =
    "🌾 A agricultura moderna utiliza tecnologia para aumentar a produtividade.";
  }

  else{

    resposta =
    "🤖 Ainda estou aprendendo sobre o agro sustentável.";
  }

  document.getElementById("mensagemBot").innerHTML = resposta;

  /* Limpa campo */

  document.getElementById("pergunta").value = "";

}