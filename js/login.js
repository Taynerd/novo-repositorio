document.addEventListener("DOMContentLoaded", () => {
  const feedback = document.getElementById("feedback");
  const confirmPassword = document.getElementById("confirmPassword");
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const mainAction = document.getElementById("mainAction");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  let isRegisterMode = false;

  function showMessage(msg) {
    feedback.innerText = msg;
  }

  function switchMode(register) {
    isRegisterMode = register;

    confirmPassword.classList.toggle("hidden", !register);

    loginTab.classList.toggle("active", !register);
    registerTab.classList.toggle("active", register);

    if (register) {
      title.innerText = "Sejam bem-vindos ✨";
      subtitle.innerText = "Crie sua conta para começar";
      mainAction.innerText = "Criar conta";
      mainAction.classList.remove("pulse");
    } else {
      title.innerText = "Bem-vindos de volta 💖";
      subtitle.innerText = "Entre para iniciar o jogo";
      mainAction.innerText = "Entrar";
      mainAction.classList.add("pulse");
    }

    feedback.innerText = "";
  }

  loginTab.onclick = () => switchMode(false);
  registerTab.onclick = () => switchMode(true);

  mainAction.onclick = () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
      showMessage("Preencha todos os campos");
      return;
    }

    if (isRegisterMode) {
      const confirm = confirmPassword.value;

      if (password.length < 6) {
        showMessage("Senha precisa ter no mínimo 6 caracteres");
        return;
      }

      if (password !== confirm) {
        showMessage("As senhas não coincidem");
        return;
      }

      showMessage("Criando sua conta...");

      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => (window.location.href = "index.html"))
        .catch((e) => showMessage(traduzErro(e.code)));
    } else {
      showMessage("Entrando no jogo...");

      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => (window.location.href = "index.html"))
        .catch((e) => showMessage(traduzErro(e.code)));
    }
  };

  window.loginGoogle = function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    showMessage("Conectando com o Google...");
    auth.signInWithRedirect(provider);
  };

  function traduzErro(code) {
    switch (code) {
      case "auth/user-not-found":
        return "Usuário não encontrado";
      case "auth/wrong-password":
        return "Senha incorreta";
      case "auth/email-already-in-use":
        return "Esse email já está em uso";
      case "auth/invalid-email":
        return "Email inválido";
      default:
        return "Algo deu errado. Tente novamente";
    }
  }

  // 🔥 LINHA QUE RESOLVE TUDO
  switchMode(false);
});
