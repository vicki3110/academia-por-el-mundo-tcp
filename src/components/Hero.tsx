import { ArrowRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onExploreCourses: () => void;
  onGoToCrm: () => void;
}

const PROOF_METRICS = [
  {
    value: '94,6 %',
    label: 'Inserción en aerolíneas comerciales en 6 meses'
  },
  {
    value: '4.200+',
    label: 'Tripulantes TCP y pilotos certificados en CRM'
  },
  {
    value: '100 %',
    label: 'Prácticas en simuladores Airbus A320 y Boeing 737'
  },
  {
    value: 'EASA Part-CC',
    label: 'Centro homologado con validez europea'
  }
];

export function Hero({ onExploreCourses, onGoToCrm }: HeroProps) {
  return (
    <section id="inicio" className="bg-[#FAF6EE] pt-10 pb-14 md:pt-14 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Two-column editorial split with matched vertical stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#1E4E79] tracking-wide mb-5">
                Escuela Superior de Aviación · Madrid-Barajas y Barcelona-El Prat
              </p>

              <h1
                className="font-display font-bold tracking-tight text-[#11253E] leading-[1.08] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.6rem)' }}
              >
                Formación TCP de alto nivel e integración operativa entre pilotos y cabina
              </h1>

              <p className="text-base sm:text-lg text-[#2A3B52] leading-relaxed max-w-[58ch] mb-8">
                Instruimos a futuros Tripulantes de Cabina de Pasajeros, azafatas en activo y
                comandantes en técnicas avanzadas de seguridad aeronáutica, gestión de emergencias y
                protocolos conjuntos cockpit–cabina bajo normativa europea EASA.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="button"
                onClick={onExploreCourses}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FAF6EE] bg-[#11253E] hover:bg-[#1E4E79] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6CB0]"
              >
                <span>Explorar Programas</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onGoToCrm}
                className="text-sm sm:text-base font-semibold text-[#1E4E79] hover:text-[#11253E] underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4E79] rounded-sm"
              >
                Ver Metodología CRM Piloto–TCP
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[280px] lg:min-h-[440px] rounded-xl overflow-hidden border border-[#D4C4AA] bg-[#EBE1D1]">
              <ResilientImage
                src="/src/assets/images/hero_aviation_academy_1795040331310.jpg"
                alt="Comandante de aerolínea y sobrecargo revisando listas de verificación frente a maqueta de fuselaje en centro de instrucción aeronáutica"
                fallbackTitle="Academia por el mundo TCP"
                containerClassName="w-full h-full"
                className="w-full h-full lg:h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Full-width 4-column institutional proof strip */}
        <div className="mt-10 md:mt-14 bg-[#EBE1D1] border border-[#D4C4AA] rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D4C4AA]">
          {PROOF_METRICS.map((metric) => (
            <div key={metric.label} className="p-6">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#11253E] tabular-nums tracking-tight">
                {metric.value}
              </p>
              <p className="mt-1.5 text-sm text-[#2A3B52] leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
