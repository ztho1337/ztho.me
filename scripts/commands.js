function about() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
      <input disabled class='app-command' type='text' value='about' /> <br /><br /> 
      Czesc! Nazywam sie Kuba. <br />
      Zajmuje sie frontendem oraz ui designem od poltorej roku. <br />
      Aktualnie uczeszczam do technikum na kierunku “programista”.
  </span> <br /> <br />
`;
  command.value = "";
}

function projects() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
    <input disabled class='app-command' type='text' value='projects' /> <br /><br /> 
    Aby zobaczyc moje aktualne projekty nalezy wpisac 'cd {wartosc}'. <br /> <br />
    [ 1 ] Discord AIO - Wszystkie przydatne funkcje dla użytkowników Discorda, <br />
    [ 2 ] currencyConverter - Bardzo przydatny konwerter walut, <br />
    [ 3 ] FliSki - Firma zajmująca się oprogramowaniem do śledzenia samolotów
  </span> <br /> <br />
`;
  command.value = "";
}

function cd1() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
    <input disabled class='app-command' type='text' value='cd 1' /> <br /><br /> 
    Nazwa projektu: <span class="bold">Discord AIO</span><br /> 
    Opis projektu: <span class="bold">W tej aplikacji znajduja sie wszystkie przydatne funckje dla uzytkownikow Discorda.</span><br /> 
    Stan projektu: <span class="bold">W trakcie tworzenia.</span><br />
    Link Preview: <a href="https://discordaio.ztho.me" target="_blank">preview-discord-aio</a><br /> 
    Link Repozytorium: <a href="https://github.com/ztho1337/discord-aio" target="_blank">report-discord-aio</a><br /> 
  </span> <br /> <br />
`;
  command.value = "";
}

function cd2() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
    <input disabled class='app-command' type='text' value='cd 2' /> <br /><br /> 
    Nazwa projektu: <span class="bold">currencyConverter</span><br /> 
    Opis projektu: <span class="bold">Konwerter walut z Polskiej zlotowki na 6 dostepnych walut. Projekt jest w trakcie rozwijania.</span><br /> 
    Stan projektu: <span class="bold">W trakcie rozwijania.</span><br />
    Link Preview: <a href="https://cc.ztho.me" target="_blank">preview-currency-converter</a><br /> 
    Link Repozytorium: <a href="https://github.com/ztho1337/currencyConverter"target="_blank">repo-currency-converter</a><br /> 
  </span> <br /> <br />
`;
  command.value = "";
}

function cd3() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
    <input disabled class='app-command' type='text' value='cd 3' /> <br /><br /> 
    Nazwa projektu: <span class="bold">FliSki</span><br /> 
    Opis projektu: <span class="bold">Firma zajmująca się oprogramowaniem do śledzenia samolotów. Aktualnie jestesmy w trakcie tworzenia wlasnego API do sledzenia samolotow.</span><br /> 
    Stan projektu: <span class="bold">W trakcie rozwijania.</span><br />
    Link Preview: <a href="https://fliskidev.github.io" target="_blank">preview-fliski</a><br /> 
    Link Repozytorium: <a href="https://github.com/FliSkiDev" target="_blank">repo-fliski</a><br /> 
  </span> <br /> <br />
`;
  command.value = "";
}

function socials() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
    <input disabled class='app-command' type='text' value='socials' /> <br /><br /> 
    Moje aktualne social media: <br />
    Github: <a href="https://github.com/ztho1337/" target="_blank">@ztho1337</a> <br />
    Twitter: <a href="https://twitter.com/ztho1337/" target="_blank">@ztho1337</a> <br />
    Twitch: <a href="https://twitch.com/ztho1337/" target="_blank">@ztho1337</a> <br />
    Discord: <a href="https://discord.gg/zWmEDQ67em" target="_blank">ztho#7799</a> <br />
  </span> <br /> <br />
`;
  command.value = "";
}

function contact() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
    <input disabled class='app-command' type='text' value='contact' /> <br /><br /> 
    Witaj, aby sie ze mna skontaktowac mozesz uzyc dwoch opcji. <br />
    Pierwsza opcja jest skontaktowanie sie ze mna za pomoca e-mailu lub, <br />
    druga opcja jest skontaktowanie sie ze mna za pomoca contact forma. <br /> <br />
    Kontakt za pomoca e-mail: <a href="mailto:office@ztho.me" target="_blank">office@ztho.me</a> <br />
    ContactForm za pomoca polecenia: <span onClick="contactform()" class="bold cursor under">contact-form</span>
  </span> <br /> <br />
`;
  command.value = "";
}

function defaultt() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
  <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
    <input disabled class='app-command' type='text' value='${command.value}' /> <br /><br /> 
    Polecenie '${command.value}' nie jest rozpoznawalne jako polecenie wewnetrzne lub zewnetrzne.
  </span> <br /> <br />
`;
  command.value = "";
}

function help() {
  appContent.innerHTML += `
    <span class='app-inputapp'>
      <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span> 
      <input disabled class='app-command' type='text' value='help' /> <br /><br />
      Witaj w aplikacji <span class='secondColor'>ztho.me</span>, <br /> 
      Dozwolone polecenia: <br /> 
      - about <br /> 
      - projects <br /> 
      - socials <br /> 
      - contact <br /> 
      - cls <br /> 
     <br />`;
  command.value = "";
}

function cls() {
  appContent.innerHTML = "";
  command.value = "";
}

function contactform() {
  // appContent.innerHTML += `
  //   <span class='app-inputapp'>
  //     <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span>
  //     <input disabled class='app-command' type='text' value='contact-form' /> <br /><br />
  //     Witaj w sekcji Contact-Form! <br />
  //     Aby wyslac mi wiadomosc wpisz tresc w ponizszych polach. <br /> <br />
  //     Podaj imie: <input class='app-command' type='text' value='' name="name" id="name" /> <br />
  //     Podaj e-mail: <input class='app-command' type='text' value='' name="email" id="email" /> <br />
  //     Tresc: <input class='app-command' type='text' value='' name="content" id="content" /> <br /> <br />
  //     <span class="bold under cursor" onclick="send()">Wyslij</span>  |  <span class="bold under cursor" onclick="cancelform()">Anuluj</span>
  //   </span><br /> <br />
  // `;
  appContent.innerHTML += `
    <span class='app-inputapp'>
      <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span> 
      <input disabled class='app-command' type='text' value='contact-form' /> <br /><br />
      Funkcja contact-form bedzie istniala w przyszlosci.
    </span><br /> <br />
  `;
  command.value = "";
}

function cancelform() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span> 
    <input disabled class='app-command' type='text' value='cancel-form' /> <br /><br />
    Anulowano wysylanie contact-form.
  </span><br /> <br />
`;
  command.value = "";
}

function admin() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span> 
    <input disabled class='app-command' type='text' value='admin' /> <br /><br />
    Wygląda na to, że wiesz zbyt dużo na temat tej strony... Hasło do DevPanelu: 89*(n1K)_@ </br>
    Powodzenia
  </span><br /> <br />
`;
  command.value = "";
}

function send() {
  appContent.innerHTML += `
  <span class='app-inputapp'>
    <span class='maincolor'>office@ztho-me</span>:<span class='com'>~</span>$</span> 
    <input disabled class='app-command' type='text' value='send-form' /> <br /><br />
    Wysylanie contact-form jest aktualnie niedostepne! <br />
    Usterka zostanie naprawiona dnia <span class="bold">[ 02.12.2022 ]</span> 
  </span><br /> <br />
`;
  command.value = "";
}
