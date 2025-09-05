import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            POLÍTICA DE <span className="text-primary">PRIVACIDAD</span>
          </h1>
          
          <div className="bg-dark-secondary p-8 rounded-lg space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. INFORMACIÓN GENERAL</h2>
              <p className="text-gray-300 leading-relaxed">
                En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección 
                de Datos Personales y garantía de los derechos digitales, informamos sobre el tratamiento de sus datos personales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. RESPONSABLE DEL TRATAMIENTO</h2>
              <p className="text-gray-300 leading-relaxed">
                Los datos personales recogidos a través de este sitio web son tratados bajo la responsabilidad de nuestra empresa, 
                con domicilio en España y sujeta a la legislación española y europea en materia de protección de datos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. DATOS QUE RECOPILAMOS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Recopilamos los siguientes tipos de datos:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Datos de identificación:</strong> Nombre, apellidos, email</li>
                <li><strong>Datos de contacto:</strong> Dirección de correo electrónico, teléfono</li>
                <li><strong>Datos de navegación:</strong> Dirección IP, cookies, datos de uso del sitio web</li>
                <li><strong>Datos de transacción:</strong> Información de compra y descarga de archivos</li>
                <li><strong>Datos técnicos:</strong> Información del vehículo para personalización de archivos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. FINALIDAD DEL TRATAMIENTO</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tratamos sus datos personales para las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Gestión de pedidos y entrega de archivos digitales</li>
                <li>Comunicación comercial y atención al cliente</li>
                <li>Cumplimiento de obligaciones legales y fiscales</li>
                <li>Mejora de nuestros servicios y experiencia de usuario</li>
                <li>Prevención de fraude y seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. BASE LEGAL</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Ejecución contractual:</strong> Para la prestación de nuestros servicios</li>
                <li><strong>Consentimiento:</strong> Para comunicaciones comerciales</li>
                <li><strong>Interés legítimo:</strong> Para la mejora de servicios y prevención de fraude</li>
                <li><strong>Obligación legal:</strong> Para el cumplimiento de normativas fiscales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. CONSERVACIÓN DE DATOS</h2>
              <p className="text-gray-300 leading-relaxed">
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que 
                fueron recogidos y, en todo caso, durante los plazos establecidos por la legislación aplicable (mínimo 6 años 
                para datos fiscales y contables).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. DESTINATARIOS DE LOS DATOS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sus datos pueden ser comunicados a:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Proveedores de servicios tecnológicos (hosting, email, etc.)</li>
                <li>Entidades financieras para el procesamiento de pagos</li>
                <li>Autoridades competentes cuando sea legalmente requerido</li>
                <li>Asesores legales y fiscales</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Todos los destinatarios están sujetos a estrictas obligaciones de confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. TRANSFERENCIAS INTERNACIONALES</h2>
              <p className="text-gray-300 leading-relaxed">
                En caso de transferencias de datos fuera del Espacio Económico Europeo, garantizamos que se realizan con las 
                debidas garantías y salvaguardas apropiadas conforme al RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. SUS DERECHOS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conforme al RGPD, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Acceso:</strong> Conocer qué datos tratamos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Limitación:</strong> Restringir el tratamiento de sus datos</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                <li><strong>Retirada del consentimiento:</strong> En cualquier momento</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Para ejercer estos derechos, puede contactarnos a través de los medios proporcionados en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. COOKIES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Funcionamiento básico del sitio web</li>
                <li>Análisis de uso y mejora de la experiencia</li>
                <li>Personalización de contenidos</li>
                <li>Medición de efectividad de campañas</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">11. SEGURIDAD</h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso, 
                alteración, divulgación o destrucción no autorizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">12. AUTORIDAD DE CONTROL</h2>
              <p className="text-gray-300 leading-relaxed">
                Tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera 
                que el tratamiento de sus datos no se ajusta a la normativa vigente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">13. MODIFICACIONES</h2>
              <p className="text-gray-300 leading-relaxed">
                Nos reservamos el derecho de modificar esta política de privacidad. Las modificaciones serán comunicadas 
                a través de nuestro sitio web con la debida antelación.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-600">
              <p className="text-sm text-gray-400 text-center">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;