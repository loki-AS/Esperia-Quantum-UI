import React from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';

// Apple / Samsung-inspired signature cubic-bezier curve: FAST -> SMOOTH -> SOFT SETTLE
export const cinematicEase = [0.16, 1, 0.3, 1] as const;
export const gentleEase = [0.25, 0.1, 0.25, 1] as const;

/**
 * Top viewport scroll progress indicator (ultra-thin, ambient gradient)
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[999] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #DE3D5B 0%, #F56F6A 45%, #2EB89E 100%)',
        boxShadow: '0 0 10px rgba(222, 61, 91, 0.5)'
      }}
    />
  );
}

/**
 * Cinematic viewport scroll reveal
 */
interface CinematicRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}

export function CinematicReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.45,
  distance = 16,
  className = '',
  amount = 0.05,
  once = true
}: CinematicRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: cinematicEase
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word clip reveal for high-impact hero headings
 */
interface CinematicHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
}

export function CinematicHeading({
  children,
  className = '',
  delay = 0.1,
  as: Component = 'div'
}: CinematicHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = Component as any;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionComponent = (motion as any)[Component] || motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 0.8,
        delay,
        ease: cinematicEase
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Interactive button with spring micro-interactions
 */
interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function MotionButton({
  children,
  className = '',
  ...props
}: MotionButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      whileHover={shouldReduceMotion ? undefined : { scale: 1.025, y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.975 }}
      transition={{ duration: 0.2, ease: cinematicEase }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}

/**
 * Interactive anchor link with spring micro-interactions
 */
interface MotionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export function MotionLink({
  children,
  className = '',
  ...props
}: MotionLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      whileHover={shouldReduceMotion ? undefined : { scale: 1.025, y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.975 }}
      transition={{ duration: 0.2, ease: cinematicEase }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.a>
  );
}

/**
 * Interactive card with subtle elevation and depth shift
 */
interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverElevation?: boolean;
}

export function MotionCard({
  children,
  className = '',
  hoverElevation = true,
  ...props
}: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        shouldReduceMotion || !hoverElevation
          ? undefined
          : {
              y: -5,
              transition: { duration: 0.35, ease: cinematicEase }
            }
      }
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}

/**
 * 3D Interactive Card with subtle mouse-follow tilt and specular sheen
 */
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 4,
  glare = true,
  ...props
}: TiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt(prev => ({ ...prev, x: 0, y: 0, isHovered: false }));
  };

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformPerspective: 1000,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 25,
      }}
      className={`relative transform-gpu ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...(props as any)}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: tilt.isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

/**
 * Subtle organic floating breath animation for 3D graphics (anti-gravity sensation)
 */
export function FloatingBreath({
  children,
  className = '',
  yRange = [-7, 7],
  duration = 5.5,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  yRange?: [number, number];
  duration?: number;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [yRange[0], yRange[1], yRange[0]],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Subtle scroll parallax wrapper
 */
interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({
  children,
  offset = 20,
  className = ''
}: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative overflow-visible ${className}`}>
      <motion.div style={{ y, willChange: 'transform' }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Route page transition wrapper for seamless crossfades
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.35,
        ease: cinematicEase
      }}
      className="w-full flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
