import React, { useState } from 'react';
import { User, Package, FileText, Receipt, Download, Eye, EyeOff, Edit, Lock, CreditCard, ShoppingCart } from 'lucide-react';

interface TunedFile {
  id: string;
  fileName: string;
  uploadDate: string;
  size: string;
  comments?: string;
}

interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending';
}

interface Order {
  id: string;
  service: string;
  status: 'pending' | 'in_progress' | 'completed' | 'delivered';
  date: string;
  price: number;
  vehicle: string;
  estimatedDelivery?: string;
  files?: TunedFile[];
  invoices?: Invoice[];
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface BillingInfo {
  companyName: string;
  taxId: string;
  billingAddress: string;
  billingCity: string;
  billingPostalCode: string;
  billingCountry: string;
}

type ClientSection = 'orders' | 'profile';

const ClientDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ClientSection>('orders');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showBillingEdit, setShowBillingEdit] = useState(false);

  const sidebarItems = [
    { id: 'orders' as ClientSection, label: 'Pedidos', icon: ShoppingCart },
    { id: 'profile' as ClientSection, label: 'Perfil', icon: User },
  ];

  // Mock data
  const orders: Order[] = [
    {
      id: 'ORD-001',
      service: 'Stage 1 Tuning',
      status: 'completed',
      date: '2024-01-15',
      price: 299,
      vehicle: 'Audi A4 2.0 TDI 2019',
      estimatedDelivery: '2024-01-18',
      files: [
        {
          id: 'FILE-001',
          fileName: 'audi_a4_stage1_tuned.bin',
          uploadDate: '2024-01-18',
          size: '1.2 MB',
          comments: 'Mapa optimizado para mejor rendimiento y eficiencia. Se recomienda usar combustible de 95 octanos mínimo.'
        }
      ],
      invoices: [
        {
          id: 'INV-001',
          invoiceNumber: 'FAC-2024-001',
          date: '2024-01-15',
          amount: 299,
          status: 'paid'
        }
      ]
    },
    {
      id: 'ORD-002',
      service: 'Stage 2 Tuning',
      status: 'in_progress',
      date: '2024-01-20',
      price: 499,
      vehicle: 'BMW 320d 2020',
      estimatedDelivery: '2024-01-25',
      files: [],
      invoices: [
        {
          id: 'INV-002',
          invoiceNumber: 'FAC-2024-002',
          date: '2024-01-20',
          amount: 499,
          status: 'pending'
        }
      ]
    },
    {
      id: 'ORD-003',
      service: 'DPF Delete',
      status: 'pending',
      date: '2024-01-22',
      price: 199,
      vehicle: 'Mercedes C220d 2018',
      files: [],
      invoices: []
    }
  ];



  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+34 666 777 888',
    address: 'Calle Principal 123',
    city: 'Madrid',
    postalCode: '28001',
    country: 'España'
  });

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    companyName: 'Tuning Extremo S.L.',
    taxId: 'B12345678',
    billingAddress: 'Calle Comercial 456',
    billingCity: 'Madrid',
    billingPostalCode: '28002',
    billingCountry: 'España'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'delivered':
      case 'paid':
        return 'text-green-400';
      case 'in_progress':
        return 'text-yellow-400';
      case 'pending':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'in_progress':
        return 'En Proceso';
      case 'completed':
        return 'Completado';
      case 'delivered':
        return 'Entregado';
      case 'paid':
        return 'Pagado';
      default:
        return status;
    }
  };

  const handleDownload = (fileName: string) => {
    // Simulate file download
    const link = document.createElement('a');
    link.href = '#';
    link.download = fileName;
    link.click();
  };

  const renderOrders = () => (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Mis Pedidos</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{order.service}</h3>
                <p className="text-gray-300 mb-1">Pedido: {order.id}</p>
                <p className="text-gray-300 mb-1">Vehículo: {order.vehicle}</p>
                <p className="text-gray-300">Fecha: {new Date(order.date).toLocaleDateString('es-ES')}</p>
              </div>
              <div className="text-right">
                <p className={`text-lg font-semibold mb-2 ${getStatusColor(order.status)}`}>
                  {getStatusText(order.status)}
                </p>
                <p className="text-2xl font-bold text-primary">€{order.price}</p>
              </div>
            </div>
            {order.estimatedDelivery && (
              <div className="bg-gray-700/30 rounded-lg p-3 mt-4">
                <p className="text-sm text-gray-300">
                  Entrega estimada: {new Date(order.estimatedDelivery).toLocaleDateString('es-ES')}
                </p>
              </div>
            )}
            
            {/* Archivos y Facturas asociados */}
            <div className="mt-6 space-y-4">
              {/* Archivos */}
              {order.files && order.files.length > 0 && (
                <div className="bg-gray-700/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Archivos Tuneados
                  </h4>
                  <div className="space-y-3">
                    {order.files.map((file) => (
                      <div key={file.id} className="bg-gray-600/30 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <p className="text-white font-medium">{file.fileName}</p>
                            <p className="text-gray-400 text-sm">
                              Subido: {new Date(file.uploadDate).toLocaleDateString('es-ES')} • {file.size}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDownload(file.fileName)}
                            className="bg-primary hover:bg-primary/80 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base touch-manipulation"
                          >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">Descargar</span>
                            <span className="sm:hidden">DL</span>
                          </button>
                        </div>
                        {file.comments && (
                          <div className="bg-gray-700/40 rounded-lg p-3 border-l-4 border-primary/50">
                            <p className="text-gray-300 text-sm font-medium mb-1">Comentarios del técnico:</p>
                            <p className="text-gray-200 text-sm leading-relaxed">{file.comments}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Facturas */}
              {order.invoices && order.invoices.length > 0 && (
                <div className="bg-gray-700/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Receipt className="w-5 h-5" />
                    Facturas
                  </h4>
                  <div className="space-y-2">
                    {order.invoices.map((invoice) => (
                      <div key={invoice.id} className="flex justify-between items-center bg-gray-600/30 rounded-lg p-3">
                        <div>
                          <p className="text-white font-medium">Factura {invoice.invoiceNumber}</p>
                          <p className="text-gray-400 text-sm">
                            {new Date(invoice.date).toLocaleDateString('es-ES')} • €{invoice.amount} • 
                            <span className={getStatusColor(invoice.status)}> {getStatusText(invoice.status)}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => handleDownload(`factura_${invoice.invoiceNumber}.pdf`)}
                          className="bg-primary hover:bg-primary/80 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base touch-manipulation"
                        >
                          <Download className="w-4 h-4" />
                          <span className="hidden sm:inline">Descargar</span>
                          <span className="sm:hidden">DL</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );



  const renderProfile = () => (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Mi Perfil</h2>
      <div className="space-y-6">
        {/* Profile Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Información Personal</h3>
          <button
            onClick={() => setShowProfileEdit(!showProfileEdit)}
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Editar
          </button>
        </div>
        
        {showProfileEdit ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                value={userProfile.name}
                onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={userProfile.email}
                onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Teléfono</label>
              <input
                type="tel"
                value={userProfile.phone}
                onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Dirección</label>
              <input
                type="text"
                value={userProfile.address}
                onChange={(e) => setUserProfile({...userProfile, address: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Ciudad</label>
              <input
                type="text"
                value={userProfile.city}
                onChange={(e) => setUserProfile({...userProfile, city: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Código Postal</label>
              <input
                type="text"
                value={userProfile.postalCode}
                onChange={(e) => setUserProfile({...userProfile, postalCode: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowProfileEdit(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                Guardar Cambios
              </button>
              <button
                onClick={() => setShowProfileEdit(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Nombre</p>
              <p className="text-white font-semibold">{userProfile.name}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-semibold">{userProfile.email}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Teléfono</p>
              <p className="text-white font-semibold">{userProfile.phone}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Dirección</p>
              <p className="text-white font-semibold">{userProfile.address}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Ciudad</p>
              <p className="text-white font-semibold">{userProfile.city}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Código Postal</p>
              <p className="text-white font-semibold">{userProfile.postalCode}</p>
            </div>
          </div>
        )}
        </div>

        {/* Password Change */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Cambiar Contraseña</h3>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Lock className="w-4 h-4" />
            {showPasswordForm ? 'Cancelar' : 'Cambiar'}
          </button>
        </div>
        
        {showPasswordForm && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Contraseña Actual</label>
              <input
                type="password"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Nueva Contraseña</label>
              <input
                type="password"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Confirmar Nueva Contraseña</label>
              <input
                type="password"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation">
                Actualizar Contraseña
              </button>
              <button
                onClick={() => setShowPasswordForm(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
        </div>

        {/* Billing Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Datos de Facturación</h3>
          <button
            onClick={() => setShowBillingEdit(!showBillingEdit)}
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            Editar
          </button>
        </div>
        
        {showBillingEdit ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Nombre de la Empresa</label>
              <input
                type="text"
                value={billingInfo.companyName}
                onChange={(e) => setBillingInfo({...billingInfo, companyName: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">NIF/CIF</label>
              <input
                type="text"
                value={billingInfo.taxId}
                onChange={(e) => setBillingInfo({...billingInfo, taxId: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Dirección de Facturación</label>
              <input
                type="text"
                value={billingInfo.billingAddress}
                onChange={(e) => setBillingInfo({...billingInfo, billingAddress: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Ciudad</label>
              <input
                type="text"
                value={billingInfo.billingCity}
                onChange={(e) => setBillingInfo({...billingInfo, billingCity: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Código Postal</label>
              <input
                type="text"
                value={billingInfo.billingPostalCode}
                onChange={(e) => setBillingInfo({...billingInfo, billingPostalCode: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">País</label>
              <input
                type="text"
                value={billingInfo.billingCountry}
                onChange={(e) => setBillingInfo({...billingInfo, billingCountry: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowBillingEdit(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                Guardar Cambios
              </button>
              <button
                onClick={() => setShowBillingEdit(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Nombre de la Empresa</p>
              <p className="text-white font-semibold">{billingInfo.companyName}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">NIF/CIF</p>
              <p className="text-white font-semibold">{billingInfo.taxId}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Dirección de Facturación</p>
              <p className="text-white font-semibold">{billingInfo.billingAddress}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Ciudad</p>
              <p className="text-white font-semibold">{billingInfo.billingCity}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Código Postal</p>
              <p className="text-white font-semibold">{billingInfo.billingPostalCode}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">País</p>
              <p className="text-white font-semibold">{billingInfo.billingCountry}</p>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'orders':
        return renderOrders();
      case 'profile':
        return renderProfile();
      default:
        return renderOrders();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700/50 min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-8">Panel Cliente</h1>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Navigation Bar - Only visible on mobile */}
          <div className="lg:hidden sticky top-0 z-40 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700/50">
            <div className="px-4 py-3">
              <h1 className="text-xl font-bold text-white mb-3">Panel Cliente</h1>
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 touch-manipulation min-w-fit ${
                      activeSection === item.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 lg:p-8 pb-20 lg:pb-8">
            {renderContent()}
          </div>

          {/* Bottom Navigation Bar - Only visible on mobile */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700/50">
            <div className="flex justify-around py-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 touch-manipulation ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;