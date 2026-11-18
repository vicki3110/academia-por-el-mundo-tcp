import { useState } from 'react';
import { ArrowUpRight, Clock, Award } from 'lucide-react';
import { COURSES, Course, CourseCategory } from '../data/courses';
import { ResilientImage } from './ResilientImage';

interface CoursesSectionProps {
  onSelectCourseDetails: (course: Course) => void;
  onEnrollCourse: (courseId: string) => void;
}

const CATEGORIES: CourseCategory[] = [
  'Todos',
  'TCP Profesional',
  'Integración Piloto–TCP',
  'Seguridad Operacional',
  'Aviación Ejecutiva'
];

export function CoursesSection({
  onSelectCourseDetails,
  onEnrollCourse
}: CoursesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('Todos');

  const filteredCourses =
    activeCategory === 'Todos'
      ? COURSES
      : COURSES.filter((course) => course.category === activeCategory);

  return (
    <section id="cursos" className="bg-[#F4EDE0] py-16 md:py-24 border-t border-[#D4C4AA]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header row + interactive filter tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#1E4E79] mb-2">
              Catálogo Académico 2026–2027 · Licencias y Especialidades
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#11253E]">
              Programas de Formación Aeronáutica
            </h2>
          </div>

          {/* Interactive segmented filter bar */}
          <div
            role="tablist"
            aria-label="Filtrar cursos por especialidad"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EBE1D1] border border-[#D4C4AA] rounded-lg"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1E4E79] ${
                    isActive
                      ? 'bg-[#11253E] text-[#FAF6EE]'
                      : 'text-[#2A3B52] hover:text-[#11253E] hover:bg-[#FAF6EE]/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {filteredCourses.map((course, index) => {
            const isFeatured = activeCategory === 'Todos' && index === 0;
            const isSecondRowWide = activeCategory === 'Todos' && index === 1;
            const spanClass = isFeatured
              ? 'lg:col-span-4'
              : isSecondRowWide
              ? 'lg:col-span-2'
              : 'lg:col-span-2';

            return (
              <article
                key={course.id}
                className={`${spanClass} bg-[#FAF6EE] border border-[#D4C4AA] rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5`}
              >
                <div>
                  {/* Bespoke course photography */}
                  <div className={isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'}>
                    <ResilientImage
                      src={course.image}
                      alt={course.imageAlt}
                      fallbackTitle={course.title}
                      containerClassName="w-full h-full border-b border-[#D4C4AA]"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="p-6">
                    {/* Unboxed inline metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#1E4E79] font-medium mb-3">
                      <span className="font-mono tabular-nums">{course.code}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{course.durationHours} horas</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#11253E] leading-snug mb-3">
                      {course.title}
                    </h3>

                    <p className="text-sm text-[#2A3B52] leading-relaxed mb-5">
                      {course.summary}
                    </p>

                    <div className="pt-4 border-t border-[#EBE1D1] space-y-2 text-xs text-[#2A3B52]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#1E4E79] shrink-0" aria-hidden="true" />
                        <span>{course.nextCohort}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-[#1E4E79] shrink-0" aria-hidden="true" />
                        <span>{course.certification}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card actions */}
                <div className="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectCourseDetails(course)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4E79] hover:text-[#11253E] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4E79] rounded-sm"
                  >
                    <span>Ver Plan de Estudios</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onEnrollCourse(course.id)}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#FAF6EE] bg-[#11253E] hover:bg-[#1E4E79] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B6CB0]"
                  >
                    Preinscribirse
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
