import React from 'react';
import { motion } from 'framer-motion';
import SecurityLevels from '../components/SecurityLevels';
import AccessControlFlow from '../components/AccessControlFlow';

const SecurityPlanning: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12 space-y-20"
    >
      <div>
        <h2 className="text-4xl font-bold mb-8 text-center">Niveles de Seguridad</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground mb-6">
              La seguridad en profundidad es una estrategia que aplica múltiples capas de controles defensivos. Si una capa falla, las otras siguen protegiendo los activos.
            </p>
            <SecurityLevels />
          </div>
          <div className="flex items-center justify-center bg-accent/5 rounded-xl p-8 border border-border">
             <div className="text-center">
               <h3 className="text-2xl font-bold mb-4">Planificación de Accesos</h3>
               <p className="text-sm text-muted-foreground mb-8">
                 Antes de implementar tecnología, se debe definir <strong>quién</strong> necesita acceso a <strong>qué</strong>, <strong>cuándo</strong> y <strong>desde dónde</strong>.
               </p>
               <ul className="text-left space-y-4 max-w-md mx-auto">
                 <li className="flex items-center bg-card p-3 rounded shadow-sm border border-border">
                   <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                   Identificación de activos críticos.
                 </li>
                 <li className="flex items-center bg-card p-3 rounded shadow-sm border border-border">
                   <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                   Clasificación de usuarios y privilegios.
                 </li>
                 <li className="flex items-center bg-card p-3 rounded shadow-sm border border-border">
                   <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                   Definición de vectores de amenaza.
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Arquitectura de Flujo de Datos</h2>
        <AccessControlFlow />
        <p className="text-center text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
          Diagrama simplificado del trayecto de una solicitud web desde la Intranet hacia Internet, pasando por múltiples puntos de inspección y control.
        </p>
      </div>
    </motion.div>
  );
};

export default SecurityPlanning;