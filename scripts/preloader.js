const preloader = document.getElementById("preloader");
const plContent = document.getElementById("pl-content");

function loading() {
  setTimeout(() => {
    plContent.innerHTML = "Ładowanie... [-]";
  }, 1);

  setTimeout(() => {
    plContent.innerHTML = "Ładowanie... [\\]";
  }, 1000);

  setTimeout(() => {
    plContent.innerHTML = "Ładowanie... [-]";
  }, 2000);

  setTimeout(() => {
    plContent.innerHTML = "Ładowanie... [/]";
  }, 3000);

  setTimeout(() => {
    loading();
  }, 4000);
}

loading();

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.visibility = "hidden";
    preloader.style.opacity = "0";
  }, 3000);
});
