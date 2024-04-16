const imageEles = document.querySelectorAll("img");
imageEles.forEach((img) => {
  img.src = chrome.runtime.getURL(
    `images/image${Math.floor(Math.random() * 6)}.jpg`
  );
});

function replaceWordsStartingWith(letter, replacement) {
  const regex = new RegExp("\\b" + letter + "\\w*\\b", "gi");

  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(regex, replacement);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.childNodes.forEach(replaceText);
    }
  }
  replaceText(document.body);
}

replaceWordsStartingWith("b", "Brendan");

function alertDevin() {
  const alerts = [
    "i am watching you",
    "dont look behind you",
    "i come from the walls",
    "license",
    "tandem read my ass",
  ];
  alert(alerts[Math.floor(Math.random() * alerts.length)]);
}

while (true) {
    setTimeout(alertDevin, Math.random() * (60000 - 30000) + 30000);
}

// function openPopup(url, title, width, height) {
//   const left = (screen.width - width) / 2;
//   const top = (screen.height - height) / 2;
//   const options = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=${width}, height=${height}, top=${top}, left=${left}`;

//   window.open(url, title, options);
// }

//openPopup(chrome.runtime.getURL("popup/popup.html"), "Popup", 400, 300);
