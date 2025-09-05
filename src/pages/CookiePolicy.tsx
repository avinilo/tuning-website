import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            POLÍTICA DE <span className="text-primary">COOKIES</span>
          </h1>
          
          <div className="bg-dark-secondary p-8 rounded-lg space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">¿Qué son las cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
                Estas cookies nos ayudan a mejorar su experiencia de navegación, recordar sus preferencias y proporcionar 
                funcionalidades personalizadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Tipos de cookies que utilizamos</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Cookies Funcionales (Necesarias)
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Gestión de sesiones de usuario</li>
                    <li>Recordar preferencias de idioma</li>
                    <li>Mantener la funcionalidad del carrito de compras</li>
                    <li>Seguridad y autenticación</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Cookies de Estadísticas (Analíticas)
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando información de forma anónima.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Google Analytics para análisis de tráfico</li>
                    <li>Métricas de rendimiento del sitio</li>
                    <li>Patrones de navegación de usuarios</li>
                    <li>Estadísticas de páginas más visitadas</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Cookies de Marketing (Publicitarias)
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas publicitarias.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Personalización de anuncios</li>
                    <li>Seguimiento de conversiones</li>
                    <li>Remarketing y retargeting</li>
                    <li>Análisis de campañas publicitarias</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Cómo gestionar sus cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Puede gestionar sus preferencias de cookies en cualquier momento a través de nuestro banner de consentimiento 
                o configurando su navegador web.
              </p>
              
              <div className="bg-dark-primary border border-primary rounded-lg p-4 mb-4">
                <h4 className="font-medium text-primary mb-2">Gestión a través de nuestro sitio web:</h4>
                <p className="text-gray-300 text-sm">
                  Puede cambiar sus preferencias de cookies haciendo clic en el botón "Gestionar cookies" 
                  que aparece en la parte inferior de nuestro sitio web.
                </p>
              </div>

              <h4 className="font-medium text-white mb-3">Configuración del navegador:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios</li>
                <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Gestionar datos de sitios web</li>
                <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos del sitio &gt; Cookies y datos del sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies de terceros</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Algunos de nuestros socios pueden establecer cookies en su dispositivo cuando visita nuestro sitio web. 
                No tenemos control sobre estas cookies, pero puede gestionarlas a través de las configuraciones de su navegador.
              </p>
              
              <div className="space-y-4">
                <div className="bg-dark-primary border border-primary rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Google Analytics</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Utilizamos Google Analytics para analizar el uso de nuestro sitio web.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Más información: <a href="https://policies.google.com/privacy" className="text-primary hover:underline">Política de Privacidad de Google</a>
                  </p>
                </div>
                
                <div className="bg-dark-primary border border-primary rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Redes Sociales</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Los botones de redes sociales pueden establecer cookies para mejorar su experiencia.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Consulte las políticas de privacidad de cada plataforma social.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Duración de las cookies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark-primary border border-primary rounded-lg p-4">
                  <h4 className="font-medium text-primary mb-2">Cookies de Sesión</h4>
                  <p className="text-gray-300 text-sm">
                    Se eliminan automáticamente cuando cierra su navegador.
                  </p>
                </div>
                
                <div className="bg-dark-primary border border-primary rounded-lg p-4">
                  <h4 className="font-medium text-primary mb-2">Cookies Persistentes</h4>
                  <p className="text-gray-300 text-sm">
                    Permanecen en su dispositivo durante un período determinado o hasta que las elimine manualmente.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Su consentimiento</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política. 
                Puede retirar su consentimiento en cualquier momento modificando la configuración de cookies.
              </p>
              
              <div className="bg-dark-primary border border-primary rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-primary">Importante</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Si desactiva las cookies funcionales, algunas características del sitio web pueden no funcionar correctamente.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Sus derechos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Aceptar o rechazar cookies no esenciales</li>
                <li>Cambiar sus preferencias de cookies en cualquier momento</li>
                <li>Solicitar información sobre las cookies que utilizamos</li>
                <li>Eliminar cookies almacenadas en su dispositivo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contacto</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Si tiene alguna pregunta sobre nuestra política de cookies, no dude en contactarnos:
              </p>
              
              <div className="bg-dark-primary border border-primary rounded-lg p-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Email:</strong> privacy@empresa.com
                  </p>
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Teléfono:</strong> +34 900 000 000
                  </p>
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Dirección:</strong> Calle Principal 123, 28001 Madrid, España
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;