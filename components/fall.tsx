// Fall / Thanksgiving decorations. Everything here should carry the
// `seasonal` class, which keeps it hidden unless <html> has the `fall` class
// (set by the inline script in app/layout.tsx until FALL_ENDS).

type Props = { className?: string }

const RUST = '#B4532A'
const MUSTARD = '#D4A017'
const BURNT_ORANGE = '#C2410C'
const CRANBERRY = '#9F1239'
const OLIVE = '#6B7F3A'
const VEIN = '#5B2A12'

// A simple pointed leaf whose stem sits at (0,0) and which points along +x.
function Leaf({ color, transform }: { color: string; transform: string }) {
  return (
    <g transform={transform}>
      <path d="M0 0C5-7 15-8 22 0C15 8 5 7 0 0Z" fill={color} />
      <path d="M1 0H18" stroke={VEIN} strokeOpacity=".35" strokeWidth="1" strokeLinecap="round" />
    </g>
  )
}

function Acorn({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <ellipse cx="0" cy="3.5" rx="3.6" ry="4.5" fill="#A16207" />
      <path d="M-4.4 0.5a4.4 3.2 0 0 1 8.8 0Z" fill="#78350F" />
      <path d="M0-2.7v-2" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  )
}

/** A single leaf, for resting on a section illustration. */
export function FallLeaf({ className }: Props) {
  return (
    <svg viewBox="0 0 28 20" aria-hidden="true" className={className}>
      <Leaf color={RUST} transform="translate(3 12) rotate(-18)" />
    </svg>
  )
}

function PumpkinShape({ transform = '' }: { transform?: string }) {
  return (
    <g transform={transform}>
      <path d="M16 12c0-3 1-5.5 3.5-7" stroke="#5B3A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M18 8c2.5-2.5 6-2.5 7.5-1-2 2.5-5 3-7.5 1Z" fill={OLIVE} />
      <ellipse cx="10" cy="20" rx="7" ry="8.5" fill="#E8711A" />
      <ellipse cx="22" cy="20" rx="7" ry="8.5" fill="#E8711A" />
      <ellipse cx="16" cy="20" rx="6" ry="9" fill="#F08A2C" />
      <path d="M16 12v16" stroke="#D9620F" strokeOpacity=".6" strokeWidth="1" />
    </g>
  )
}

export function Pumpkin({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <PumpkinShape />
    </svg>
  )
}

/** A little harvest pile (pumpkins, acorns, leaves) for the nav bar. */
export function HarvestRow({ className }: Props) {
  return (
    <svg viewBox="0 0 160 40" aria-hidden="true" className={className}>
      <Leaf color={OLIVE} transform="translate(2 30) rotate(-25) scale(.8)" />
      <PumpkinShape transform="translate(14 3) scale(1.08)" />
      <Leaf color={RUST} transform="translate(44 36) rotate(-40) scale(.85)" />
      <Acorn transform="translate(62 31) rotate(20)" />
      <Leaf color={MUSTARD} transform="translate(68 12) rotate(28) scale(.9)" />
      <PumpkinShape transform="translate(88 16) scale(.72)" />
      <Acorn transform="translate(117 32) rotate(-18)" />
      <Leaf color={CRANBERRY} transform="translate(122 26) rotate(-28) scale(.85)" />
      <Leaf color={BURNT_ORANGE} transform="translate(141 38) rotate(-78) scale(.7)" />
      <Acorn transform="translate(152 18) rotate(35) scale(.8)" />
    </svg>
  )
}

// Deterministic pseudo-random numbers, so the server and browser draw the same scatter.
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type ScatterItem = { kind: 'leaf' | 'acorn' | 'pumpkin'; x: number; y: number; size: number; rotate: number; color: string }

function makeScatter(seed: number): ScatterItem[] {
  const rand = seeded(seed)
  const between = (a: number, b: number) => a + rand() * (b - a)
  const leafColors = [RUST, MUSTARD, BURNT_ORANGE, CRANBERRY, OLIVE]
  // Mostly in the side margins, plus a few beside the section heading.
  const spots: [number, number, number, number][] = [
    ...Array.from({ length: 7 }, () => [0.5, 8.5, 6, 96] as [number, number, number, number]),
    ...Array.from({ length: 7 }, () => [91.5, 99.5, 6, 96] as [number, number, number, number]),
    [14, 30, 3, 20],
    [70, 86, 3, 20],
    [10, 34, 2, 14],
    [66, 90, 2, 14],
  ]
  return spots.map(([x1, x2, y1, y2]) => {
    const roll = rand()
    const kind = roll < 0.6 ? 'leaf' : roll < 0.85 ? 'acorn' : 'pumpkin'
    return {
      kind,
      x: between(x1, x2),
      y: between(y1, y2),
      size: kind === 'leaf' ? between(30, 52) : kind === 'acorn' ? between(20, 30) : between(32, 46),
      rotate: kind === 'leaf' ? between(0, 360) : between(-30, 30),
      color: leafColors[Math.floor(rand() * leafColors.length)],
    }
  })
}

/**
 * Leaves, acorns and pumpkins scattered around a section's background.
 * Put it first inside a `relative` section and give the content `relative z-10`
 * so the cards sit on top. Different seeds give different layouts.
 */
export function FallScatter({ seed }: { seed: number }) {
  return (
    <div className="seasonal absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {makeScatter(seed).map((it, i) => (
        <svg
          key={i}
          viewBox={it.kind === 'leaf' ? '-2 -10 26 20' : it.kind === 'acorn' ? '-6 -7 12 16' : '0 0 32 32'}
          className="absolute"
          style={{
            left: `${it.x.toFixed(2)}%`,
            top: `${it.y.toFixed(2)}%`,
            width: it.size.toFixed(1),
            height: it.size.toFixed(1),
            transform: `translate(-50%, -50%) rotate(${it.rotate.toFixed(1)}deg)`,
          }}
        >
          {it.kind === 'leaf' && <Leaf color={it.color} transform="" />}
          {it.kind === 'acorn' && <Acorn transform="" />}
          {it.kind === 'pumpkin' && <PumpkinShape />}
        </svg>
      ))}
    </div>
  )
}

/**
 * A strand of twine with hanging leaves, repeated across the full width.
 * `id` must be unique per page (it names the SVG pattern).
 */
export function LeafGarland({ id, className = '' }: { id: string; className?: string }) {
  const colors = [RUST, MUSTARD, BURNT_ORANGE, CRANBERRY, OLIVE, MUSTARD]
  return (
    <div className={`seasonal ${className}`} aria-hidden="true">
      <svg width="100%" height="28">
        <defs>
          <pattern id={id} width="180" height="28" patternUnits="userSpaceOnUse">
            <path d="M0 5Q22.5 12 45 5T90 5T135 5T180 5" stroke="#8B5A2B" strokeWidth="1.2" fill="none" />
            {colors.map((c, i) => (
              <Leaf
                key={i}
                color={c}
                transform={`translate(${15 + i * 30} ${i % 2 ? 6 : 8}) rotate(${i % 2 ? 70 : 105}) scale(.75)`}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="28" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
