import {
  Baby,
  Factory,
  HeartPulse,
  Leaf,
  Scale,
  Sprout,
  Venus,
  Wheat,
} from "lucide-react"

const motifs = [
  { Icon: Baby, className: "bg-motif--poverty" },
  { Icon: Venus, className: "bg-motif--gender" },
  { Icon: HeartPulse, className: "bg-motif--health" },
  { Icon: Wheat, className: "bg-motif--food" },
  { Icon: Factory, className: "bg-motif--industry" },
  { Icon: Leaf, className: "bg-motif--climate" },
  { Icon: Scale, className: "bg-motif--justice" },
  { Icon: Sprout, className: "bg-motif--growth" },
]

export function SdgBackground() {
  return (
    <div className="sdg-background" aria-hidden="true">
      {motifs.map(({ Icon, className }) => (
        <span className={`bg-motif ${className}`} key={className}>
          <Icon strokeWidth={1.8} />
        </span>
      ))}
    </div>
  )
}
