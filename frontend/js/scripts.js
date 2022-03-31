const form = document.querySelector("#form");
const UsernameInput = document.querySelector("#username");
const EmailInput = document.querySelector("#email");
const PasswordInput = document.querySelector("#password");
const ConfirmationPasswordInput = document.querySelector(
  "#password-confirmation"
);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const UsernameValue = UsernameInput.value;
  const EmailValue = EmailInput.value;
  const PasswordValue = PasswordInput.value;
  const ConfirmationPasswordValue = ConfirmationPasswordInput.value;

  if (UsernameValue === "") {
    setErrorFor(UsernameInput, "O nome de o usuário é obrigatório. ");
  } else {
    SetSuccessFor(UsernameInput);
  }

  if (EmailValue === "") {
    setErrorFor(EmailInput, "O Email do o usuário é obrigatório. ");
  } else if (!checkEmail(EmailValue)) {
    setErrorFor(EmailInput, "Por favor insira um email válido. ");
  } else {
    SetSuccessFor(EmailInput);
  }

  if (PasswordValue === "") {
    setErrorFor(PasswordInput, "A senha do usuário é obrigatória ");
  } else if (PasswordValue.length < 7) {
    setErrorFor(PasswordInput, "A senha precisa de no mínimo 7 caracteres. ");
  } else {
    SetSuccessFor(PasswordInput);
  }
  if (ConfirmationPasswordValue === "") {
    setErrorFor(
      ConfirmationPasswordInput,
      "A confirmação da senha é obriagatória. "
    );
  } else if (ConfirmationPasswordValue != PasswordValue) {
    setErrorFor(ConfirmationPasswordInput, "As senhas não se conferem. ");
  } else {
    SetSuccessFor(ConfirmationPasswordInput);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adicionar mensagem de erro
  small.innerText = message;

  // Adicionar classe de erro
  formControl.className = "form-control error";
}

function SetSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
