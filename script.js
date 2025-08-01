const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const corazones = [];

for (let i = 0; i < 40; i++) {
  corazones.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random()
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 20, size / 20);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -15, -15);
  ctx.bezierCurveTo(-35, -15, -35, 10, -35, 10);
  ctx.bezierCurveTo(-35, 25, -20, 35, 0, 50);
  ctx.bezierCurveTo(20, 35, 35, 25, 35, 10);
  ctx.bezierCurveTo(35, 10, 35, -15, 15, -15);
  ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 0, 100, ${opacity})`;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  corazones.forEach(h => {
    h.y -= h.speed;
    if (h.y < -50) {
      h.y = height + 50;
      h.x = Math.random() * width;
    }
    drawHeart(h.x, h.y, h.size, h.opacity);
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

document.getElementById("musicaBtn").addEventListener("click", () => {
  const audio = document.getElementById("musica");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
