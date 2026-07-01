import type { ActionPathway, Pillar, PriorityArea, Subpillar } from "./aila"
import type { Language } from "./appCopy"

const pillarTranslations = {
  ecosistema: {
    name: "AI Ecosystem",
    shortName: "Ecosystem",
    summary:
      "A reasonable enabling base supported by data, connectivity and institutional conditions, with clear gaps in talent and specialized computing.",
  },
  gobierno: {
    name: "AI for Government",
    shortName: "Government",
    summary:
      "The strongest AILA dimension, supported by digital government, visible leadership and public platforms, though institutional adoption is still partial.",
  },
  "regulacion-etica": {
    name: "AI Regulation and Ethics",
    shortName: "Regulation",
    summary:
      "The pillar with the greatest improvement opportunity: strategic conversation on responsible AI exists, but operational instruments, capacities and trust mechanisms are still missing.",
  },
} as const

const subpillarTranslations = {
  datos: {
    name: "Data",
    reading:
      "Relative strength: basic instruments exist, but maturity depends on quality, integration, documentation and effective use.",
  },
  "entorno-habilitador": {
    name: "Enabling environment",
    reading: "The strategy exists, but needs stronger financing, experimentation and scaling instruments.",
  },
  "computacion-verde": {
    name: "Green computing",
    reading: "The general digital base is stronger than the availability of advanced computing resources for AI.",
  },
  talento: {
    name: "Talent",
    reading: "A core bottleneck in advanced profiles, specialization, institutional coordination and retention.",
  },
  "capacidad-ia": {
    name: "AI capability",
    reading: "Operational and human capacity limits broader and more transversal public AI adoption.",
  },
  "gobernanza-ia": {
    name: "AI governance",
    reading: "Main strength: strategic direction, visible leadership and institutional conversation are already in place.",
  },
  "gobernanza-datos": {
    name: "Data governance",
    reading: "There are relevant advances, but they must become practical architecture for AI adoption.",
  },
  tecnologia: {
    name: "Technology",
    reading: "The State's technology base creates conditions for more sophisticated AI uses.",
  },
  "regulacion-ia": {
    name: "AI regulation",
    reading: "The framework exists indirectly, but not yet as a regime clearly adapted to AI.",
  },
  "etica-ia": {
    name: "AI ethics",
    reading: "Marked weakness in practical instruments for applied ethics, accountability and transparency.",
  },
  "confianza-seguridad": {
    name: "Trust and safety",
    reading: "Algorithmic safety, impact assessment and post-deployment monitoring remain very limited.",
  },
} as const

const priorityTranslations = {
  "datos-gobernanza": {
    title: "Data and data governance for AI",
    summary:
      "Improve data quality, integration, traceability, governance and reuse capacity for AI applications inside and outside the public sector.",
  },
  infraestructura: {
    title: "Digital infrastructure and computing resources",
    summary:
      "Distinguish short-term access to computing capacity from the medium-term construction of sovereign capability.",
  },
  "sector-publico": {
    title: "AI-driven public sector transformation",
    summary: "Move from digitization and pilots to more systematic, measurable institutional AI use.",
  },
  talento: {
    title: "AI talent and skills",
    summary: "Build a coordinated agenda for AI talent development, alignment and retention.",
  },
  confianza: {
    title: "AI governance, trust and responsible use",
    summary:
      "Create operational mechanisms for transparency, supervision, risk assessment, accountability and public trust.",
  },
  innovacion: {
    title: "AI innovation and economic development",
    summary:
      "Close the gap between general AI use and more sophisticated productive, innovative and economic adoption.",
  },
} as const

const pathwayTranslations = {
  "fundamentos-datos": {
    title: "Data foundations and governance",
    objective:
      "Strengthen the quality, interoperability, traceability and strategic use of public data to enable more consistent, safe and useful AI adoption.",
    challenges:
      "Weaknesses persist in data culture, system integration, information quality and reuse capacity for AI.",
    initiatives: [
      "National data culture and governance program for AI.",
      "Interoperability and standardization route for priority datasets.",
      "Common framework for quality, classification and traceability of public data.",
    ],
  },
  "infraestructura-computo": {
    title: "Digital infrastructure and computing resources",
    objective:
      "Increase the country's real capacity to sustain an AI agenda through better resource allocation, political priority and execution instruments.",
    challenges:
      "The gap is not only technical; it is also linked to budget prioritization, bureaucracy, administrative delays and unclear execution mechanisms.",
    initiatives: [
      "Tagged digital budget for strategic digital transformation and AI projects.",
      "Operational owner role for priority initiatives.",
      "Agile interinstitutional execution cells.",
    ],
  },
  "adopcion-publica": {
    title: "AI-driven public sector transformation",
    objective:
      "Accelerate effective AI adoption in public institutions to improve processes, reduce timelines, strengthen internal capabilities and increase public value.",
    challenges:
      "The digital government base has not yet translated into systematic AI adoption within institutions.",
    initiatives: [
      "Responsible AI adoption program in the public sector.",
      "Applied training route for public servants.",
      "Initial portfolio of institutional use cases with demonstrative potential.",
    ],
  },
  "talento-competencias": {
    title: "Talent and skills in AI",
    objective:
      "Build a coordinated agenda that strengthens training, specialization, institutional alignment and retention of key capabilities.",
    challenges:
      "Institutional fragmentation, misalignment between training supply and labor demand, talent flight and advanced skills gaps limit the ecosystem.",
    initiatives: [
      "National training and specialization route in AI.",
      "Scholarship and incentive program for priority capabilities.",
      "Academia-industry-State partnerships for applied training and talent retention.",
    ],
  },
  "ia-responsable": {
    title: "Trustworthy and responsible AI",
    objective:
      "Strengthen safeguards, trust mechanisms and institutional capabilities to ensure responsible, safe and legitimate AI use.",
    challenges:
      "Gaps persist in data processing, regulatory updating, auditing and institutional capacities to supervise AI use.",
    initiatives: [
      "Update the personal data protection framework.",
      "National protocol for data processing in AI systems.",
      "Audit, certification and institutional strengthening scheme.",
    ],
  },
  "innovacion-economia": {
    title: "AI innovation and economic development",
    objective:
      "Promote a more dynamic applied innovation ecosystem by connecting talent, financing, entrepreneurship, research and public and private demand.",
    challenges:
      "Innovation faces weak incentives, limited financing, fragmentation among actors and scarce alignment with productive needs.",
    initiatives: [
      "Fund or support mechanism for applied research and AI ventures.",
      "Interinstitutional coordination body for AI innovation.",
      "Promotion instruments for AI-based innovation and applied curricular modernization.",
    ],
  },
} as const

export function getPillarContent(pillar: Pillar, language: Language) {
  if (language === "es") return pillar
  return { ...pillar, ...pillarTranslations[pillar.id as keyof typeof pillarTranslations] }
}

export function getSubpillarContent(subpillar: Subpillar, language: Language) {
  if (language === "es") return subpillar
  return { ...subpillar, ...subpillarTranslations[subpillar.id as keyof typeof subpillarTranslations] }
}

export function getPriorityContent(priority: PriorityArea, language: Language) {
  if (language === "es") return priority
  return { ...priority, ...priorityTranslations[priority.id as keyof typeof priorityTranslations] }
}

export function getPriorityTitle(priority: PriorityArea, language: Language) {
  if (language === "es") return priority.title
  return priorityTranslations[priority.id as keyof typeof priorityTranslations]?.title ?? priority.title
}

export function getPathwayContent(pathway: ActionPathway, language: Language) {
  if (language === "es") return pathway
  return { ...pathway, ...pathwayTranslations[pathway.id as keyof typeof pathwayTranslations] }
}

export function getPathwayTitle(pathway: ActionPathway, language: Language) {
  if (language === "es") return pathway.title
  return pathwayTranslations[pathway.id as keyof typeof pathwayTranslations]?.title ?? pathway.title
}
