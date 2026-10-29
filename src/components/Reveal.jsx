import React from 'react';
import { motion } from 'framer-motion';

// Animação de entrada suave ao rolar a página
const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
