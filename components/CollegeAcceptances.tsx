const schools = [
  'MIT', 'Yale', 'Georgetown', 'UVA', 'Duke', 'Cornell',
  'William & Mary', 'Johns Hopkins', 'NYU', 'UMD',
  'GW', 'American University', 'Northeastern', 'Fordham',
]

export default function CollegeAcceptances() {
  return (
    <section id="results" className="bg-cream-dark py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

          {/* Left: heading + stat + school badges */}
          <div className="flex-1">
            <h2 className="font-serif text-3xl font-bold text-ink mb-1">
              Where Our Students Go
            </h2>
            <p className="text-ink-light text-sm mb-6">
              25+ college acceptances since 2020
            </p>
            <div className="flex flex-wrap gap-2">
              {schools.map((school) => (
                <span
                  key={school}
                  className="bg-card border border-ink/10 text-ink text-sm font-medium px-3 py-1.5 rounded-full shadow-card"
                >
                  {school}
                </span>
              ))}
              <span className="bg-card border border-ink/10 text-ink-light/70 text-sm font-medium px-3 py-1.5 rounded-full shadow-card">
                …and many more
              </span>
            </div>
          </div>

          {/* Right: featured quote */}
          <div className="lg:w-80 bg-card border border-ink/10 border-l-4 border-l-amber rounded-xl p-6 shadow-card">
            <p className="text-ink text-lg font-medium leading-snug mb-4">
              &ldquo;I raised my SAT 310 points and got into Georgetown.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber/15 border border-amber/30 flex items-center justify-center text-ink font-serif font-bold text-sm">
                M
              </div>
              <div>
                <div className="text-ink text-sm font-semibold">Marcus W.</div>
                <div className="text-ink-light/70 text-xs">Class of 2024 · SAT +310 pts</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
