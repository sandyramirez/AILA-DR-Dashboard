import type { EvidenceMetric } from "../data/aila"
import type { LucideIcon } from "lucide-react"
import { Layers3, ShieldAlert, TrendingUp } from "lucide-react"

type KpiStripProps = {
  language: "es" | "en"
  metrics: EvidenceMetric[]
}

const metricIcons: LucideIcon[] = [Layers3, TrendingUp, ShieldAlert]

const metricTranslations: Record<string, Pick<EvidenceMetric, "context" | "label" | "value">> = {
  "Etapa AILA": {
    label: "AILA stage",
    value: "Systematic",
    context: "Overall readiness level identified by the AILA assessment.",
  },
  "Mayor fortaleza": {
    label: "Main strength",
    value: "3.4 / 5",
    context: "AI governance is the strongest-performing subpillar.",
  },
  "Mayor brecha": {
    label: "Largest gap",
    value: "1.7 / 5",
    context: "Trust and safety is the subpillar with the greatest improvement opportunity.",
  },
}

function getMetricCopy(metric: EvidenceMetric, language: "es" | "en") {
  if (language === "es") return metric
  return metricTranslations[metric.label] ?? metric
}

export function KpiStrip({ language, metrics }: KpiStripProps) {
  return (
    <section className="evidence-strip" aria-label="Indicadores de contexto">
      {metrics.map((metric, index) => {
        const MetricIcon = metricIcons[index] ?? Layers3
        const metricCopy = getMetricCopy(metric, language)
        const isLongValue = !metricCopy.value.includes("/")

        return (
          <article className={`evidence-item${isLongValue ? " evidence-item--stacked" : ""}`} key={metric.label}>
            <span className="evidence-item__label">
              <MetricIcon size={17} strokeWidth={2} aria-hidden="true" />
              {metricCopy.label}
            </span>
            <strong>{metricCopy.value}</strong>
            <p>{metricCopy.context}</p>
          </article>
        )
      })}
    </section>
  )
}
