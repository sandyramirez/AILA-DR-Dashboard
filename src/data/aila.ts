export type Stage = "Básica" | "Oportunista" | "Sistemática" | "Diferenciadora" | "Transformacional"

export type Subpillar = {
  id: string
  name: string
  score: number
  reading: string
}

export type Pillar = {
  id: string
  name: string
  shortName: string
  score: number
  color: string
  summary: string
  strengths: string[]
  gaps: string[]
  opportunities: string[]
  subpillars: Subpillar[]
}

export type PriorityArea = {
  id: string
  number: number
  title: string
  summary: string
}

export type ActionPathway = {
  id: string
  number: number
  title: string
  objective: string
  challenges: string
  initiatives: string[]
}

export type EvidenceMetric = {
  label: string
  value: string
  context: string
}

export const stages: Stage[] = [
  "Básica",
  "Oportunista",
  "Sistemática",
  "Diferenciadora",
  "Transformacional",
]

export const ailaSummary = {
  title: "AILA República Dominicana",
  subtitle: "Evaluación del panorama de inteligencia artificial",
  overallScore: 2.5,
  stage: "Sistemática" as Stage,
  strongestPillar: "IA para el Gobierno",
  strongestPillarScore: 2.9,
  weakestPillar: "Regulación y ética de la IA",
  weakestPillarScore: 2.0,
  iliaCategory: "Adoptante",
  iliaPosition: "9 regional",
  source:
    "Fuente: AILA Country Brief RD con comentarios aceptados. Datos externos solo cuando el documento los cita explícitamente.",
  coreReading:
    "El país cuenta con una base estratégica, institucional y digital real para avanzar en IA, pero todavía debe convertir esa base en capacidades de ejecución, confianza, talento, datos e infraestructura.",
}

export const evidenceMetrics: EvidenceMetric[] = [
  {
    label: "Etapa AILA",
    value: "Sistemática",
    context: "Nivel general de preparación identificado por la evaluación AILA.",
  },
  {
    label: "Mayor fortaleza",
    value: "3.4 / 5",
    context: "Gobernanza de la IA es el subpilar con mejor resultado.",
  },
  {
    label: "Mayor brecha",
    value: "1.7 / 5",
    context: "Confianza y seguridad es el subpilar con mayor oportunidad de mejora.",
  },
]

export const pillars: Pillar[] = [
  {
    id: "ecosistema",
    name: "Ecosistema de IA",
    shortName: "Ecosistema",
    score: 2.7,
    color: "#0A97D9",
    summary:
      "Base habilitante razonable, sostenida en datos, entorno habilitador y conectividad, con brechas claras en talento y cómputo especializado.",
    strengths: [
      "Dirección estratégica dada por la ENIA 2024-2028 y la Agenda Digital 2030.",
      "Portal Nacional de Datos Abiertos, política de datos abiertos y marco de interoperabilidad NORTIC A4:2024.",
      "Conectividad y adopción digital por encima del promedio regional según la lectura del ILIA citada en el brief.",
    ],
    gaps: [
      "Calidad, documentación, interoperabilidad y reutilización de datos todavía desiguales.",
      "Capacidad de cómputo especializado limitada para IA avanzada.",
      "Talento avanzado insuficiente y fragmentado.",
    ],
    opportunities: [
      "Pasar de disponibilidad de datos a gobernanza, calidad y trazabilidad para IA.",
      "Articular infraestructura digital con capacidades de cómputo y soberanía tecnológica.",
      "Conectar formación, demanda laboral, investigación aplicada e innovación.",
    ],
    subpillars: [
      {
        id: "datos",
        name: "Datos",
        score: 3.0,
        reading:
          "Fortaleza relativa: existen instrumentos básicos, pero la madurez depende de calidad, integración, documentación y uso efectivo.",
      },
      {
        id: "entorno-habilitador",
        name: "Entorno habilitador",
        score: 2.8,
        reading:
          "La estrategia existe, pero necesita más instrumentos de financiamiento, experimentación y escalamiento.",
      },
      {
        id: "computacion-verde",
        name: "Computación verde",
        score: 2.7,
        reading:
          "Mejor base digital general que disponibilidad de recursos avanzados de cómputo para IA.",
      },
      {
        id: "talento",
        name: "Talento",
        score: 2.3,
        reading:
          "Cuello de botella central en perfiles avanzados, especialización, articulación institucional y retención.",
      },
    ],
  },
  {
    id: "gobierno",
    name: "IA para el Gobierno",
    shortName: "Gobierno",
    score: 2.9,
    color: "#DD1367",
    summary:
      "Dimensión más sólida del AILA, impulsada por gobierno digital, rectoría visible y plataformas públicas, aunque con adopción institucional todavía parcial.",
    strengths: [
      "Gobernanza de IA con puntaje 3.4, el subpilar más alto del diagnóstico.",
      "ENIA 2024-2028 y una Mesa de Alto Nivel con representación de 19 instituciones.",
      "Puntos GOB, interoperabilidad y servicios digitales como base de transformación del Estado.",
    ],
    gaps: [
      "Capacidad para la IA en el sector público puntúa 2.4.",
      "Adopción interna aún vista como pilotos o esfuerzos parciales.",
      "Capacidades técnicas distribuidas de manera desigual y contratación poco adaptada.",
    ],
    opportunities: [
      "Pasar de digitalización y pilotos a uso institucional sistemático y medible.",
      "Definir casos de uso públicos con valor demostrativo.",
      "Fortalecer capacidades internas, criterios de riesgo y supervisión humana.",
    ],
    subpillars: [
      {
        id: "capacidad-ia",
        name: "Capacidad para la IA",
        score: 2.4,
        reading:
          "La capacidad operativa y humana limita una adopción pública más amplia y transversal.",
      },
      {
        id: "gobernanza-ia",
        name: "Gobernanza de la IA",
        score: 3.4,
        reading:
          "Fortaleza principal: existe dirección estratégica, rectoría visible y conversación institucional instalada.",
      },
      {
        id: "gobernanza-datos",
        name: "Gobernanza de datos",
        score: 3.0,
        reading:
          "Hay avances relevantes, pero deben volverse arquitectura práctica para adopción de IA.",
      },
      {
        id: "tecnologia",
        name: "Tecnología",
        score: 3.0,
        reading:
          "La base tecnológica del Estado ofrece condiciones para usos más sofisticados de IA.",
      },
    ],
  },
  {
    id: "regulacion-etica",
    name: "Regulación y ética de la IA",
    shortName: "Regulación",
    score: 2.0,
    color: "#FD9D24",
    summary:
      "Pilar con mayor oportunidad de mejora: existe conversación estratégica sobre IA responsable, pero faltan instrumentos operativos, capacidades y mecanismos de confianza.",
    strengths: [
      "La necesidad de IA responsable ya está reconocida en la conversación estratégica.",
      "La ENIA contempla actualización normativa y sandboxes regulatorios.",
      "Los talleres aterrizan propuestas concretas: auditorías, certificaciones y clasificación de información.",
    ],
    gaps: [
      "Ética de IA puntúa 1.8 y confianza y seguridad 1.7.",
      "Ausencia o desarrollo incipiente de mecanismos de rendición de cuentas y supervisión humana.",
      "Falta de protocolos para datos usados en entrenamiento, riesgos, incidentes y evaluaciones de impacto.",
    ],
    opportunities: [
      "Volver operativa la conversación de IA responsable mediante normas, protocolos y responsabilidades claras.",
      "Actualizar protección de datos personales para responder a usos de IA.",
      "Crear capacidades de monitoreo, auditoría y cumplimiento.",
    ],
    subpillars: [
      {
        id: "regulacion-ia",
        name: "Regulación de IA",
        score: 2.5,
        reading:
          "El marco existe por aproximación indirecta, pero aún no como régimen claramente adaptado a IA.",
      },
      {
        id: "etica-ia",
        name: "Ética de IA",
        score: 1.8,
        reading:
          "Debilidad marcada en instrumentos prácticos de ética aplicada, accountability y transparencia.",
      },
      {
        id: "confianza-seguridad",
        name: "Confianza y seguridad",
        score: 1.7,
        reading:
          "La seguridad algorítmica, evaluación de impacto y monitoreo post-despliegue siguen muy limitados.",
      },
    ],
  },
]

export const priorityAreas: PriorityArea[] = [
  {
    id: "datos-gobernanza",
    number: 1,
    title: "Datos y gobernanza de datos para la IA",
    summary:
      "Mejorar calidad, integración, trazabilidad, gobernanza y capacidad de reutilización de datos para aplicaciones de IA dentro y fuera del sector público.",
  },
  {
    id: "infraestructura",
    number: 2,
    title: "Infraestructura digital y recursos informáticos",
    summary:
      "Distinguir acciones de acceso a cómputo en el corto plazo y construcción de capacidad soberana en el mediano plazo.",
  },
  {
    id: "sector-publico",
    number: 3,
    title: "Transformación del sector público impulsada por la IA",
    summary:
      "Pasar de digitalización y pilotos a uso institucional más sistemático y medible de IA.",
  },
  {
    id: "talento",
    number: 4,
    title: "Talento y competencias de IA",
    summary:
      "Construir una agenda de desarrollo, articulación y retención de talento en IA.",
  },
  {
    id: "confianza",
    number: 5,
    title: "Gobernanza, confianza y uso responsable de la IA",
    summary:
      "Crear mecanismos operativos para transparencia, supervisión, evaluación de riesgos, rendición de cuentas y confianza pública.",
  },
  {
    id: "innovacion",
    number: 6,
    title: "Innovación en IA y desarrollo económico",
    summary:
      "Cerrar la brecha entre uso general de IA y adopción productiva, innovadora y económica más sofisticada.",
  },
]

export const actionPathways: ActionPathway[] = [
  {
    id: "fundamentos-datos",
    number: 1,
    title: "Fundamentos y gobernanza de los datos",
    objective:
      "Fortalecer la calidad, interoperabilidad, trazabilidad y uso estratégico de los datos públicos para habilitar una adopción de IA más consistente, segura y útil.",
    challenges:
      "Persisten debilidades en cultura de datos, integración entre sistemas, calidad de la información y capacidad de reutilización para IA.",
    initiatives: [
      "Programa nacional de cultura y gobernanza de datos para IA.",
      "Ruta de interoperabilidad y estandarización de sets de datos prioritarios.",
      "Marco común de calidad, clasificación y trazabilidad de datos públicos.",
    ],
  },
  {
    id: "infraestructura-computo",
    number: 2,
    title: "Infraestructura digital y recursos informáticos",
    objective:
      "Aumentar la capacidad real del país para sostener una agenda de IA mediante mejor asignación de recursos, prioridad política e instrumentos de ejecución.",
    challenges:
      "La brecha no es solo técnica: también se asocia a priorización presupuestaria, burocracia, lentitud administrativa y ausencia de mecanismos claros de ejecución.",
    initiatives: [
      "Presupuesto digital etiquetado para proyectos estratégicos de transformación digital e IA.",
      "Figura de responsable operativo para iniciativas prioritarias.",
      "Células de ejecución ágil interinstitucional.",
    ],
  },
  {
    id: "adopcion-publica",
    number: 3,
    title: "Transformación del sector público impulsada por la IA",
    objective:
      "Acelerar la adopción efectiva de IA en instituciones públicas para mejorar procesos, reducir tiempos, fortalecer capacidades internas y aumentar el valor público.",
    challenges:
      "La base de gobierno digital no se traduce todavía en adopción sistemática de IA dentro de las instituciones.",
    initiatives: [
      "Programa de adopción responsable de IA en el sector público.",
      "Ruta de capacitación aplicada para servidores públicos.",
      "Portafolio inicial de casos de uso institucionales con potencial demostrativo.",
    ],
  },
  {
    id: "ia-responsable",
    number: 4,
    title: "IA fiable y responsable",
    objective:
      "Fortalecer salvaguardas, mecanismos de confianza y capacidades institucionales para asegurar un uso responsable, seguro y legítimo de la IA.",
    challenges:
      "Persisten vacíos en tratamiento de datos, actualización normativa, auditoría y capacidades institucionales para supervisar el uso de IA.",
    initiatives: [
      "Actualización del marco de protección de datos personales.",
      "Protocolo nacional para el tratamiento de datos en sistemas de IA.",
      "Esquema de auditorías, certificaciones y fortalecimiento institucional.",
    ],
  },
  {
    id: "innovacion-economia",
    number: 5,
    title: "Innovación en IA y desarrollo económico",
    objective:
      "Promover un ecosistema más dinámico de innovación aplicada, conectando talento, financiamiento, emprendimiento, investigación y demanda pública y privada.",
    challenges:
      "La innovación enfrenta incentivos débiles, financiamiento limitado, fragmentación entre actores y escasa articulación con necesidades productivas.",
    initiatives: [
      "Fondo o mecanismo de apoyo para investigación aplicada y emprendimientos en IA.",
      "Instancia interinstitucional de coordinación para innovación en IA.",
      "Instrumentos de promoción para innovación basada en IA y modernización curricular aplicada.",
    ],
  },
  {
    id: "talento-competencias",
    number: 6,
    title: "Talento y competencias en IA",
    objective:
      "Construir una agenda coordinada que fortalezca formación, especialización, articulación institucional y retención de capacidades clave.",
    challenges:
      "La fragmentación institucional, la desalineación entre oferta formativa y demanda laboral, la fuga de talento y las brechas en habilidades avanzadas limitan al ecosistema.",
    initiatives: [
      "Ruta nacional de formación y especialización en IA.",
      "Programa de becas e incentivos para capacidades prioritarias.",
      "Alianzas academia-industria-Estado para formación aplicada y retención de talento.",
    ],
  },
]

export const strategicPriorities = [
  "Fortalecer fundamentos y gobernanza de los datos.",
  "Reducir brechas en infraestructura digital y recursos informáticos.",
  "Acelerar la transformación del sector público impulsada por IA.",
  "Desarrollar una agenda coordinada de talento y competencias.",
  "Consolidar marcos de confianza, ética y uso responsable.",
  "Impulsar innovación en IA y desarrollo económico.",
]

export const nextSteps = [
  "Validar institucionalmente las áreas prioritarias y las vías de acción.",
  "Traducir las vías de acción en una hoja de ruta operativa de corto y mediano plazo.",
  "Priorizar un conjunto acotado de iniciativas emblemáticas con tracción temprana.",
  "Acompañar con asistencia técnica, formación, pilotos y articulación de alianzas.",
]
