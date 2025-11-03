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

  /* Botão 1ª Letra Maiscúla */
  window.document
  .querySelector("#btnletra")
  .addEventListener("click", function () {
    let inputText = document.querySelector("#input-text").value;

    let sentences = inputText.split(/([.!?;])/).map((part, i, arr) => {
      part = part.trim();

      if ([".", "!", "?", ";"].includes(part) || part.length === 0) {
        return part;
      }

      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });

    let result = sentences.join("").replace(/([.!?;])\s*/g, "$1 ");

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
