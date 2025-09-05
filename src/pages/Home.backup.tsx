import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Zap, Settings, Gauge, Shield, Clock, MessageCircle, ChevronDown, ChevronUp, RotateCcw, RefreshCw, Wrench, Star, Quote, TrendingUp, BarChart3 } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-dark-primary/50 rounded-xl border border-elegant hover:border-primary/50 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center group hover:bg-primary/5 transition-colors duration-300 rounded-xl"
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
          {question}
        </h3>
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-4">
          <p className="text-text-secondary leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Agregar datos estructurados para SEO
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "FILESECUFB",
      "description": "Servicio profesional de modificación de mapas ECU y tuning files. Especialistas en Stage 1, Stage 2, DPF, EGR, AdBlue.",
      "url": "https://filesecufb.com",
      "telephone": "+34630841047",
      "priceRange": "€€€",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ES"
      },
      "sameAs": [
        "https://wa.me/34630841047"
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "Stage 1 Tuning Files",
          "description": "Mapas optimizados para vehículos de serie",
          "price": "299.00",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Stage 2 Performance Maps",
          "description": "Ficheros tuning para vehículos con hardware mejorado",
          "price": "499.00",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "DPF/EGR Solutions",
          "description": "Modificaciones especializadas para sistemas de emisiones",
          "price": "399.00",
          "priceCurrency": "EUR"
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const features = [
    {
      icon: Gauge,
      title: 'Calibración Precisa',
      description: 'Mapas motor optimizados y verificados en banco de potencia'
    },
    {
      icon: Shield,
      title: 'Ficheros Garantizados',
      description: 'Cada tuning file es testado exhaustivamente antes de su entrega'
    },
    {
      icon: Clock,
      title: 'Entrega Express',
      description: 'Modificaciones listas en 30 minutos gracias a nuestra extensa base de datos'
    }
  ]

  const services = [
    {
      name: 'Stage 1 Remap',
      description: 'Calibración óptima para vehículos de serie',
      price: '€299.00',
      badge: 'Más Popular',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center&q=80'
    },
    {
      name: 'Stage 2 Performance',
      description: 'Ficheros tuning para vehículos con hardware mejorado',
      price: '€499.00',
      badge: 'Avanzado',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&crop=center&q=80'
    },
    {
      name: 'Soluciones DPF/EGR',
      description: 'Modificaciones especializadas para sistemas de emisiones',
      price: '€399.00',
      badge: 'Técnico',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&crop=center&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Breadcrumbs Schema para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://filesecufb.com"
          }]
        })}
      </script>
      
      {/* FAQ Schema para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué tipos de tuning files ofrecen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ofrecemos ficheros modificados para Stage 1, Stage 2, solución DPF, EGR off, AdBlue off, pop & bang, hard cut limiter y calibraciones personalizadas."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cuál es el tiempo de entrega?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La entrega de ficheros tuning es inmediata para modelos en nuestra base de datos (30 minutos máximo)."
              }
            },
            {
              "@type": "Question",
              "name": "¿Son seguros los tuning files?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, todas nuestras reprogramaciones respetan los límites seguros del motor."
              }
            }
          ]
        })}
      </script>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop&crop=center&q=80')`}} 
          role="img" 
          aria-label="FILESECUFB - Modificación profesional de mapas ECU"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/90 via-dark-primary/70 to-transparent">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 sm:pb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in tracking-tight">
            <span className="text-primary">FILESECUFB</span><br /><span className="text-white animate-pulse">Tuning Files Profesionales</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 animate-pulse"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-text-secondary leading-relaxed animate-fade-in-up">
            <span className="text-primary font-semibold">Especialistas</span> en modificación de mapas y<span className="text-white font-semibold"> calibración de centralitas</span> con<span className="text-accent font-semibold"> resultados garantizados</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 animate-slide-in-left">
            <Link to="/products" className="btn-primary px-10 py-4 btn-text-style inline-flex items-center group btn-hover-effect shadow-subtle hover:shadow-elegant">
              <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />Ver Servicios<ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/register" className="btn-secondary px-10 py-4 btn-text-style btn-hover-effect shadow-subtle hover:shadow-elegant">Iniciar Sesión</Link>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-8 sm:mt-12">
            <div className="section-center">
              <div className="stat-number text-primary">5000+</div>
              <div className="stat-label text-white">Ficheros Entregados</div>
            </div>
            <div className="section-center">
              <div className="stat-number text-white">30min</div>
              <div className="stat-label text-white">Tiempo de Entrega</div>
            </div>
            <div className="section-center">
              <div className="stat-number text-accent">10+</div>
              <div className="stat-label text-white">Años de Experiencia</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-blue-corporate rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-corporate rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-primary">¿Por qué</span> <span className="text-white">elegirnos?</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Líderes en <span className="text-primary font-semibold">reprogramación de centralitas</span> con software profesional de última generación
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group section-center p-8 bg-gradient-dark rounded-xl border border-elegant hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 hover-elegant animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
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
      <section className="py-16 sm:py-20 md:py-24 bg-dark-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-primary">Nuestros</span> <span className="text-white">Servicios</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Catálogo profesional de <span className="text-white font-semibold">tuning files</span> para todas las marcas y modelos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-dark-secondary rounded-xl border border-elegant overflow-hidden hover:border-primary hover:shadow-elegant transition-all duration-500 hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} - FILESECUFB tuning files profesionales`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="600"
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
                    className="w-full btn-primary py-3 px-4 btn-text-style section-center block btn-hover-effect shadow-subtle hover:shadow-elegant"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-center mt-16">
            <Link
              to="/products"
              className="btn-primary px-10 py-4 btn-text-style inline-flex items-center group btn-hover-effect shadow-subtle hover:shadow-elegant"
            >
              <Settings className="mr-3 h-6 w-6 group-hover:animate-spin" />
              Ver Todos los Ficheros
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-primary">Resultados</span> <span className="text-white">Comprobados</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Resultados verificados en banco de potencia de nuestras <span className="text-primary font-semibold">reprogramaciones profesionales</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* BMW 320i Results */}
            <div className="group section-center p-8 bg-gradient-dark rounded-xl border border-elegant hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 hover-elegant">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    BMW 320i
                  </h3>
                  <TrendingUp className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                
                {/* Before/After Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Potencia:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">184 HP</span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-green-400 font-bold">245 HP</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Torque:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">300 Nm</span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-green-400 font-bold">420 Nm</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Bar Chart */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-secondary">Potencia</span>
                      <span className="text-primary font-bold">+33%</span>
                    </div>
                    <div className="w-full bg-dark-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-secondary">Torque</span>
                      <span className="text-primary font-bold">+40%</span>
                    </div>
                    <div className="w-full bg-dark-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <span className="text-primary font-bold text-lg">+33% Potencia</span>
                </div>
              </div>
            </div>
            
            {/* Audi A4 Results */}
            <div className="group section-center p-8 bg-gradient-dark rounded-xl border border-elegant hover:border-secondary hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 hover-elegant">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                    Audi A4 2.0T
                  </h3>
                  <BarChart3 className="h-6 w-6 text-secondary group-hover:animate-pulse" />
                </div>
                
                {/* Before/After Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Potencia:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">190 HP</span>
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      <span className="text-green-400 font-bold">265 HP</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Torque:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">320 Nm</span>
                      <ArrowRight className="h-4 w-4 text-secondary" />
                      <span className="text-green-400 font-bold">450 Nm</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Bar Chart */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-secondary">Potencia</span>
                      <span className="text-secondary font-bold">+39%</span>
                    </div>
                    <div className="w-full bg-dark-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-secondary">Torque</span>
                      <span className="text-secondary font-bold">+41%</span>
                    </div>
                    <div className="w-full bg-dark-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/10 rounded-lg p-3 text-center">
                  <span className="text-secondary font-bold text-lg">+39% Potencia</span>
                </div>
              </div>
            </div>
            
            {/* Golf GTI Results */}
            <div className="group section-center p-8 bg-gradient-dark rounded-xl border border-elegant hover:border-accent hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 hover-elegant">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    Golf GTI Mk7
                  </h3>
                  <TrendingUp className="h-6 w-6 text-accent group-hover:animate-pulse" />
                </div>
                
                {/* Before/After Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Potencia:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">220 HP</span>
                      <ArrowRight className="h-4 w-4 text-accent" />
                      <span className="text-green-400 font-bold">290 HP</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Torque:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">350 Nm</span>
                      <ArrowRight className="h-4 w-4 text-accent" />
                      <span className="text-green-400 font-bold">480 Nm</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Bar Chart */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-secondary">Potencia</span>
                      <span className="text-accent font-bold">+32%</span>
                    </div>
                    <div className="w-full bg-dark-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full" style={{width: '74%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-secondary">Torque</span>
                      <span className="text-accent font-bold">+37%</span>
                    </div>
                    <div className="w-full bg-dark-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full" style={{width: '77%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/10 rounded-lg p-3 text-center">
                  <span className="text-accent font-bold text-lg">+32% Potencia</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-center mt-16">
            <a
              href="https://wa.me/34630841047?text=Hola,%20necesito%20información%20sobre%20tuning%20files%20profesionales"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 btn-text-style inline-flex items-center group btn-hover-effect shadow-subtle hover:shadow-elegant"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Contáctanos
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Section - Completely Redesigned */}
      <section className="py-16 sm:py-20 md:py-24 bg-dark-secondary relative overflow-hidden">
        {/* Clean Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-corporate/5 via-transparent to-blue-corporate/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-blue-corporate">Nuestro</span> <span className="text-white">Proceso</span>
            </h2>
            <div className="h-1 w-32 bg-blue-corporate mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Proceso <span className="text-blue-corporate font-semibold">técnico y profesional</span> en el desarrollo de tuning files
            </p>
          </div>
          
          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12">
            {[
              {
                step: '1',
                title: 'Recepción',
                description: 'Recibimos el fichero original de tu centralita'
              },
              {
                step: '2',
                title: 'Análisis',
                description: 'Estudiamos los parámetros con software especializado'
              },
              {
                step: '3',
                title: 'Optimización',
                description: 'Modificamos los mapas según especificaciones técnicas'
              },
              {
                step: '4',
                title: 'Entrega',
                description: 'Enviamos el tuning file listo para programar'
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
                  <h3 className="text-2xl font-bold text-white mb-4 btn-text-style group-hover:text-blue-corporate transition-colors duration-300">
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
              <span className="text-sm font-semibold uppercase tracking-widest">Proceso Profesional</span>
              <div className="w-8 h-0.5 bg-blue-corporate rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* After-Sales Support Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-primary">Soporte</span> <span className="text-white">Postventa</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Asistencia técnica especializada y <span className="text-primary font-semibold">actualizaciones de mapas motor</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reversión a Stock */}
            <div className="bg-gradient-dark section-center p-8 hover:shadow-elegant hover-elegant duration-300 rounded-xl border border-elegant">
              <div className="text-primary mb-6 flex justify-center group-hover:animate-pulse">
                <RotateCcw className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-primary transition-colors">
                Reversión a Stock
              </h3>
              <p className="text-text-secondary group-hover:text-white transition-colors text-center leading-relaxed">
                Disponemos de ficheros originales para restaurar la configuración de serie cuando lo necesites.
              </p>
            </div>
            
            {/* Actualizaciones */}
            <div className="bg-gradient-dark section-center p-8 hover:shadow-elegant hover-elegant duration-300 rounded-xl border border-elegant">
              <div className="text-secondary mb-6 flex justify-center group-hover:animate-pulse">
                <RefreshCw className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-secondary transition-colors">
                Actualizaciones
              </h3>
              <p className="text-text-secondary group-hover:text-white transition-colors text-center leading-relaxed">
                Actualizaciones continuas con las últimas calibraciones y mejoras en tuning files.
              </p>
            </div>
            
            {/* Mantenimiento */}
            <div className="bg-gradient-dark section-center p-8 hover:shadow-elegant hover-elegant duration-300 rounded-xl border border-elegant">
              <div className="text-accent mb-6 flex justify-center group-hover:animate-pulse">
                <Wrench className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-accent transition-colors">
                Mantenimiento
              </h3>
              <p className="text-text-secondary group-hover:text-white transition-colors text-center leading-relaxed">
                Soporte técnico especializado para la implementación de reprogramaciones.
              </p>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-primary mb-8">
              <div className="w-8 h-0.5 bg-primary rounded-full"></div>
              <span className="text-sm font-semibold uppercase tracking-widest">Servicio Completo</span>
              <div className="w-8 h-0.5 bg-primary rounded-full"></div>
            </div>
            <p className="text-lg text-text-secondary mb-8">
              ¿Necesitas asistencia con tuning files? Contáctanos para soporte profesional
            </p>
            <a
              href="https://wa.me/34630841047"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 btn-text-style inline-flex items-center group btn-hover-effect shadow-subtle hover:shadow-elegant"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Contactar Soporte
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-dark-secondary">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Tuning Extremo"
            },
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5"
          })}
        </script>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Lo que dicen nuestros <span className="text-primary">clientes</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">Testimonios reales de conductores satisfechos</p>
            
            {/* Aggregate Rating - More Subtle */}
            <div className="inline-flex items-center bg-gradient-dark rounded-xl border border-elegant px-6 py-3 shadow-elegant">
              <div className="flex items-center mr-4">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-bold text-white mr-1">4.8</span>
                <span className="text-sm text-text-secondary">/5</span>
              </div>
              <div className="border-l border-elegant pl-4">
                <span className="text-sm font-medium text-white">127 reseñas</span>
              </div>
            </div>
          </div>
          
          {/* Testimonials Grid - Compact Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonio 1 */}
            <div className="group bg-gradient-dark rounded-xl border border-elegant p-4 hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Review",
                  "author": {"@type": "Person", "name": "Carlos M."},
                  "itemReviewed": {"@type": "LocalBusiness", "name": "FILESECUFB"},
                  "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                  "reviewBody": "Excelente servicio FILESECUFB. El Stage 1 para mi BMW funciona perfectamente.",
                  "datePublished": "2024-01-15"
                })}
              </script>
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-4 w-4 text-primary" />
              </div>
              <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                "Excelente servicio FILESECUFB. El Stage 1 para mi BMW funciona perfectamente."
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">Carlos M.</span>
                <span className="text-text-secondary">BMW 320i</span>
              </div>
            </div>
            
            {/* Testimonio 2 */}
            <div className="group bg-gradient-dark rounded-xl border border-elegant p-4 hover:border-secondary hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Review",
                  "author": {"@type": "Person", "name": "Ana L."},
                  "itemReviewed": {"@type": "LocalBusiness", "name": "FILESECUFB"},
                  "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                  "reviewBody": "Mapas de calidad profesional. FILESECUFB cumple con la entrega rápida prometida.",
                  "datePublished": "2024-02-03"
                })}
              </script>
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                "Mapas de calidad profesional. FILESECUFB cumple con la entrega rápida prometida."
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">Ana L.</span>
                <span className="text-text-secondary">Audi A4</span>
              </div>
            </div>
            
            {/* Testimonio 3 */}
            <div className="group bg-gradient-dark rounded-xl border border-elegant p-4 hover:border-accent hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Review",
                  "author": {"@type": "Person", "name": "Miguel R."},
                  "itemReviewed": {"@type": "LocalBusiness", "name": "FILESECUFB"},
                  "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                  "reviewBody": "Los mejores tuning files del mercado. FILESECUFB transformó mi Golf GTI.",
                  "datePublished": "2024-01-28"
                })}
              </script>
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-4 w-4 text-accent" />
              </div>
              <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                "Los mejores tuning files del mercado. FILESECUFB transformó mi Golf GTI."
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">Miguel R.</span>
                <span className="text-text-secondary">Golf GTI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-primary">Preguntas</span> <span className="text-white">Frecuentes</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Resolvemos todas tus dudas sobre <span className="text-primary font-semibold">modificación de centralitas y tuning files</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="¿Qué tipos de tuning files ofrecen?"
              answer="Ofrecemos ficheros modificados para Stage 1, Stage 2, solución DPF, EGR off, AdBlue off, pop & bang, hard cut limiter y calibraciones personalizadas. Todos los mapas son verificados antes de su entrega."
            />
            <FAQItem 
              question="¿Cuál es el tiempo de entrega?"
              answer="La entrega de ficheros tuning es inmediata para modelos en nuestra base de datos (30 minutos máximo). Para calibraciones personalizadas, el tiempo varía entre 2-4 horas según la complejidad."
            />
            <FAQItem 
              question="¿Qué garantías ofrecen?"
              answer="Todos nuestros mapas están garantizados. Cada modificación es verificada en banco de potencia con soporte técnico incluido. Si surge algún problema, proporcionamos revisión sin costo adicional."
            />
            <FAQItem 
              question="¿Qué centralitas soportan?"
              answer="Trabajamos con todas las principales marcas: Bosch, Siemens, Delphi, Denso, Magneti Marelli, Continental y más. Nuestra base de datos incluye mapas para vehículos europeos, asiáticos y americanos."
            />
            <FAQItem 
              question="¿Son seguros los tuning files?"
              answer="Sí, todas nuestras reprogramaciones respetan los límites seguros del motor. Utilizamos herramientas profesionales como WinOLS, ECM Titanium y bancos de potencia para verificar cada calibración."
            />
            <FAQItem 
              question="¿Cómo solicitar un fichero tuning?"
              answer="Puedes solicitar tu mapa modificado vía WhatsApp enviando el fichero original de tu centralita. Necesitamos marca, modelo, año, tipo de ECU y el archivo en formato BIN, ORI o similar."
            />
          </div>
        </div>
      </section>




      {/* WhatsApp Community Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#1A1A1A] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            <span className="text-primary">Únete a nuestra</span><br />
            <span className="text-white">comunidad de WhatsApp</span>
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Comunidad profesional de <span className="text-primary font-semibold">especialistas en mapas motor</span>. Soporte técnico y <span className="text-white font-semibold">asistencia inmediata</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
            <a
              href="https://wa.me/34630841047"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 btn-text-style inline-flex items-center group btn-hover-effect shadow-subtle hover:shadow-elegant"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Unirse al Grupo
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;