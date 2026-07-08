import type { SVGProps } from 'react'

// Flat, friendly object illustrations in the brand palette.
// Transparent backgrounds; decorative only (aria-hidden).
type Props = SVGProps<SVGSVGElement>

export function BookIllustration(props: Props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      {/* cover */}
      <path
        d="M60 32C46 23 27 20 14 23v66c13-3 32 0 46 9 14-9 33-12 46-9V23c-13-3-32 0-46 9Z"
        fill="#1D4ED8"
      />
      {/* left page */}
      <path d="M57 39c-11-7-26-9-36-7v50c10-2 25 0 36 7V39Z" fill="#FFFFFF" />
      {/* right page */}
      <path d="M63 39c11-7 26-9 36-7v50c-10-2-25 0-36 7V39Z" fill="#FAF7F2" />
      {/* text lines */}
      <rect x="28" y="43" width="22" height="3.5" rx="1.75" fill="#C7D2E3" />
      <rect x="28" y="52" width="22" height="3.5" rx="1.75" fill="#C7D2E3" />
      <rect x="28" y="61" width="16" height="3.5" rx="1.75" fill="#C7D2E3" />
      <rect x="70" y="43" width="22" height="3.5" rx="1.75" fill="#C7D2E3" />
      <rect x="70" y="52" width="22" height="3.5" rx="1.75" fill="#C7D2E3" />
      <rect x="70" y="61" width="16" height="3.5" rx="1.75" fill="#F59E0B" />
      {/* bookmark */}
      <path d="M84 26v18l5-4 5 4V24c-3.5-.4-7-.4-10 2Z" fill="#F59E0B" />
    </svg>
  )
}

export function CalculatorIllustration(props: Props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      <rect x="30" y="14" width="60" height="92" rx="10" fill="#1E3A5F" />
      {/* screen */}
      <rect x="38" y="24" width="44" height="22" rx="5" fill="#FAF7F2" />
      <rect x="58" y="30" width="18" height="5" rx="2.5" fill="#4A6285" />
      <rect x="70" y="38" width="6" height="4" rx="2" fill="#4A6285" />
      {/* buttons */}
      <rect x="38" y="54" width="12" height="12" rx="4" fill="#FFFFFF" />
      <rect x="54" y="54" width="12" height="12" rx="4" fill="#FFFFFF" />
      <rect x="70" y="54" width="12" height="12" rx="4" fill="#F59E0B" />
      <rect x="38" y="70" width="12" height="12" rx="4" fill="#FFFFFF" />
      <rect x="54" y="70" width="12" height="12" rx="4" fill="#FFFFFF" />
      <rect x="70" y="70" width="12" height="12" rx="4" fill="#FFFFFF" />
      <rect x="38" y="86" width="12" height="12" rx="4" fill="#FFFFFF" />
      <rect x="54" y="86" width="12" height="12" rx="4" fill="#FFFFFF" />
      <rect x="70" y="86" width="12" height="12" rx="4" fill="#2563EB" />
    </svg>
  )
}

export function PencilIllustration(props: Props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      <g transform="rotate(42 60 60)">
        {/* eraser cap */}
        <rect x="18" y="48" width="14" height="24" rx="5" fill="#2563EB" />
        {/* ferrule */}
        <rect x="32" y="48" width="8" height="24" fill="#C7D2E3" />
        {/* body */}
        <rect x="40" y="48" width="46" height="24" fill="#F59E0B" />
        <rect x="40" y="56" width="46" height="8" fill="#FBBF56" />
        {/* wood tip */}
        <path d="M86 48v24l16-9.5v-5L86 48Z" fill="#F3EEE5" />
        {/* graphite */}
        <path d="M96 53.5v13l8-6.5-8-6.5Z" fill="#1E3A5F" />
      </g>
    </svg>
  )
}

export function EraserIllustration(props: Props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      <g transform="rotate(-14 60 60)">
        {/* body */}
        <rect x="26" y="46" width="68" height="30" rx="8" fill="#2563EB" />
        {/* sleeve */}
        <path
          d="M26 54a8 8 0 0 1 8-8h24v30H34a8 8 0 0 1-8-8V54Z"
          fill="#F59E0B"
        />
        <rect x="34" y="54" width="16" height="4" rx="2" fill="#FBBF56" />
        {/* shine */}
        <rect x="66" y="52" width="20" height="4" rx="2" fill="#7EA2F0" />
      </g>
      {/* crumbs */}
      <circle cx="30" cy="88" r="3" fill="#C7D2E3" />
      <circle cx="42" cy="94" r="2.2" fill="#C7D2E3" />
      <circle cx="88" cy="90" r="2.6" fill="#C7D2E3" />
    </svg>
  )
}

export function NotebookIllustration(props: Props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      <g transform="rotate(4 60 60)">
        {/* back sheet */}
        <rect x="32" y="20" width="56" height="78" rx="6" fill="#E4DED2" />
        {/* page */}
        <rect x="28" y="16" width="56" height="78" rx="6" fill="#FFFFFF" />
        {/* margin line */}
        <rect x="38" y="16" width="2.5" height="78" fill="#F59E0B" />
        {/* writing lines */}
        <rect x="46" y="30" width="30" height="3" rx="1.5" fill="#C7D2E3" />
        <rect x="46" y="40" width="30" height="3" rx="1.5" fill="#C7D2E3" />
        <rect x="46" y="50" width="24" height="3" rx="1.5" fill="#C7D2E3" />
        <rect x="46" y="60" width="30" height="3" rx="1.5" fill="#C7D2E3" />
        <rect x="46" y="70" width="18" height="3" rx="1.5" fill="#2563EB" />
        {/* A+ mark */}
        <path
          d="M62 84l4-9 4 9M63.5 81h5"
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M74 79.5h6M77 76.5v6" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}

export function RulerIllustration(props: Props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      <g transform="rotate(-24 60 60)">
        <rect x="14" y="50" width="92" height="24" rx="5" fill="#F59E0B" />
        <rect x="14" y="50" width="92" height="7" rx="3.5" fill="#FBBF56" />
        {/* ticks */}
        <rect x="26" y="50" width="2.5" height="12" fill="#1E3A5F" />
        <rect x="38" y="50" width="2.5" height="8" fill="#1E3A5F" />
        <rect x="50" y="50" width="2.5" height="12" fill="#1E3A5F" />
        <rect x="62" y="50" width="2.5" height="8" fill="#1E3A5F" />
        <rect x="74" y="50" width="2.5" height="12" fill="#1E3A5F" />
        <rect x="86" y="50" width="2.5" height="8" fill="#1E3A5F" />
      </g>
    </svg>
  )
}
