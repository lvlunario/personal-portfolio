import { motion, useInView } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef } from 'react';

// This component wraps content and animates it when it enters the viewport.
export default function AnimatedSection({ children }: { children: ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div ref={ref}>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.7 }}
            >
            {children}
            </motion.div>
        </div>
    );
}
