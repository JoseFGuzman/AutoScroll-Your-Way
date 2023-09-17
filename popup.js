const botonIniciar = document.getElementById("Iniciar");

botonIniciar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("boton Iniciar");

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "PLAY",
      value: true,
    });
  });
});
