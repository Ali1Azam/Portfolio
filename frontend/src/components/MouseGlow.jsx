import React, { useEffect, useRef } from 'react';

const MouseGlow = () => {
  const glowRef = useRef(null);
  
  useEffect(() => {
    const mouseGlow = glowRef.current;
    if (!mouseGlow) return;
    
    if ('ontouchstart' in window) {
      mouseGlow.style.display = 'none';
      return;
    }

    let glowX = 0, glowY = 0;
    let currentX = 0, currentY = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      glowX = e.clientX;
      glowY = e.clientY;
    };

    const moveGlow = () => {
      currentX += (glowX - currentX) * 0.08;
      currentY += (glowY - currentY) * 0.08;
      mouseGlow.style.left = currentX + 'px';
      mouseGlow.style.top = currentY + 'px';
      animationFrameId = requestAnimationFrame(moveGlow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    moveGlow();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div className="mouse-glow" id="mouseGlow" ref={glowRef}></div>;
};

export default MouseGlow;
