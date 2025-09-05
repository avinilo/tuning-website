import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            POLÍTICA DE <span className="text-primary">DEVOLUCIONES</span>
          </h1>
          
          <div className="bg-dark-secondary p-8 rounded-lg space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. POLÍTICA GENERAL</h2>
              <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg mb-4">
                <p className="text-red-300 font-semibold text-lg">
                  ⚠️ NO SE ADMITEN DEVOLUCIONES NI REEMBOLSOS
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Debido a la naturaleza digital de nuestros productos (archivos de reprogramación ECU), 
                <strong> NO SE ADMITEN DEVOLUCIONES NI REEMBOLSOS</strong> una vez completada la descarga del archivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. FUNDAMENTO LEGAL</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Esta política se basa en la legislación española vigente:
              </p>
              <div className="bg-dark-primary p-4 rounded-lg border-l-4 border-primary">
                <p className="text-gray-300 leading-relaxed mb-2">
                  <strong>Artículo 103.m) del Real Decreto Legislativo 1/2007:</strong>
                </p>
                <p className="text-gray-300 leading-relaxed italic">
                  "El derecho de desistimiento no será aplicable a los contratos de suministro de contenido digital que no se 
                  preste en un soporte material cuando la ejecución haya comenzado con el previo consentimiento expreso del 
                  consumidor y usuario con el reconocimiento por su parte de que pierde su derecho de desistimiento."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. CONSENTIMIENTO EXPRESO</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Al proceder con la compra y descarga de nuestros archivos digitales, usted:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Otorga su <strong>consentimiento expreso</strong> para la entrega inmediata del contenido digital</li>
                <li>Reconoce que <strong>pierde su derecho de desistimiento</strong> una vez iniciada la descarga</li>
                <li>Acepta que no podrá solicitar devolución ni reembolso por ningún motivo</li>
                <li>Confirma haber leído y entendido esta política antes de la compra</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. PRODUCTOS AFECTADOS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Esta política se aplica a TODOS nuestros productos digitales, incluyendo:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Archivos de reprogramación ECU (Stage 1, Stage 2, etc.)</li>
                <li>Archivos de eliminación de sistemas (DPF, EGR, AdBlue, etc.)</li>
                <li>Archivos de optimización TCU</li>
                <li>Cualquier otro archivo digital de tuning</li>
                <li>Servicios de personalización de archivos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. MOTIVOS NO VÁLIDOS PARA DEVOLUCIÓN</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Los siguientes motivos <strong>NO constituyen</strong> base para solicitar devolución:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Cambio de opinión después de la descarga</li>
                <li>Incompatibilidad con el vehículo (responsabilidad del cliente verificar)</li>
                <li>Resultados de rendimiento no esperados</li>
                <li>Problemas técnicos durante la instalación</li>
                <li>Daños en el vehículo derivados del uso del archivo</li>
                <li>Pérdida de garantía del fabricante</li>
                <li>Problemas con la legalidad en su jurisdicción</li>
                <li>Dificultades técnicas del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. VERIFICACIÓN PREVIA A LA COMPRA</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Es <strong>responsabilidad exclusiva del cliente</strong> verificar antes de la compra:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Compatibilidad del archivo con su vehículo específico</li>
                <li>Especificaciones técnicas requeridas</li>
                <li>Legalidad del uso en su país/región</li>
                <li>Capacidad técnica para la instalación</li>
                <li>Aceptación de los riesgos asociados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. SOPORTE TÉCNICO</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Aunque no ofrecemos devoluciones, sí proporcionamos:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Soporte técnico básico para la instalación</li>
                <li>Información sobre compatibilidad (antes de la compra)</li>
                <li>Guías de instalación cuando estén disponibles</li>
                <li>Respuesta a consultas técnicas razonables</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Importante:</strong> El soporte técnico no incluye garantía de funcionamiento ni responsabilidad por daños.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. CASOS EXCEPCIONALES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                En casos muy excepcionales, podríamos considerar:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Error técnico en la entrega del archivo correcto</li>
                <li>Archivo corrupto o dañado (se proporcionará reenvío, no reembolso)</li>
                <li>Doble cobro por error del sistema de pago</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Estos casos serán evaluados individualmente y la decisión final será a nuestra discreción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. PROCESO DE RECLAMACIÓN</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Si considera que su caso entra en las excepciones mencionadas:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>Contacte con nosotros dentro de las 24 horas posteriores a la compra</li>
                <li>Proporcione evidencia clara del problema técnico</li>
                <li>Incluya todos los detalles de la transacción</li>
                <li>Aguarde nuestra evaluación (máximo 5 días laborables)</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. ACEPTACIÓN DE TÉRMINOS</h2>
              <p className="text-gray-300 leading-relaxed">
                Al realizar una compra en nuestro sitio web, usted confirma que ha leído, entendido y acepta completamente 
                esta Política de Devoluciones, así como nuestros Términos de Servicio.
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

export default RefundPolicy;