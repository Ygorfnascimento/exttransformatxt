/* Modelo 1 */

window.document.addEventListener("DOMContentLoaded", function () {
  /* Botão Letra Maiúscula */
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toUpperCase();
    });

  /* Botão Letra Minúscula */
  window.document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toLowerCase();
    });

  /* Botão 1° Letra Maiscúla */
  window.document
    .querySelector("#btnletra")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      let result = inputText.charAt(0).toUpperCase() + inputText.toLowerCase().slice(1);
      document.querySelector("#result").innerHTML = result;
    });

    /* Botão Limpar */
 window.document
    .querySelector("#btnlimpar")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.value='';
    });

    /* Botão de Copiar */
    document.querySelector("#btnCopiar").addEventListener("click", function () {
    let resultText = document.querySelector("#result").innerText.replace("Resultado:", "").trim();

    navigator.clipboard.writeText(resultText)
    .then(() => alert("Texto copiado para a área de transferência!"))
    .catch(err => alert("Erro ao copiar: " + err));
    });
});