export const connectionByPillar = {
  ecosistema: { priorityId: "datos-gobernanza", pathwayId: "fundamentos-datos" },
  gobierno: { priorityId: "sector-publico", pathwayId: "adopcion-publica" },
  "regulacion-etica": { priorityId: "confianza", pathwayId: "ia-responsable" },
} as const

export const connectionBySubpillar = {
  datos: { priorityId: "datos-gobernanza", pathwayId: "fundamentos-datos" },
  "entorno-habilitador": { priorityId: "innovacion", pathwayId: "innovacion-economia" },
  "computacion-verde": { priorityId: "infraestructura", pathwayId: "infraestructura-computo" },
  talento: { priorityId: "talento", pathwayId: "talento-competencias" },
  "capacidad-ia": { priorityId: "sector-publico", pathwayId: "adopcion-publica" },
  "gobernanza-ia": { priorityId: "sector-publico", pathwayId: "adopcion-publica" },
  "gobernanza-datos": { priorityId: "datos-gobernanza", pathwayId: "fundamentos-datos" },
  tecnologia: { priorityId: "infraestructura", pathwayId: "infraestructura-computo" },
  "regulacion-ia": { priorityId: "confianza", pathwayId: "ia-responsable" },
  "etica-ia": { priorityId: "confianza", pathwayId: "ia-responsable" },
  "confianza-seguridad": { priorityId: "confianza", pathwayId: "ia-responsable" },
} as const

export const pathwayByPriority = {
  "datos-gobernanza": "fundamentos-datos",
  infraestructura: "infraestructura-computo",
  "sector-publico": "adopcion-publica",
  talento: "talento-competencias",
  confianza: "ia-responsable",
  innovacion: "innovacion-economia",
} as const

export const priorityByPathway = {
  "fundamentos-datos": "datos-gobernanza",
  "infraestructura-computo": "infraestructura",
  "adopcion-publica": "sector-publico",
  "talento-competencias": "talento",
  "ia-responsable": "confianza",
  "innovacion-economia": "innovacion",
} as const

export const diagnosticByPriority = {
  "datos-gobernanza": { pillarId: "ecosistema", subpillarId: "datos" },
  infraestructura: { pillarId: "ecosistema", subpillarId: "computacion-verde" },
  "sector-publico": { pillarId: "gobierno", subpillarId: "capacidad-ia" },
  talento: { pillarId: "ecosistema", subpillarId: "talento" },
  confianza: { pillarId: "regulacion-etica", subpillarId: "confianza-seguridad" },
  innovacion: { pillarId: "ecosistema", subpillarId: "entorno-habilitador" },
} as const

export const diagnosticByPathway = {
  "fundamentos-datos": { pillarId: "ecosistema", subpillarId: "datos" },
  "infraestructura-computo": { pillarId: "ecosistema", subpillarId: "computacion-verde" },
  "adopcion-publica": { pillarId: "gobierno", subpillarId: "capacidad-ia" },
  "talento-competencias": { pillarId: "ecosistema", subpillarId: "talento" },
  "ia-responsable": { pillarId: "regulacion-etica", subpillarId: "confianza-seguridad" },
  "innovacion-economia": { pillarId: "ecosistema", subpillarId: "entorno-habilitador" },
} as const
