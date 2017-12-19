function main() {
  document.querySelector("#botao-sua").addEventListener("click", mostraSua);
  document.querySelector("#botao-cardapio").addEventListener("click", mostraCardapio);
  document.querySelector("#botao-promo").addEventListener("click", mostraPromo);
  document.querySelector("#botao-local").addEventListener("click", mostraLocal);
  document.querySelector("#botao-contato").addEventListener("click", mostraContato);
}

function mostraSua() {
  document.querySelector("#botao-sua").classList.remove('selected');
  document.querySelector("#botao-sua").classList.add('non-selected');
}

function mostraCardapio() {

}

function mostraPromo() {

}

function mostraLocal() {

}

function mostraContato() {

}

window.addEventListener("load", main);
