const content = document.querySelector("p");
console.log(content.id);

if (content) {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("images/image0.jpg");
  content.insertAdjacentElement("afterend", img);
}
