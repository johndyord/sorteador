document.addEventListener("DOMContentLoaded", function () {
    function sortearNumero() {
        const inicioInput = document.querySelector(".inicio");
        const fimInput = document.querySelector(".fim");

        const inicio = parseInt(inicioInput.value);
        const fim = parseInt(fimInput.value);

        if (isNaN(inicio) || isNaN(fim)) {
            alert("Por favor, insira números válidos.");
            return;
        }

        if (inicio >= fim) {
            alert("O valor de início deve ser menor que o valor final.");
            return;
        }

        const numeroSorteado = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;

        alert(`Número sorteado: ${numeroSorteado}`);
    }

    const sorteioButton = document.querySelector(".sorteio");
    sorteioButton.addEventListener("click", sortearNumero);
});

