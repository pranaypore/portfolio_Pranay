import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: ['#6366f1', '#ec4899', '#06b6d4', '#8b5cf6'] },
          shape: { type: 'circle' },
          opacity: {
            value: 0.4,
            random: true,
            animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          links: {
            enable: true,
            distance: 140,
            color: '#6366f1',
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            straight: false,
            outModes: 'out',
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.3 } },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
