import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-corporate">
              FILESECUFB
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Especialistas en reprogramación extrema y tuning de alto rendimiento. 
              Liberamos la bestia que lleva tu vehículo dentro.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-corporate transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-corporate transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-corporate transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-corporate transition-colors duration-300">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-corporate transition-colors duration-300">Nuestro Proceso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-corporate transition-colors duration-300">Servicios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-corporate transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Reprogramación ECU</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Tuning Extremo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Optimización de Rendimiento</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Diagnóstico Avanzado</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-corporate" />
                <span className="text-gray-300 text-sm">+34 630 84 10 47</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-corporate" />
                <span className="text-gray-300 text-sm">info@filesecufb.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-corporate" />
                <span className="text-gray-300 text-sm">Paraje Narcisos, 21, MEDIALEGUA<br />30320 Cuevas de Reyllo, Murcia<br />España</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria y copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 FILESECUFB. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-corporate transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-corporate transition-colors duration-300 text-sm">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-corporate transition-colors duration-300 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;