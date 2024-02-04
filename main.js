// Função para exibir os resultados do Google Lens e do Reconhecimento em Tempo Real
function displayResults() {
    // Resultados do Google Lens
    const googleLensResults = [
        "Resultado 1 do Google Lens",
        "Resultado 2 do Google Lens",
        // Adicione mais resultados conforme necessário
    ];

    // Resultados do Reconhecimento em Tempo Real
    const realTimeResults = [
        "Resultado 1 em Tempo Real",
        "Resultado 2 em Tempo Real",
        // Adicione mais resultados conforme necessário
    ];

    // Selecionar todas as imagens de objetos
    const objectImages = document.querySelectorAll('#object-list img');

    // Iterar sobre as imagens e exibir os resultados
    objectImages.forEach((image, index) => {
        const googleLensResult = googleLensResults[index];
        const realTimeResult = realTimeResults[index];

        // Exibir resultados abaixo das imagens
        const resultGoogleLens = image.nextElementSibling;
        resultGoogleLens.textContent = `Google Lens: ${googleLensResult}`;

        const resultRealTime = resultGoogleLens.nextElementSibling;
        resultRealTime.textContent = `Reconhecimento em Tempo Real: ${realTimeResult}`;
    });
}

// Chamar a função ao carregar a página
window.onload = displayResults;
