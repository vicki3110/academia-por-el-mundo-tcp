import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { COURSES } from '../data/courses';

interface EnrollmentSectionProps {
  selectedCourseId: string;
  onCourseChange: (courseId: string) => void;
}

const CAMPUSES = ['Madrid · Campus Barajas', 'Barcelona · Campus El Prat', 'Híbrido + Simulador'];

export function EnrollmentSection({
  selectedCourseId,
  onCourseChange
}: EnrollmentSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profile, setProfile] = useState('Aspirante a TCP');
  const [campus, setCampus] = useState(CAMPUSES[0]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCourseId) {
      setSubmittedRef(null);
    }
  }, [selectedCourseId]);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (fullName.trim().length < 3) {
      nextErrors.fullName = 'Introduzca su nombre y apellidos completos.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Introduzca un correo electrónico válido.';
    }
    if (!/^[+\d\s()-]{7,18}$/.test(phone.trim())) {
      nextErrors.phone = 'Introduzca un teléfono de contacto válido.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = `ALT-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(code);
  };

  const activeCourse = COURSES.find((c) => c.id === selectedCourseId) ?? COURSES[0];

  return (
    <section id="admisiones" className="bg-[#EBE1D1] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#1E4E79] mb-2">
                Admisiones y Asesoría Académica
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#11253E] mb-4">
                Solicite plaza o entrevista técnica de orientación
              </h2>
              <p className="text-base text-[#2A3B52] leading-relaxed">
                Nuestro equipo de instrucción revisará su perfil aeronáutico —ya sea aspirante sin
                experiencia previa, azafata en activo o piloto comercial— para asignarle el grupo
                de prácticas y calendario más adecuado.
              </p>
            </div>

            <div className="bg-[#FAF6EE] border border-[#D4C4AA] rounded-xl p-6 space-y-3 text-sm">
              <p className="font-display font-bold text-[#11253E]">
                Programa seleccionado actualmente
              </p>
              <p className="font-semibold text-[#1E4E79]">{activeCourse.title}</p>
              <div className="text-xs text-[#2A3B52] space-y-1 pt-1">
                <p>Convocatoria: {activeCourse.nextCohort}</p>
                <p>
                  Carga lectiva: <span className="font-mono tabular-nums">{activeCourse.durationHours} h</span> ·{' '}
                  {activeCourse.modality}
                </p>
                <p>
                  Importe oficial: <span className="font-mono tabular-nums">{activeCourse.tuition}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF6EE] border border-[#D4C4AA] rounded-xl p-6 sm:p-8">
            {submittedRef ? (
              <div className="py-8 space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#11253E]/10 flex items-center justify-center text-[#11253E]">
                  <CheckCircle2 className="w-6 h-6 text-[#1E4E79]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#11253E]">
                  Solicitud de plaza registrada correctamente
                </h3>
                <p className="text-sm sm:text-base text-[#2A3B52] leading-relaxed">
                  Hemos recibido su preinscripción para{' '}
                  <span className="font-semibold text-[#11253E]">{activeCourse.title}</span> en la
                  sede <span className="font-semibold text-[#11253E]">{campus}</span>. Un
                  coordinador académico se pondrá en contacto con usted en menos de 24 horas
                  laborables al correo <span className="font-medium">{email}</span>.
                </p>
                <div className="bg-[#EBE1D1] border border-[#D4C4AA] rounded-lg p-4 text-xs sm:text-sm flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[#2A3B52]">Referencia de expediente</span>
                  <span className="font-mono font-semibold text-[#11253E] tabular-nums">
                    {submittedRef}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setNotes('');
                  }}
                  className="px-5 py-2.5 text-sm font-semibold text-[#11253E] border border-[#D4C4AA] hover:bg-[#EBE1D1] rounded-lg transition-colors cursor-pointer"
                >
                  Realizar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-[#11253E] mb-1.5"
                    >
                      Nombre y apellidos
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ej. Elena Navarro Ruiz"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6EE] border border-[#D4C4AA] rounded-lg text-[#11253E] placeholder:text-[#64748B] focus:outline-none focus:border-[#1E4E79] focus:ring-2 focus:ring-[#1E4E79]/20"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-700" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#11253E] mb-1.5"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@correo.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6EE] border border-[#D4C4AA] rounded-lg text-[#11253E] placeholder:text-[#64748B] focus:outline-none focus:border-[#1E4E79] focus:ring-2 focus:ring-[#1E4E79]/20"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-700" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#11253E] mb-1.5"
                    >
                      Teléfono de contacto
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+34 600 000 000"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6EE] border border-[#D4C4AA] rounded-lg text-[#11253E] placeholder:text-[#64748B] focus:outline-none focus:border-[#1E4E79] focus:ring-2 focus:ring-[#1E4E79]/20"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-700" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="profile"
                      className="block text-sm font-semibold text-[#11253E] mb-1.5"
                    >
                      Perfil profesional actual
                    </label>
                    <select
                      id="profile"
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6EE] border border-[#D4C4AA] rounded-lg text-[#11253E] focus:outline-none focus:border-[#1E4E79] focus:ring-2 focus:ring-[#1E4E79]/20"
                    >
                      <option value="Aspirante a TCP">Aspirante a TCP (sin licencia previa)</option>
                      <option value="TCP / Azafata en Activo">TCP / Azafata en activo</option>
                      <option value="Piloto Comercial / ATPL">Piloto comercial / Comandante</option>
                      <option value="Tripulación Ejecutiva VIP">Tripulación ejecutiva VIP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="courseSelect"
                    className="block text-sm font-semibold text-[#11253E] mb-1.5"
                  >
                    Curso o programa de interés
                  </label>
                  <select
                    id="courseSelect"
                    value={selectedCourseId}
                    onChange={(e) => onCourseChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6EE] border border-[#D4C4AA] rounded-lg text-[#11253E] focus:outline-none focus:border-[#1E4E79] focus:ring-2 focus:ring-[#1E4E79]/20"
                  >
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.code} — {course.title} ({course.durationHours} h)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-sm font-semibold text-[#11253E] mb-2">
                    Sede y modalidad preferida
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {CAMPUSES.map((item) => {
                      const active = campus === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setCampus(item)}
                          className={`px-3 py-2.5 text-xs font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#11253E] text-[#FAF6EE] border-[#11253E]'
                              : 'bg-[#F4EDE0] text-[#2A3B52] border-[#D4C4AA] hover:border-[#1E4E79]'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-semibold text-[#11253E] mb-1.5"
                  >
                    Comentarios u horas de vuelo previas (opcional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Indique su disponibilidad o experiencia aeronáutica previa si aplica."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF6EE] border border-[#D4C4AA] rounded-lg text-[#11253E] placeholder:text-[#64748B] focus:outline-none focus:border-[#1E4E79] focus:ring-2 focus:ring-[#1E4E79]/20"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#4A5568]">
                    Organización de Formación Aprobada · EASA Part-CC ES.ATO-204
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3.5 text-sm font-semibold text-[#FAF6EE] bg-[#11253E] hover:bg-[#1E4E79] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6CB0]"
                  >
                    Confirmar Solicitud de Plaza
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
