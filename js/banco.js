document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar dados do formulário
    const formData = new FormData(event.target);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      endereco: formData.get("endereco"),
      formacao: formData.get("formacao"),
      cargo: formData.get("cargo"),
      objetivos: formData.get("objetivos"),
    };

    // Enviar dados para a API 'SheetDB'
    fetch("https://sheetdb.io/api/v1/ohbbko9kl2bdl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Redirecionar o usuário após o envio bem-sucedido
        window.location.href = "/enviadoSucess.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
