// const content = document.querySelector("p");

// if (content) {
//   const img = document.createElement("img");
//   img.src = chrome.runtime.getURL("images/image0.jpg");
//   content.insertAdjacentElement("afterend", img);
// }

// let textContent = document.body.innerHTML;
// console.log(document.body.innerText);
// const arrTextContent = [];
// textContent.split(" ").forEach((word) => {
//     if (word.charAt(0).toLowerCase('en-US') === 'b') {
//         word = "Brendan";
//     }
//   arrTextContent.push(word);
// });
// textContent = arrTextContent.join(" ");
// document.body.innerHTML = textContent;

const allEles = document.querySelectorAll(":not(script)");
for (var i = 0; i < allEles.length; i++) {
  console.log(allEles.item(i).innerHTML);
  const eleInnerText = [];
  allEles
    .item(i)
    .innerText.split(" ")
    .forEach((word) => {
      if (word.charAt(0).toLowerCase("en-US") === "b") {
        word = "Brendan";
      }
      eleInnerText.push(word);
    });
  allEles.item(i).innerText = eleInnerText.join(" ");
}
