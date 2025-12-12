import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Primitives';
import { ArrowRight, Lock, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-500 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-ping"></span>
              Consultoría en Ciberseguridad TP8
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Protegiendo la frontera entre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Internet e Intranet</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Especialistas en arquitectura de red segura, control de acceso y políticas de seguridad para organizaciones modernas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/concepts">
                <Button size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-orange-500/25">
                  Explorar Conceptos <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                  Ver Dashboard SOC
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-card to-background rounded-2xl border border-border shadow-2xl p-8 flex items-center justify-center">
              {/* Abstract Graphic */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] border border-dashed border-orange-500/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[200px] h-[200px] border border-dotted border-blue-500/30 rounded-full"
              />
              
              <div className="grid grid-cols-2 gap-8 z-10">
                 <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-card p-4 rounded-xl shadow-lg border border-border flex flex-col items-center"
                 >
                   <Globe className="w-10 h-10 text-blue-500 mb-2" />
                   <span className="font-bold">Internet</span>
                 </motion.div>
                 <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-card p-4 rounded-xl shadow-lg border border-border flex flex-col items-center"
                 >
                   <Server className="w-10 h-10 text-orange-500 mb-2" />
                   <span className="font-bold">Intranet</span>
                 </motion.div>
                 <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="col-span-2 bg-card p-4 rounded-xl shadow-lg border border-border flex items-center justify-center gap-3"
                 >
                   <Lock className="w-8 h-8 text-green-500" />
                   <div className="text-left">
                     <div className="font-bold text-sm">Estado de Seguridad</div>
                     <div className="text-xs text-green-500">Protección Activa</div>
                   </div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;