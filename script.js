let color_code = document.querySelector(".color_code");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

let rgb1 = "#ed43e1";
let rgb2 = "#1146f1";

const hexColorCode = () => {
  let code = "0123456789abcdef";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
};

btn1.addEventListener("click", () => {
  rgb1 = hexColorCode();
  btn1.innerText = rgb1;
  btn1.style.backgroundColor = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  color_code.innerText = ` background-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
});

btn2.addEventListener("click", () => {
  rgb2 = hexColorCode();
  btn2.innerText = rgb2;
  btn2.style.backgroundColor = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  color_code.innerText = ` background-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
});

color_code.addEventListener("click", () => {
  navigator.clipboard.writeText(color_code.innerText);
  alert(`Copyed Sucessfully\n\n ${color_code.innerText}`);
});
