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

const btn = document.getElementById("musicaBtn");
  const audio = document.getElementById("musica");
  const volumenControl = document.getElementById("volumen");
  const volumenValor = document.getElementById("volumenValor");

  // Botón para reproducir/pausar
  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();    
      btn.textContent = "🎵 Escuchando la canción";
    } else {
      audio.pause();
      btn.textContent = "⏸ Canción en pausa";
    }
  });

  // Controlar volumen
  volumenControl.addEventListener("input", () => {
    const volumen = parseFloat(volumenControl.value); // 👈 convertir a número
    audio.volume = volumen;
    volumenValor.textContent = Math.round(volumen * 100) + "%"; // mostrar %
  });

  // Cuando termina la canción, volver al texto inicial
  audio.addEventListener("ended", () => {
    btn.textContent = "🎵 Escuchar canción";
  });





// const btn = document.getElementById("musicaBtn");
// const audio = document.getElementById("musica");

// btn.addEventListener("clik", () => {
//   if (audio.paused) {
//     audio.play();
//     btn.textContent = "Escuchando la cancion";
//   } else {
//     audio.pause();
//     btn.textContent = " Cancion pauseado";
//   }
// });


