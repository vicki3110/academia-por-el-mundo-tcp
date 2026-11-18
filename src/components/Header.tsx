import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onRequestEnrollment: () => void;
}

const NAV_ITEMS = [
  { href: '#cursos', label: 'Cursos' },
  { href: '#integracion-crm', label: 'Integración CRM' },
  { href: '#simuladores', label: 'Simuladores' },
  { href: '#testimonios', label: 'Testimonios' }
];

export function Header({ onRequestEnrollment }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const handlePrimaryClick = () => {
    setMobileOpen(false);
    onRequestEnrollment();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-sm border-b border-[#D4C4AA]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="font-display text-base sm:text-lg font-bold tracking-tight text-[#11253E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4E79] rounded-sm"
        >
          Academia por el mundo TCP
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#2A3B52] hover:text-[#11253E] underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4E79] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + Mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrimaryClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#FAF6EE] bg-[#11253E] hover:bg-[#1E4E79] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6CB0]"
          >
            Solicitar Plaza
          </button>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#11253E] hover:bg-[#EBE1D1] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E4E79]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#FAF6EE] border-b border-[#D4C4AA] px-6 py-4 space-y-3"
        >
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-2.5 text-base font-medium text-[#11253E] hover:text-[#1E4E79] border-b border-[#EBE1D1] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={handlePrimaryClick}
            className="w-full py-3 px-4 text-sm font-semibold text-[#FAF6EE] bg-[#11253E] hover:bg-[#1E4E79] rounded-lg transition-colors cursor-pointer"
          >
            Solicitar Plaza
          </button>
        </div>
      )}
    </header>
  );
}
