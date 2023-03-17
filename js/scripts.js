const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobInput = document.querySelector("#job");
const msgInput = document.querySelector("#msg");

const progress = document.querySelector("#progress");

const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-button");
const modalMessage = document.querySelector("#modal-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    showModal("Insira o seu nome");
    return;
  }

  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    showModal("Insira o seu e-mail");
    return;
  }

  if (!isPasswordvalid(passwordInput.value, 8)) {
    showModal("A senha deve ter no mínimo 8 carcteres");
    return;
  }

  if (jobInput.value === "") {
    showModal("Selecione a sua situação");
    return;
  }

  if (msgInput.value === "") {
    showModal("Escreva sua mensagem");
    return;
  }

  form.submit();
});

// Função valida e-mail
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

// Função que valida senha
function isPasswordvalid(password, minDigits) {
  if (password.length >= minDigits) {
    return true;
  }
  return false;
}

// atualiza a barra de progresso
form.addEventListener("input", () => {
  const totalFields = form.elements.length - 1;
  let completedFields = 0;

  for (let i = 0; i < totalFields; i++) {
    if (form.elements[i].value) {
      completedFields++;
    }
  }

  progress.value = (completedFields / totalFields) * 100;
});

// Modal

function showModal(msg) {
  modalMessage.textContent = msg;
  modal.style.display = "block";
}

closeButton.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if(e.target === modal) {
        modal.style.display = "none"
    }
})
