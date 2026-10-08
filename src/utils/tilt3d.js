/**
 * Motor de Profundidade e Efeito 3D (Tilt & Specular Glare)
 * Inspirado nas melhores práticas de Creative Development e Framer
 */
export function init3DEffects() {
  // Apenas ativa efeitos pesados de mouse em dispositivos com ponteiro fino (Desktop)
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const tiltTargets = document.querySelectorAll('[data-tilt-3d]');

  tiltTargets.forEach((card) => {
    // Cria camada de reflexo de luz dinâmico (Specular Glare) caso não exista
    let glare = card.querySelector('.glare-reflection');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'glare-reflection';
      card.appendChild(glare);
    }

    let isHovering = false;
    let bounds;

    const onMouseEnter = () => {
      isHovering = true;
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease-out';
    };

    const onMouseMove = (e) => {
      if (!isHovering || !bounds) return;

      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const percentX = mouseX / bounds.width; // 0 a 1
      const percentY = mouseY / bounds.height; // 0 a 1

      // Ângulo máximo de rotação sutil e elegante
      const maxTilt = parseFloat(card.dataset.tiltMax || '8');
      const tiltX = (0.5 - percentY) * maxTilt;
      const tiltY = (percentX - 0.5) * maxTilt;

      card.style.transform = `perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(8px)`;

      // Posiciona o ponto de luz especular
      if (glare) {
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle 320px at ${percentX * 100}% ${percentY * 100}%, rgba(255, 255, 255, 0.16), transparent 70%)`;
      }
    };

    const onMouseLeave = () => {
      isHovering = false;
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)';

      if (glare) {
        glare.style.opacity = '0';
      }
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}
