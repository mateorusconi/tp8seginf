import React from 'react';
import { motion } from 'framer-motion';
import PoliciesSimulator from '../components/PoliciesSimulator';

const Policies: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Simulador de Políticas de Seguridad</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          La seguridad es un balance constante entre protección, funcionalidad y facilidad de uso. 
          Interactúa con el simulador para ver cómo las diferentes políticas afectan el riesgo y la productividad de la organización.
        </p>
      </div>
      
      <PoliciesSimulator />

      <div className="mt-16 bg-card border border-border p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">La Importancia de la Política de Uso Aceptable (AUP)</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Más allá de los controles técnicos configurados arriba, la base legal y administrativa es la AUP. 
          Este documento debe ser firmado por todos los empleados y define claramente las expectativas de comportamiento digital, 
          las consecuencias del mal uso de los recursos y los procedimientos de monitoreo que la empresa puede ejercer.
        </p>
      </div>
    </motion.div>
  );
};

export default Policies;