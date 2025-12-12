import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldAlert, Server, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

const AccessControlFlow: React.FC = () => {
  const nodes = [
    { id: 'user', label: 'Usuario Interno', icon: User, color: 'text-gray-400' },
    { id: 'proxy', label: 'Proxy / Filtro Web', icon: Server, color: 'text-purple-500' },
    { id: 'firewall', label: 'Firewall Corporativo', icon: ShieldCheck, color: 'text-red-500' },
    { id: 'ids', label: 'IDS / IPS', icon: ShieldAlert, color: 'text-yellow-500' },
    { id: 'internet', label: 'Internet', icon: Globe, color: 'text-blue-500' },
  ];

  return (
    <div className="bg-card p-8 rounded-xl border border-border shadow-inner overflow-x-auto">
      <h3 className="text-xl font-bold mb-8 text-center">Flujo de Acceso Seguro</h3>
      <div className="flex items-center justify-between min-w-[800px] relative">
        {/* Connection Line Background */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-border -z-10 -translate-y-1/2" />

        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <React.Fragment key={node.id}>
              <motion.div
                className="relative group z-10"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-24 h-24 bg-background border-2 border-border rounded-full flex flex-col items-center justify-center shadow-lg group-hover:border-orange-500 transition-colors">
                  <Icon className={`w-8 h-8 ${node.color} mb-2`} />
                  <span className="text-xs text-center font-semibold px-2">{node.label}</span>
                </div>
                
                {/* Animated Tooltipish effect */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs p-2 rounded border shadow-lg pointer-events-none z-20">
                   {node.id === 'user' && "Solicita acceso a una URL"}
                   {node.id === 'proxy' && "Verifica políticas de contenido y caché"}
                   {node.id === 'firewall' && "Permite/Deniega puertos y protocolos"}
                   {node.id === 'ids' && "Escanea buscando patrones maliciosos"}
                   {node.id === 'internet' && "Destino final de la solicitud"}
                </div>
              </motion.div>

              {index < nodes.length - 1 && (
                <motion.div 
                  className="flex-1 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="text-orange-500 w-6 h-6" />
                  </motion.div>
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Simulation Packet */}
      <div className="relative h-2 mt-8 min-w-[800px]">
         <motion.div
           className="w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_10px_#fb923c] absolute top-0"
           animate={{ left: ["0%", "100%"] }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         />
      </div>
    </div>
  );
};

export default AccessControlFlow;