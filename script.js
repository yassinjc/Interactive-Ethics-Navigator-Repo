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