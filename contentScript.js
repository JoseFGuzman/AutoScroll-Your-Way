chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, value } = obj;

  if (type === "PLAY") {
    if (value === true) {
      console.log("En movimiento");
      setInterval(() => {
        document.documentElement.scrollTop =
          document.documentElement.scrollTop + 5;
      }, 10);
    }
  }
});
