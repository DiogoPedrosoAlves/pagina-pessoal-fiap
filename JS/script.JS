// Seleciona o formulário
const form = document.querySelector("form");

// Cria elemento para mensagens
const messageBox = document.createElement("div");
form.parentNode.appendChild(messageBox);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  let errors = [];

  if (nome.length < 3) {
    errors.push("O nome deve ter pelo menos 3 caracteres.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Formato de e-mail inválido.");
  }

  if (mensagem.length < 10) {
    errors.push("A mensagem deve ter pelo menos 10 caracteres.");
  }

  if (errors.length > 0) {
    messageBox.innerHTML = `<p style="color:red;">${errors.join("<br>")}</p>`;
  } else {
    messageBox.innerHTML = `<p style="color:green;">Formulário enviado com sucesso!</p>`;

    console.log("Dados enviados:");
    console.log({ nome, email, mensagem });

    // Reseta formulário
    form.reset();
  }
});
