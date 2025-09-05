import React from 'react';
import { Search, Settings, Gauge, Wrench, Cog, Truck, Car } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const carTuningServices = [
    {
      id: 1,
      title: 'CAR TUNING',
      subtitle: '(STAGE 1)',
      price: '€299.00',
      originalPrice: '€399.00',
      badge: 'BÁSICO',
      description: 'OPTIMIZACIÓN BÁSICA DEL MOTOR PARA MEJORAR RENDIMIENTO Y EFICIENCIA',
      features: [
        'AUMENTO DE POTENCIA +15-25%',
        'MEJORA EN TORQUE +20-30%',
        'OPTIMIZACIÓN DE CONSUMO'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
      popular: false
    },
    {
      id: 2,
      title: 'CAR TUNING',
      subtitle: '(STAGE 2)',
      price: '€499.00',
      originalPrice: '€699.00',
      badge: 'MÁS POPULAR',
      description: 'OPTIMIZACIÓN INTERMEDIA CON MODIFICACIONES DE HARDWARE MENORES',
      features: [
        'AUMENTO DE POTENCIA +25-35%',
        'MEJORA EN TORQUE +30-40%',
        'INCLUYE MODIFICACIONES BÁSICAS'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
      popular: true
    },
    {
      id: 3,
      title: 'CAR TUNING',
      subtitle: '(STAGE 3)',
      price: '€899.00',
      originalPrice: '€1199.00',
      badge: 'AVANZADO',
      description: 'OPTIMIZACIÓN AVANZADA CON MODIFICACIONES SIGNIFICATIVAS DE HARDWARE',
      features: [
        'AUMENTO DE POTENCIA +35-50%',
        'MEJORA EN TORQUE +40-60%',
        'MODIFICACIONES AVANZADAS'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
      popular: false
    }
  ];

  const truckServices = [
    {
      id: 5,
      title: 'TRUCK/AGRICULTURE TUNING',
      subtitle: '(STAGE 1)',
      price: '€399.00',
      originalPrice: '€549.00',
      badge: 'COMERCIAL',
      description: 'OPTIMIZACIÓN ESPECIALIZADA PARA VEHÍCULOS COMERCIALES Y AGRÍCOLAS',
      features: [
        'AUMENTO DE POTENCIA +20-30%',
        'REDUCCIÓN DE CONSUMO',
        'MAYOR EFICIENCIA DE TRABAJO'
      ],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      popular: false
    },
    {
      id: 6,
      title: 'ONLY OPTIONS',
      subtitle: '(TRUCK/AGRICULTURE)',
      price: 'GRATIS',
      originalPrice: '',
      badge: 'INCLUIDO',
      description: 'OPCIONES ADICIONALES PARA VEHÍCULOS COMERCIALES Y AGRÍCOLAS',
      features: [
        'CONFIGURACIONES COMERCIALES',
        'AJUSTES PARA TRABAJO PESADO',
        'OPTIMIZACIONES ESPECÍFICAS'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      popular: false
    }
  ];

  const tcuServices = [
    {
      id: 7,
      title: 'TCU TUNING',
      subtitle: '(TRANSMISSION)',
      price: '€349.00',
      originalPrice: '€449.00',
      badge: 'ESPECIALIZADO',
      description: 'INCLUYE TORQUE INTERNO Y VELOCIDAD DE CAMBIO MÁS RÁPIDA',
      features: [
        'TORQUE INTERNO OPTIMIZADO',
        'VELOCIDAD DE CAMBIO MEJORADA',
        'RESPUESTA MÁS RÁPIDA'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      popular: false
    },
    {
      id: 8,
      title: 'ONLY OPTIONS',
      subtitle: '(TCU)',
      price: 'GRATIS',
      originalPrice: '',
      badge: 'INCLUIDO',
      description: 'OPCIONES ADICIONALES PARA OPTIMIZACIÓN DE TRANSMISIÓN',
      features: [
        'CONFIGURACIONES AVANZADAS',
        'AJUSTES PERSONALIZADOS',
        'OPTIMIZACIONES EXTRAS'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      popular: false
    }
  ];

  const otherServices = [
    {
      id: 9,
      title: 'ACTIVE GRILL SHUTTER',
      subtitle: '',
      price: '€49.00',
      originalPrice: '€69.00',
      badge: 'PROFESIONAL',
      description: 'OPTIMIZACIÓN DEL SISTEMA DE REJILLA ACTIVA PARA MEJOR AERODINÁMICA',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 10,
      title: 'ADBLUE',
      subtitle: '',
      price: '€199.00',
      originalPrice: '€249.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL SISTEMA ADBLUE PARA VEHÍCULOS DIÉSEL',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 11,
      title: 'ANTI LAG',
      subtitle: '',
      price: '€299.00',
      originalPrice: '€399.00',
      badge: 'PROFESIONAL',
      description: 'SISTEMA ANTI LAG PARA REDUCIR EL TIEMPO DE RESPUESTA DEL TURBO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 12,
      title: 'CHECKSUMM',
      subtitle: '',
      price: '€49.00',
      originalPrice: '€69.00',
      badge: 'PROFESIONAL',
      description: 'CORRECCIÓN Y VERIFICACIÓN DE CHECKSUMS EN ARCHIVOS DE TUNING',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 13,
      title: 'CYLINDER ON DEMAND OFF',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL SISTEMA DE CILINDROS BAJO DEMANDA',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 14,
      title: 'DPF OFF',
      subtitle: '',
      price: '€149.00',
      originalPrice: '€199.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL FILTRO DE PARTÍCULAS DIÉSEL',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 15,
      title: 'DSG FARTS',
      subtitle: '',
      price: '€199.00',
      originalPrice: '€249.00',
      badge: 'PROFESIONAL',
      description: 'SONIDOS CARACTERÍSTICOS EN TRANSMISIONES DSG',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 16,
      title: 'DTC OFF',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DE CÓDIGOS DE ERROR ESPECÍFICOS',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 17,
      title: 'EGR OFF',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL SISTEMA DE RECIRCULACIÓN DE GASES',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 18,
      title: 'EVAPORATIVE EMISSION CONTROL',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL SISTEMA DE CONTROL DE EMISIONES EVAPORATIVAS',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 19,
      title: 'EXHAUST FLAPS',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'CONTROL DE VÁLVULAS DE ESCAPE PARA SONIDO DEPORTIVO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 20,
      title: 'FULLEMISSION (DPF/EGR/ADBLUE)',
      subtitle: '',
      price: '€399.00',
      originalPrice: '€499.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN COMPLETA DE SISTEMAS DE EMISIONES',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 21,
      title: 'HARD CUT LIMITER',
      subtitle: '',
      price: '€199.00',
      originalPrice: '€249.00',
      badge: 'PROFESIONAL',
      description: 'LIMITADOR DE REVOLUCIONES CON CORTE AGRESIVO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 22,
      title: 'HOT START',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'OPTIMIZACIÓN DEL ARRANQUE EN CALIENTE',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 23,
      title: 'IDLE RPM',
      subtitle: '',
      price: '€79.00',
      originalPrice: '€99.00',
      badge: 'PROFESIONAL',
      description: 'AJUSTE DE REVOLUCIONES EN RALENTÍ',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 24,
      title: 'IMMO OFF',
      subtitle: '',
      price: '€249.00',
      originalPrice: '€299.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL INMOVILIZADOR DEL VEHÍCULO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 25,
      title: 'LAUNCH CONTROL',
      subtitle: '',
      price: '€299.00',
      originalPrice: '€399.00',
      badge: 'PROFESIONAL',
      description: 'SISTEMA DE CONTROL DE LANZAMIENTO PARA ARRANCADAS',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 26,
      title: 'LIMITED VMAX TO SPECIFIC SPEED',
      subtitle: '',
      price: '€149.00',
      originalPrice: '€199.00',
      badge: 'PROFESIONAL',
      description: 'LIMITACIÓN DE VELOCIDAD MÁXIMA A VELOCIDAD ESPECÍFICA',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 27,
      title: 'MAF OFF (IF POSSIBLE)',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL SENSOR DE FLUJO DE AIRE MÁSICO SI ES POSIBLE',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 28,
      title: 'MAX RPM',
      subtitle: '',
      price: '€79.00',
      originalPrice: '€99.00',
      badge: 'PROFESIONAL',
      description: 'AJUSTE DEL LÍMITE MÁXIMO DE REVOLUCIONES',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 29,
      title: 'NEUTRAL RPM',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'AJUSTE DE REVOLUCIONES EN PUNTO MUERTO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 30,
      title: 'NOX OFF',
      subtitle: '',
      price: '€149.00',
      originalPrice: '€199.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL SISTEMA DE ÓXIDOS DE NITRÓGENO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 31,
      title: 'OILPRESSURE',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'OPTIMIZACIÓN DEL SISTEMA DE PRESIÓN DE ACEITE',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 32,
      title: 'PERFORMANCE GAUGE BMW/MINI/VAG',
      subtitle: '',
      price: 'GRATIS',
      originalPrice: '',
      badge: 'GRATIS',
      description: 'MEDIDOR DE RENDIMIENTO PARA VEHÍCULOS BMW, MINI Y VAG',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 33,
      title: 'POP & BANG / CRACKLE MAP',
      subtitle: '',
      price: '€249.00',
      originalPrice: '€299.00',
      badge: 'PROFESIONAL',
      description: 'MAPEO DE SONIDOS EXPLOSIVOS Y CREPITANTES EN EL ESCAPE',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 34,
      title: 'READINESS MONITOR',
      subtitle: '',
      price: '€129.00',
      originalPrice: '€169.00',
      badge: 'PROFESIONAL',
      description: 'MONITOR DE PREPARACIÓN DEL SISTEMA DE DIAGNÓSTICO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 35,
      title: 'SECONDARY AIR PUMP',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DE LA BOMBA DE AIRE SECUNDARIA',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 36,
      title: 'START / STOP SYSTEM OFF',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DEL SISTEMA START/STOP AUTOMÁTICO',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 37,
      title: 'SWIRL FLAPS OFF',
      subtitle: '',
      price: '€99.00',
      originalPrice: '€129.00',
      badge: 'PROFESIONAL',
      description: 'DESACTIVACIÓN DE LAS VÁLVULAS DE TURBULENCIA',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 38,
      title: 'VMAX OFF',
      subtitle: '',
      price: 'GRATIS',
      originalPrice: '',
      badge: 'GRATIS',
      description: 'ELIMINACIÓN DEL LIMITADOR DE VELOCIDAD MÁXIMA',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 39,
      title: 'WARRANTY PATCH (BMW/MINI/VAG)',
      subtitle: '',
      price: '€149.00',
      originalPrice: '€199.00',
      badge: 'PROFESIONAL',
      description: 'PARCHE DE GARANTÍA PARA VEHÍCULOS BMW, MINI Y VAG',
      features: [
        'OPTIMIZACIÓN PERSONALIZADA',
        'SOPORTE TÉCNICO',
        'GARANTÍA DE CALIDAD'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    }
  ];

  const renderServiceCard = (service: {
    id: number;
    title: string;
    subtitle: string;
    price: string;
    originalPrice?: string;
    badge: string;
    description: string;
    features: string[];
    image: string;
    popular?: boolean;
  }) => (
    <div
      key={service.id}
      className={`relative bg-dark-secondary rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
        service.popular ? 'border-primary shadow-elegant' : 'border-elegant'
      }`}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold border border-primary/30">
            {service.badge}
          </span>
        </div>
      )}

      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent" />
      </div>

      {/* Service Content */}
      <div className="p-6">
        {/* Service Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="bg-primary/20 p-2 rounded-lg mr-3">
            <Settings className="text-primary w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {service.title}
            </h3>
            <p className="text-primary font-semibold">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center text-sm text-gray-400">
              <Gauge className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-3xl font-bold text-white">
              {service.price}
            </span>
            {service.originalPrice && (
              <span className="text-gray-500 line-through ml-2">
                {service.originalPrice}
              </span>
            )}
          </div>
          <div className="bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
            <span className="text-primary text-sm font-semibold">
              {service.badge}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full btn-primary py-3 px-6 btn-text-style btn-hover-effect shadow-subtle hover:shadow-elegant">
          VER DETALLES
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Compact */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('services.title') }}>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('services.searchPlaceholder')}
              className="w-full bg-gray-900/80 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Car Tuning Section */}
      <div id="car-tuning" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Car className="text-primary w-8 h-8 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold">
                CAR <span className="text-primary">TUNING</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              {t('services.carTuning.title')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carTuningServices.map(renderServiceCard)}
          </div>
        </div>
      </div>

      {/* Truck/Agriculture Section */}
      <div id="trucks-agriculture" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Truck className="text-primary w-8 h-8 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold" dangerouslySetInnerHTML={{ __html: t('services.truckAgriculture.title') }}>
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              {t('services.truckAgriculture.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {truckServices.map(renderServiceCard)}
          </div>
        </div>
      </div>

      {/* TCU Tuning Section */}
      <div id="tcu-tuning" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Cog className="text-primary w-8 h-8 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold">
                TCU <span className="text-primary">TUNING</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              {t('services.tcuTuning.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tcuServices.map(renderServiceCard)}
          </div>
        </div>
      </div>

      {/* Otros Servicios Section */}
      <div id="other-services" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="text-primary w-8 h-8 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold" dangerouslySetInnerHTML={{ __html: t('services.otherServices.title') }}>
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              {t('services.otherServices.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map(renderServiceCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;