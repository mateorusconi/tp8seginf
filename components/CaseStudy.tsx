import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Primitives';
import { CheckCircle, AlertOctagon, RefreshCw } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12 py-8">
      {/* Problem */}
      <div className="relative pl-8 md:pl-12">
        <span className="absolute -left-[9px] top-0 bg-background border-2 border-red-500 rounded-full p-1">
          <AlertOctagon className="w-4 h-4 text-red-500" />
        </span>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-red-500/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-red-500">El Problema: Ransomware en Hospital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                En 2020, un importante hospital sufrió un ataque de ransomware que encriptó bases de datos de pacientes. 
                El vector de ataque fue un correo de phishing abierto por un empleado administrativo con acceso a la red interna.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Sistemas críticos fuera de línea por 48hs.</li>
                <li>Pérdida temporal de historias clínicas.</li>
                <li>Riesgo vital para pacientes en urgencias.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Solution */}
      <div className="relative pl-8 md:pl-12">
        <span className="absolute -left-[9px] top-0 bg-background border-2 border-blue-500 rounded-full p-1">
          <RefreshCw className="w-4 h-4 text-blue-500" />
        </span>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-blue-500/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-500">La Solución Implementada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Se implementó una segmentación agresiva de la red (Intranet médica vs Administrativa) y autenticación MFA obligatoria.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-accent/10 p-3 rounded text-sm">
                  <strong>Segmentación VLAN:</strong> Aislar equipos médicos de Internet.
                </div>
                <div className="bg-accent/10 p-3 rounded text-sm">
                  <strong>Proxy Web:</strong> Bloqueo de descargas de ejecutables.
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Result */}
      <div className="relative pl-8 md:pl-12">
        <span className="absolute -left-[9px] top-0 bg-background border-2 border-green-500 rounded-full p-1">
          <CheckCircle className="w-4 h-4 text-green-500" />
        </span>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-green-500/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-green-500">Resultados e Impacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                La superficie de ataque se redujo en un 85%. Los intentos posteriores de phishing fueron contenidos en el "sandbox" del correo y no llegaron a afectar la base de datos central.
              </p>
              <p className="text-sm font-semibold">Lección aprendida: La seguridad perimetral no es suficiente; se requiere seguridad en profundidad.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;