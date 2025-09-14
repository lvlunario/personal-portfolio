import { motion } from 'framer-motion';

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const AnimatedText = ({ text }: { text: string }) => {
    return (
        <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
        {text.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
                {char}
            </motion.span>
        ))}
        </motion.h1>
    );
};

export default AnimatedText;