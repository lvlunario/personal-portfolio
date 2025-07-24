import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimatedSection({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.section
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
        className={className}
        >
            {children}
        </motion.section>
    )
}