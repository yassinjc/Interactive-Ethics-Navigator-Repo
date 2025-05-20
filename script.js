const options = {
  background: {
    color: "#FFFFFF",
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 6,
      },
      repulse: {
        distance: 100,
      },
    },
  },
  particles: {
    color: "#00f2ff",
    links: {
      enable: true,
      opacity: 0.3,
      distance: 200,
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 0.3 },
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
};

tsParticles.load("tsparticles", options);


function positionCircles() {
  const circles = document.querySelectorAll('.info-circle');
  const centerCircle = document.querySelector('.principle');
  const centerRect = centerCircle.getBoundingClientRect();
  const centerX = centerRect.left + centerRect.width / 2;
  const centerY = centerRect.top + centerRect.height / 2;
  const radius = 200;
  const circleSize = 80;

  circles.forEach((circle, index) => {
    let angle;

    if (index < 4) {
      angle = ((index + 1) / 5) * Math.PI - Math.PI / 2;
    } else {
      angle = ((index - 3) / 5) * Math.PI + Math.PI / 2;
    }

    const x = centerX + radius * Math.cos(angle) - circleSize / 2;
    const y = centerY + radius * Math.sin(angle) - circleSize / 2;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.position = 'absolute';
  });
}

window.addEventListener('load', positionCircles);
window.addEventListener('resize', positionCircles);




