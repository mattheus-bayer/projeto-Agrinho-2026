/* MODO ESCURO */

function modoEscuro(){

  document.body.classList.toggle("dark");

}

/* QUIZ */

function respostaCorreta(){

  document.getElementById("resultadoQuiz").innerHTML =

  "✅ Correto! Sustentabilidade é essencial para o futuro do planeta.";

}

function respostaErrada(){

  document.getElementById("resultadoQuiz").innerHTML =

  "❌ Essa prática prejudica o meio ambiente.";

}

/* CHATBOT IA */

function enviarPergunta(){

  /* pega texto digitado */

  let pergunta =

  document.getElementById("pergunta").value.toLowerCase();

  let resposta = "";

  /* condições */

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
    "🌱 Sustentabilidade é produzir preservando o meio ambiente.";
  }

  else{

    resposta =
    "🤖 Ainda estou aprendendo sobre o agro sustentável.";
  }

  /* altera mensagem */

  document.getElementById("mensagemBot").innerHTML = resposta;

  /* limpa campo */

  document.getElementById("pergunta").value = "";

}