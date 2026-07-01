import type { CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import { ArrowDown, CircleCheck, Gauge, Lightbulb, Link2, TriangleAlert } from "lucide-react"
import type { ActionPathway, Pillar, PriorityArea, Subpillar } from "../data/aila"
import {
  getPathwayTitle,
  getPillarContent,
  getPriorityTitle,
  getSubpillarContent,
} from "../data/localizedContent"

type Language = "es" | "en"

type InsightPanelProps = {
  language: Language
  pillar: Pillar
  subpillar: Subpillar
  priority: PriorityArea
  pathway: ActionPathway
  source: string
}

const copy = {
  es: {
    readSelection: "2. Lee la selección",
    activeSubpillar: "Subpilar activo",
    connectsWith: "Conecta con",
    dataNote: "Nota de datos",
    strengths: "Fortalezas",
    gaps: "Brechas",
    opportunities: "Oportunidades",
  },
  en: {
    readSelection: "2. Read the selection",
    activeSubpillar: "Active subpillar",
    connectsWith: "Connects with",
    dataNote: "Data note",
    strengths: "Strengths",
    gaps: "Gaps",
    opportunities: "Opportunities",
  },
} as const

function InsightList({ title, items, icon: Icon }: { title: string; items: string[]; icon: LucideIcon }) {
  return (
    <section className="insight-block">
      <h3>
        <Icon size={17} strokeWidth={2} aria-hidden="true" />
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function InsightPanel({ language, pillar, subpillar, priority, pathway, source }: InsightPanelProps) {
  const ui = copy[language]
  const pillarText = getPillarContent(pillar, language)
  const subpillarText = getSubpillarContent(subpillar, language)

  return (
    <aside
      className="insight-panel"
      aria-label="Detalle de la selección actual"
      style={{ "--pillar-color": pillar.color } as CSSProperties}
    >
      <div className="insight-panel__header" style={{ borderColor: pillar.color }}>
        <span>{ui.readSelection}</span>
        <h2>
          <Gauge size={28} strokeWidth={2} aria-hidden="true" />
          {pillarText.name}
        </h2>
        <p>{pillarText.summary}</p>
      </div>

      <section className="subpillar-detail">
        <span className="section-label">{ui.activeSubpillar}</span>
        <div className="subpillar-detail__score">
          <strong>{subpillar.score.toFixed(1)}</strong>
          <span>{subpillarText.name}</span>
        </div>
        <p>{subpillarText.reading}</p>
      </section>

      <section className="connection-card">
        <span>
          <Link2 size={14} aria-hidden="true" />
          {ui.connectsWith}
        </span>
        <strong>{getPriorityTitle(priority, language)}</strong>
        <p>{getPathwayTitle(pathway, language)}</p>
        <ArrowDown className="connection-card__arrow" size={19} aria-hidden="true" />
      </section>

      <footer className="source-note">
        <span>{ui.dataNote}</span>
        <p>{source}</p>
      </footer>
    </aside>
  )
}

export function InsightBand({ pillar, language = "es" }: { pillar: Pillar; language?: Language }) {
  const ui = copy[language]

  return (
    <section
      className="insight-band"
      aria-label="Lectura estratégica del pilar seleccionado"
      style={{ "--pillar-color": pillar.color } as CSSProperties}
    >
      <InsightList title={ui.strengths} items={pillar.strengths} icon={CircleCheck} />
      <InsightList title={ui.gaps} items={pillar.gaps} icon={TriangleAlert} />
      <InsightList title={ui.opportunities} items={pillar.opportunities} icon={Lightbulb} />
    </section>
  )
}
