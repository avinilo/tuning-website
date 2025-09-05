import React, { useState } from 'react';
import { Users, Package, ShoppingCart, Upload, FileText, Settings, BarChart3, Download, ImageIcon, Star, Plus, Trash2, Eye } from 'lucide-react';

type AdminSection = 'overview' | 'services' | 'clients' | 'orders' | 'upload-maps' | 'upload-invoices';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');

  const sidebarItems = [
    { id: 'overview' as AdminSection, label: 'Resumen', icon: BarChart3 },
    { id: 'services' as AdminSection, label: 'Crear Servicios', icon: Settings },
    { id: 'clients' as AdminSection, label: 'Clientes', icon: Users },
    { id: 'orders' as AdminSection, label: 'Pedidos', icon: ShoppingCart },
    { id: 'upload-maps' as AdminSection, label: 'Subir Mapas', icon: Upload },
    { id: 'upload-invoices' as AdminSection, label: 'Subir Facturas', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'services':
        return <ServicesSection />;
      case 'clients':
        return <ClientsSection />;
      case 'orders':
        return <OrdersSection />;
      case 'upload-maps':
        return <UploadMapsSection />;
      case 'upload-invoices':
        return <UploadInvoicesSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-700 min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-8">
              <span className="text-primary">ADMIN</span> PANEL
            </h1>
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Overview Section
const OverviewSection: React.FC = () => {
  const stats = [
    { label: 'Pedidos Pendientes', value: '12', color: 'text-yellow-400' },
    { label: 'Clientes Activos', value: '248', color: 'text-green-400' },
    { label: 'Servicios Creados', value: '45', color: 'text-blue-400' },
    { label: 'Ingresos del Mes', value: '€15,420', color: 'text-primary' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Panel de Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.label}</h3>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Actividad Reciente</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-700">
            <span className="text-gray-300">Nuevo pedido de Stage 2 - Cliente #1234</span>
            <span className="text-sm text-gray-500">Hace 2 horas</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-700">
            <span className="text-gray-300">Mapa tuneado subido para Cliente #1230</span>
            <span className="text-sm text-gray-500">Hace 4 horas</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-300">Factura generada para Cliente #1228</span>
            <span className="text-sm text-gray-500">Hace 6 horas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Section
const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'view'>('create');
  const [features, setFeatures] = useState<string[]>(['']);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  // Mock data for created services
  const createdServices = [
    {
      id: 1,
      title: 'CAR TUNING',
      subtitle: '(STAGE 1)',
      price: '€299.00',
      originalPrice: '€399.00',
      badge: 'BÁSICO',
      description: 'OPTIMIZACIÓN BÁSICA DEL MOTOR PARA MEJORAR RENDIMIENTO Y EFICIENCIA',
      features: ['AUMENTO DE POTENCIA +15-25%', 'MEJORA EN TORQUE +20-30%', 'OPTIMIZACIÓN DE CONSUMO'],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      popular: false,
      category: 'Car Tuning',
      status: 'Activo'
    },
    {
      id: 2,
      title: 'CAR TUNING',
      subtitle: '(STAGE 2)',
      price: '€499.00',
      originalPrice: '€699.00',
      badge: 'MÁS POPULAR',
      description: 'OPTIMIZACIÓN INTERMEDIA CON MODIFICACIONES DE HARDWARE MENORES',
      features: ['AUMENTO DE POTENCIA +25-35%', 'MEJORA EN TORQUE +30-40%', 'INCLUYE MODIFICACIONES BÁSICAS'],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      popular: true,
      category: 'Car Tuning',
      status: 'Activo'
    }
  ];

  const addFeature = () => {
    setFeatures([...features, '']);
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Gestión de Servicios</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'create'
                ? 'bg-primary text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Crear Servicio
          </button>
          <button
            onClick={() => setActiveTab('view')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'view'
                ? 'bg-primary text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Ver Servicios ({createdServices.length})
          </button>
        </div>
      </div>

      {activeTab === 'create' ? (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <form className="space-y-6">
            {/* Título y Subtítulo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Título del Servicio
                </label>
                <input
                  type="text"
                  placeholder="Ej: CAR TUNING"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subtítulo
                </label>
                <input
                  type="text"
                  placeholder="Ej: (STAGE 1)"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Precios y Badge */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio Actual (€)
                </label>
                <input
                  type="number"
                  placeholder="299"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio Original (€)
                </label>
                <input
                  type="number"
                  placeholder="399"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Badge/Etiqueta
                </label>
                <input
                  type="text"
                  placeholder="Ej: BÁSICO, MÁS POPULAR"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Categoría y Configuraciones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Categoría
                </label>
                <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-primary focus:ring-1 focus:ring-primary">
                  <option>Car Tuning</option>
                  <option>Truck/Agriculture Tuning</option>
                  <option>TCU Tuning</option>
                  <option>Otros Servicios</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Estado
                </label>
                <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-primary focus:ring-1 focus:ring-primary">
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
              <div className="flex items-center space-x-4 pt-8">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-primary bg-gray-900 border-gray-600 rounded focus:ring-primary" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">Servicio Popular</span>
                </label>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Descripción
              </label>
              <textarea
                rows={3}
                placeholder="OPTIMIZACIÓN BÁSICA DEL MOTOR PARA MEJORAR RENDIMIENTO Y EFICIENCIA"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Imagen del Servicio */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Imagen del Servicio
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">Arrastra una imagen aquí o</p>
                      <span className="text-primary hover:text-primary/80 font-medium">
                        selecciona un archivo
                      </span>
                      <p className="text-sm text-gray-500 mt-2">PNG, JPG hasta 5MB</p>
                    </label>
                  </div>
                </div>
                {imagePreview && (
                  <div>
                    <p className="text-sm text-gray-300 mb-2">Vista previa:</p>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Características/Features */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Características del Servicio
                </label>
                <button
                  type="button"
                  onClick={addFeature}
                  className="flex items-center space-x-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Añadir</span>
                </button>
              </div>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      placeholder="Ej: AUMENTO DE POTENCIA +15-25%"
                      className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    {features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
              >
                Crear Servicio
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Vista de Servicios Creados */
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-300">Servicios creados: {createdServices.length}</p>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Buscar servicios..."
                className="px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <select className="px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Todas las categorías</option>
                <option>Car Tuning</option>
                <option>Truck/Agriculture</option>
                <option>TCU Tuning</option>
                <option>Otros Servicios</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {createdServices.map((service) => (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white">
                      {service.badge}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                    {service.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    {service.popular && (
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    )}
                  </div>
                  
                  {service.subtitle && (
                    <p className="text-primary font-medium mb-3">{service.subtitle}</p>
                  )}
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <p className="text-xs text-gray-500">+{service.features.length - 2} más...</p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      service.status === 'Activo' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-colors">
                      <Eye className="w-4 h-4" />
                      <span>Ver</span>
                    </button>
                    <button className="flex-1 px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                      Editar
                    </button>
                    <button className="px-3 py-2 bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg hover:bg-red-600/30 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Clients Section
const ClientsSection: React.FC = () => {
  const clients = [
    { id: '1234', name: 'Juan Pérez', email: 'juan@email.com', orders: 3, status: 'Activo' },
    { id: '1235', name: 'María García', email: 'maria@email.com', orders: 1, status: 'Activo' },
    { id: '1236', name: 'Carlos López', email: 'carlos@email.com', orders: 5, status: 'Inactivo' },
    { id: '1237', name: 'Ana Martín', email: 'ana@email.com', orders: 2, status: 'Activo' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Gestión de Clientes</h2>
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Lista de Clientes</h3>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Buscar cliente..."
                className="px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Exportar
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">ID Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Nombre</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Pedidos</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">#{client.id}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">{client.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{client.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{client.orders}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      client.status === 'Activo' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Orders Section
const OrdersSection: React.FC = () => {
  const orders = [
    {
      id: '2024001',
      client: 'Juan Pérez',
      service: 'Stage 2',
      price: '€499',
      status: 'Pendiente',
      date: '2024-01-15',
      comments: 'Necesito más potencia para circuito'
    },
    {
      id: '2024002',
      client: 'María García',
      service: 'Stage 1',
      price: '€299',
      status: 'En Proceso',
      date: '2024-01-14',
      comments: 'Primera vez tuneando'
    },
    {
      id: '2024003',
      client: 'Carlos López',
      service: 'Stage 3',
      price: '€799',
      status: 'Completado',
      date: '2024-01-13',
      comments: 'Preparación para competición'
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Gestión de Pedidos</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pedido #{order.id}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Cliente:</span>
                    <p className="text-white font-medium">{order.client}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Servicio:</span>
                    <p className="text-white font-medium">{order.service}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Precio:</span>
                    <p className="text-primary font-bold">{order.price}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Fecha:</span>
                    <p className="text-white">{order.date}</p>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 text-sm rounded-full ${
                order.status === 'Pendiente' ? 'bg-yellow-500/20 text-yellow-400' :
                order.status === 'En Proceso' ? 'bg-blue-500/20 text-blue-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {order.status}
              </span>
            </div>
            
            <div className="mb-4">
              <span className="text-gray-400 text-sm">Comentarios del cliente:</span>
              <p className="text-gray-300 mt-1">{order.comments}</p>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-700">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Descargar Mapa Original</span>
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Marcar En Proceso
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Completar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Upload Maps Section
const UploadMapsSection: React.FC = () => {
  const pendingUploads = [
    { orderId: '2024001', client: 'Juan Pérez', service: 'Stage 2' },
    { orderId: '2024002', client: 'María García', service: 'Stage 1' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Subir Mapas Tuneados</h2>
      <div className="space-y-6">
        {pendingUploads.map((upload) => (
          <div key={upload.orderId} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pedido #{upload.orderId}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Cliente:</span>
                    <p className="text-white font-medium">{upload.client}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Servicio:</span>
                    <p className="text-white font-medium">{upload.service}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-2">Arrastra el mapa tuneado aquí o</p>
              <button className="text-primary hover:text-primary/80 font-medium">
                selecciona el archivo
              </button>
              <p className="text-sm text-gray-500 mt-2">Formatos soportados: .bin, .hex, .ori</p>
            </div>
            
            <div className="flex justify-end mt-6 space-x-4">
              <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
                Cancelar
              </button>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Subir Mapa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Upload Invoices Section
const UploadInvoicesSection: React.FC = () => {
  const completedOrders = [
    { orderId: '2024003', client: 'Carlos López', service: 'Stage 3', amount: '€799' },
    { orderId: '2024004', client: 'Ana Martín', service: 'Stage 1', amount: '€299' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Subir Facturas</h2>
      <div className="space-y-6">
        {completedOrders.map((order) => (
          <div key={order.orderId} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pedido #{order.orderId}</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Cliente:</span>
                    <p className="text-white font-medium">{order.client}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Servicio:</span>
                    <p className="text-white font-medium">{order.service}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Importe:</span>
                    <p className="text-primary font-bold">{order.amount}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Número de Factura
                </label>
                <input
                  type="text"
                  placeholder="FAC-2024-001"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Fecha de Emisión
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-primary/50 transition-colors mb-6">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-2">Arrastra la factura aquí o</p>
              <button className="text-primary hover:text-primary/80 font-medium">
                selecciona el archivo
              </button>
              <p className="text-sm text-gray-500 mt-2">Formatos soportados: PDF, JPG, PNG</p>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
                Cancelar
              </button>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Subir Factura
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;