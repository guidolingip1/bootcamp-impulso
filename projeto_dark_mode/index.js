window.onload = function (e) {
  function changeMode() {
    changeClasses();
    changeText();
  }

  function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
  }

  function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if (body.classList.contains(darkModeClass)) {
      button.innerHTML = lightMode;
      h1.innerHTML = darkMode + " ON";
      return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
  }

  const darkModeClass = "dark-mode";
  const button = document.getElementsByTagName("button")[0];
  const h1 = document.getElementsByTagName("h1")[0];
  const body = document.getElementsByTagName("body")[0];

  button?.addEventListener("click", changeMode);
};
