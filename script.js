const overlay = document.querySelector(".overlay");
const container = document.querySelector(".container");
const sb = document.querySelector("#sociobiology");
const ew = document.querySelector("#evolutionism");
const te = document.querySelector("#existential-thomism");
const dk = document.querySelector("#cartesian-dualism");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");
const descriptions = [d1, d2, d3, d4];

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");

setTimeout(function () {
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  })
}, 1000);

function displayDescription(descNb) {
  return function () {
    if (descNb.style.display != "block") {
      descNb.style.display = "block";
      container.style.transition = "1s";
      container.style.filter = "blur(5px)";
    }
  }
}

function hideDescription(descNb) {
  return function () {
    descNb.style.display = "none";
    container.style.filter = "blur(0)";
  }
}

sb.addEventListener("click", displayDescription(d1));
ew.addEventListener("click", displayDescription(d2));
te.addEventListener("click", displayDescription(d3));
dk.addEventListener("click", displayDescription(d4));

b1.addEventListener("click", hideDescription(d1));
b2.addEventListener("click", hideDescription(d2));
b3.addEventListener("click", hideDescription(d3));
b4.addEventListener("click", hideDescription(d4));

window.onclick = function (e) {
  if (!e.target.matches(".description") && e.target.matches(".fullscreen-container")) {
    for (let desc of descriptions) {
      if (desc.style.display === "block") {
        desc.style.display = "none";
        container.style.filter = "blur(0)";
      }
    }
  }
}