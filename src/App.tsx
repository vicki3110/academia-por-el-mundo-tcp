/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { COURSES, Course } from './data/courses';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { CourseModal } from './components/CourseModal';
import { CrmIntegrationSection } from './components/CrmIntegrationSection';
import { SimulatorsAndProofSection } from './components/SimulatorsAndProofSection';
import { EnrollmentSection } from './components/EnrollmentSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCourseModal, setSelectedCourseModal] = useState<Course | null>(null);
  const [enrollmentCourseId, setEnrollmentCourseId] = useState<string>(COURSES[0].id);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEnrollCourse = (courseId: string) => {
    setEnrollmentCourseId(courseId);
    scrollToSection('admisiones');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#11253E]">
      <Header onRequestEnrollment={() => scrollToSection('admisiones')} />

      <main className="flex-1">
        <Hero
          onExploreCourses={() => scrollToSection('cursos')}
          onGoToCrm={() => scrollToSection('integracion-crm')}
        />

        <CoursesSection
          onSelectCourseDetails={(course) => setSelectedCourseModal(course)}
          onEnrollCourse={handleEnrollCourse}
        />

        <CrmIntegrationSection />

        <SimulatorsAndProofSection />

        <EnrollmentSection
          selectedCourseId={enrollmentCourseId}
          onCourseChange={(courseId) => setEnrollmentCourseId(courseId)}
        />
      </main>

      <Footer />

      <CourseModal
        course={selectedCourseModal}
        onClose={() => setSelectedCourseModal(null)}
        onEnroll={handleEnrollCourse}
      />
    </div>
  );
}
