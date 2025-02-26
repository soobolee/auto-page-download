import {useEffect, useRef} from "react";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const particles = [];
    const colors = ["#61DAFB", "#21a1f1", "#61DAFB", "#21a1f1", "#61DAFB"];
    const context = canvas.getContext("2d");

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      };
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles[i] = createParticle();
        }
      }
    }

    function drawParticles() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        context.beginPath();
        context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        context.fill();
      }
    }

    function animateParticles() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animateParticles);
    }

    for (let i = 0; i < 70; i++) {
      particles.push(createParticle());
    }

    animateParticles();
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0" width={window.innerWidth} height={window.innerHeight}></canvas>;
}

export default ParticleCanvas;
