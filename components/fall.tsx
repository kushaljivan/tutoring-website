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

/** Small cluster of leaves + an acorn for the top-right corner of a card. */
export function LeafCluster({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <Leaf color={MUSTARD} transform="translate(38 9) rotate(180)" />
      <Leaf color={RUST} transform="translate(38 9) rotate(135)" />
      <Leaf color={BURNT_ORANGE} transform="translate(38 9) rotate(88) scale(.9)" />
      <Acorn transform="translate(19 27) rotate(-25)" />
    </svg>
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

export function Pumpkin({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path d="M16 12c0-3 1-5.5 3.5-7" stroke="#5B3A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M18 8c2.5-2.5 6-2.5 7.5-1-2 2.5-5 3-7.5 1Z" fill={OLIVE} />
      <ellipse cx="10" cy="20" rx="7" ry="8.5" fill="#E8711A" />
      <ellipse cx="22" cy="20" rx="7" ry="8.5" fill="#E8711A" />
      <ellipse cx="16" cy="20" rx="6" ry="9" fill="#F08A2C" />
      <path d="M16 12v16" stroke="#D9620F" strokeOpacity=".6" strokeWidth="1" />
    </svg>
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
