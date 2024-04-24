/* Created by Tivotal */

let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let tail = [];

/* rgba(0,255,255,1) */

function draw() {
  ctx.fillStyle = "rgba(0,0,0,.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //drawing mouse tail
  for (let i = 0; i < tail.length; i++) {
    ctx.beginPath();
    ctx.arc(tail[i].x, tail[i].y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#7cff01";
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", (event) => {
  //getting x and y co-ordinates of mouse cursor
  let x = event.x;
  let y = event.y;

  //adding mouse co-ordinates to an array
  tail.push({ x, y });

  //removing first item from tail array
  if (tail.length > 1) {
    tail.shift();
  }
});

//removing mouse tail dot when mouse is out of the window
canvas.addEventListener("mouseout", (event) => {
  //removing first item from tail array
  tail.shift();
});

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

window.onload = () => {
  requestAnimationFrame(draw);
};
