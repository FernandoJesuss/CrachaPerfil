 // Trocar avatar clicando na imagem
 function trocarAvatar() {
    document.getElementById('inputAvatar').click();
  }
  function carregarAvatar(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.querySelector('.avatar').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Alterar dados via prompt (opcional)
  function alterarDados() {
    let novoNome = prompt("Digite seu nome:");
    let novoCargo = prompt("Digite seu cargo:");
    let novoEmail = prompt("Digite seu email:");
    let novoPortfolio = prompt("Digite o link do seu portfólio:");
    let novoLinkedIn = prompt("Digite o link do seu LinkedIn:");

    if (novoNome) document.getElementById("nome").textContent = novoNome;
    if (novoCargo) document.getElementById("cargo").textContent = novoCargo;
    if (novoEmail) document.getElementById("email").textContent = novoEmail;
    if (novoPortfolio) document.getElementById("portfolio").href = novoPortfolio;
    if (novoLinkedIn) document.getElementById("linkedin").href = novoLinkedIn;
  }

  // Muda cor do fundo do crachá
  function mudarCor(cor) {
    const cracha = document.querySelector('.cracha');
    cracha.style.background = `linear-gradient(135deg, ${cor} 0%, #5e3ca8 100%)`;
  }