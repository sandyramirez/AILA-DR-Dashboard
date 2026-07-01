import type { CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowDown,
  Check,
  CircleCheck,
  ChevronRight,
  Cpu,
  Database,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Landmark,
  Leaf,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react"
import type { Pillar, Subpillar } from "../data/aila"
import { getPillarContent, getSubpillarContent } from "../data/localizedContent"

type AilaModelProps = {
  pillars: Pillar[]
  language: "es" | "en"
  selectedPillar: Pillar
  selectedSubpillar: Subpillar
  priorityTitle: string
  pathwayTitle: string
  onSelectPillar: (pillarId: string) => void
  onSelectSubpillar: (subpillarId: string) => void
  onViewActions: () => void
}

const copy = {
  es: {
    activePillar: "Pilar activo",
    subpillars: "Subpilares",
    selectionUpdated: "Selección actualizada",
    viewActionRoute: "Ver ruta de acción",
  },
  en: {
    activePillar: "Active pillar",
    subpillars: "Subpillars",
    selectionUpdated: "Selection updated",
    viewActionRoute: "View action route",
  },
} as const

const pillarPositions = {
  ecosistema: "model-pillar--ecosistema",
  gobierno: "model-pillar--gobierno",
  "regulacion-etica": "model-pillar--regulacion",
}

const pillarIcons: Record<string, LucideIcon> = {
  ecosistema: Network,
  gobierno: Landmark,
  "regulacion-etica": Scale,
}

const subpillarIcons: Record<string, LucideIcon> = {
  datos: Database,
  "entorno-habilitador": HandHeart,
  "computacion-verde": Leaf,
  talento: GraduationCap,
  "capacidad-ia": Users,
  "gobernanza-ia": Landmark,
  "gobernanza-datos": Database,
  tecnologia: Cpu,
  "regulacion-ia": Scale,
  "etica-ia": HeartHandshake,
  "confianza-seguridad": ShieldCheck,
}

export function AilaModel({
  pillars,
  language,
  selectedPillar,
  selectedSubpillar,
  priorityTitle,
  pathwayTitle,
  onSelectPillar,
  onSelectSubpillar,
  onViewActions,
}: AilaModelProps) {
  const SelectedPillarIcon = pillarIcons[selectedPillar.id] ?? Network
  const ui = copy[language]
  const selectedPillarText = getPillarContent(selectedPillar, language)
  const selectedSubpillars = selectedPillar.subpillars.map((subpillar) => getSubpillarContent(subpillar, language))

  return (
    <section className="model-stage" aria-label="Modelo AILA interactivo">
      <div className={`model-wheel model-wheel--${selectedPillar.id}`} aria-label="Pilares del modelo AILA">
        <div className="model-wheel__surface" aria-hidden="true" />
        <div className="model-wheel__center" aria-hidden="true">
          <strong>AILA</strong>
          <span>RD</span>
        </div>

        {pillars.map((pillar) => {
          const active = selectedPillar.id === pillar.id
          const className = pillarPositions[pillar.id as keyof typeof pillarPositions]
          const PillarIcon = pillarIcons[pillar.id] ?? Network
          const pillarText = getPillarContent(pillar, language)

          return (
            <button
              className={`model-pillar ${className}${active ? " is-active" : ""}`}
              key={pillar.id}
              type="button"
              aria-pressed={active}
              onClick={() => onSelectPillar(pillar.id)}
              style={{ "--pillar-color": pillar.color } as CSSProperties}
            >
              <span className="model-pillar__icon" aria-hidden="true">
                <PillarIcon size={44} strokeWidth={1.8} />
              </span>
              <span>{pillarText.shortName}</span>
              <strong>{pillar.score.toFixed(1)}</strong>
            </button>
          )
        })}
      </div>

      <div className="model-side" style={{ "--pillar-color": selectedPillar.color } as CSSProperties}>
        <div className="selected-context" style={{ "--pillar-color": selectedPillar.color } as CSSProperties}>
          <div className="selected-context__title">
            <SelectedPillarIcon size={28} strokeWidth={2} aria-hidden="true" />
            <span>{ui.activePillar}</span>
          </div>
          <strong>{selectedPillarText.name}</strong>
          <p>{selectedPillarText.summary}</p>
        </div>

        <div className="subpillar-chooser">
          <span className="subpillar-chooser__label">{ui.subpillars}</span>
          {selectedSubpillars.map((subpillar) => {
            const active = selectedSubpillar.id === subpillar.id
            const SubpillarIcon = subpillarIcons[subpillar.id] ?? Network

            return (
              <button
                className={`subpillar-choice${active ? " is-active" : ""}`}
                key={subpillar.id}
                type="button"
                aria-pressed={active}
                onClick={() => onSelectSubpillar(subpillar.id)}
                style={{ "--pillar-color": selectedPillar.color } as CSSProperties}
              >
                <SubpillarIcon className="subpillar-choice__icon" size={23} strokeWidth={2} aria-hidden="true" />
                <span>{subpillar.name}</span>
                <strong>{subpillar.score.toFixed(1)}</strong>
                {active ? (
                  <Check className="subpillar-choice__state" size={18} strokeWidth={2.5} aria-hidden="true" />
                ) : (
                  <ChevronRight className="subpillar-choice__state" size={18} aria-hidden="true" />
                )}
              </button>
            )
          })}
        </div>

        <section className="selection-update" role="status" aria-live="polite">
          <span className="selection-update__label">
            <CircleCheck size={19} strokeWidth={2} aria-hidden="true" />
            {ui.selectionUpdated}
          </span>
          <strong>{priorityTitle}</strong>
          <p>{pathwayTitle}</p>
          <button type="button" onClick={onViewActions}>
            <ArrowDown size={18} aria-hidden="true" />
            {ui.viewActionRoute}
          </button>
        </section>
      </div>
    </section>
  )
}
