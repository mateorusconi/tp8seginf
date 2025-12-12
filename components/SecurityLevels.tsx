import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Server, UserCheck, ChevronDown } from 'lucide-react';

const levels = [
  {
    id: 'firewall',
    title: 'Firewall Perimetral',
    icon: <Shield className="w-5 h-5 text-red-500" />,
    content: "La primera línea de defensa. Filtra el tráfico entrante y saliente basándose en reglas predefinidas, bloqueando accesos no autorizados desde Internet a la Intranet."
  },
  {
    id: 'ids_ips',
    title: 'Sistemas IDS / IPS',
    icon: <Eye className="w-5 h-5 text-blue-500" />,
    content: "Sistemas de Detección (IDS) y Prevención (IPS) de Intrusiones. Analizan el tráfico en tiempo real buscando patrones de ataque conocidos y anomalías."
  },
  {
    id: 'proxy',
    title: 'Servidor Proxy',
    icon: <Server className="w-5 h-5 text-purple-500" />,
    content: "Actúa como intermediario entre los usuarios y la web. Permite filtrar contenido, cachear sitios frecuentes y ocultar la estructura interna de la red."
  },
  {
    id: 'auth',
    title: 'Autenticación Multifactor (MFA)',
    icon: <UserCheck className="w-5 h-5 text-green-500" />,
    content: "Exige más de una prueba de identidad (algo que sabes, algo que tienes, algo que eres) para acceder a recursos críticos de la Intranet."
  },
  {
    id: 'policies',
    title: 'Políticas de Navegación',
    icon: <FileText className="w-5 h-5 text-orange-500" />,
    content: "Reglas administrativas que definen el uso aceptable de Internet. Incluye bloqueo de redes sociales, sitios de riesgo y descargas no autorizadas."
  },
  {
    id: 'encryption',
    title: 'Encriptación y VPN',
    icon: <Lock className="w-5 h-5 text-orange-500" />,
    content: "Uso de protocolos seguros (HTTPS, SSL/TLS) y Redes Privadas Virtuales para asegurar que los datos viajen cifrados entre la organización y el exterior."
  }
];

const SecurityLevels: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('firewall');

  return (
    <div className="space-y-4">
      {levels.map((level) => (
        <div key={level.id} className="border border-border rounded-lg bg-card overflow-hidden">
          <button
            onClick={() => setOpenId(openId === level.id ? null : level.id)}
            className="w-full flex items-center justify-between p-4 hover:bg-accent/50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              {level.icon}
              <span className="font-semibold text-lg">{level.title}</span>
            </div>
            <motion.div
              animate={{ rotate: openId === level.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openId === level.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 pt-0 text-muted-foreground border-t border-border/50 bg-accent/10">
                  <p className="mt-2">{level.content}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default SecurityLevels;