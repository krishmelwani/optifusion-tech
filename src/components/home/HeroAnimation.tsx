import { useEffect, useRef } from 'react';

// Warm-themed animation with your custom palette
const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 500 * dpr;
    canvas.height = 500 * dpr;
    ctx.scale(dpr, dpr);

    let frame = 0;
    const circles: { x: number; y: number; radius: number; speed: number; color: string }[] = [];

    for (let i = 0; i < 20; i++) {
      circles.push({
        x: Math.random() * 500,
        y: Math.random() * 500,
        radius: Math.random() * 30 + 10,
        speed: Math.random() * 0.7 + 0.3,
        color: [
          '#A56F76', // Mauve
          '#F4DDC9', // Soft beige
          '#704F55', // Maroon
          'rgba(165, 111, 118, 0.5)', // Mauve translucent
          'rgba(244, 221, 201, 0.5)'  // Beige translucent
        ][Math.floor(Math.random() * 5)]
      });
    }

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, 500, 500);

      ctx.fillStyle = 'rgba(242, 239, 231, 0.1)';
      ctx.fillRect(0, 0, 500, 500);

      circles.forEach((circle) => {
        circle.y += circle.speed;
        if (circle.y > 500 + circle.radius) {
          circle.y = 0 - circle.radius;
          circle.x = Math.random() * 500;
        }
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });

      ctx.strokeStyle = 'rgba(165, 111, 118, 0.2)'; // Mauve translucent for lines
      ctx.lineWidth = 1;

      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(circles[i].x, circles[i].y);
            ctx.lineTo(circles[j].x, circles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-[500px] h-[500px]"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default HeroAnimation;
