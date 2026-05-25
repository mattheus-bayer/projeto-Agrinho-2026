/* 
FUNÇÃO DO MODO ESCURO
*/

function modoEscuro(){

  /* 
  classList.toggle adiciona ou remove
  a classe "dark"
  */

  document.body.classList.toggle("dark");

}

/* 
FUNÇÃO RESPOSTA CORRETA
*/

function respostaCorreta(){

  /* 
  getElementById seleciona um elemento
  pelo ID
  */

  document.getElementById("resultadoQuiz").innerHTML =

  "✅ Correto! Sustentabilidade é essencial.";

}

/* 
FUNÇÃO RESPOSTA ERRADA
*/

function respostaErrada(){

  document.getElementById("resultadoQuiz").innerHTML =

  "❌ Essa prática prejudica o meio ambiente.";

}

/* 
CHATBOT IA
*/

function enviarPergunta(){

  /* 
  pega o texto digitado
  */

  let pergunta =

  document.getElementById("pergunta").value.toLowerCase();

  /* variável resposta */
  let resposta = "";

  /* 
  IF = condição
  */

  if(pergunta.includes("agua")){

    resposta =
    "💧 Economizar água é essencial.";
  }

  else if(pergunta.includes("ia")){

    resposta =
    "🤖 A Inteligência Artificial ajuda no monitoramento agrícola.";
  }

  else if(pergunta.includes("drone")){

    resposta =
    "🚁 Drones ajudam no monitoramento das lavouras.";
  }

  else if(pergunta.includes("sustentabilidade")){

    resposta =
    "🌱 Sustentabilidade é produzir preservando o meio ambiente.";
  }

  else{

    resposta =
    "🤖 Ainda estou aprendendo sobre o agro.";
  }

  /* altera mensagem do chatbot */

  document.getElementById("mensagemBot").innerHTML = resposta;

}