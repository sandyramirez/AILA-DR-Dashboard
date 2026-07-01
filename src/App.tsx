import { type CSSProperties, useEffect, useMemo, useState } from "react"
import { ArrowDown, Moon, Sun, X } from "lucide-react"
import "./App.css"
import { AilaModel } from "./components/AilaModel"
import { InsightBand, InsightPanel } from "./components/InsightPanel"
import { KpiStrip } from "./components/KpiStrip"
import { SdgBackground } from "./components/SdgBackground"
import { Workspace } from "./components/Workspace"
import { appCopy, type Language } from "./data/appCopy"
import {
  actionPathways,
  ailaSummary,
  evidenceMetrics,
  nextSteps,
  pillars,
  priorityAreas,
} from "./data/aila"
import {
  connectionByPillar,
  connectionBySubpillar,
  diagnosticByPathway,
  diagnosticByPriority,
  pathwayByPriority,
  priorityByPathway,
} from "./data/selection"
import {
  getPathwayTitle,
  getPillarContent,
  getPriorityTitle,
  getSubpillarContent,
} from "./data/localizedContent"

type ChangeNotice = "actions" | "model" | null

function App() {
  const [selectedPillarId, setSelectedPillarId] = useState(pillars[0].id)
  const [selectedSubpillarId, setSelectedSubpillarId] = useState(pillars[0].subpillars[0].id)
  const [selectedPriorityId, setSelectedPriorityId] = useState(priorityAreas[0].id)
  const [selectedPathwayId, setSelectedPathwayId] = useState(actionPathways[0].id)
  const [changeNotice, setChangeNotice] = useState<ChangeNotice>(null)
  const [noticeVisible, setNoticeVisible] = useState(false)
  const [noticeKey, setNoticeKey] = useState(0)
  const [language, setLanguage] = useState<Language>("es")

  const ui = appCopy[language]
  const undpLogo = `${import.meta.env.BASE_URL}${language === "es" ? "pnud-logo-blue.svg" : "undp-logo-blue.svg"}`

  const selectedPillar = useMemo(
    () => pillars.find((pillar) => pillar.id === selectedPillarId) ?? pillars[0],
    [selectedPillarId],
  )

  const selectedSubpillar = useMemo(
    () =>
      selectedPillar.subpillars.find((subpillar) => subpillar.id === selectedSubpillarId) ??
      selectedPillar.subpillars[0],
    [selectedPillar, selectedSubpillarId],
  )

  const selectedPriority = useMemo(
    () => priorityAreas.find((priority) => priority.id === selectedPriorityId) ?? priorityAreas[0],
    [selectedPriorityId],
  )

  const selectedPathway = useMemo(
    () => actionPathways.find((pathway) => pathway.id === selectedPathwayId) ?? actionPathways[0],
    [selectedPathwayId],
  )

  useEffect(() => {
    if (!changeNotice) return

    const hideTimer = window.setTimeout(() => setNoticeVisible(false), 2000)
    const removeTimer = window.setTimeout(() => setChangeNotice(null), 2350)

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [changeNotice, noticeKey])

  function showNotice(type: Exclude<ChangeNotice, null>) {
    setChangeNotice(type)
    setNoticeVisible(true)
    setNoticeKey((currentKey) => currentKey + 1)
  }

  function dismissNotice() {
    setNoticeVisible(false)
    window.setTimeout(() => setChangeNotice(null), 260)
  }

  function syncActionRoute(priorityId: string, pathwayId: string, announce = false) {
    setSelectedPriorityId(priorityId)
    setSelectedPathwayId(pathwayId)
    if (announce) {
      showNotice("actions")
    }
  }

  function syncDiagnosticRoute(pillarId: string, subpillarId: string, announce = false) {
    setSelectedPillarId(pillarId)
    setSelectedSubpillarId(subpillarId)
    if (announce) {
      showNotice("model")
    }
  }

  function handlePillarSelect(pillarId: string) {
    const nextPillar = pillars.find((pillar) => pillar.id === pillarId) ?? pillars[0]
    const nextSubpillar = nextPillar.subpillars[0]
    const connection = connectionByPillar[nextPillar.id as keyof typeof connectionByPillar]

    setSelectedPillarId(nextPillar.id)
    setSelectedSubpillarId(nextSubpillar.id)
    syncActionRoute(connection.priorityId, connection.pathwayId, nextPillar.id !== selectedPillarId)
  }

  function handleSubpillarSelect(subpillarId: string) {
    const connection = connectionBySubpillar[subpillarId as keyof typeof connectionBySubpillar]

    setSelectedSubpillarId(subpillarId)
    if (connection) {
      syncActionRoute(connection.priorityId, connection.pathwayId, subpillarId !== selectedSubpillarId)
    }
  }

  function handlePrioritySelect(priorityId: string) {
    const pathwayId = pathwayByPriority[priorityId as keyof typeof pathwayByPriority]
    const diagnostic = diagnosticByPriority[priorityId as keyof typeof diagnosticByPriority]

    setSelectedPriorityId(priorityId)
    if (pathwayId) {
      setSelectedPathwayId(pathwayId)
    }
    if (diagnostic) {
      syncDiagnosticRoute(diagnostic.pillarId, diagnostic.subpillarId, priorityId !== selectedPriorityId)
    }
  }

  function handlePathwaySelect(pathwayId: string) {
    const priorityId = priorityByPathway[pathwayId as keyof typeof priorityByPathway]
    const diagnostic = diagnosticByPathway[pathwayId as keyof typeof diagnosticByPathway]

    setSelectedPathwayId(pathwayId)
    if (priorityId) {
      setSelectedPriorityId(priorityId)
    }
    if (diagnostic) {
      syncDiagnosticRoute(diagnostic.pillarId, diagnostic.subpillarId, pathwayId !== selectedPathwayId)
    }
  }

  function handleViewActions() {
    document.getElementById("aila-action-flow")?.scrollIntoView({ behavior: "smooth", block: "start" })
    setChangeNotice(null)
  }

  function handleViewModel() {
    document.getElementById("aila-model-explorer")?.scrollIntoView({ behavior: "smooth", block: "start" })
    setChangeNotice(null)
  }

  const noticeContent =
    changeNotice === "model"
      ? {
          label: ui.noticeModel,
          title: `${ui.activePillar}: ${getPillarContent(selectedPillar, language).name}`,
          detail: `${ui.linkedSubpillar}: ${getSubpillarContent(selectedSubpillar, language).name}`,
          action: ui.viewModel,
          onAction: handleViewModel,
        }
      : {
          label: ui.noticeActions,
          title: `${ui.activeArea}: ${getPriorityTitle(selectedPriority, language)}`,
          detail: `${ui.linkedPathway}: ${getPathwayTitle(selectedPathway, language)}`,
          action: ui.viewChanges,
          onAction: handleViewActions,
        }

  return (
    <main className="dashboard-shell">
      <SdgBackground />

      <div className="overview-layout">
        <div className="overview-main">
          <header className="dashboard-title">
            <span>{ui.institution}</span>
            <h1>
              <span>{ui.brandTitle}</span>
              <span>{ui.brandCountry}</span>
            </h1>
            {ui.brandSubtitle ? <p>{ui.brandSubtitle}</p> : null}
          </header>

          <section className="explorer-section" id="aila-model-explorer">
            <div className="explorer-grid">
              <AilaModel
                pillars={pillars}
                language={language}
                selectedPillar={selectedPillar}
                selectedSubpillar={selectedSubpillar}
                priorityTitle={getPriorityTitle(selectedPriority, language)}
                pathwayTitle={getPathwayTitle(selectedPathway, language)}
                onSelectPillar={handlePillarSelect}
                onSelectSubpillar={handleSubpillarSelect}
                onViewActions={handleViewActions}
              />
            </div>
          </section>

          <InsightBand language={language} pillar={selectedPillar} />
        </div>

        <div className="overview-rail">
          <header className="app-header">
            <div className="brand-block">
              <img className="brand-logo" src={undpLogo} alt={language === "es" ? "PNUD" : "UNDP"} />
            </div>
            <div className="header-controls" aria-label="Controles de vista">
              <div className="segmented-control" aria-label={ui.language}>
                <button
                  className={language === "es" ? "is-active" : ""}
                  type="button"
                  aria-pressed={language === "es"}
                  onClick={() => setLanguage("es")}
                >
                  {ui.spanish}
                </button>
                <button
                  className={language === "en" ? "is-active" : ""}
                  type="button"
                  aria-pressed={language === "en"}
                  onClick={() => setLanguage("en")}
                >
                  {ui.english}
                </button>
              </div>
              <div className="segmented-control segmented-control--disabled" aria-label={ui.appearance}>
                <button className="is-active" type="button" aria-pressed="true">
                  <Moon size={13} aria-hidden="true" />
                  {ui.dark}
                </button>
                <button type="button" aria-pressed="false" disabled title="Modo claro pendiente">
                  <Sun size={13} aria-hidden="true" />
                  {ui.light}
                </button>
              </div>
            </div>
          </header>

          <section className="summary-side" aria-label="Hallazgos e indicadores principales">
            <KpiStrip language={language} metrics={evidenceMetrics} />
          </section>

          <InsightPanel
            language={language}
            pathway={selectedPathway}
            pillar={selectedPillar}
            priority={selectedPriority}
            source={ailaSummary.source}
            subpillar={selectedSubpillar}
          />
        </div>
      </div>

      <Workspace
        activeColor={selectedPillar.color}
        activePillarName={getPillarContent(selectedPillar, language).name}
        actionPathways={actionPathways}
        nextSteps={nextSteps}
        priorityAreas={priorityAreas}
        selectedPathwayId={selectedPathwayId}
        selectedPriorityId={selectedPriorityId}
        language={language}
        onSelectPathway={handlePathwaySelect}
        onSelectPriority={handlePrioritySelect}
      />

      {changeNotice ? (
        <aside
          className={`route-notice route-notice--${changeNotice} ${noticeVisible ? "is-visible" : "is-hiding"}`}
          role="status"
          aria-live="polite"
          style={{ "--notice-color": selectedPillar.color } as CSSProperties}
        >
          <div className="route-notice__body">
            <span className="route-notice__label">{noticeContent.label}</span>
            <strong>{noticeContent.title}</strong>
            <p>{noticeContent.detail}</p>
          </div>
          <div className="route-notice__actions">
            <button className="route-notice__primary" type="button" onClick={noticeContent.onAction}>
              <ArrowDown size={17} aria-hidden="true" />
              {noticeContent.action}
            </button>
            <button
              className="route-notice__dismiss"
              type="button"
              aria-label={ui.dismissNotice}
              onClick={dismissNotice}
            >
              <X size={17} aria-hidden="true" />
            </button>
          </div>
        </aside>
      ) : null}
    </main>
  )
}

export default App
