const schools = [
  'MIT', 'Yale', 'Georgetown', 'UVA', 'Duke', 'Cornell',
  'William & Mary', 'Johns Hopkins', 'NYU', 'UMD',
  'GW', 'American University', 'Northeastern', 'Fordham',
]

export default function CollegeAcceptances() {
  return (
    <section id="results" className="bg-[#1a2d6b] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

          {/* Left: heading + stat + school badges */}
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-white mb-1">
              Where Our Students Go
            </h2>
            <p className="text-blue-300 text-sm mb-6">
              50+ college acceptances since 2020
            </p>
            <div className="flex flex-wrap gap-2">
              {schools.map((school) => (
                <span
                  key={school}
                  className="bg-white/10 border border-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {school}
                </span>
              ))}
              <span className="bg-white/10 border border-white/20 text-blue-300 text-sm font-medium px-3 py-1.5 rounded-full">
                …and many more
              </span>
            </div>
          </div>

          {/* Right: featured quote */}
          <div className="lg:w-80 bg-white/10 border-l-4 border-green-400 rounded-xl p-6">
            <p className="text-white text-lg font-medium leading-snug mb-4">
              &ldquo;I raised my SAT 310 points and got into Georgetown.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Marcus W.</div>
                <div className="text-blue-300 text-xs">Class of 2024 · SAT +310 pts</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
