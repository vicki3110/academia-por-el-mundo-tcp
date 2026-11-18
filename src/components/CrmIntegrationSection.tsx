import { useState } from 'react';
import { CRM_SCENARIOS } from '../data/courses';

const INTEGRATION_PILLARS = [
  {
    number: '01.',
    title: 'Comunicación Cabina–Cockpit bajo Carga Crítica',
    description:
      'Entrenamiento conjunto de briefing NITS (Naturaleza, Intenciones, Tiempo e Instrucciones Especiales) para transmitir emergencias en menos de 20 segundos sin ambigüedad.'
  },
  {
    number: '02.',
    title: 'Simulación Enlazada en Tiempo Real',
    description:
      'Nuestro simulador FTD de cabina de mando se comunica por interfono activo con la maqueta de pasajeros, exigiendo respuesta simultánea a pilotos y sobrecargos.'
  },
  {
    number: '03.',
    title: 'Ruptura de Barreras Jerárquicas (CRM)',
    description:
      'Prácticas de asertividad operativa para que cualquier TCP reporte anomalías técnicas en alas, motores o cabina y el comandante valide la información sin sesgos.'
  },
  {
    number: '04.',
    title: 'Protocolos de Cabina Estéril y Seguridad',
    description:
      'Control de accesos a puerta blindada, códigos de amenaza silenciosa y asistencia en cabina de mando ante incapacitación súbita de un miembro de la tripulación técnica.'
  }
];

export function CrmIntegrationSection() {
  const [selectedId, setSelectedId] = useState<string>(CRM_SCENARIOS[0].id);
  const currentScenario =
    CRM_SCENARIOS.find((item) => item.id === selectedId) ?? CRM_SCENARIOS[0];

  return (
    <section id="integracion-crm" className="bg-[#11253E] text-[#FAF6EE] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-medium text-[#DFD2BC] tracking-wide mb-3">
            Doctrina Operativa Conjunta · Pilotos Comerciales y Tripulación de Cabina
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6EE] mb-4">
            Un mismo lenguaje técnico entre el cockpit y la cabina de pasajeros
          </h2>
          <p className="text-base text-[#EBE1D1] leading-relaxed tracking-[0.01em]">
            La mayoría de incidentes operacionales nacen en la brecha de coordinación entre la
            cabina de mando y la cabina de pasaje. En Academia por el mundo TCP entrenamos a comandantes, primeros
            oficiales, sobrecargos y azafatas dentro de un mismo entorno de simulación integrada.
          </p>
        </div>

        {/* 4 Editorial Numbered Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 pb-14 border-b border-[#FAF6EE]/15">
          {INTEGRATION_PILLARS.map((pillar) => (
            <div key={pillar.number} className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-[#DFD2BC] tabular-nums">
                  {pillar.number}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#FAF6EE] tracking-[0.01em]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-[#EBE1D1]/90 leading-relaxed pl-8">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Cockpit-Cabin Protocol Matrix */}
        <div className="pt-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#FAF6EE]">
                Matriz Interactiva de Coordinación en Emergencia
              </h3>
              <p className="text-sm text-[#EBE1D1]/85 mt-1">
                Seleccione un escenario crítico para inspeccionar el protocolo sincronizado entre
                tripulación técnica y TCP.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Escenarios de coordinación piloto y cabina"
              className="flex flex-wrap gap-2"
            >
              {CRM_SCENARIOS.map((scenario) => {
                const isSelected = scenario.id === currentScenario.id;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedId(scenario.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF6EE] ${
                      isSelected
                        ? 'bg-[#FAF6EE] text-[#11253E] border-[#FAF6EE]'
                        : 'bg-transparent text-[#EBE1D1] border-[#FAF6EE]/25 hover:border-[#FAF6EE]/60'
                    }`}
                  >
                    {scenario.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-[#FAF6EE] text-[#11253E] rounded-xl border border-[#D4C4AA] overflow-hidden">
            {/* Scenario metadata header */}
            <div className="px-6 py-4 bg-[#EBE1D1] border-b border-[#D4C4AA] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="font-semibold text-[#11253E]">
                {currentScenario.title}
                <span className="mx-2 text-[#4A5568]" aria-hidden="true">
                  ·
                </span>
                <span className="font-normal text-[#2A3B52]">{currentScenario.phase}</span>
              </div>
              <div className="font-mono text-xs font-medium text-[#1E4E79] tabular-nums">
                {currentScenario.timeWindow}
              </div>
            </div>

            {/* Side-by-side Pilot vs Cabin actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#D4C4AA]">
              <div className="p-6">
                <p className="text-xs font-semibold text-[#1E4E79] tracking-wide mb-4">
                  Tripulación Técnica · Comandante y Primer Oficial
                </p>
                <ol className="space-y-3">
                  {currentScenario.pilotActions.map((action, idx) => (
                    <li key={action} className="flex items-start gap-3 text-sm text-[#2A3B52]">
                      <span className="font-mono text-xs font-medium text-[#1E4E79] tabular-nums mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span className="leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-[#1E4E79] tracking-wide mb-4">
                  Tripulación de Cabina · Sobrecargo y Azafatas TCP
                </p>
                <ol className="space-y-3">
                  {currentScenario.cabinActions.map((action, idx) => (
                    <li key={action} className="flex items-start gap-3 text-sm text-[#2A3B52]">
                      <span className="font-mono text-xs font-medium text-[#1E4E79] tabular-nums mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span className="leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Shared rule footer */}
            <div className="px-6 py-4 bg-[#F4EDE0] border-t border-[#D4C4AA] text-sm text-[#11253E]">
              <span className="font-semibold">Regla de integración: </span>
              <span className="text-[#2A3B52]">{currentScenario.sharedProtocol}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
