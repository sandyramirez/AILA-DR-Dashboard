import type { CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Cpu,
  Database,
  GraduationCap,
  Landmark,
  Lightbulb,
  Link2,
  ListChecks,
  Route,
  ShieldCheck,
} from "lucide-react"
import type { ActionPathway, PriorityArea } from "../data/aila"
import { getPathwayContent, getPriorityContent } from "../data/localizedContent"

type Language = "es" | "en"

type WorkspaceProps = {
  activeColor: string
  activePillarName: string
  language: Language
  priorityAreas: PriorityArea[]
  selectedPriorityId: string
  actionPathways: ActionPathway[]
  selectedPathwayId: string
  nextSteps: string[]
  onSelectPriority: (priorityId: string) => void
  onSelectPathway: (pathwayId: string) => void
}

const copy = {
  es: {
    connectDiagnosis: "3. Conecta diagnóstico con acción",
    title: "Prioridades y vías recomendadas",
    intro:
      "Esta zona traduce el diagnóstico en áreas de trabajo e iniciativas. La selección parte del pilar activo y también puede ajustarse manualmente.",
    activeDiagnosticPillar: "Pilar del diagnóstico:",
    priorityAreas: "Áreas prioritarias",
    actionPathways: "Vías de acción",
    activeArea: "Área activa",
    linkedPathway: "Vía vinculada",
    activePathway: "Vía activa",
    objective: "Objetivo",
    challenge: "Reto abordado",
    initiatives: "Iniciativas emblemáticas",
    nextSteps: "Próximos pasos",
    pathway: "Vía",
  },
  en: {
    connectDiagnosis: "3. Connect diagnosis to action",
    title: "Recommended priorities and pathways",
    intro:
      "This area translates the diagnostic into workstreams and initiatives. The selection follows the active pillar and can also be adjusted manually.",
    activeDiagnosticPillar: "Diagnostic pillar:",
    priorityAreas: "Priority areas",
    actionPathways: "Action pathways",
    activeArea: "Active area",
    linkedPathway: "Linked pathway",
    activePathway: "Active pathway",
    objective: "Objective",
    challenge: "Challenge addressed",
    initiatives: "Flagship initiatives",
    nextSteps: "Next steps",
    pathway: "Pathway",
  },
} as const

const priorityIcons: Record<string, LucideIcon> = {
  "datos-gobernanza": Database,
  infraestructura: Cpu,
  "sector-publico": Landmark,
  talento: GraduationCap,
  confianza: ShieldCheck,
  innovacion: Lightbulb,
}

const priorityColors: Record<string, string> = {
  "datos-gobernanza": "#0A97D9",
  infraestructura: "#0A97D9",
  "sector-publico": "#DD1367",
  talento: "#0A97D9",
  confianza: "#FD9D24",
  innovacion: "#0A97D9",
}

const pathwayColors: Record<string, string> = {
  "fundamentos-datos": "#0A97D9",
  "infraestructura-computo": "#0A97D9",
  "adopcion-publica": "#DD1367",
  "talento-competencias": "#0A97D9",
  "ia-responsable": "#FD9D24",
  "innovacion-economia": "#0A97D9",
}

const pillarGroups = [
  {
    id: "ecosistema",
    color: "#0A97D9",
    priorityIds: ["datos-gobernanza", "infraestructura", "talento", "innovacion"],
    pathwayIds: ["fundamentos-datos", "infraestructura-computo", "talento-competencias", "innovacion-economia"],
  },
  {
    id: "gobierno",
    color: "#DD1367",
    priorityIds: ["sector-publico"],
    pathwayIds: ["adopcion-publica"],
  },
  {
    id: "regulacion-etica",
    color: "#FD9D24",
    priorityIds: ["confianza"],
    pathwayIds: ["ia-responsable"],
  },
] as const

const groupLabels = {
  es: {
    ecosistema: "Ecosistema de IA",
    gobierno: "IA para el Gobierno",
    "regulacion-etica": "Regulación y ética",
  },
  en: {
    ecosistema: "AI Ecosystem",
    gobierno: "AI for Government",
    "regulacion-etica": "Regulation and ethics",
  },
} as const

const translatedNextSteps = [
  "Institutionally validate the priority areas and action pathways.",
  "Translate the action pathways into an operational short- and medium-term roadmap.",
  "Prioritize a focused set of flagship initiatives with early traction.",
  "Support implementation with technical assistance, training, pilots and partnerships.",
]

export function Workspace({
  activeColor,
  activePillarName,
  language,
  priorityAreas,
  selectedPriorityId,
  actionPathways,
  selectedPathwayId,
  nextSteps,
  onSelectPriority,
  onSelectPathway,
}: WorkspaceProps) {
  const ui = copy[language]
  const selectedPriority = priorityAreas.find((priority) => priority.id === selectedPriorityId) ?? priorityAreas[0]
  const selectedPathway = actionPathways.find((pathway) => pathway.id === selectedPathwayId) ?? actionPathways[0]
  const selectedPriorityCopy = getPriorityContent(selectedPriority, language)
  const selectedPathwayCopy = getPathwayContent(selectedPathway, language)
  const SelectedPriorityIcon = priorityIcons[selectedPriority.id] ?? ListChecks
  const selectionColor = priorityColors[selectedPriority.id] ?? activeColor
  const nextStepCopy = language === "es" ? nextSteps : translatedNextSteps

  return (
    <section
      className="action-flow"
      id="aila-action-flow"
      aria-label="Ruta de acción AILA"
      style={{ "--active-color": selectionColor, "--model-color": activeColor } as CSSProperties}
    >
      <div className="action-flow__header">
        <div>
          <span className="step-label">{ui.connectDiagnosis}</span>
          <h2>{ui.title}</h2>
        </div>
        <div className="action-flow__context">
          <p>{ui.intro}</p>
          <span>
            <Link2 size={15} aria-hidden="true" />
            {ui.activeDiagnosticPillar} <strong>{activePillarName}</strong>
          </span>
        </div>
      </div>

      <div className="action-flow__grid">
        <section className="priority-column" aria-label={ui.priorityAreas}>
          <h3>
            <ListChecks size={19} aria-hidden="true" />
            {ui.priorityAreas}
          </h3>
          <div className="priority-list">
            {pillarGroups.map((group) => (
              <section
                className="priority-group"
                key={group.id}
                aria-label={groupLabels[language][group.id]}
                style={{ "--group-color": group.color } as CSSProperties}
              >
                <h4><span aria-hidden="true" />{groupLabels[language][group.id]}</h4>
                <div className="priority-group__rows">
                  {group.priorityIds.map((priorityId) => {
                    const priority = priorityAreas.find((item) => item.id === priorityId)
                    if (!priority) return null

                    const priorityCopy = getPriorityContent(priority, language)
                    const PriorityIcon = priorityIcons[priority.id] ?? ListChecks
                    const active = priority.id === selectedPriorityId

                    return (
                      <button
                        className={`priority-row${active ? " is-active" : ""}`}
                        key={priority.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onSelectPriority(priority.id)}
                        style={{ "--row-color": priorityColors[priority.id] } as CSSProperties}
                      >
                        <span className="priority-row__icon">
                          <PriorityIcon size={24} strokeWidth={2} aria-hidden="true" />
                        </span>
                        <b>{priority.number}</b>
                        <span>{priorityCopy.title}</span>
                        <ArrowRight className="priority-row__arrow" size={18} aria-hidden="true" />
                      </button>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="pathway-column" aria-label={ui.actionPathways}>
          <h3>
            <Route size={19} aria-hidden="true" />
            {ui.actionPathways}
          </h3>
          <div className="pathway-list">
            {pillarGroups.map((group) => (
              <section
                className="pathway-group"
                key={group.id}
                aria-label={groupLabels[language][group.id]}
                style={{ "--group-color": group.color } as CSSProperties}
              >
                <h4><span aria-hidden="true" />{groupLabels[language][group.id]}</h4>
                <div className="pathway-group__rows">
                  {group.pathwayIds.map((pathwayId) => {
                    const pathway = actionPathways.find((item) => item.id === pathwayId)
                    if (!pathway) return null

                    const pathwayCopy = getPathwayContent(pathway, language)
                    const active = pathway.id === selectedPathwayId

                    return (
                      <button
                        className={`pathway-row${active ? " is-active" : ""}`}
                        key={pathway.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onSelectPathway(pathway.id)}
                        style={{ "--row-color": pathwayColors[pathway.id] } as CSSProperties}
                      >
                        <span className="pathway-row__icon" aria-hidden="true">
                          <Route size={24} strokeWidth={2} />
                        </span>
                        <span className="pathway-row__meta">{ui.pathway} {pathway.number}</span>
                        <strong>{pathwayCopy.title}</strong>
                        <ArrowRight className="pathway-row__arrow" size={18} aria-hidden="true" />
                      </button>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="action-detail-stack" aria-label="Detalle activo">
          <article className="priority-detail">
            <div className="active-detail__heading">
              <span className="active-detail__icon" aria-hidden="true">
                <SelectedPriorityIcon size={28} strokeWidth={2} />
              </span>
              <div>
                <span className="section-label">{ui.activeArea}</span>
                <h3>{selectedPriorityCopy.title}</h3>
              </div>
            </div>
            <p>{selectedPriorityCopy.summary}</p>
            <div className="priority-detail__connection">
              <Link2 size={17} aria-hidden="true" />
              <span>{ui.linkedPathway}</span>
              <strong>{selectedPathwayCopy.title}</strong>
              <ArrowRight size={18} aria-hidden="true" />
            </div>
          </article>

          <article className="pathway-detail">
            <div className="active-detail__heading">
              <span className="active-detail__icon" aria-hidden="true">
                <Route size={28} strokeWidth={2} />
              </span>
              <div>
                <span className="section-label">{ui.activePathway}</span>
                <h3>{selectedPathwayCopy.title}</h3>
              </div>
            </div>
            <dl className="pathway-definition">
              <div>
                <dt>{ui.objective}</dt>
                <dd>{selectedPathwayCopy.objective}</dd>
              </div>
              <div>
                <dt>{ui.challenge}</dt>
                <dd>{selectedPathwayCopy.challenges}</dd>
              </div>
            </dl>
            <h4>{ui.initiatives}</h4>
            <ul className="initiative-list">
              {selectedPathwayCopy.initiatives.map((initiative) => (
                <li key={initiative}>{initiative}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>

      <section className="next-steps-strip" aria-label={ui.nextSteps}>
        <h3>{ui.nextSteps}</h3>
        <ol>
          {nextStepCopy.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </section>
  )
}
