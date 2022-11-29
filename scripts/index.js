const command = document.getElementById("command");
const appContent = document.getElementById("app-content");

window.onload = function () {
  command.focus();
};

command.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let cmdValue = command.value;

    switch (cmdValue) {
      case "help":
        help();
        break;
      case "about":
        about();
        break;
      case "projects":
        projects();
        break;
      case "cd 1":
        cd1();
        break;
      case "cd 2":
        cd2();
        break;
      case "cd 3":
        cd3();
        break;
      case "socials":
        socials();
        break;
      case "contact":
        contact();
        break;
      case "cls":
        cls();
        break;
      case "contact-form":
        contactform();
        break;
      case "MoamOP-1l":
        admin();
        break;
      default:
        defaultt();
        break;
    }
  }
});
