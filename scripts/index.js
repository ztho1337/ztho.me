const command = document.getElementById("command");
const appContent = document.getElementById("app-content");
const wrapper = document.getElementById("wrapper");

window.onload = function () {
  command.focus();
};

wrapper.addEventListener("click", () => {
  command.focus();
});

let history = [];
let historyLength = 0;
let index = 0;

command.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let cmdValue = command.value;
    if (cmdValue !== undefined) {
      history.push(cmdValue);
    }
    history.push(cmdValue);
    index = historyLength - 1;

    switch (cmdValue) {
      case "help":
        help();
        console.log(history);
        break;
      case "about":
        about();
        console.log(history);
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
      // case "test":
      //   console.log(history);
      //   break;
      default:
        defaultt();
        break;
    }
  }
  if (e.keyCode === 38) {
    // GORA
    historyLength = history.length;
    index--;
    histories();
  }
  if (e.keyCode === 40) {
    // DOL
    historyLength = history.length;
    index++;
    histories();
  }

  function histories() {
    if (history.length > 0 && index >= history.length - 1) {
      index = historyLength - 1;
    } else if (index < 0) {
      index = 0;
      index = historyLength;
    }
    if (history[index] == undefined) {
      command.value = "";
    } else {
      command.value = history[index];
    }
  }
});
