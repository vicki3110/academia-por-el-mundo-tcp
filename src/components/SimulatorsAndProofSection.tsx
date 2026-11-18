import { TESTIMONIALS } from '../data/courses';

const SIMULATOR_SPECS = [
  {
    code: 'SIM-01',
    name: 'Cabina de Vuelo A320 FTD Nivel 2',
    spec: 'Enlace acústico bidireccional con cabina de pasajeros para prácticas conjuntas piloto–sobrecargo.'
  },
  {
    code: 'SIM-02',
    name: 'Fuselaje A320 / B737 con Puertas Activas',
    spec: 'Simulación de fallos neumáticos en puertas, armado de rampas y evacuación en menos de 90 segundos.'
  },
  {
    code: 'SIM-03',
    name: 'Módulo Térmico de Fuego y Humo Denso',
    spec: 'Entrenamiento real con generadores de humo inocuo, equipos PBE y contención de baterías de litio.'
  },
  {
    code: 'SIM-04',
    name: 'Cabina Ejecutiva de Largo Alcance',
    spec: 'Configuración corporativa en cuero vainilla y madera noble para servicio VIP y operación autónoma.'
  }
];

export function SimulatorsAndProofSection() {
  return (
    <section id="simuladores" className="bg-[#FAF6EE] py-16 md:py-24 border-b border-[#D4C4AA]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-20">
        {/* Infrastructure table / technical list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#1E4E79] mb-2">
              Infraestructura Técnica Certificada
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#11253E] mb-4">
              Flota de simuladores y hangares propios
            </h2>
            <p className="text-base text-[#2A3B52] leading-relaxed">
              Cada curso combina teoría aeronáutica con práctica cronometrada sobre maquetas de
              tamaño real. Nuestros instructores son comandantes habilitados TRI/TRE y sobrecargos
              con más de diez años en operación comercial y ejecutiva.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#EBE1D1] border border-[#D4C4AA] rounded-xl divide-y divide-[#D4C4AA]">
            {SIMULATOR_SPECS.map((item) => (
              <div
                key={item.code}
                className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
              >
                <span className="sm:col-span-2 font-mono text-xs font-medium text-[#1E4E79] tabular-nums">
                  {item.code}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-base font-bold text-[#11253E]">{item.name}</h3>
                  <p className="text-sm text-[#2A3B52] mt-1 leading-relaxed">{item.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Adjacent attributable testimonials */}
        <div id="testimonios" className="pt-4">
          <div className="mb-10">
            <p className="text-xs sm:text-sm font-medium text-[#1E4E79] mb-2">
              Resultados Verificables en Operación Real
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#11253E]">
              Evaluación de comandantes, sobrecargos y tripulantes graduados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className="bg-[#F4EDE0] border border-[#D4C4AA] rounded-xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <p className="text-xs font-medium text-[#1E4E79]">{item.courseTaken}</p>
                  <blockquote className="space-y-3 text-sm text-[#2A3B52] leading-relaxed">
                    <p>"{item.before}"</p>
                    <p className="font-medium text-[#11253E]">"{item.outcome}"</p>
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4C4AA]">
                  <p className="font-display font-bold text-sm text-[#11253E]">{item.name}</p>
                  <p className="text-xs text-[#2A3B52] mt-0.5">
                    {item.role} · {item.organization}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
