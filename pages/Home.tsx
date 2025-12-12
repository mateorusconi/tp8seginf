import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background"
    >
      <Hero />
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Por qué es vital distinguir Internet de Intranet?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En el mundo empresarial moderno, la información es el activo más valioso. 
            Comprender la frontera entre la red pública (Internet) y la red privada (Intranet) 
            es el primer paso para construir una arquitectura de ciberseguridad robusta. 
            Nuestro enfoque en el TP8 analiza cómo proteger este límite mediante políticas, 
            hardware y software especializado.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;