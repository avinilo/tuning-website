import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            DESCARGO DE <span className="text-primary">RESPONSABILIDAD</span>
          </h1>
          
          <div className="bg-dark-secondary p-8 rounded-lg space-y-6">
            <div className="bg-red-900/20 border border-red-500 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-red-300 mb-4">⚠️ ADVERTENCIA IMPORTANTE</h2>
              <p className="text-red-200 leading-relaxed">
                La modificación de la ECU de su vehículo conlleva riesgos significativos. Al utilizar nuestros archivos, 
                usted asume TODA LA RESPONSABILIDAD por cualquier consecuencia que pueda derivarse.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. NATURALEZA DE LOS RIESGOS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                La reprogramación ECU implica modificar los parámetros de funcionamiento del motor y otros sistemas del vehículo. 
                Esto puede resultar en:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Daños mecánicos:</strong> Rotura de motor, turbo, embrague, transmisión</li>
                <li><strong>Daños eléctricos:</strong> Fallos en la ECU, sensores, actuadores</li>
                <li><strong>Pérdida de garantía:</strong> Anulación completa de la garantía del fabricante</li>
                <li><strong>Problemas de emisiones:</strong> Incumplimiento de normativas ambientales</li>
                <li><strong>Fallos de seguridad:</strong> Comportamiento impredecible del vehículo</li>
                <li><strong>Problemas legales:</strong> Infracciones de tráfico o normativas locales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. EXENCIÓN TOTAL DE RESPONSABILIDAD</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>DECLARAMOS EXPRESAMENTE</strong> que NO nos hacemos responsables de:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Cualquier daño directo, indirecto, incidental o consecuencial</li>
                <li>Pérdidas económicas de cualquier naturaleza</li>
                <li>Daños a personas o bienes</li>
                <li>Accidentes de tráfico o incidentes relacionados</li>
                <li>Multas, sanciones o procedimientos legales</li>
                <li>Costes de reparación o reemplazo de componentes</li>
                <li>Pérdida de tiempo, beneficios o oportunidades</li>
                <li>Daños a terceros o sus propiedades</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. SIN GARANTÍAS DE RENDIMIENTO</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>NO GARANTIZAMOS:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Incrementos específicos de potencia o par motor</li>
                <li>Mejoras en el consumo de combustible</li>
                <li>Funcionamiento correcto en todos los vehículos</li>
                <li>Compatibilidad con modificaciones existentes</li>
                <li>Durabilidad a largo plazo del motor</li>
                <li>Cumplimiento de normativas de emisiones</li>
                <li>Mantenimiento de la fiabilidad original</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. RESPONSABILIDAD DEL USUARIO</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Al utilizar nuestros archivos, usted acepta que es su <strong>EXCLUSIVA RESPONSABILIDAD:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Verificar la compatibilidad con su vehículo específico</li>
                <li>Realizar copias de seguridad de la programación original</li>
                <li>Contratar instalación profesional cualificada</li>
                <li>Verificar el cumplimiento de normativas locales</li>
                <li>Asumir todos los riesgos asociados</li>
                <li>Informar a su seguro sobre las modificaciones</li>
                <li>Realizar mantenimiento adicional si es necesario</li>
                <li>Monitorizar el funcionamiento del vehículo tras la instalación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. INSTALACIÓN PROFESIONAL RECOMENDADA</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>RECOMENDAMOS ENCARECIDAMENTE</strong> que la instalación sea realizada por:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Profesionales con experiencia en reprogramación ECU</li>
                <li>Talleres especializados en tuning</li>
                <li>Técnicos con equipamiento adecuado</li>
                <li>Personas con conocimientos de mecánica avanzada</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>ADVERTENCIA:</strong> La instalación incorrecta puede causar daños irreversibles y peligrosos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. LIMITACIONES LEGALES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>IMPORTANTE:</strong> El uso de nuestros archivos puede:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Ser ilegal en ciertas jurisdicciones</li>
                <li>Violar normativas de emisiones locales</li>
                <li>Incumplir regulaciones de tráfico</li>
                <li>Afectar la homologación del vehículo</li>
                <li>Invalidar permisos de circulación</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Es su responsabilidad verificar y cumplir con todas las leyes aplicables en su ubicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. USO EXCLUSIVO EN CIRCUITO CERRADO</h2>
              <p className="text-gray-300 leading-relaxed">
                Nuestros archivos están diseñados para <strong>USO EXCLUSIVO EN COMPETICIÓN Y CIRCUITOS CERRADOS</strong>. 
                El uso en vía pública puede ser ilegal y peligroso. El usuario asume toda responsabilidad por el uso 
                que haga de los archivos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. MODIFICACIONES DEL VEHÍCULO</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Las modificaciones realizadas con nuestros archivos:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Son <strong>IRREVERSIBLES</strong> en algunos casos</li>
                <li>Pueden requerir modificaciones físicas adicionales</li>
                <li>Pueden afectar otros sistemas del vehículo</li>
                <li>Pueden requerir combustibles específicos</li>
                <li>Pueden alterar el comportamiento de conducción</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. SEGURO Y COBERTURA</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>ADVERTENCIA:</strong> Las modificaciones ECU pueden anular su póliza de seguro. Es su responsabilidad 
                informar a su compañía de seguros sobre cualquier modificación y verificar que mantiene cobertura adecuada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. ACEPTACIÓN DE RIESGOS</h2>
              <p className="text-gray-300 leading-relaxed">
                Al descargar y utilizar nuestros archivos, usted declara expresamente que:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Ha leído y comprendido completamente este descargo de responsabilidad</li>
                <li>Acepta todos los riesgos asociados con las modificaciones ECU</li>
                <li>Renuncia a cualquier reclamación contra nuestra empresa</li>
                <li>Asume toda responsabilidad por las consecuencias de su uso</li>
                <li>Tiene la capacidad legal para asumir estos riesgos</li>
              </ul>
            </section>

            <div className="bg-yellow-900/20 border border-yellow-500 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-bold text-yellow-300 mb-2">RECORDATORIO FINAL</h3>
              <p className="text-yellow-200 leading-relaxed">
                Si no está dispuesto a asumir TODOS los riesgos mencionados en este documento, 
                <strong> NO UTILICE NUESTROS ARCHIVOS</strong>. Su uso implica aceptación total de estos términos.
              </p>
            </div>

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

export default Disclaimer;