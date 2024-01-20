let button = document.querySelector(".hex-button");
let code = document.querySelector(".hex-color");
let background = document.querySelector(".hex-color-code");
console.log(button);
console.log(code);

//hex color

button.addEventListener("click", () => {
  let characterset = "0123456789ABCDFabcdef";
  let hexcoloroutout = "";
  for (i = 0, characterlength = characterset.length; i < 6; i++) {
    hexcoloroutout =
      hexcoloroutout +
      characterset.charAt(Math.floor(Math.random() * characterlength));
  }

  code.textContent = `#${hexcoloroutout}`;
  background.style.backgroundColor = `#${hexcoloroutout}`;
});

// copy hexcode

const hex_button_copy = document.querySelector(".hex-button-copy");
function copyhexcolor() {
  navigator.clipboard.writeText(code.textContent);
  alert("copy the code");
}
hex_button_copy.addEventListener("click", () => {
  copyhexcolor();
});

// rgb color

let rgbbutton = document.querySelector(".rgb-button");
let rgbcolor = document.querySelector(".rgb-color-code");

const getRedinputrange = document.querySelector("#Red");
const getGreeninputrange = document.querySelector("#Green");
const getBlueinputrange = document.querySelector("#Blue");
const valueRed = document.querySelector(".valueRed");
const valueGreen = document.querySelector(".valueGreen");
const valueBlue = document.querySelector(".valueBlue");
rgbbutton.addEventListener("click", () => {
  let extredRedvalu = getRedinputrange.value;
  let extredBluevalu = getBlueinputrange.value;
  let extredGreenvalu = getGreeninputrange.value;

  rgbcolor.style.backgroundColor = `rgb(${extredRedvalu},  ${extredBluevalu}  ,${extredGreenvalu})`;

  valueRed.textContent = `${extredRedvalu}`;
  valueGreen.textContent = `${extredGreenvalu}`;
  valueBlue.textContent = `${extredBluevalu}`;
});
//copy rgb

const rgb_button_copy = document.querySelector(".rgb-button-copy");
function copyrgbcolor() {
  let extredRedvalu = getRedinputrange.value;
  let extredBluevalu = getBlueinputrange.value;
  let extredGreenvalu = getGreeninputrange.value;
  navigator.clipboard.writeText(
    `${extredRedvalu} ${extredGreenvalu} ${extredBluevalu}`
  );
  alert("Rgb color the code");
}
rgb_button_copy.addEventListener("click", () => {
  copyrgbcolor();
});
