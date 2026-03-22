function PhaseIcon({ phase }: { phase: number }) {
  if (phase === 1) return (
    <svg viewBox="0 0 140 80" className="w-full h-auto" aria-label="4 buckets with small seedlings">
      {[25,50,75,100].map((x) => (
        <g key={x}>
          <rect x={x-10} y={30} width={20} height={30} rx={2} fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1"/>
          <rect x={x-7} y={42} width={14} height={16} rx={1} fill="#3B82F6" fillOpacity="0.1"/>
          <line x1={x} y1={30} x2={x} y2={22} stroke="#2D6A4F" strokeWidth="1.5"/>
          <circle cx={x-4} cy={18} r={5} fill="#22C55E" fillOpacity="0.5"/>
          <circle cx={x+4} cy={18} r={5} fill="#40916C" fillOpacity="0.5"/>
        </g>
      ))}
      <text x="70" y="74" textAnchor="middle" fontSize="8" fill="#2D6A4F" fontWeight="bold">4 buckets — your first harvest</text>
    </svg>
  );
  if (phase === 2) return (
    <svg viewBox="0 0 140 80" className="w-full h-auto" aria-label="8 buckets with larger plants and Caribbean crops">
      {[10,26,42,58,74,90,106,122].map((x,i) => (
        <g key={x}>
          <rect x={x-5} y={30} width={12} height={24} rx={2} fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="0.8"/>
          <line x1={x+1} y1={30} x2={x+1} y2={22} stroke="#2D6A4F" strokeWidth="1"/>
          <circle cx={x+1} cy={18} r={5} fill={i > 3 ? "#E8663D" : "#22C55E"} fillOpacity="0.5"/>
          <circle cx={x+1} cy={13} r={4} fill={i > 3 ? "#C49A2A" : "#40916C"} fillOpacity="0.5"/>
        </g>
      ))}
      <text x="70" y="68" textAnchor="middle" fontSize="7" fill="#2D6A4F" fontWeight="bold">Caribbean crops added</text>
      <text x="70" y="78" textAnchor="middle" fontSize="6" fill="#4A4A45">callaloo, culantro, scotch bonnet</text>
    </svg>
  );
  if (phase === 3) return (
    <svg viewBox="0 0 140 80" className="w-full h-auto" aria-label="Many plants flowing into a catering truck">
      {/* Plants */}
      {[12,24,36,48,60].map((x) => (
        <g key={x}>
          <rect x={x-4} y={26} width={8} height={18} rx={1} fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="0.8"/>
          <circle cx={x} cy={22} r={5} fill="#22C55E" fillOpacity="0.6"/>
          <circle cx={x} cy={17} r={4} fill="#40916C" fillOpacity="0.5"/>
        </g>
      ))}
      {/* Arrow */}
      <path d="M68,32 L80,32" stroke="#C49A2A" strokeWidth="2" markerEnd="url(#gpArrow)"/>
      {/* Catering */}
      <rect x={85} y={18} width={42} height={28} rx={4} fill="white" stroke="#E8663D" strokeWidth="1.5"/>
      <rect x={85} y={18} width={42} height={10} rx={2} fill="#E8663D" fillOpacity="0.15"/>
      <text x={106} y={26} textAnchor="middle" fontSize="6" fill="#E8663D" fontWeight="bold">PAN ROAD</text>
      <text x={106} y={40} textAnchor="middle" fontSize="5" fill="#4A4A45" fontWeight="bold">CATERING</text>
      <text x="70" y="62" textAnchor="middle" fontSize="7" fill="#2D6A4F" fontWeight="bold">10–20 lbs/week</text>
      <text x="70" y="74" textAnchor="middle" fontSize="6" fill="#4A4A45">Fresh supply to Pan Road Catering</text>
      <defs><marker id="gpArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#C49A2A"/></marker></defs>
    </svg>
  );
  return (
    <svg viewBox="0 0 140 80" className="w-full h-auto" aria-label="Multiple houses with plants showing community expansion">
      {/* Houses */}
      {[25,70,115].map((x) => (
        <g key={x}>
          <rect x={x-12} y={26} width={24} height={20} rx={1} fill="white" stroke="#2D6A4F" strokeWidth="1"/>
          <path d={`M${x-14},26 L${x},14 L${x+14},26`} fill="#E8663D" fillOpacity="0.3" stroke="#E8663D" strokeWidth="0.8"/>
          <rect x={x-3} y={36} width={6} height={10} fill="#C49A2A" fillOpacity="0.3" stroke="#C49A2A" strokeWidth="0.5"/>
          <circle cx={x} cy={10} r={4} fill="#22C55E" fillOpacity="0.5"/>
        </g>
      ))}
      {/* Connection lines */}
      <path d="M37,34 Q48,26 58,34" fill="none" stroke="#22C55E" strokeWidth="0.8" strokeDasharray="2 2"/>
      <path d="M82,34 Q93,26 103,34" fill="none" stroke="#22C55E" strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="70" y="60" textAnchor="middle" fontSize="7" fill="#2D6A4F" fontWeight="bold">Help neighbors grow</text>
      <text x="70" y="72" textAnchor="middle" fontSize="7" fill="#2D6A4F" fontWeight="bold">Build a community network</text>
    </svg>
  );
}

const phases = [
  {
    phase: "Phase 1",
    num: 1,
    title: "Learn the Basics",
    timeline: "Months 1–2",
    cost: "$345–$456",
    plants: "4–8 sites",
    yield: "1–2 lbs/week",
    desc: "Start with 4 DWC buckets. Grow lettuce and herbs. Learn pH management, nutrient mixing, and light schedules. Manual checks build your intuition.",
    accent: "border-l-green",
  },
  {
    phase: "Phase 2",
    num: 2,
    title: "Diversify",
    timeline: "Months 3–6",
    cost: "$560–$880 total",
    plants: "20–40 sites",
    yield: "3–5 lbs/week",
    desc: "Add Caribbean crops — callaloo, culantro, scotch bonnet. Add ESP32 sensor monitoring so your phone tracks pH and EC automatically.",
    accent: "border-l-green-bright",
  },
  {
    phase: "Phase 3",
    num: 3,
    title: "Catering Supply",
    timeline: "Months 6–12",
    cost: "$1,000–$2,500 total",
    plants: "50–100 sites",
    yield: "10–20 lbs/week",
    desc: "Scale to supply Pan Road Catering. Claude API automates nutrient decisions. 3D-print custom NFT channels in food-safe PETG for your exact space.",
    accent: "border-l-coral",
  },
  {
    phase: "Phase 4",
    num: 4,
    title: "Community Expansion",
    timeline: "Year 2+",
    cost: "$3,000–$10,000",
    plants: "100+ sites",
    yield: "15+ lbs/week",
    desc: "Help family and neighbors set up systems. Camera + computer vision detects plant problems. Community dashboard connects all growers in Springfield.",
    accent: "border-l-gold",
  },
];

export function GrowthPlan() {
  return (
    <section id="plan" className="bg-bg-tertiary px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          Growth Plan
        </h2>
        <p className="mb-14 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          From Hobby to Catering
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`overflow-hidden rounded-2xl border border-white/60 border-l-4 ${p.accent} bg-bg-secondary shadow-sm`}
            >
              <div className="bg-bg-tertiary/50 p-4 flex items-center justify-center">
                <div className="w-full max-w-[280px]">
                  <PhaseIcon phase={p.num} />
                </div>
              </div>
              <div className="p-5">
                <p className="mb-1 text-sm font-bold tracking-widest text-text-muted uppercase">
                  {p.phase} — {p.timeline}
                </p>
                <h3 className="mb-2 text-2xl font-bold text-green-dark">{p.title}</h3>
                <p className="mb-4 text-base leading-relaxed text-text-secondary">{p.desc}</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="rounded-xl bg-bg-tertiary p-3 text-center">
                    <p className="text-text-muted text-xs font-medium">Cost</p>
                    <p className="font-bold text-green-dark">{p.cost}</p>
                  </div>
                  <div className="rounded-xl bg-bg-tertiary p-3 text-center">
                    <p className="text-text-muted text-xs font-medium">Plants</p>
                    <p className="font-bold text-foreground">{p.plants}</p>
                  </div>
                  <div className="rounded-xl bg-bg-tertiary p-3 text-center">
                    <p className="text-text-muted text-xs font-medium">Yield</p>
                    <p className="font-bold text-green">{p.yield}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
