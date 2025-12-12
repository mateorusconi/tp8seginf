import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, Switch, Progress, Badge } from './ui/Primitives';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface PolicyState {
  socialBlock: boolean;
  bandwidthLimit: boolean;
  scheduleControl: boolean;
  strongAuth: boolean;
  contentFilter: boolean;
}

const PoliciesSimulator: React.FC = () => {
  const [policies, setPolicies] = useState<PolicyState>({
    socialBlock: false,
    bandwidthLimit: false,
    scheduleControl: false,
    strongAuth: false,
    contentFilter: false,
  });

  const [metrics, setMetrics] = useState({
    security: 30,
    risk: 70,
    productivity: 50,
  });

  // Calculate metrics based on policies
  useEffect(() => {
    let sec = 20; // Base
    let prod = 60; // Base

    if (policies.socialBlock) { sec += 15; prod += 15; }
    if (policies.bandwidthLimit) { sec += 10; prod += 5; }
    if (policies.scheduleControl) { sec += 10; prod -= 5; } // Too restrictive might annoy
    if (policies.strongAuth) { sec += 25; prod -= 5; } // Extra steps
    if (policies.contentFilter) { sec += 20; prod += 10; }

    // Cap values
    sec = Math.min(100, sec);
    prod = Math.min(100, prod);
    const risk = Math.max(0, 100 - sec);

    setMetrics({ security: sec, risk, productivity: prod });
  }, [policies]);

  const togglePolicy = (key: keyof PolicyState) => {
    setPolicies(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuración de Políticas de Acceso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <PolicyItem 
              label="Bloquear Redes Sociales" 
              desc="Restringe el acceso a Facebook, Instagram, Twitter durante horario laboral."
              checked={policies.socialBlock}
              onChange={() => togglePolicy('socialBlock')}
            />
            <PolicyItem 
              label="Filtrado de Contenido Web" 
              desc="Bloquea sitios categorizados como malware, adultos o juegos."
              checked={policies.contentFilter}
              onChange={() => togglePolicy('contentFilter')}
            />
            <PolicyItem 
              label="Autenticación Fuerte (MFA)" 
              desc="Requiere token o biometría para acceder a la Intranet."
              checked={policies.strongAuth}
              onChange={() => togglePolicy('strongAuth')}
            />
            <PolicyItem 
              label="Control de Ancho de Banda" 
              desc="Limita la velocidad para sitios de streaming (YouTube, Netflix)."
              checked={policies.bandwidthLimit}
              onChange={() => togglePolicy('bandwidthLimit')}
            />
            <PolicyItem 
              label="Acceso por Horarios" 
              desc="Permite acceso remoto solo de 08:00 a 20:00."
              checked={policies.scheduleControl}
              onChange={() => togglePolicy('scheduleControl')}
            />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <motion.div className="sticky top-24 space-y-6" layout>
          <Card className="bg-gradient-to-br from-card to-accent/20 border-orange-500/20">
            <CardHeader>
              <CardTitle>Simulación de Impacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <MetricDisplay 
                label="Nivel de Seguridad" 
                value={metrics.security} 
                color="text-green-500" 
                icon={<CheckCircle className="w-5 h-5 text-green-500" />}
              />
              <MetricDisplay 
                label="Nivel de Riesgo" 
                value={metrics.risk} 
                color="text-red-500" 
                icon={<AlertTriangle className="w-5 h-5 text-red-500" />}
              />
              <MetricDisplay 
                label="Productividad Estimada" 
                value={metrics.productivity} 
                color="text-blue-500" 
                icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
              />
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  {metrics.security > 80 
                    ? "Configuración óptima para alta seguridad." 
                    : metrics.security > 50 
                    ? "Nivel aceptable, considere reforzar autenticación." 
                    : "Riesgo crítico. Active más controles."}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

const PolicyItem = ({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: () => void }) => (
  <div className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:bg-accent/50 hover:border-border transition-all">
    <div className="space-y-1 mr-4">
      <h4 className="font-semibold">{label}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
    <Switch checked={checked} onCheckedChange={onChange} />
  </div>
);

const MetricDisplay = ({ label, value, color, icon }: { label: string; value: number; color: string; icon: React.ReactNode }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium text-sm">{label}</span>
      </div>
      <span className={`font-bold ${color}`}>{value}%</span>
    </div>
    <Progress value={value} className="h-2" />
  </div>
);

export default PoliciesSimulator;