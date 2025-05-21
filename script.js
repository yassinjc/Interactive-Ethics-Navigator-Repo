tsParticles.load("tsparticles", {
  background: { color: "#FFFFFF" },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      push: { quantity: 6 },
      repulse: { distance: 100 },
    },
  },
  particles: {
    color: "#00f2ff",
    links: { enable: true, opacity: 0.3, distance: 200 },
    move: { enable: true, speed: { min: 0.1, max: 0.3 } },
    opacity: { value: { min: 0.3, max: 0.7 } },
    size: { value: { min: 1, max: 3 } },
  },
});

function positionCircles() {
  const circles = document.querySelectorAll('.info-circle');
  const centerCircle = document.querySelector('.principle');
  const centerRect = centerCircle.getBoundingClientRect();
  const centerX = centerRect.left + centerRect.width / 2;
  const centerY = centerRect.top + centerRect.height / 2;
  const radius = 200;
  const circleSize = 80;

  circles.forEach((circle, index) => {
    let angle = (index < 4)
      ? ((index + 1) / 5) * Math.PI - Math.PI / 2
      : ((index - 3) / 5) * Math.PI + Math.PI / 2;

    const x = centerX + radius * Math.cos(angle) - circleSize / 2;
    const y = centerY + radius * Math.sin(angle) - circleSize / 2;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.position = 'absolute';
  });
}

window.addEventListener('load', positionCircles);
window.addEventListener('resize', positionCircles);

window.addEventListener('load', () => {
  document.querySelectorAll('.appear').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 150);
  });
});

const mainView = document.getElementById('main-view');
const overlay = document.getElementById('overlay');
const infoPanel = document.getElementById('info-panel');

document.querySelectorAll('.info-circle').forEach(circle => {
  circle.addEventListener('click', () => {
    const rect = circle.getBoundingClientRect();
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const circleCenterX = rect.left + rect.width / 2;
    const circleCenterY = rect.top + rect.height / 2;
    const deltaX = cx - circleCenterX;
    const deltaY = cy - circleCenterY;
    const scale = 2;

    mainView.style.transform = `translate(${deltaX * scale}px, ${deltaY * scale}px) scale(${scale})`;
    overlay.classList.add('visible');

    document.querySelectorAll('.info-circle').forEach(c => {
      if (c !== circle) c.classList.add('hidden');
    });
    document.querySelector('.principle')?.classList.add('hidden');

    setTimeout(() => {
      circle.classList.add('active');
      infoPanel.classList.add('visible');

      document.querySelectorAll('.circle-title').forEach(t => t.textContent = '');
      document.getElementById('info-title').textContent = circle.dataset.info;
      document.getElementById('info-text').textContent = `Test info over "${circle.dataset.info}".`;

      const titleEl = circle.querySelector('.circle-title');
      if (titleEl) titleEl.textContent = circle.dataset.info;

      const returnButton = circle.querySelector('.circle-return');
      if (returnButton) {
        returnButton.addEventListener('click', (e) => {
          e.stopPropagation();
          mainView.style.transform = 'translate(0, 0) scale(1)';
          overlay.classList.remove('visible');
          infoPanel.classList.remove('visible');

          document.querySelectorAll('.info-circle').forEach(c => {
            c.classList.remove('active');
            c.classList.remove('hidden');
          });

          document.querySelectorAll('.circle-title').forEach(t => t.textContent = '');
          document.querySelector('.principle')?.classList.remove('hidden');
        }, { once: true });
      }
    }, 800);
  });
});