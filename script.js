/* MODO ESCURO */

function modoEscuro(){

  document.body.classList.toggle("dark");

}

/* QUIZ */

let perguntaAtual = 0;

const perguntas = [

  {
    pergunta:
    "1. Qual prática ajuda na preservação ambiental?"
  },

  {
    pergunta:
    "2. Qual tecnologia ajuda no monitoramento agrícola?"
  },

  {
    pergunta:
    "3. O que significa sustentabilidade?"
  }

];

/* Verifica resposta */

function verificarResposta(resposta){

  const resultado =
  document.getElementById("resultadoQuiz");

  if(resposta === "certa"){

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

  document.getElementById("perguntaQuiz").innerHTML =

  perguntas[perguntaAtual].pergunta;

  document.getElementById("resultadoQuiz").innerHTML = "";

}

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

  /* Limpa input */

  document.getElementById("pergunta").value = "";

}