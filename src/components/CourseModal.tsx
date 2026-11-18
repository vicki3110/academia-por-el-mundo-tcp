import { useEffect } from 'react';
import { X, Check, Clock, ShieldCheck } from 'lucide-react';
import { Course } from '../data/courses';
import { ResilientImage } from './ResilientImage';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export function CourseModal({ course, onClose, onEnroll }: CourseModalProps) {
  useEffect(() => {
    if (!course) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11253E]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF6EE] border border-[#D4C4AA] rounded-xl text-[#11253E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar inside modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#FAF6EE]/95 backdrop-blur-xs border-b border-[#D4C4AA]">
          <div className="flex items-center gap-2 text-xs font-medium text-[#1E4E79]">
            <span className="font-mono tabular-nums">{course.code}</span>
            <span aria-hidden="true">·</span>
            <span>{course.category}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar plan de estudios"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#11253E] hover:bg-[#EBE1D1] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E4E79]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Course media + primary specs */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
            <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto rounded-lg overflow-hidden border border-[#D4C4AA]">
              <ResilientImage
                src={course.image}
                alt={course.imageAlt}
                fallbackTitle={course.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-7 flex flex-col justify-between">
              <div>
                <h3
                  id="course-modal-title"
                  className="font-display text-2xl font-bold text-[#11253E] leading-snug mb-3"
                >
                  {course.title}
                </h3>
                <p className="text-sm text-[#2A3B52] leading-relaxed mb-4">
                  {course.summary}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D4C4AA] text-xs">
                <div>
                  <p className="text-[#4A5568]">Carga total</p>
                  <p className="font-mono font-medium text-[#11253E] tabular-nums mt-0.5">
                    {course.durationHours} h
                  </p>
                </div>
                <div>
                  <p className="text-[#4A5568]">Teoría / Práctica</p>
                  <p className="font-mono font-medium text-[#11253E] tabular-nums mt-0.5">
                    {course.theoryHours} h / {course.practiceHours} h
                  </p>
                </div>
                <div>
                  <p className="text-[#4A5568]">Matrícula</p>
                  <p className="font-mono font-medium text-[#11253E] tabular-nums mt-0.5">
                    {course.tuition}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Target audience and simulator */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#EBE1D1] border border-[#D4C4AA] rounded-lg p-5 text-sm">
            <div>
              <p className="font-semibold text-[#11253E] mb-1">Perfil destinatario</p>
              <p className="text-[#2A3B52] leading-relaxed">{course.targetAudience}</p>
            </div>
            <div>
              <p className="font-semibold text-[#11253E] mb-1">Equipamiento de simulación</p>
              <p className="text-[#2A3B52] leading-relaxed">{course.simulatorEquipment}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-display text-base font-bold text-[#11253E] mb-3">
              Competencias técnicas clave
            </h4>
            <ul className="space-y-2.5">
              {course.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#2A3B52]">
                  <Check className="w-4 h-4 text-[#1E4E79] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Syllabus modules */}
          <div>
            <h4 className="font-display text-base font-bold text-[#11253E] mb-4">
              Estructura del plan de estudios
            </h4>
            <div className="divide-y divide-[#D4C4AA] border-t border-b border-[#D4C4AA]">
              {course.syllabus.map((mod) => (
                <div key={mod.moduleNumber} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-5 flex items-baseline gap-2.5">
                    <span className="font-mono text-xs font-medium text-[#1E4E79] tabular-nums">
                      {mod.moduleNumber}.
                    </span>
                    <span className="font-semibold text-sm text-[#11253E]">{mod.title}</span>
                  </div>
                  <p className="sm:col-span-7 text-sm text-[#2A3B52] leading-relaxed">
                    {mod.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal footer action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#2A3B52]">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#1E4E79]" aria-hidden="true" />
                {course.nextCohort}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1E4E79]" aria-hidden="true" />
                {course.certification}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                onEnroll(course.id);
                onClose();
              }}
              className="px-6 py-3 text-sm font-semibold text-[#FAF6EE] bg-[#11253E] hover:bg-[#1E4E79] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6CB0]"
            >
              Reservar Plaza en este Curso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
