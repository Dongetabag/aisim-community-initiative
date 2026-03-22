function BucketIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><path d="M8,10 L6,32 L34,32 L32,10 Z" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1.5"/><rect x="6" y="8" width="28" height="3" rx="1" fill="#4A4A45"/><path d="M14,8 L13,18 L27,18 L26,8" fill="white" stroke="#2D6A4F" strokeWidth="1"/><ellipse cx="18" cy="5" rx="5" ry="3.5" fill="#22C55E" fillOpacity="0.6"/><ellipse cx="24" cy="5" rx="5" ry="3.5" fill="#40916C" fillOpacity="0.6"/></svg>
  );
}
function LightIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><rect x="6" y="8" width="28" height="6" rx="2" fill="#1A1A1A"/>{[11,16,21,26,31].map(x=><circle key={x} cx={x} cy="11" r="1.5" fill="#FDE68A"/>)}<path d="M10,14 L6,32" stroke="#FDE68A" strokeWidth="0.5" strokeDasharray="2 2"/><path d="M20,14 L20,32" stroke="#FDE68A" strokeWidth="0.5" strokeDasharray="2 2"/><path d="M30,14 L34,32" stroke="#FDE68A" strokeWidth="0.5" strokeDasharray="2 2"/><rect x="14" y="30" width="4" height="6" rx="1" fill="white" stroke="#2D6A4F" strokeWidth="0.8"/><text x="16" y="35" textAnchor="middle" fontSize="3" fill="#2D6A4F" fontWeight="bold">ON</text></svg>
  );
}
function BottleIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><rect x="6" y="10" width="8" height="22" rx="2" fill="#E8663D" fillOpacity="0.3" stroke="#E8663D" strokeWidth="1"/><rect x="16" y="10" width="8" height="22" rx="2" fill="#22C55E" fillOpacity="0.3" stroke="#22C55E" strokeWidth="1"/><rect x="26" y="10" width="8" height="22" rx="2" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="1"/><text x="10" y="24" textAnchor="middle" fontSize="3.5" fill="#E8663D" fontWeight="bold">M</text><text x="20" y="24" textAnchor="middle" fontSize="3.5" fill="#22C55E" fontWeight="bold">G</text><text x="30" y="24" textAnchor="middle" fontSize="3.5" fill="#3B82F6" fontWeight="bold">B</text></svg>
  );
}
function PHIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><rect x="14" y="6" width="12" height="28" rx="3" fill="white" stroke="#2D6A4F" strokeWidth="1.5"/><rect x="16" y="10" width="8" height="8" rx="1" fill="#D8F3DC"/><text x="20" y="17" textAnchor="middle" fontSize="5" fill="#22C55E" fontWeight="bold">pH</text><line x1="20" y1="34" x2="20" y2="38" stroke="#A8A8A0" strokeWidth="1.5"/><circle cx="20" cy="39" r="2" fill="#E8663D" fillOpacity="0.5"/></svg>
  );
}
function PebbleIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><circle cx="12" cy="16" r="6" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.8"/><circle cx="24" cy="14" r="7" fill="#C49A2A" fillOpacity="0.4" stroke="#C49A2A" strokeWidth="0.8"/><circle cx="18" cy="26" r="6" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.8"/><circle cx="30" cy="25" r="5" fill="#C49A2A" fillOpacity="0.45" stroke="#C49A2A" strokeWidth="0.8"/></svg>
  );
}
function SeedIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><ellipse cx="14" cy="18" rx="4" ry="6" fill="#2D6A4F" fillOpacity="0.6" transform="rotate(-15 14 18)"/><ellipse cx="26" cy="16" rx="3.5" ry="5.5" fill="#40916C" fillOpacity="0.6" transform="rotate(10 26 16)"/><path d="M14,12 Q14,6 18,4" fill="none" stroke="#22C55E" strokeWidth="1"/><path d="M26,10 Q26,5 30,3" fill="none" stroke="#22C55E" strokeWidth="1"/><ellipse cx="20" cy="28" rx="5" ry="3" fill="#8B6F47" fillOpacity="0.3"/></svg>
  );
}
function TimerIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><circle cx="20" cy="22" r="14" fill="white" stroke="#2D6A4F" strokeWidth="1.5"/><path d="M20,22 L20,12" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/><path d="M20,22 L28,18" stroke="#C49A2A" strokeWidth="1" strokeLinecap="round"/><circle cx="20" cy="22" r="2" fill="#2D6A4F"/><rect x="17" y="4" width="6" height="3" rx="1" fill="#4A4A45"/></svg>
  );
}
function PumpIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><rect x="8" y="12" width="24" height="16" rx="4" fill="white" stroke="#2D6A4F" strokeWidth="1.5"/><circle cx="20" cy="20" r="5" fill="#D8F3DC" stroke="#2D6A4F" strokeWidth="1"/><text x="20" y="22" textAnchor="middle" fontSize="4" fill="#2D6A4F" fontWeight="bold">AIR</text><path d="M32,20 Q36,20 36,16 L36,10" fill="none" stroke="#A8A8A0" strokeWidth="1.5" strokeDasharray="2 2"/></svg>
  );
}
function StoneIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><rect x="8" y="18" width="24" height="8" rx="4" fill="#A8A8A0" stroke="#6B6B65" strokeWidth="1"/><circle cx="14" cy="14" r="2" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="0.5"/><circle cx="20" cy="10" r="2.5" fill="#3B82F6" fillOpacity="0.25" stroke="#3B82F6" strokeWidth="0.5"/><circle cx="26" cy="13" r="2" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="0.5"/></svg>
  );
}
function NetPotIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><path d="M10,10 L8,30 L32,30 L30,10 Z" fill="white" stroke="#2D6A4F" strokeWidth="1.5"/><line x1="12" y1="16" x2="14" y2="24" stroke="#2D6A4F" strokeWidth="0.6"/><line x1="18" y1="16" x2="19" y2="24" stroke="#2D6A4F" strokeWidth="0.6"/><line x1="24" y1="16" x2="25" y2="24" stroke="#2D6A4F" strokeWidth="0.6"/><line x1="28" y1="16" x2="29" y2="24" stroke="#2D6A4F" strokeWidth="0.6"/></svg>
  );
}
function TubeIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><path d="M6,30 Q6,10 20,10 Q34,10 34,20 Q34,30 26,30" fill="none" stroke="#A8A8A0" strokeWidth="3" strokeLinecap="round"/></svg>
  );
}
function FanIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><circle cx="20" cy="20" r="13" fill="white" stroke="#2D6A4F" strokeWidth="1.5"/><circle cx="20" cy="20" r="3" fill="#2D6A4F"/><path d="M20,17 Q14,10 20,7" fill="#40916C" fillOpacity="0.5" stroke="#2D6A4F" strokeWidth="0.8"/><path d="M23,20 Q30,14 33,20" fill="#40916C" fillOpacity="0.5" stroke="#2D6A4F" strokeWidth="0.8"/><path d="M20,23 Q26,30 20,33" fill="#40916C" fillOpacity="0.5" stroke="#2D6A4F" strokeWidth="0.8"/><path d="M17,20 Q10,26 7,20" fill="#40916C" fillOpacity="0.5" stroke="#2D6A4F" strokeWidth="0.8"/></svg>
  );
}
function MiscIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0"><rect x="6" y="14" width="10" height="18" rx="2" fill="white" stroke="#2D6A4F" strokeWidth="1"/><rect x="6" y="14" width="10" height="6" fill="#3B82F6" fillOpacity="0.15"/><rect x="22" y="8" width="4" height="24" rx="1" fill="white" stroke="#E8663D" strokeWidth="1"/><rect x="23" y="10" width="2" height="4" fill="#E8663D" fillOpacity="0.4"/><circle cx="32" cy="26" r="5" fill="white" stroke="#C49A2A" strokeWidth="1"/><path d="M32,22 L32,26 L35,28" fill="none" stroke="#C49A2A" strokeWidth="0.8"/></svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  "4-bucket DWC system": <BucketIcon />,
  "LED grow light": <LightIcon />,
  "Nutrients": <BottleIcon />,
  "pH + TDS meters": <PHIcon />,
  "pH Up/Down solutions": <PHIcon />,
  "Growing medium (LECA)": <PebbleIcon />,
  "Seeds (6 varieties)": <SeedIcon />,
  "Light timer": <TimerIcon />,
  "Air pump": <PumpIcon />,
  "Air stones (4-pack)": <StoneIcon />,
  "Net pots (25-pack)": <NetPotIcon />,
  "Air tubing": <TubeIcon />,
  "Clip fan": <FanIcon />,
  "Miscellaneous": <MiscIcon />,
};

const items = [
  { name: "4-bucket DWC system", cost: "$50–$80", product: "VIVOSUN or DIY 5-gal buckets" },
  { name: "LED grow light", cost: "$140–$150", product: "Spider Farmer SF2000 (200W)" },
  { name: "Nutrients", cost: "$30–$40", product: "GH Flora Trio (3 quarts)" },
  { name: "pH + TDS meters", cost: "$12–$20", product: "VIVOSUN combo kit" },
  { name: "pH Up/Down solutions", cost: "$12–$18", product: "GH pH Control Kit" },
  { name: "Growing medium (LECA)", cost: "$15–$20", product: "Clay pebbles 10L bag" },
  { name: "Seeds (6 varieties)", cost: "$15–$25", product: "Lettuce, basil, callaloo, culantro, scotch bonnet, thyme" },
  { name: "Light timer", cost: "$8–$12", product: "BN-LINK mechanical outlet" },
  { name: "Air pump", cost: "$20–$30", product: "Active Aqua 4-outlet" },
  { name: "Air stones (4-pack)", cost: "$8–$10", product: "4-inch cylinder stones" },
  { name: "Net pots (25-pack)", cost: "$5–$8", product: "3-inch net pots" },
  { name: "Air tubing", cost: "$5–$8", product: "25 ft standard" },
  { name: "Clip fan", cost: "$15–$20", product: "6-inch oscillating" },
  { name: "Miscellaneous", cost: "$10–$15", product: "Measuring cups, syringes, spray bottle, labels" },
];

const monthly = [
  { name: "SF2000 LED (200W x 16hr/day)", cost: "$32.64", icon: <LightIcon /> },
  { name: "Air pump (10W x 24hr)", cost: "$2.30", icon: <PumpIcon /> },
  { name: "Clip fan (10W x 14hr)", cost: "$1.35", icon: <FanIcon /> },
  { name: "Nutrients + pH solutions", cost: "$8–$15", icon: <BottleIcon /> },
  { name: "Seeds + replacement", cost: "$3–$4", icon: <SeedIcon /> },
];

function TotalVisual() {
  return (
    <svg viewBox="0 0 400 60" className="w-full h-auto mt-6" aria-label="Budget bar showing $420 of $500 used">
      <rect x="0" y="10" width="400" height="30" rx="15" fill="#F0EDE6" />
      <rect x="0" y="10" width="336" height="30" rx="15" fill="#22C55E" fillOpacity="0.25" />
      <rect x="0" y="10" width="336" height="30" rx="15" fill="url(#budgetGrad)" />
      <text x="168" y="30" textAnchor="middle" fontSize="13" fill="#1B4332" fontWeight="bold">~$420 spent</text>
      <text x="368" y="30" textAnchor="middle" fontSize="11" fill="#8A8A82" fontWeight="bold">$500</text>
      <text x="168" y="52" textAnchor="middle" fontSize="10" fill="#22C55E" fontWeight="bold">$80 left for seeds, pH adjusters, and extras</text>
      <defs>
        <linearGradient id="budgetGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BudgetSection() {
  return (
    <section id="budget" className="bg-bg-tertiary px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          Budget Breakdown
        </h2>
        <p className="mb-12 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          Start for Under $500
        </p>

        <div className="mb-8 overflow-hidden rounded-2xl border border-white/60 bg-bg-secondary shadow-sm">
          <div className="border-b border-bg-tertiary bg-green-dark px-6 py-3">
            <h3 className="text-lg font-bold text-white">Startup Equipment</h3>
          </div>
          {items.map((row, i) => (
            <div
              key={row.name}
              className={`flex items-center gap-4 px-4 py-3 ${
                i % 2 === 0 ? "bg-bg-secondary" : "bg-background"
              }`}
            >
              {icons[row.name]}
              <div className="min-w-0 flex-1">
                <span className="font-medium text-foreground">{row.name}</span>
                <span className="ml-2 text-sm text-text-muted hidden sm:inline"> — {row.product}</span>
              </div>
              <span className="shrink-0 font-bold text-green-dark">{row.cost}</span>
            </div>
          ))}
          <div className="flex items-center justify-between border-t-2 border-green bg-green-light px-6 py-4 text-xl font-bold">
            <span className="text-green-dark">Total Startup</span>
            <span className="text-green-dark">$345–$456</span>
          </div>
        </div>

        <TotalVisual />

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/60 bg-bg-secondary shadow-sm">
          <div className="border-b border-bg-tertiary bg-green-dark px-6 py-3">
            <h3 className="text-lg font-bold text-white">Monthly Operating Costs</h3>
            <p className="text-sm text-white/70">Based on Eversource $0.34/kWh (all-in rate, March 2026) — West Springfield, MA</p>
          </div>
          {monthly.map((row, i) => (
            <div
              key={row.name}
              className={`flex items-center gap-4 px-4 py-3 ${
                i % 2 === 0 ? "bg-bg-secondary" : "bg-background"
              }`}
            >
              {row.icon}
              <span className="flex-1 text-text-secondary">{row.name}</span>
              <span className="font-bold text-green-dark">{row.cost}</span>
            </div>
          ))}
          <div className="flex items-center justify-between border-t-2 border-green bg-green-light px-6 py-4 text-xl font-bold">
            <span className="text-green-dark">Monthly Total</span>
            <span className="text-green-dark">$47–$56</span>
          </div>
        </div>
      </div>
    </section>
  );
}
