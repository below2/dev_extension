const imageEles = document.querySelectorAll("img");
imageEles.forEach((img) => {
  img.src = chrome.runtime.getURL(
    `images/image${Math.floor(Math.random() * 6)}.jpg`
  );
});
content.js

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
  setInterval(alertDevin, Math.random() * (60000 - 30000) + 30000);


