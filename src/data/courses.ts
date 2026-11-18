export type CourseCategory =
  | 'Todos'
  | 'TCP Profesional'
  | 'Integración Piloto–TCP'
  | 'Seguridad Operacional'
  | 'Aviación Ejecutiva';

export interface Course {
  id: string;
  code: string;
  title: string;
  category: Exclude<CourseCategory, 'Todos'>;
  durationHours: number;
  theoryHours: number;
  practiceHours: number;
  modality: string;
  nextCohort: string;
  certification: string;
  targetAudience: string;
  tuition: string;
  image: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  syllabus: {
    moduleNumber: string;
    title: string;
    detail: string;
  }[];
  simulatorEquipment: string;
}

export const COURSES: Course[] = [
  {
    id: 'tcp-inicial',
    code: 'CC-240',
    title: 'Certificación Inicial TCP y Técnicas Avanzadas de Cabina',
    category: 'TCP Profesional',
    durationHours: 240,
    theoryHours: 165,
    practiceHours: 75,
    modality: 'Presencial + Simulador Full-Scale',
    nextCohort: '14 de Abril · Madrid / Barcelona',
    certification: 'Certificado Oficial EASA Part-CC',
    targetAudience: 'Aspirantes a Tripulante de Cabina y azafatas en habilitación inicial',
    tuition: '2.450 EUR',
    image: '/src/assets/images/course_tcp_inicial_1795040331430.jpg',
    imageAlt:
      'Alumna de TCP realizando demostración de seguridad en cabina con asientos beige y uniforme azul marino',
    summary:
      'Programa integral homologado para obtener la licencia oficial de Tripulante de Cabina de Pasajeros, con énfasis en aerodinámica aplicada, procedimientos normales de cabina y coordinación desde el primer briefing.',
    highlights: [
      'Conocimiento técnico de aeronaves Airbus A320 y Boeing 737 NG/MAX',
      'Prácticas reales de apertura de puertas en modo armado y desarmado',
      'Inglés aeronáutico operativo y fraseología estándar de cabina'
    ],
    syllabus: [
      {
        moduleNumber: '01',
        title: 'Normativa Aeronáutica y Principios de Vuelo',
        detail: 'Regulación EASA Part-CC, meteorología básica, presurización y sistemas ambientales de cabina.'
      },
      {
        moduleNumber: '02',
        title: 'Procedimientos Normales y Seguridad Pre-Vuelo',
        detail: 'Inspección de equipos de emergencia, chequeo cruzado de puertas y gestión de embarque.'
      },
      {
        moduleNumber: '03',
        title: 'Comunicación Operativa y Factores Humanos',
        detail: 'Protocolos de llamada inter-cabina, cabina estéril y gestión del pasajero disruptivo.'
      },
      {
        moduleNumber: '04',
        title: 'Evaluación Práctica en Maqueta de Fuselaje',
        detail: 'Simulacros cronometrados de evacuación, demostraciones y manejo de equipos de flotación.'
      }
    ],
    simulatorEquipment: 'Maqueta de fuselaje A320/B737 con toboganes activos y panel FAP operativo'
  },
  {
    id: 'crm-pilotos-tcp',
    code: 'CRM-060',
    title: 'CRM Conjunto: Integración Operativa Pilotos y Tripulación',
    category: 'Integración Piloto–TCP',
    durationHours: 60,
    theoryHours: 24,
    practiceHours: 36,
    modality: 'Simulador Integrado Cockpit–Cabina',
    nextCohort: '05 de Mayo · Campus Barajas',
    certification: 'Diploma Conjunto CRM EASA ORO.FC / ORO.CC',
    targetAudience: 'Pilotos comerciales, comandantes, sobrecargos y TCP con experiencia',
    tuition: '1.380 EUR',
    image: '/src/assets/images/course_crm_pilotos_1795040332046.jpg',
    imageAlt:
      'Comandante de aerolínea y sobrecargo revisando listas de chequeo de emergencia dentro del simulador de cabina de vuelo',
    summary:
      'Entrenamiento conjunto en tiempo real que une a pilotos y tripulación de cabina en escenarios de alta carga de trabajo para eliminar brechas comunicativas entre el cockpit y la cabina de pasajeros.',
    highlights: [
      'Sesiones simultáneas en simulador FTD conectado con maqueta de cabina',
      'Protocolos NITS (Nature, Intentions, Time, Special instructions) bajo presión',
      'Gestión de incapacitación de piloto e intrusión en cabina de mando'
    ],
    syllabus: [
      {
        moduleNumber: '01',
        title: 'Arquitectura del Error Humano y Modelo SHELL',
        detail: 'Análisis de sesgos de autoridad en cabina y comunicación asertiva bidireccional.'
      },
      {
        moduleNumber: '02',
        title: 'Briefing Integrado Pre-Vuelo Comandante–Sobrecargo',
        detail: 'Estandarización de señales acústicas, códigos de amenaza y tiempos de preparación.'
      },
      {
        moduleNumber: '03',
        title: 'Simulación Conjunta de Despresurización y Fuego',
        detail: 'Ejecución de listas de chequeo anormales manteniendo flujo informativo preciso.'
      },
      {
        moduleNumber: '04',
        title: 'Debriefing Técnico con Instructores TRI y TCP-I',
        detail: 'Revisión grabada de tiempos de respuesta, toma de decisiones y liderazgo compartido.'
      }
    ],
    simulatorEquipment: 'Simulador de vuelo A320 FTD Nivel 2 enlazado por intercomunicador a cabina de pasajeros'
  },
  {
    id: 'emergencias-evacuacion',
    code: 'SEC-085',
    title: 'Supervivencia, Fuego en Cabina y Evacuación de Emergencia',
    category: 'Seguridad Operacional',
    durationHours: 85,
    theoryHours: 30,
    practiceHours: 55,
    modality: 'Hangar de Prácticas y Piscina',
    nextCohort: '21 de Abril · Hangar Técnico',
    certification: 'Especialidad Avanzada en Seguridad y Salvamento',
    targetAudience: 'TCP certificados, instructores de cabina y tripulación técnica',
    tuition: '1.190 EUR',
    image: '/src/assets/images/course_emergencias_cabina_1795040333724.jpg',
    imageAlt:
      'Tripulantes practicando evacuación por rampa inflable desde puerta de emergencia de fuselaje A320 en hangar',
    summary:
      'Entrenamiento intensivo en contención de incendios con baterías de litio, visibilidad nula por humo denso, evacuación terrestre en menos de 90 segundos y amaraje controlado en piscina de olas.',
    highlights: [
      'Extinción real de fuegos clase A, B, C y embalaje térmico de dispositivos PED',
      'Uso avanzado de equipos PBE (Protective Breathing Equipment) en cabina con humo',
      'Supervivencia en mar abierto, balsas salvavidas y señalización SAR'
    ],
    syllabus: [
      {
        moduleNumber: '01',
        title: 'Dinámica del Fuego a Bordo y Baterías de Ion-Litio',
        detail: 'Contención térmica de dispositivos electrónicos en cabina y uso de agentes extintores Halon y agua.'
      },
      {
        moduleNumber: '02',
        title: 'Evacuación de 90 Segundos en Visibilidad Nula',
        detail: 'Comandos de evacuación en inglés y español, redirección de flujo y salidas bloqueadas.'
      },
      {
        moduleNumber: '03',
        title: 'Amaraje y Supervivencia Acuática',
        detail: 'Despliegue de balsa, embarque de pasajeros con movilidad reducida y gestión de hipotermia.'
      },
      {
        moduleNumber: '04',
        title: 'Mercancías Peligrosas en Cabina (IATA DGR)',
        detail: 'Detección preventiva, aislamiento de derrames y notificación inmediata al comandante.'
      }
    ],
    simulatorEquipment: 'Módulo real de fuego en galley y lavabo + piscina certificada de amaraje'
  },
  {
    id: 'medicina-aeronautica',
    code: 'MED-050',
    title: 'Medicina Aeronáutica, Hipoxia y Soporte Vital en Vuelo',
    category: 'Seguridad Operacional',
    durationHours: 50,
    theoryHours: 20,
    practiceHours: 30,
    modality: 'Cabina Presurizada y Taller Clínico',
    nextCohort: '12 de Mayo · Campus Barajas',
    certification: 'Certificado Soporte Vital Básico, DESA y Medicina en Altitud',
    targetAudience: 'Azafatas profesionales, sobrecargos y pilotos en rutas de largo radio',
    tuition: '890 EUR',
    image: '/src/assets/images/course_medicina_aeronautica_1795040333691.jpg',
    imageAlt:
      'Tripulante de cabina aplicando oxígeno terapéutico y desfibrilador DESA en práctica médica a bordo',
    summary:
      'Capacitación clínica adaptada a entornos de cabina presurizada a 8.000 pies: reconocimiento precoz de hipoxia, soporte vital avanzado con DESA, telemedicina con tierra y criterios de desvío médico.',
    highlights: [
      'Manejo de botiquines EMK, oxígeno terapéutico de flujo continuo y desfibrilador DESA',
      'Fisiología de vuelo: barotrauma, descompresión e hipoxia hipobárica',
      'Protocolo de enlace médico satelital con el cockpit para toma de decisión de desvío'
    ],
    syllabus: [
      {
        moduleNumber: '01',
        title: 'Fisiología Aeroespacial y Efectos de la Altitud',
        detail: 'Ley de Boyle y Dalton aplicadas a cabina, reconocimiento de síntomas de hipoxia en tripulación y pasaje.'
      },
      {
        moduleNumber: '02',
        title: 'Emergencias Cardiovasculares y Uso del DESA en Pasillo',
        detail: 'Protocolos ERC de reanimación en espacios confinados de aeronave.'
      },
      {
        moduleNumber: '03',
        title: 'Asistencia en Partos, Anafilaxia y Traumatismos por Turbulencia',
        detail: 'Uso de kits de emergencia médica y estabilización hasta el aterrizaje.'
      },
      {
        moduleNumber: '04',
        title: 'Coordinación Médica Cabina–Cockpit',
        detail: 'Evaluación estructurada de gravedad para respaldar al comandante ante un aterrizaje de emergencia.'
      }
    ],
    simulatorEquipment: 'Maniquíes de telemetría clínica y maqueta de cabina estrecha'
  },
  {
    id: 'aviacion-ejecutiva',
    code: 'VIP-095',
    title: 'Protocolo en Aviación Ejecutiva y Vuelos Privados VIP',
    category: 'Aviación Ejecutiva',
    durationHours: 95,
    theoryHours: 40,
    practiceHours: 55,
    modality: 'Cabina Ejecutiva y Catering FBO',
    nextCohort: '02 de Junio · Terminal Ejecutiva Madrid',
    certification: 'Diploma Especialista en Cabina Corporativa y VIP',
    targetAudience: 'TCP con experiencia comercial que transicionan a aviación privada y ejecutiva',
    tuition: '1.920 EUR',
    image: '/src/assets/images/course_aviacion_ejecutiva_1795040333739.jpg',
    imageAlt:
      'Azafata corporativa preparando cristalería fina en cabina privada de jet ejecutivo con asientos vainilla y madera beige',
    summary:
      'Formación de alta exigencia para tripulantes de cabina corporativa en aviones Bombardier Global, Gulfstream y Falcon, integrando autonomía operativa con la tripulación de vuelo y gestión autónoma de FBO.',
    highlights: [
      'Operación como tripulante único de cabina (Single Cabin Attendant) en vuelos transoceánicos',
      'Coordinación logística directa con pilotos, despachadores y terminales FBO',
      'Protocolo diplomático, alta gastronomía en altura y confidencialidad ejecutiva'
    ],
    syllabus: [
      {
        moduleNumber: '01',
        title: 'Operación Autónoma en Jets Corporativos',
        detail: 'Sistemas de galley de aviación ejecutiva, inventarios, aduanas y planificación de aprovisionamiento internacional.'
      },
      {
        moduleNumber: '02',
        title: 'Seguridad para Tripulante Único y Pasajeros VIP',
        detail: 'Adaptación de procedimientos de emergencia y briefing discreto sin equipo de refuerzo.'
      },
      {
        moduleNumber: '03',
        title: 'Etiqueta Internacional y Servicio de Alta Precisión',
        detail: 'Protocolo diplomático, sumillería en cabina presurizada y presentación de mesa.'
      },
      {
        moduleNumber: '04',
        title: 'Integración con Tripulación Técnica en Vuelos Charter',
        detail: 'Gestión de cambios de ruta en tiempo real, horarios flexibles y descanso de tripulación.'
      }
    ],
    simulatorEquipment: 'Maqueta de cabina ejecutiva de largo alcance y cocina de inducción aeronáutica'
  }
];

export interface CrmScenario {
  id: string;
  title: string;
  phase: string;
  timeWindow: string;
  pilotActions: string[];
  cabinActions: string[];
  sharedProtocol: string;
}

export const CRM_SCENARIOS: CrmScenario[] = [
  {
    id: 'despresurizacion',
    title: 'Despresurización Rápida en Crucero',
    phase: 'Descenso de Emergencia · FL370 a FL100',
    timeWindow: 'Ventana crítica: primeros 15 segundos',
    pilotActions: [
      'Colocación inmediata de máscaras de oxígeno y establecimiento de comunicación por intercomunicador.',
      'Inicio de descenso de emergencia manteniendo velocidad estructural máxima segura.',
      'Emisión del aviso estandarizado "CABIN CREW, EMERGENCY DESCENT" y código NITS al estabilizar.'
    ],
    cabinActions: [
      'Sujeción en asiento más próximo o puesto asignado y colocación inmediata de máscara de oxígeno.',
      'Verificación visual de despliegue automático de mascarillas en filas de pasajeros sin abandonar el arnés.',
      'Al nivelar a 10.000 pies, barrido con botellas portátiles de oxígeno y reporte de estado al comandante.'
    ],
    sharedProtocol:
      'Confirmación bidireccional de altitud segura antes de liberar al personal de cabina para asistencia médica.'
  },
  {
    id: 'fuego-galley',
    title: 'Incendio por Batería de Litio en Cabina',
    phase: 'Contención Térmica · Fase de Crucero',
    timeWindow: 'Respuesta coordinada en < 90 segundos',
    pilotActions: [
      'Activación de lista de chequeo Smoke/Fire/Fumes y evaluación de aeropuerto alternativo más cercano.',
      'Mantenimiento de la escucha continua por interfono con el sobrecargo sin interrumpir el pilotaje.',
      'Preparación de aproximación prioritaria (MAYDAY) si el humo compromete sistemas o visibilidad.'
    ],
    cabinActions: [
      'Identificación del foco térmico, ataque inmediato con extintor Halon y enfriamiento con agua no inflamable.',
      'Colocación de equipo PBE y traslado del dispositivo dentro de bolsa de contención térmica.',
      'Reporte preciso al cockpit cada 60 segundos indicando origen, evolución del humo y estado del pasaje.'
    ],
    sharedProtocol:
      'División estricta de tareas: un TCP combate, un TCP asiste con equipo y el sobrecargo centraliza el enlace con el comandante.'
  },
  {
    id: 'incapacitacion',
    title: 'Incapacitación Súbita de un Piloto',
    phase: 'Aproximación o Crucero · Operación Monopiloto Asistida',
    timeWindow: 'Protocolo de acceso seguro en < 45 segundos',
    pilotActions: [
      'El piloto operativo asume control total de vuelo (PF/PM), activa piloto automático y solicita asistencia.',
      'Desbloqueo controlado de puerta blindada tras verificación visual por cámara de acceso.',
      'Asignación al sobrecargo de lectura de listas de chequeo no críticas y comunicaciones secundarias.'
    ],
    cabinActions: [
      'Ingreso ordenado de dos TCP al cockpit tras código de llamada prioritaria.',
      'Retirada segura del piloto incapacitado del área de mandos y sujeción en asiento de observador o cabina.',
      'Aplicación de oxígeno o soporte vital mientras el segundo TCP protege la seguridad de la puerta.'
    ],
    sharedProtocol:
      'Entrenamiento cruzado que permite al sobrecargo leer listas de verificación sin interferir en los controles de vuelo.'
  },
  {
    id: 'evacuacion',
    title: 'Evacuación en Pista Tras Aborto de Despegue',
    phase: 'Tierra · Salida de Pista y Detención',
    timeWindow: 'Evacuación completa en < 90 segundos',
    pilotActions: [
      'Detención total de la aeronave, aplicación de freno de estacionamiento y notificación a torre.',
      'Ejecución de lista de evacuación: corte de motores, descarga de extintores de motor y despresurización.',
      'Orden directa por PA: "EVACUATE, EVACUATE" y verificación exterior tras abandonar la cabina.'
    ],
    cabinActions: [
      'Evaluación inmediata de condiciones exteriores en ventanas de puertas antes de abrir y armar toboganes.',
      'Bloqueo de salidas comprometidas por fuego o escombros y redirección firme del pasaje.',
      'Barrido final completo de cabina de proa a popa, recogida de botiquín y transmisor ELT.'
    ],
    sharedProtocol:
      'Ningún TCP abre una salida sin la orden de evacuación del comandante o evidencia inequívoca de fuego incontrolable.'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  courseTaken: string;
  before: string;
  outcome: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Mendoza Varela',
    role: 'Comandante Airbus A320',
    organization: 'Iberia Express · 11 años de vuelo',
    courseTaken: 'CRM Conjunto Pilotos y Tripulación',
    before:
      'Nuestros simuladores anuales separaban casi por completo el entrenamiento técnico del cockpit respecto al trabajo real en cabina.',
    outcome:
      'Tras cursar el módulo conjunto en Academia por el mundo TCP, redujimos en un 32 % los tiempos de coordinación NITS durante simulacros de despresurización y fuego.'
  },
  {
    id: 't2',
    name: 'Lucía Serrano Quiroga',
    role: 'Sobrecargo / Jefa de Cabina',
    organization: 'Vueling Airlines · Base Barcelona',
    courseTaken: 'Supervivencia y Emergencias de Cabina',
    before:
      'Buscaba actualizar protocolos ante incendios de baterías de litio con prácticas reales y no únicamente presentaciones teóricas.',
    outcome:
      'Superé la evaluación de ascenso a sobrecargo en primera convocatoria tras completar las 55 horas de hangar y liderazgo en cabina con humo.'
  },
  {
    id: 't3',
    name: 'Beatriz Alarcón Montes',
    role: 'Corporate Flight Attendant',
    organization: 'Gestair Aviation · Bombardier Global 6500',
    courseTaken: 'Protocolo en Aviación Ejecutiva VIP',
    before:
      'Tras seis años en línea aérea regular, necesitaba dominar la autonomía operativa de tripulante único y la relación directa con pilotos de flota privada.',
    outcome:
      'En cuatro meses tras graduarme firmé contrato indefinido en aviación ejecutiva operando rutas transatlánticas.'
  }
];
