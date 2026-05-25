import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

export function AnimatedSection({ children, delay = 0, className, style, threshold = 0.15 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedLine({ horizontal = true, delay = 0 }: { horizontal?: boolean; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  if (horizontal) {
    return (
      <motion.div
        ref={ref}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        style={{ height: "1px", background: "rgba(240,90,0,0.4)", transformOrigin: "left center", flex: 1 }}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scaleY: 0 }}
      animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ width: "1px", background: "rgba(240,90,0,0.4)", transformOrigin: "top center", height: "48px", margin: "0 auto" }}
    />
  );
}
