import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Primitives';
import { Globe, Shield, Network, Zap } from 'lucide-react';

const InfoCards: React.FC = () => {
  const cards = [
    {
      title: "Internet",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      description: "Red global descentralizada que conecta millones de dispositivos. Acceso público y universal, pero con mayores riesgos de seguridad.",
      details: ["Acceso Público", "Alcance Mundial", "Protocolos TCP/IP Estándar"]
    },
    {
      title: "Intranet",
      icon: <Network className="w-8 h-8 text-orange-500" />,
      description: "Red privada dentro de una organización. Utiliza tecnología de Internet pero está restringida a usuarios autorizados.",
      details: ["Acceso Privado", "Uso Interno", "Mayor Control y Seguridad"]
    },
    {
      title: "Diferencias Clave",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      description: "Mientras Internet es pública y masiva, la Intranet es privada y controlada. La seguridad es la principal barrera entre ambas.",
      details: ["Público vs Privado", "Inseguro vs Seguro", "Global vs Organizacional"]
    },
    {
      title: "Seguridad Crítica",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      description: "La intersección entre ambas requiere Firewalls, Proxies y DMZ para evitar intrusiones y fugas de datos.",
      details: ["Firewall Perimetral", "VPN", "Autenticación Robusta"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full border-t-4 border-t-orange-500 hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-background rounded-full border shadow-sm">
                {card.icon}
              </div>
              <CardTitle className="text-xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{card.description}</p>
              <ul className="space-y-2">
                {card.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default InfoCards;