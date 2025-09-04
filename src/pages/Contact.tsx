import React from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const scheduleData = [
    { day: 'Lunes', hours: '9:00–14:00, 16:00–20:00' },
    { day: 'Martes', hours: '9:00–14:00, 16:00–20:00' },
    { day: 'Miércoles', hours: '9:00–14:00, 16:00–20:00' },
    { day: 'Jueves', hours: '9:00–14:00, 16:00–20:00' },
    { day: 'Viernes', hours: '9:00–14:00, 16:00–20:00' },
    { day: 'Sábado', hours: '9:00–14:00' },
    { day: 'Domingo', hours: 'Cerrado' }
  ]

  return (
    <div className="min-h-screen bg-gradient-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-accent">
            Contacta con <span className="text-primary">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de expertos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone & WhatsApp */}
            <div className="bg-gradient-subtle p-8 rounded-2xl border border-elegant shadow-elegant hover:shadow-primary transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Teléfono</h3>
                  <p className="text-gray-300 mb-4">Llámanos directamente para consultas inmediatas</p>
                  <a 
                    href="tel:+34630841047" 
                    className="text-primary hover:text-secondary transition-colors duration-300 font-medium text-lg"
                  >
                    +34 630 84 10 47
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-subtle p-8 rounded-2xl border border-elegant shadow-elegant hover:shadow-primary transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
                  <p className="text-gray-300 mb-4">Escríbenos por WhatsApp para una respuesta rápida</p>
                  <a 
                    href="https://wa.me/34630841047" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors duration-300 font-medium text-lg"
                  >
                    +34 630 84 10 47
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-subtle p-8 rounded-2xl border border-elegant shadow-elegant hover:shadow-primary transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300 mb-4">Envíanos un correo electrónico</p>
                  <a 
                    href="mailto:info@fabipro.com" 
                    className="text-primary hover:text-secondary transition-colors duration-300 font-medium text-lg"
                  >
                    info@fabipro.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-gradient-subtle p-8 rounded-2xl border border-elegant shadow-elegant hover:shadow-primary transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Dirección</h3>
                  <p className="text-gray-300 mb-4">Visítanos en nuestras instalaciones</p>
                  <address className="text-primary not-italic text-lg leading-relaxed">
                    Paraje Narcisos, 21, MEDIALEGUA<br />
                    30320 Cuevas de Reyllo, Murcia<br />
                    España
                  </address>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-subtle p-8 rounded-2xl border border-elegant shadow-elegant hover:shadow-primary transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">Horarios de Atención</h3>
                  <div className="space-y-3">
                    {scheduleData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-elegant last:border-b-0">
                        <span className="text-gray-300 font-medium">{item.day}</span>
                        <span className={`font-medium ${
                          item.hours === 'Cerrado' ? 'text-red-400' : 'text-primary'
                        }`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-4 italic">
                    Horarios confirmados por la empresa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-subtle p-8 rounded-2xl border border-elegant shadow-elegant">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Nuestra Ubicación</h3>
              <div className="relative overflow-hidden rounded-xl shadow-elegant">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.123456789!2d-1.234567!3d37.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzE1LjYiTiAxwrAxNCcwNC40Ilc!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de FABI PRO - Paraje Narcisos, 21, MEDIALEGUA, 30320 Cuevas de Reyllo, Murcia"
                  className="w-full h-96 rounded-lg"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://share.google/2xFhuCXL0iA2ZRcw4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-subtle hover:shadow-elegant"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle p-12 rounded-2xl border border-elegant shadow-elegant">
            <h2 className="text-3xl font-bold text-white mb-4 font-accent">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+34630841047"
                className="btn-primary px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-subtle hover:shadow-elegant inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar Ahora</span>
              </a>
              <a
                href="https://wa.me/34630841047"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-subtle hover:shadow-elegant inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact