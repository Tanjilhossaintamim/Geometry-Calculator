const triangleinput = document.getElementById("tri1");
const triangleinput2 = document.getElementById("tri2");
const triangle_button = document.getElementById("triangle-btn");

triangle_button.addEventListener("click", (e) => {
  const calculate = 0.5 * triangleinput.value * triangleinput2.value;
  console.log(calculate);
  const resultArea = document.getElementById("result-area");
  resultArea.innerText = "";
  resultArea.innerText = `Area is ${calculate}`;
});
