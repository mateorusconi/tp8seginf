import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/30 py-8 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h4 className="font-semibold text-foreground mb-2">Integrantes del Grupo</h4>
        <p className="text-muted-foreground text-sm font-medium mb-4">
          Rusconi Mateo &bull; Ruiz Paez Nicolas Jose &bull; Mauricio Paez Ferrer
        </p>
        <p className="text-muted-foreground text-xs opacity-70">
          &copy; {new Date().getFullYear()} UTN - Trabajo Práctico Nº8 - Seguridad Corporativa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;