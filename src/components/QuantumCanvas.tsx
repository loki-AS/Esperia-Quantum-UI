import React, { useEffect, useRef } from 'react';

interface QuantumCanvasProps {
  className?: string;
  particleCount?: number;
  maxDistance?: number;
  colorScheme?: 'teal' | 'coral' | 'mixed';
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
}

export default function QuantumCanvas({
  className = '',
  particleCount = 35,
  maxDistance = 120,
  colorScheme = 'mixed',
  opacity = 0.65,
}: QuantumCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Responsive particle count (fewer on mobile)
    const isMobile = window.innerWidth < 768;
    const effectiveCount = isMobile ? Math.min(particleCount, 16) : particleCount;
    const effectiveDistance = isMobile ? maxDistance * 0.75 : maxDistance;

    // Color definitions
    const palette = {
      teal: ['rgba(62, 165, 148, ', 'rgba(46, 184, 158, ', 'rgba(194, 227, 209, '],
      coral: ['rgba(222, 61, 91, ', 'rgba(245, 111, 106, ', 'rgba(255, 126, 139, '],
      mixed: [
        'rgba(62, 165, 148, ',
        'rgba(46, 184, 158, ',
        'rgba(222, 61, 91, ',
        'rgba(245, 111, 106, ',
        'rgba(255, 255, 255, ',
      ],
    }[colorScheme];

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < effectiveCount; i++) {
      const baseAlpha = 0.2 + Math.random() * 0.45;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.35),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.35),
        radius: 1.2 + Math.random() * 2,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: 0.015 + Math.random() * 0.02,
      });
    }

    // Mouse interaction
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Intersection Observer to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Animation Loop
    let time = 0;
    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        time += 0.02;

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < effectiveDistance) {
              const lineAlpha = (1 - dist / effectiveDistance) * 0.18 * opacity;
              ctx.strokeStyle = `rgba(62, 165, 148, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // Draw & update particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Gentle pulse
          p.alpha = p.baseAlpha + Math.sin(time + i) * 0.15;

          // Mouse reactivity
          const mdx = p.x - mouseX;
          const mdy = p.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const force = (1 - mdist / 140) * 0.8;
            p.x += (mdx / mdist) * force;
            p.y += (mdy / mdist) * force;
          }

          // Move
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges
          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;

          // Render particle with glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0.05, p.alpha * opacity)})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `${p.color}0.5)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [particleCount, maxDistance, colorScheme, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      style={{ opacity }}
    />
  );
}
