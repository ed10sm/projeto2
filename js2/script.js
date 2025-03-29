document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Verifica se o usuário já escolheu um tema
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "☀️"; // Ícone de sol para indicar tema claro
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeIcon.textContent = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeIcon.textContent = "🌙";
        }

        const form = document.querySelector('form');
const notificacao = document.getElementById('notificacao');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  notificacao.textContent = 'Mensagem enviada com sucesso!';
  notificacao.style.display = 'block';

  // Opcional: Limpar o formulário após o envio
  form.reset();
  
});
    });
});
