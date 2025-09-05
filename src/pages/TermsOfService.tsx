import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            TÉRMINOS DE <span className="text-primary">SERVICIO</span>
          </h1>
          
          <div className="bg-dark-secondary p-8 rounded-lg space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. INFORMACIÓN GENERAL</h2>
              <p className="text-gray-300 leading-relaxed">
                Estos Términos de Servicio regulan el uso de nuestros servicios de venta de archivos de reprogramación ECU (tuning) 
                para vehículos. Al realizar una compra, usted acepta estos términos en su totalidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. NATURALEZA DE LOS PRODUCTOS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nuestros productos son archivos digitales de reprogramación ECU que se entregan exclusivamente por descarga digital. 
                No se realizan entregas físicas de ningún tipo.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Los archivos están diseñados para modificar los parámetros de funcionamiento del motor y otros sistemas del vehículo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. POLÍTICA DE NO DEVOLUCIONES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>NO SE ADMITEN DEVOLUCIONES NI REEMBOLSOS</strong> de ningún tipo una vez completada la descarga del archivo digital.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conforme al artículo 103.m) del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto 
                refundido de la Ley General para la Defensa de los Consumidores y Usuarios, el derecho de desistimiento no será 
                aplicable a los contratos de suministro de contenido digital que no se preste en un soporte material cuando la 
                ejecución haya comenzado con el previo consentimiento expreso del consumidor.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Al proceder con la descarga, usted otorga su consentimiento expreso para la entrega inmediata del contenido digital.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. DESCARGO DE RESPONSABILIDAD</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>EXENCIÓN TOTAL DE RESPONSABILIDAD:</strong> No nos hacemos responsables de:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Daños mecánicos, eléctricos o de cualquier tipo en el vehículo</li>
                <li>Pérdida de garantía del fabricante</li>
                <li>Fallos en componentes del motor o sistemas relacionados</li>
                <li>Problemas de emisiones o incumplimiento de normativas</li>
                <li>Accidentes o incidentes derivados del uso de nuestros archivos</li>
                <li>Pérdidas económicas directas o indirectas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. RESPONSABILIDAD DEL USUARIO</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                El usuario asume TODA LA RESPONSABILIDAD por:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>La correcta instalación y aplicación del archivo</li>
                <li>La compatibilidad del archivo con su vehículo específico</li>
                <li>El cumplimiento de la normativa local de emisiones y tráfico</li>
                <li>Cualquier consecuencia derivada del uso del archivo</li>
                <li>La realización de copias de seguridad antes de la instalación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. LIMITACIÓN DE GARANTÍAS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Los archivos se proporcionan "TAL COMO ESTÁN" sin garantías de ningún tipo, expresas o implícitas, incluyendo 
                pero no limitándose a:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Garantías de funcionamiento</li>
                <li>Garantías de rendimiento específico</li>
                <li>Garantías de compatibilidad</li>
                <li>Garantías de ausencia de errores</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. USO PROFESIONAL RECOMENDADO</h2>
              <p className="text-gray-300 leading-relaxed">
                Se recomienda encarecidamente que la instalación sea realizada por un profesional cualificado con experiencia 
                en reprogramación ECU. El uso inadecuado puede causar daños irreversibles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. LEGISLACIÓN APLICABLE</h2>
              <p className="text-gray-300 leading-relaxed">
                Estos términos se rigen por la legislación española. Cualquier disputa será resuelta por los tribunales competentes 
                de España, renunciando expresamente a cualquier otro fuero que pudiera corresponder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. MODIFICACIONES</h2>
              <p className="text-gray-300 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor 
                inmediatamente tras su publicación en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. CONTACTO</h2>
              <p className="text-gray-300 leading-relaxed">
                Para cualquier consulta relacionada con estos términos, puede contactarnos a través de los medios proporcionados 
                en nuestro sitio web.
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

export default TermsOfService;