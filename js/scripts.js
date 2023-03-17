const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobInput = document.querySelector("#job");
const msgInput = document.querySelector("#msg");
const progress = document.querySelector("#progress");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    alert("Insira o seu nome");
    return;
  }

  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Insira o seu e-mail");
    return;
  }

  if (!isPasswordvalid(passwordInput.value, 8)) {
    alert("A senha deve ter no mínimo 8 carcteres");
    return;
  }

  if (jobInput.value === "") {
    alert("Selecione a sua situação");
    return;
  }

  if (msgInput.value === "") {
    alert("Escreva sua mensagem");
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
