import {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  Droplets,
  Equal,
  Factory,
  Fish,
  Handshake,
  HeartPulse,
  Home,
  Leaf,
  Recycle,
  Scale,
  Sun,
  Venus,
  Wheat,
  Wind,
} from "lucide-react"
import type { CSSProperties } from "react"

const sdgIcons = [
  { Icon: Baby, color: "#e5243b" },
  { Icon: Wheat, color: "#dda63a" },
  { Icon: HeartPulse, color: "#4c9f38" },
  { Icon: BookOpen, color: "#c5192d" },
  { Icon: Venus, color: "#ff3a21" },
  { Icon: Droplets, color: "#26bde2" },
  { Icon: Sun, color: "#fcc30b" },
  { Icon: BriefcaseBusiness, color: "#a21942" },
  { Icon: Factory, color: "#fd6925" },
  { Icon: Equal, color: "#dd1367" },
  { Icon: Home, color: "#fd9d24" },
  { Icon: Recycle, color: "#bf8b2e" },
  { Icon: Wind, color: "#3f7e44" },
  { Icon: Fish, color: "#0a97d9" },
  { Icon: Leaf, color: "#56c02b" },
  { Icon: Scale, color: "#00689d" },
  { Icon: Handshake, color: "#19486a" },
]

type MotifPosition = [left: number, top: number, size: number, opacity: number, hasIcon: boolean]

const positions: MotifPosition[] = [
  [3, 10, 68, 0.2, false],
  [9, 18, 92, 0.22, true],
  [20, 9, 118, 0.19, false],
  [34, 16, 86, 0.19, true],
  [51, 8, 98, 0.2, true],
  [68, 17, 126, 0.17, false],
  [84, 7, 72, 0.19, true],
  [92, 28, 112, 0.18, false],
  [5, 34, 104, 0.16, true],
  [17, 42, 76, 0.18, true],
  [29, 34, 122, 0.16, false],
  [43, 45, 70, 0.17, true],
  [58, 35, 94, 0.17, true],
  [73, 43, 136, 0.15, false],
  [88, 51, 82, 0.18, true],
  [2, 60, 142, 0.15, false],
  [15, 68, 86, 0.17, true],
  [31, 59, 112, 0.15, true],
  [47, 66, 78, 0.17, false],
  [61, 57, 118, 0.15, true],
  [77, 64, 90, 0.17, true],
  [92, 73, 130, 0.15, false],
  [7, 82, 78, 0.18, true],
  [22, 88, 116, 0.15, false],
  [38, 80, 88, 0.17, true],
  [54, 87, 140, 0.14, false],
  [71, 81, 76, 0.17, true],
  [86, 91, 108, 0.15, true],
  [13, 6, 56, 0.17, false],
  [96, 61, 74, 0.16, true],
]

export function SdgBackground() {
  return (
    <div className="sdg-background" aria-hidden="true">
      {positions.map(([left, top, size, opacity, hasIcon], index) => {
        const { Icon, color } = sdgIcons[index % sdgIcons.length]
        const style = {
          "--motif-color": color,
          "--motif-opacity": opacity,
          "--motif-size": `clamp(${Math.round(size * 0.68)}px, ${Math.max(3.4, size / 14).toFixed(1)}vw, ${size}px)`,
          "--motif-speed": `${17 + (index % 8)}s`,
          left: `${left}%`,
          top: `${top}%`,
        } as CSSProperties

        return (
          <span
            className={`bg-motif${hasIcon ? "" : " bg-motif--empty"}`}
            key={`${left}-${top}-${index}`}
            style={style}
          >
            {hasIcon ? <Icon strokeWidth={1.8} /> : null}
          </span>
        )
      })}
    </div>
  )
}
