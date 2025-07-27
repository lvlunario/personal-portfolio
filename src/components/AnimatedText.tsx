import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function AnimatedText({
    text,
    delay = 0,
    className = ''
}: {
    text: string;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.span
            className={`inline-block ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {text}
        </motion.span>
    );
}