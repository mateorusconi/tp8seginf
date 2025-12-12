import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Primitives';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';
import { ShieldAlert, Activity, Wifi, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const initialData = Array.from({ length: 20 }, (_, i) => ({
  time: i,
  traffic: 20 + Math.random() * 30,
  threats: Math.random() * 5
}));

const threatCategories = [
  { name: 'Malware', count: 120 },
  { name: 'Phishing', count: 85 },
  { name: 'DDoS', count: 45 },
  { name: 'Intrusión', count: 30 },
];

const alerts = [
  { id: 1, type: 'critical', msg: 'Intento de acceso root fallido', time: '10:42 AM' },
  { id: 2, type: 'warning', msg: 'Tráfico anómalo puerto 445', time: '10:38 AM' },
  { id: 3, type: 'info', msg: 'Actualización de base de virus', time: '10:15 AM' },
];

const DashboardSOC: React.FC = () => {
  const [trafficData, setTrafficData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData(current => {
        const lastTime = current[current.length - 1].time;
        const newPoint = {
          time: lastTime + 1,
          traffic: 20 + Math.random() * 50 + (Math.random() > 0.9 ? 40 : 0), // Random spikes
          threats: Math.random() * 5
        };
        return [...current.slice(1), newPoint];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Estado del Sistema" value="OPERATIVO" icon={<Activity className="text-green-500" />} />
        <StatCard title="Amenazas Bloqueadas" value="1,284" icon={<ShieldAlert className="text-red-500" />} />
        <StatCard title="Ancho de Banda" value="450 Mbps" icon={<Wifi className="text-blue-500" />} />
        <StatCard title="Usuarios Conectados" value="84" icon={<Lock className="text-orange-500" />} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Real-time Traffic */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tráfico de Red en Tiempo Real</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="time" hide />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} 
                  itemStyle={{ color: 'var(--foreground)' }}
                />
                <Area type="monotone" dataKey="traffic" stroke="#f97316" fillOpacity={1} fill="url(#colorTraffic)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Threat Categories */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Amenazas por Categoría</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={threatCategories} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#333" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} stroke="#888" />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} />
                <Bar dataKey="count" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Live Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Alertas Recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <motion.div 
                key={alert.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex items-center justify-between p-3 border border-border rounded-lg bg-accent/10"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${alert.type === 'critical' ? 'bg-red-500' : alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                  <span className="font-medium">{alert.msg}</span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">{alert.time}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const StatCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
  <Card>
    <CardContent className="p-6 flex items-center justify-between">
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className="p-2 bg-accent/20 rounded-full">
        {icon}
      </div>
    </CardContent>
  </Card>
);

export default DashboardSOC;