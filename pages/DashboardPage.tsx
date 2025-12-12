import React from 'react';
import { motion } from 'framer-motion';
import DashboardSOC from '../components/DashboardSOC';

const DashboardPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Centro de Operaciones de Seguridad (SOC)</h2>
          <p className="text-muted-foreground">Monitoreo en tiempo real de la frontera Intranet-Internet.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Sistema en línea
        </div>
      </div>
      
      <DashboardSOC />
    </motion.div>
  );
};

export default DashboardPage;