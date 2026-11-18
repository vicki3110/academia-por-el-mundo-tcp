export function Footer() {
  return (
    <footer className="bg-[#11253E] text-[#FAF6EE] border-t border-[#FAF6EE]/10">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#FAF6EE]/15">
          <div className="md:col-span-5 space-y-3">
            <p className="font-display text-xl font-bold tracking-tight text-[#FAF6EE]">
              Academia por el mundo TCP
            </p>
            <p className="text-sm text-[#EBE1D1]/85 leading-relaxed max-w-sm">
              Escuela superior de Tripulantes de Cabina de Pasajeros, seguridad operacional e
              integración técnica entre pilotos y azafatas profesionales.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-sm">
            <p className="font-semibold text-[#FAF6EE] mb-3">Navegación</p>
            <ul className="space-y-2 text-[#EBE1D1]/85">
              <li>
                <a href="#cursos" className="hover:text-[#FAF6EE] transition-colors">
                  Programas y Cursos
                </a>
              </li>
              <li>
                <a href="#integracion-crm" className="hover:text-[#FAF6EE] transition-colors">
                  Integración CRM Piloto–TCP
                </a>
              </li>
              <li>
                <a href="#simuladores" className="hover:text-[#FAF6EE] transition-colors">
                  Simuladores y Hangares
                </a>
              </li>
              <li>
                <a href="#admisiones" className="hover:text-[#FAF6EE] transition-colors">
                  Admisiones
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2 text-sm">
            <p className="font-semibold text-[#FAF6EE] mb-3">Sedes de Instrucción</p>
            <div className="space-y-2 text-[#EBE1D1]/85">
              <p>Madrid-Barajas · Av. de la Aviación Civil, 42</p>
              <p>Barcelona-El Prat · Parque Aeronáutico Sur, Hangar 4</p>
              <p className="pt-1 font-mono text-xs text-[#DFD2BC] flex flex-wrap items-center gap-x-2 gap-y-1">
                <a
                  href="mailto:mariavictoriawittouck013@gmail.com"
                  className="hover:text-[#FAF6EE] hover:underline underline-offset-4 transition-colors"
                >
                  mariavictoriawittouck013@gmail.com
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="tel:+5493584320842"
                  className="hover:text-[#FAF6EE] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
                >
                  +54 9 358 432 0842
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#EBE1D1]/70">
          <p>© 2026 Academia por el mundo TCP. Todos los derechos reservados.</p>
          <p>Centro Homologado EASA Part-CC · Formación TCP y CRM Conjunto</p>
        </div>
      </div>
    </footer>
  );
}
