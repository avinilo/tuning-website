import React, { useState } from 'react';
import { User, Package, FileText, Receipt, Download, Eye, EyeOff, Edit, Lock, CreditCard, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<ClientSection>('orders');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showBillingEdit, setShowBillingEdit] = useState(false);

  const sidebarItems = [
    { id: 'orders' as ClientSection, label: t('clientDashboard.sidebar.orders'), icon: ShoppingCart },
    { id: 'profile' as ClientSection, label: t('clientDashboard.sidebar.profile'), icon: User },
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
        return t('clientDashboard.orders.status.pending');
      case 'in_progress':
        return t('clientDashboard.orders.status.inProgress');
      case 'completed':
        return t('clientDashboard.orders.status.completed');
      case 'delivered':
        return t('clientDashboard.orders.status.delivered');
      case 'paid':
        return t('clientDashboard.orders.status.paid');
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
      <h2 className="text-3xl font-bold text-white mb-8">{t('clientDashboard.orders.title')}</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 break-words">{order.service}</h3>
                <p className="text-gray-300 mb-1 text-sm sm:text-base">Pedido: {order.id}</p>
                <p className="text-gray-300 mb-1 text-sm sm:text-base break-words">Vehículo: {order.vehicle}</p>
                <p className="text-gray-300 text-sm sm:text-base">Fecha: {new Date(order.date).toLocaleDateString('es-ES')}</p>
              </div>
              <div className="flex sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-2 sm:gap-0 sm:text-right flex-shrink-0">
                <p className={`text-base sm:text-lg font-semibold sm:mb-2 ${getStatusColor(order.status)}`}>
                  {getStatusText(order.status)}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-primary">€{order.price}</p>
              </div>
            </div>
            {order.estimatedDelivery && (
              <div className="bg-gray-700/30 rounded-lg p-3 mt-4">
                <p className="text-sm text-gray-300">
                  {t('clientDashboard.orders.estimatedDelivery')}: {new Date(order.estimatedDelivery).toLocaleDateString('es-ES')}
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
                    {t('clientDashboard.orders.tunedFiles')}
                  </h4>
                  <div className="space-y-3">
                    {order.files.map((file) => (
                      <div key={file.id} className="bg-gray-600/30 rounded-lg p-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium break-words">{file.fileName}</p>
                            <p className="text-gray-400 text-sm break-words">
                              {t('clientDashboard.orders.uploaded')}: {new Date(file.uploadDate).toLocaleDateString('es-ES')} • {file.size}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDownload(file.fileName)}
                            className="bg-primary hover:bg-primary/80 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation flex-shrink-0 w-full sm:w-auto"
                          >
                            <Download className="w-4 h-4" />
                            <span className="sm:hidden">{t('clientDashboard.orders.download')}</span>
                            <span className="hidden sm:inline">{t('clientDashboard.orders.download')}</span>
                          </button>
                        </div>
                        {file.comments && (
                          <div className="bg-gray-700/40 rounded-lg p-3 border-l-4 border-primary/50">
                            <p className="text-gray-300 text-sm font-medium mb-1">{t('clientDashboard.orders.techComments')}:</p>
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
                    {t('clientDashboard.orders.invoices')}
                  </h4>
                  <div className="space-y-2">
                    {order.invoices.map((invoice) => (
                      <div key={invoice.id} className="bg-gray-600/30 rounded-lg p-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium">Factura {invoice.invoiceNumber}</p>
                            <p className="text-gray-400 text-sm">
                              {new Date(invoice.date).toLocaleDateString('es-ES')} • €{invoice.amount} • 
                              <span className={getStatusColor(invoice.status)}> {getStatusText(invoice.status)}</span>
                            </p>
                          </div>
                          <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
                            <button
                              onClick={() => handleDownload(`factura_${invoice.invoiceNumber}.pdf`)}
                              className="bg-primary hover:bg-primary/80 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation flex-1 sm:flex-initial"
                            >
                              <Download className="w-4 h-4" />
                              <span className="hidden sm:inline">{t('clientDashboard.orders.download')}</span>
                              <span className="sm:hidden">{t('clientDashboard.orders.download')}</span>
                            </button>
                          </div>
                        </div>
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
      <h2 className="text-3xl font-bold text-white mb-8">{t('clientDashboard.profile.title')}</h2>
      <div className="space-y-6">
        {/* Profile Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{t('clientDashboard.profile.personalInfo')}</h3>
          <button
            onClick={() => setShowProfileEdit(!showProfileEdit)}
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto touch-manipulation"
          >
            <Edit className="w-4 h-4" />
            {t('clientDashboard.profile.edit')}
          </button>
        </div>
        
        {showProfileEdit ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.name')}</label>
              <input
                type="text"
                value={userProfile.name}
                onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.email')}</label>
              <input
                type="email"
                value={userProfile.email}
                onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.phone')}</label>
              <input
                type="tel"
                value={userProfile.phone}
                onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.address')}</label>
              <input
                type="text"
                value={userProfile.address}
                onChange={(e) => setUserProfile({...userProfile, address: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.city')}</label>
              <input
                type="text"
                value={userProfile.city}
                onChange={(e) => setUserProfile({...userProfile, city: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.postalCode')}</label>
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
                {t('clientDashboard.common.save')}
              </button>
              <button
                onClick={() => setShowProfileEdit(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                {t('clientDashboard.common.cancel')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.name')}</p>
              <p className="text-white text-base sm:text-lg break-words font-semibold">{userProfile.name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.email')}</p>
              <p className="text-white text-base sm:text-lg break-all font-semibold">{userProfile.email}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.phone')}</p>
              <p className="text-white text-base sm:text-lg font-semibold">{userProfile.phone}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.address')}</p>
              <p className="text-white text-base sm:text-lg break-words font-semibold">{userProfile.address}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.city')}</p>
              <p className="text-white text-base sm:text-lg break-words font-semibold">{userProfile.city}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.postalCode')}</p>
              <p className="text-white text-base sm:text-lg font-semibold">{userProfile.postalCode}</p>
            </div>
          </div>
        )}
        </div>

        {/* Password Change */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">{t('clientDashboard.profile.changePassword')}</h3>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Lock className="w-4 h-4" />
            {showPasswordForm ? t('clientDashboard.common.cancel') : t('clientDashboard.common.change')}
          </button>
        </div>
        
        {showPasswordForm && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.currentPassword')}</label>
              <input
                type="password"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.newPassword')}</label>
              <input
                type="password"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.confirmPassword')}</label>
              <input
                type="password"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation">
                {t('clientDashboard.profile.updatePassword')}
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
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{t('clientDashboard.profile.billingInfo')}</h3>
          <button
            onClick={() => setShowBillingEdit(!showBillingEdit)}
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto touch-manipulation"
          >
            <Edit className="w-4 h-4" />
            {showBillingEdit ? t('clientDashboard.common.cancel') : t('clientDashboard.profile.edit')}
          </button>
        </div>
        
        {showBillingEdit ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.companyName')}</label>
              <input
                type="text"
                value={billingInfo.companyName}
                onChange={(e) => setBillingInfo({...billingInfo, companyName: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.taxId')}</label>
              <input
                type="text"
                value={billingInfo.taxId}
                onChange={(e) => setBillingInfo({...billingInfo, taxId: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.billingAddress')}</label>
              <input
                type="text"
                value={billingInfo.billingAddress}
                onChange={(e) => setBillingInfo({...billingInfo, billingAddress: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.city')}</label>
              <input
                type="text"
                value={billingInfo.billingCity}
                onChange={(e) => setBillingInfo({...billingInfo, billingCity: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.postalCode')}</label>
              <input
                type="text"
                value={billingInfo.billingPostalCode}
                onChange={(e) => setBillingInfo({...billingInfo, billingPostalCode: e.target.value})}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">{t('clientDashboard.profile.country')}</label>
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
                {t('clientDashboard.common.save')}
              </button>
              <button
                onClick={() => setShowBillingEdit(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                {t('clientDashboard.common.cancel')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.companyName')}</p>
              <p className="text-white text-base sm:text-lg break-words font-semibold">{billingInfo.companyName}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.taxId')}</p>
              <p className="text-white text-base sm:text-lg font-semibold">{billingInfo.taxId}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.billingAddress')}</p>
              <p className="text-white text-base sm:text-lg break-words font-semibold">{billingInfo.billingAddress}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">Ciudad</p>
              <p className="text-white text-base sm:text-lg break-words font-semibold">{billingInfo.billingCity}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">Código Postal</p>
              <p className="text-white text-base sm:text-lg font-semibold">{billingInfo.billingPostalCode}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">{t('clientDashboard.profile.country')}</p>
              <p className="text-white text-base sm:text-lg break-words font-semibold">{billingInfo.billingCountry}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-x-hidden">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-700 min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-8" dangerouslySetInnerHTML={{ __html: t('clientDashboard.title') }}>
            </h1>
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 touch-manipulation ${
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
        <div className="flex-1 w-full">
          {/* Mobile Navigation */}
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-30">
            <div className="px-4 py-3">
              <h1 className="text-lg font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: t('clientDashboard.title') }}>
              </h1>
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-2 pb-2 min-w-max">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 touch-manipulation text-sm min-w-fit ${
                          activeSection === item.id
                            ? 'bg-primary text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium whitespace-nowrap">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 lg:p-8 w-full max-w-full overflow-x-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;