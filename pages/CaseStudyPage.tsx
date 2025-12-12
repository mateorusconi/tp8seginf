import React from 'react';
import { motion } from 'framer-motion';
import CaseStudy from '../components/CaseStudy';

const CaseStudyPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Caso de Estudio</h2>
        <p className="text-muted-foreground">
          Análisis de un incidente real y la aplicación de los conceptos de seguridad de Intranet.
        </p>
      </div>

      <CaseStudy />

      <div className="mt-12 text-center p-8 bg-accent/5 rounded-xl border border-border">
        <h3 className="text-xl font-bold mb-4">Conclusión</h3>
        <p className="text-muted-foreground italic">
          "La seguridad en el acceso a Internet no es un producto que se compra, sino un proceso que se gestiona. 
          La combinación de políticas claras, educación del usuario y controles técnicos en capas (Firewall, Proxy, IDS) 
          es la única defensa viable en el panorama actual de amenazas."
        </p>
      </div>
    </motion.div>
  );
};

export default CaseStudyPage;