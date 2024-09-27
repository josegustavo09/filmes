let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 500);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("LIVRE");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("RED")
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(70);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Circulo de Fogo";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Star wars VII"
        }
      } else {
        if (gostaDeaventura) {
          return "Toy Stories"
        } else {
          return "Interestelar"
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A ilha da Fantasia";
    } else {
      return "Carros 3";
    }
  }
}
