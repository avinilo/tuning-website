import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Settings, Gauge, Wrench, Shield, Award, Users, Star, CheckCircle, Target, TrendingUp, Clock, Trophy, Car, FileText, Search, Cpu, MessageCircle } from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      icon: Gauge,
      title: 'MÁXIMO RENDIMIENTO',
      description: 'Optimización extrema para liberar todo el potencial oculto de tu máquina'
    },
    {
      icon: Shield,
      title: 'SEGURIDAD ABSOLUTA',
      description: 'Modificaciones profesionales que mantienen la integridad del motor'
    },
    {
      icon: Cpu,
      title: 'TECNOLOGÍA AVANZADA',
      description: 'Más de 10 años dominando la reprogramación de ECUs y TCUs'
    }
  ]

  const services = [
    {
      name: 'STAGE 1 TUNING',
      description: 'Despertar inicial de la bestia',
      price: '€299.00',
      badge: 'MÁS POPULAR',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center'
    },
    {
      name: 'STAGE 2 TUNING',
      description: 'Potencia extrema sin límites',
      price: '€499.00',
      badge: 'AVANZADO',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&crop=center'
    },
    {
      name: 'TCU TUNING',
      description: 'Control total de la transmisión',
      price: '€399.00',
      badge: 'ESPECIALIZADO',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&crop=center'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-primary">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop&crop=center')`}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/90 via-dark-primary/70 to-transparent">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-display mb-6 animate-fade-in">
            <span className="text-primary">TUNING</span><br /><span className="text-white animate-pulse">EXTREMO</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 animate-pulse"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-text-secondary leading-relaxed animate-fade-in-up">
            <span className="text-primary font-semibold">LIBERA EL PODER OCULTO</span> de tu máquina con nuestros servicios de<span className="text-white font-semibold"> reprogramación extrema</span> y<span className="text-accent font-semibold"> optimización profesional</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-in-left">
            <Link to="/products" className="btn-primary px-10 py-4 text-lg font-bold uppercase tracking-wider inline-flex items-center group hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />EXPLORAR SERVICIOS<ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/register" className="btn-secondary px-10 py-4 font-bold text-lg uppercase tracking-wider hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300">UNIRSE AHORA</Link>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">Vehículos Tuneados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+40%</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">Potencia Extra</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">Años Experiencia</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-corporate rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-corporate rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display text-white mb-6">
              <span className="text-primary">¿POR QUÉ</span> <span className="text-white">ELEGIRNOS?</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Somos los <span className="text-primary font-semibold">MAESTROS</span> de la optimización extrema con tecnología de vanguardia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 bg-gradient-dark rounded-xl border border-elegant hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 hover-elegant animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-primary mb-6 flex justify-center group-hover:animate-pulse">
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="text-h4 text-white mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-primary">NUESTROS</span> <span className="text-white">SERVICIOS</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Servicios de <span className="text-white font-semibold">TUNING EXTREMO</span> adaptados a tu sed de velocidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-dark-secondary rounded-xl border border-elegant overflow-hidden hover:border-primary hover:shadow-elegant transition-all duration-500 hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-text-secondary mb-4 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold text-white">
                      {service.price}
                    </span>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/30">
                      {service.badge}
                    </span>
                  </div>
                  <Link
                    to="/products"
                    className="w-full btn-primary py-3 px-4 font-bold text-center block uppercase tracking-wider hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300"
                  >
                    VER DETALLES
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="btn-primary px-10 py-4 font-bold text-lg uppercase tracking-wider inline-flex items-center group hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300"
            >
              <Settings className="mr-3 h-6 w-6 group-hover:animate-spin" />
              TODOS LOS SERVICIOS
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section - Completely Redesigned */}
      <section className="py-24 bg-dark-secondary relative overflow-hidden">
        {/* Clean Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-corporate/5 via-transparent to-blue-corporate/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-blue-corporate">NUESTRO</span> <span className="text-white">PROCESO</span>
            </h2>
            <div className="h-1 w-32 bg-blue-corporate mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Un proceso <span className="text-blue-corporate font-semibold">EXTREMO</span> y profesional para desatar la bestia en tu vehículo
            </p>
          </div>
          
          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                step: '1',
                title: 'CONSULTA',
                description: 'Analizamos tu máquina y tus ambiciones de velocidad'
              },
              {
                step: '2',
                title: 'DIAGNÓSTICO',
                description: 'Evaluamos cada componente para maximizar el potencial'
              },
              {
                step: '3',
                title: 'OPTIMIZACIÓN',
                description: 'Reprogramación extrema de ECU para rendimiento brutal'
              },
              {
                step: '4',
                title: 'ENTREGA',
                description: 'Tu bestia lista para dominar las calles'
              }
            ].map((item, index) => (
              <div key={index} className="group text-center relative">
                {/* Connection Line for Desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-corporate/60 to-transparent z-0"></div>
                )}
                
                {/* Step Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 rounded-full bg-blue-corporate flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-corporate/30 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-blue-corporate transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary group-hover:text-white transition-colors duration-300 leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-blue-corporate/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom Accent */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-2 text-blue-corporate">
              <div className="w-8 h-0.5 bg-blue-corporate rounded-full"></div>
              <span className="text-sm font-semibold uppercase tracking-widest">PROCESO PROFESIONAL</span>
              <div className="w-8 h-0.5 bg-blue-corporate rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-primary">¿LISTO PARA</span><br /><span className="text-white">LIBERAR LA BESTIA?</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Únete a <span className="text-primary font-semibold">MILES DE PILOTOS</span> que ya han desatado el poder oculto de sus máquinas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/register" className="btn-primary px-10 py-4 text-lg font-bold uppercase tracking-wider inline-flex items-center group hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300">
              <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              COMENZAR AHORA
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/products" className="btn-secondary px-10 py-4 font-bold text-lg uppercase tracking-wider inline-flex items-center group hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300">
              VER SERVICIOS
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group text-center p-6 bg-dark-secondary/50 rounded-xl border border-primary/20 hover:border-primary hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:animate-pulse">1000+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider group-hover:text-white transition-colors">Bestias Liberadas</div>
            </div>
            <div className="group text-center p-6 bg-dark-secondary/50 rounded-xl border border-secondary/20 hover:border-secondary hover:shadow-secondary/20 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-secondary mb-2 group-hover:animate-pulse">98%</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider group-hover:text-white transition-colors">Satisfacción Total</div>
            </div>
            <div className="group text-center p-6 bg-dark-secondary/50 rounded-xl border border-accent/20 hover:border-accent hover:shadow-accent/20 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-pulse">24h</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider group-hover:text-white transition-colors">Transformación Rápida</div>
            </div>
            <div className="group text-center p-6 bg-dark-secondary/50 rounded-xl border border-primary/20 hover:border-primary hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:animate-pulse">10+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider group-hover:text-white transition-colors">Años Dominando</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-primary">ÚNETE A NUESTRA</span><br />
            <span className="text-white">COMUNIDAD DE WHATSAPP</span>
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            ¿Tienes preguntas? Únete a nuestra <span className="text-primary font-semibold">comunidad</span> de profesionales del tuning y <span className="text-white font-semibold">resuelve dudas</span> al instante.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="https://wa.me/34630841047"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg font-bold uppercase tracking-wider inline-flex items-center group hover:scale-105 shadow-subtle hover:shadow-elegant transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              UNIRSE AL GRUPO
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;