import React from 'react';
import { motion } from 'framer-motion';
import InfoCards from '../components/InfoCards';

const InternetVsIntranet: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Internet vs Intranet</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dos redes con tecnologías similares pero propósitos opuestos. Descubre cómo coexisten en el entorno corporativo.
        </p>
      </div>
      
      <InfoCards />

      <div className="mt-20 prose prose-invert max-w-none">
        <div className="bg-card p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">Profundización Académica</h3>
          <p className="mb-4 text-muted-foreground">
            Desde una perspectiva técnica, tanto Internet como una Intranet operan bajo la suite de protocolos <strong>TCP/IP</strong>. 
            Sin embargo, la Intranet se distingue por estar ubicada detrás de un Firewall corporativo, residiendo en un espacio de direccionamiento IP privado (RFC 1918), no enrutable directamente desde el exterior sin traducción (NAT).
          </p>
          <p className="text-muted-foreground">
            El desafío de la seguridad moderna (Trabajo Práctico Nº8) reside en permitir que los empleados accedan a los recursos infinitos de Internet para su trabajo, sin abrir brechas que permitan a actores maliciosos infiltrarse en la Intranet sensible.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InternetVsIntranet;