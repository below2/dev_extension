// const content = document.querySelector("p");

// if (content) {
//   const img = document.createElement("img");
//   img.src = chrome.runtime.getURL("images/image0.jpg");
//   content.insertAdjacentElement("afterend", img);
// }

const textContent = document.body.innerHTML;
const alteredArray = [];
textContent.split(" ").forEach((word) => {
  if (word.charAt(0).toLocaleLowerCase == 'b') {
    word = "Brendan";
    console.log("here");
  }
  alteredArray.push(word);
});
console.log(alteredArray);
const alteredText = alteredArray.join(" ");
document.body.innerHTML = alteredText
console.log(alteredText);