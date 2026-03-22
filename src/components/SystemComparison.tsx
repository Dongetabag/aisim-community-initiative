function DWCDiagram() {
  return (
    <svg viewBox="0 0 220 170" className="w-full h-auto" aria-label="Deep Water Culture bucket cross-section">
      {/* Bucket */}
      <path d="M40,35 L30,140 L190,140 L180,35 Z" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="2" />
      {/* Water */}
      <path d="M35,70 L32,138 L188,138 L185,70 Z" fill="#3B82F6" fillOpacity="0.12" />
      <path d="M35,70 Q75,78 110,70 Q145,62 185,70" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Lid */}
      <rect x="35" y="31" width="150" height="6" rx="2" fill="#4A4A45" />
      {/* Net pot */}
      <path d="M90,31 L85,58 L135,58 L130,31" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      <line x1="92" y1="42" x2="95" y2="52" stroke="#2D6A4F" strokeWidth="0.7" />
      <line x1="100" y1="42" x2="102" y2="52" stroke="#2D6A4F" strokeWidth="0.7" />
      <line x1="118" y1="42" x2="120" y2="52" stroke="#2D6A4F" strokeWidth="0.7" />
      <line x1="126" y1="42" x2="128" y2="52" stroke="#2D6A4F" strokeWidth="0.7" />
      {/* LECA */}
      <circle cx="98" cy="42" r="4" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      <circle cx="110" cy="39" r="5" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      <circle cx="122" cy="42" r="4" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      <circle cx="105" cy="50" r="3.5" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      <circle cx="116" cy="49" r="3.5" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      {/* Plant */}
      <line x1="110" y1="32" x2="110" y2="16" stroke="#2D6A4F" strokeWidth="2" />
      <ellipse cx="98" cy="12" rx="13" ry="9" fill="#22C55E" fillOpacity="0.6" />
      <ellipse cx="122" cy="12" rx="13" ry="9" fill="#22C55E" fillOpacity="0.6" />
      <ellipse cx="110" cy="6" rx="11" ry="8" fill="#40916C" fillOpacity="0.6" />
      {/* Roots */}
      <path d="M100,58 Q95,85 92,110" fill="none" stroke="#8B6F47" strokeWidth="1" />
      <path d="M108,58 Q106,80 104,100" fill="none" stroke="#8B6F47" strokeWidth="1" />
      <path d="M110,58 Q110,85 110,115" fill="none" stroke="#8B6F47" strokeWidth="1.2" />
      <path d="M115,58 Q118,80 120,100" fill="none" stroke="#8B6F47" strokeWidth="1" />
      <path d="M120,58 Q125,85 128,110" fill="none" stroke="#8B6F47" strokeWidth="1" />
      {/* Air stone */}
      <rect x="90" y="124" width="40" height="7" rx="3.5" fill="#A8A8A0" stroke="#6B6B65" strokeWidth="1" />
      {/* Bubbles */}
      <circle cx="98" cy="115" r="2.5" fill="#3B82F6" fillOpacity="0.25" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="110" cy="108" r="3" fill="#3B82F6" fillOpacity="0.25" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="120" cy="112" r="2" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="105" cy="100" r="2" fill="#3B82F6" fillOpacity="0.15" stroke="#3B82F6" strokeWidth="0.5" />
      {/* Air pump */}
      <rect x="160" y="95" width="30" height="22" rx="4" fill="white" stroke="#6B6B65" strokeWidth="1" />
      <text x="175" y="108" textAnchor="middle" fontSize="6" fill="#4A4A45" fontWeight="bold">AIR</text>
      <text x="175" y="115" textAnchor="middle" fontSize="5" fill="#4A4A45">PUMP</text>
      <path d="M160,106 Q150,106 145,112 Q140,118 135,127" fill="none" stroke="#A8A8A0" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Label */}
      <text x="110" y="160" textAnchor="middle" fontSize="9" fill="#2D6A4F" fontWeight="bold">Roots stay submerged in oxygenated water</text>
    </svg>
  );
}

function KratkyDiagram() {
  return (
    <svg viewBox="0 0 220 170" className="w-full h-auto" aria-label="Kratky mason jar with air gap forming over time">
      {/* Jar */}
      <rect x="55" y="40" width="110" height="110" rx="6" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="2" />
      {/* Jar rim */}
      <rect x="50" y="36" width="120" height="8" rx="3" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      {/* Water - lower level */}
      <path d="M57,85 L57,148 L163,148 L163,85 Z" fill="#3B82F6" fillOpacity="0.12" />
      <path d="M57,85 Q90,90 110,85 Q130,80 163,85" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Air gap */}
      <rect x="57" y="55" width="106" height="30" fill="#FDE68A" fillOpacity="0.08" />
      <text x="110" y="73" textAnchor="middle" fontSize="9" fill="#C49A2A" fontWeight="bold">Air Gap</text>
      <path d="M57,55 L163,55" stroke="#C49A2A" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Arrow showing gap grows */}
      <path d="M170,58 L170,82" stroke="#C49A2A" strokeWidth="1" markerEnd="url(#kArrowD)" />
      <text x="185" y="72" fontSize="7" fill="#C49A2A" fontWeight="bold">grows</text>
      {/* Net pot */}
      <path d="M85,36 L80,55 L140,55 L135,36" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      <line x1="88" y1="43" x2="90" y2="50" stroke="#2D6A4F" strokeWidth="0.6" />
      <line x1="96" y1="43" x2="97" y2="50" stroke="#2D6A4F" strokeWidth="0.6" />
      <line x1="122" y1="43" x2="123" y2="50" stroke="#2D6A4F" strokeWidth="0.6" />
      <line x1="130" y1="43" x2="132" y2="50" stroke="#2D6A4F" strokeWidth="0.6" />
      {/* LECA */}
      <circle cx="100" cy="42" r="4" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      <circle cx="112" cy="40" r="4.5" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      <circle cx="124" cy="43" r="4" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="0.7" />
      {/* Plant */}
      <line x1="110" y1="34" x2="110" y2="18" stroke="#2D6A4F" strokeWidth="2" />
      <ellipse cx="98" cy="14" rx="13" ry="9" fill="#22C55E" fillOpacity="0.6" />
      <ellipse cx="122" cy="14" rx="13" ry="9" fill="#22C55E" fillOpacity="0.6" />
      <ellipse cx="110" cy="8" rx="11" ry="8" fill="#40916C" fillOpacity="0.6" />
      {/* Roots - some in air, some in water */}
      <path d="M100,55 Q96,70 94,85 Q92,100 90,120" fill="none" stroke="#8B6F47" strokeWidth="1" />
      <path d="M108,55 Q106,75 105,95 Q104,110 103,130" fill="none" stroke="#8B6F47" strokeWidth="1.2" />
      <path d="M115,55 Q117,75 118,95 Q119,110 120,125" fill="none" stroke="#8B6F47" strokeWidth="1" />
      <path d="M120,55 Q124,70 126,85 Q128,100 130,115" fill="none" stroke="#8B6F47" strokeWidth="1" />
      {/* No pump icon */}
      <circle cx="35" cy="100" r="14" fill="white" stroke="#DC2626" strokeWidth="1.5" />
      <line x1="25" y1="100" x2="45" y2="100" stroke="#DC2626" strokeWidth="2" transform="rotate(-45 35 100)" />
      <text x="35" y="104" textAnchor="middle" fontSize="8" fill="#DC2626" fontWeight="bold">No</text>
      <text x="35" y="122" textAnchor="middle" fontSize="7" fill="#DC2626">pump</text>
      {/* Label */}
      <text x="110" y="165" textAnchor="middle" fontSize="9" fill="#2D6A4F" fontWeight="bold">Zero electricity — set it and forget it</text>
      <defs>
        <marker id="kArrowD" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#C49A2A" /></marker>
      </defs>
    </svg>
  );
}

function NFTDiagram() {
  return (
    <svg viewBox="0 0 220 170" className="w-full h-auto" aria-label="NFT nutrient film channels with plants">
      {/* Channel 1 - tilted */}
      <rect x="20" y="30" width="170" height="18" rx="4" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1.5" transform="rotate(2 105 39)" />
      {/* Thin water film */}
      <rect x="22" y="42" width="166" height="4" rx="2" fill="#3B82F6" fillOpacity="0.2" transform="rotate(2 105 44)" />
      {/* Plants in channel 1 */}
      {[45, 85, 125, 165].map((x) => (
        <g key={`c1-${x}`}>
          <circle cx={x} cy={28} r="5" fill="#22C55E" fillOpacity="0.6" />
          <circle cx={x} cy={24} r="4" fill="#40916C" fillOpacity="0.6" />
          <line x1={x} y1={32} x2={x} y2={38} stroke="#2D6A4F" strokeWidth="1" />
          <path d={`M${x},40 Q${x - 3},44 ${x - 5},48`} fill="none" stroke="#8B6F47" strokeWidth="0.7" />
          <path d={`M${x},40 Q${x + 2},44 ${x + 3},48`} fill="none" stroke="#8B6F47" strokeWidth="0.7" />
        </g>
      ))}
      {/* Channel 2 */}
      <rect x="20" y="65" width="170" height="18" rx="4" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1.5" transform="rotate(2 105 74)" />
      <rect x="22" y="77" width="166" height="4" rx="2" fill="#3B82F6" fillOpacity="0.2" transform="rotate(2 105 79)" />
      {[45, 85, 125, 165].map((x) => (
        <g key={`c2-${x}`}>
          <circle cx={x} cy={63} r="5" fill="#22C55E" fillOpacity="0.6" />
          <circle cx={x} cy={59} r="4" fill="#40916C" fillOpacity="0.6" />
          <line x1={x} y1={67} x2={x} y2={73} stroke="#2D6A4F" strokeWidth="1" />
          <path d={`M${x},75 Q${x - 3},79 ${x - 5},83`} fill="none" stroke="#8B6F47" strokeWidth="0.7" />
        </g>
      ))}
      {/* Channel 3 */}
      <rect x="20" y="100" width="170" height="18" rx="4" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1.5" transform="rotate(2 105 109)" />
      <rect x="22" y="112" width="166" height="4" rx="2" fill="#3B82F6" fillOpacity="0.2" transform="rotate(2 105 114)" />
      {[45, 85, 125, 165].map((x) => (
        <g key={`c3-${x}`}>
          <circle cx={x} cy={98} r="5" fill="#22C55E" fillOpacity="0.6" />
          <circle cx={x} cy={94} r="4" fill="#40916C" fillOpacity="0.6" />
          <line x1={x} y1={102} x2={x} y2={108} stroke="#2D6A4F" strokeWidth="1" />
          <path d={`M${x},110 Q${x - 3},114 ${x - 5},118`} fill="none" stroke="#8B6F47" strokeWidth="0.7" />
        </g>
      ))}
      {/* Flow arrows */}
      <path d="M15,39 L15,110 Q15,120 25,120 L195,120 Q205,120 205,110 L205,39" fill="none" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="210" y="80" fontSize="7" fill="#3B82F6" fontWeight="bold" transform="rotate(90 210 80)">flow</text>
      {/* Pump */}
      <rect x="5" y="125" width="28" height="18" rx="4" fill="white" stroke="#3B82F6" strokeWidth="1" />
      <text x="19" y="137" textAnchor="middle" fontSize="6" fill="#3B82F6" fontWeight="bold">PUMP</text>
      {/* Count label */}
      <text x="110" y="152" textAnchor="middle" fontSize="10" fill="#2D6A4F" fontWeight="bold">36–90 plant sites</text>
      <text x="110" y="164" textAnchor="middle" fontSize="8" fill="#4A4A45">Highest density per square foot</text>
    </svg>
  );
}

function EbbFlowDiagram() {
  return (
    <svg viewBox="0 0 220 170" className="w-full h-auto" aria-label="Ebb-and-flow system with flood and drain cycle">
      {/* Grow tray */}
      <rect x="25" y="30" width="170" height="50" rx="4" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="2" />
      {/* Water flooding */}
      <rect x="27" y="55" width="166" height="23" rx="2" fill="#3B82F6" fillOpacity="0.15" />
      <path d="M27,55 Q65,50 110,55 Q155,60 193,55" fill="none" stroke="#3B82F6" strokeWidth="1" />
      {/* Lava rocks in tray */}
      {[45, 65, 85, 105, 125, 145, 165].map((x, i) => (
        <path key={`lr-${x}`} d={`M${x - 6},${50 + (i % 2) * 3} L${x - 8},${58 + (i % 2) * 2} L${x - 3},${62} L${x + 4},${59 + (i % 2) * 2} L${x + 5},${51 + (i % 2) * 3} Z`}
          fill="#8B6F47" fillOpacity="0.4" stroke="#8B6F47" strokeWidth="0.6" />
      ))}
      {/* Plants */}
      {[55, 95, 135, 175].map((x) => (
        <g key={`ep-${x}`}>
          <line x1={x} y1={48} x2={x} y2={34} stroke="#2D6A4F" strokeWidth="1.5" />
          <ellipse cx={x - 6} cy={30} rx="8" ry="6" fill="#22C55E" fillOpacity="0.6" />
          <ellipse cx={x + 6} cy={30} rx="8" ry="6" fill="#22C55E" fillOpacity="0.6" />
          <ellipse cx={x} cy={26} rx="7" ry="5" fill="#40916C" fillOpacity="0.6" />
        </g>
      ))}
      {/* Reservoir */}
      <rect x="60" y="105" width="100" height="45" rx="4" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      <rect x="62" y="125" width="96" height="23" rx="2" fill="#3B82F6" fillOpacity="0.12" />
      <text x="110" y="120" textAnchor="middle" fontSize="8" fill="#2D6A4F" fontWeight="bold">Reservoir</text>
      {/* Drain pipe */}
      <line x1="90" y1="80" x2="90" y2="105" stroke="#3B82F6" strokeWidth="2" />
      <text x="80" y="95" fontSize="7" fill="#3B82F6" fontWeight="bold" transform="rotate(-90 78 95)">drain</text>
      {/* Flood pipe */}
      <line x1="130" y1="80" x2="130" y2="105" stroke="#22C55E" strokeWidth="2" />
      <text x="138" y="95" fontSize="7" fill="#22C55E" fontWeight="bold" transform="rotate(90 140 95)">flood</text>
      {/* Timer cycle */}
      <circle cx="35" cy="130" r="16" fill="white" stroke="#C49A2A" strokeWidth="1.5" />
      <path d="M35,130 L35,118" stroke="#2D6A4F" strokeWidth="1.5" />
      <path d="M35,130 L44,126" stroke="#C49A2A" strokeWidth="1" />
      <circle cx="35" cy="130" r="2" fill="#2D6A4F" />
      <text x="35" y="155" textAnchor="middle" fontSize="7" fill="#C49A2A" fontWeight="bold">TIMER</text>
      {/* Label for lava rock */}
      <text x="175" y="92" fontSize="7" fill="#8B6F47" fontWeight="bold">Lava rock</text>
      {/* Label */}
      <text x="110" y="165" textAnchor="middle" fontSize="9" fill="#2D6A4F" fontWeight="bold">Flood \u2192 Drain \u2192 Repeat</text>
    </svg>
  );
}

function VerticalTowerDiagram() {
  return (
    <svg viewBox="0 0 220 170" className="w-full h-auto" aria-label="Vertical tower with plants growing from stacked rings">
      {/* Center column */}
      <rect x="100" y="15" width="20" height="130" rx="4" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1.5" />
      {/* Water flow down center */}
      <rect x="106" y="20" width="8" height="120" rx="3" fill="#3B82F6" fillOpacity="0.1" />
      <path d="M110,25 L110,135" stroke="#3B82F6" strokeWidth="0.8" strokeDasharray="3 3" />
      {/* Ring levels with plants */}
      {[30, 55, 80, 105].map((y, i) => (
        <g key={`ring-${y}`}>
          {/* Ring */}
          <ellipse cx="110" cy={y} rx="35" ry="8" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
          {/* Plants left */}
          <circle cx={75 - i * 2} cy={y - 8} r="7" fill="#22C55E" fillOpacity={0.5 + i * 0.05} />
          <circle cx={70 - i * 2} cy={y - 14} r="6" fill="#40916C" fillOpacity={0.5 + i * 0.05} />
          {/* Plants right */}
          <circle cx={145 + i * 2} cy={y - 8} r="7" fill="#22C55E" fillOpacity={0.5 + i * 0.05} />
          <circle cx={150 + i * 2} cy={y - 14} r="6" fill="#40916C" fillOpacity={0.5 + i * 0.05} />
          {/* Front plant */}
          <circle cx={110} cy={y - 12} r="6" fill="#22C55E" fillOpacity={0.4 + i * 0.05} />
        </g>
      ))}
      {/* Base / reservoir */}
      <rect x="80" y="130" width="60" height="20" rx="4" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      <rect x="82" y="140" width="56" height="8" rx="2" fill="#3B82F6" fillOpacity="0.12" />
      {/* Water flow arrows */}
      <path d="M110,15 L110,8" stroke="#3B82F6" strokeWidth="1.5" markerEnd="url(#vtArrowU)" />
      <text x="110" y="5" textAnchor="middle" fontSize="7" fill="#3B82F6" fontWeight="bold">drip</text>
      {/* Dimensions */}
      <line x1="50" y1="20" x2="50" y2="145" stroke="#C49A2A" strokeWidth="0.8" />
      <text x="42" y="85" fontSize="7" fill="#C49A2A" fontWeight="bold" transform="rotate(-90 42 85)">~4 ft tall</text>
      {/* Footprint */}
      <line x1="75" y1="155" x2="145" y2="155" stroke="#C49A2A" strokeWidth="0.8" />
      <text x="110" y="163" textAnchor="middle" fontSize="7" fill="#C49A2A" fontWeight="bold">~1 sq ft footprint</text>
      {/* Count */}
      <text x="185" y="60" fontSize="8" fill="#2D6A4F" fontWeight="bold">20–45</text>
      <text x="185" y="70" fontSize="7" fill="#4A4A45">plants</text>
      <defs>
        <marker id="vtArrowU" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto"><path d="M0,6 L3,0 L6,6" fill="#3B82F6" /></marker>
      </defs>
    </svg>
  );
}

const systems = [
  {
    name: "Deep Water Culture (DWC)",
    badge: "Recommended",
    badgeColor: "bg-green text-white",
    cost: "$20–$180",
    monthly: "$15–$30/mo",
    sites: "1–8 plants",
    beginner: 9,
    lava: true,
    best: "Best all-around starter system for this project.",
    diagram: <DWCDiagram />,
    highlights: ["Simple setup", "Versatile — herbs to peppers", "Easy to troubleshoot"],
  },
  {
    name: "Kratky Method (Passive)",
    badge: "Best for Elderly",
    badgeColor: "bg-coral text-white",
    cost: "$25–$75",
    monthly: "$5–$15/mo",
    sites: "6–12 plants",
    beginner: 10,
    lava: true,
    best: "Simplest possible system. Set and forget.",
    diagram: <KratkyDiagram />,
    highlights: ["Zero electricity", "No moving parts", "Mason jar friendly"],
  },
  {
    name: "NFT (Nutrient Film)",
    badge: "Best Density",
    badgeColor: "bg-blue text-white",
    cost: "$79–$300",
    monthly: "$15–$30/mo",
    sites: "36–90 plants",
    beginner: 7,
    lava: false,
    best: "Best plant density per dollar. Good for scaling to catering. Uses rockwool cubes — lava rock is too coarse for thin nutrient film.",
    diagram: <NFTDiagram />,
    highlights: ["Most plants per sq ft", "Great for leafy greens", "Commercial scalable"],
  },
  {
    name: "Ebb-and-Flow",
    badge: "Best for Lava Rock",
    badgeColor: "bg-gold text-white",
    cost: "$50–$350",
    monthly: "$15–$25/mo",
    sites: "4–24 plants",
    beginner: 7,
    lava: true,
    best: "Flooding/draining complements lava rock drainage perfectly.",
    diagram: <EbbFlowDiagram />,
    highlights: ["Best with lava rock", "Timer controlled", "Flexible media choice"],
  },
  {
    name: "Vertical Tower",
    badge: "Best Space",
    badgeColor: "bg-green-bright text-white",
    cost: "$60–$550",
    monthly: "$15–$40/mo",
    sites: "20–45 plants",
    beginner: 7,
    lava: false,
    best: "Best space efficiency — up to 12 plants per sq ft.",
    diagram: <VerticalTowerDiagram />,
    highlights: ["Tiny footprint", "Great for herbs", "Looks impressive"],
  },
];

function StarBar({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-full rounded-full ${i < rating ? "bg-green" : "bg-bg-tertiary"}`}
        />
      ))}
    </div>
  );
}

export function SystemComparison() {
  return (
    <section id="systems" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          Choose Your System
        </h2>
        <p className="mb-14 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          5 Systems Compared
        </p>

        {/* Featured: DWC and Kratky side by side */}
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          {systems.slice(0, 2).map((sys) => (
            <div key={sys.name} className="overflow-hidden rounded-2xl border border-bg-tertiary bg-bg-secondary shadow-sm">
              <div className="bg-bg-tertiary/50 p-6 flex items-center justify-center">
                <div className="w-full max-w-[300px]">{sys.diagram}</div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-green-dark">{sys.name}</h3>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${sys.badgeColor}`}>
                    {sys.badge}
                  </span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {sys.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-green-light px-3 py-1 text-xs font-medium text-green-dark">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-bg-tertiary pb-1.5">
                    <span className="text-text-muted">Setup cost</span>
                    <span className="font-bold text-green-dark">{sys.cost}</span>
                  </div>
                  <div className="flex justify-between border-b border-bg-tertiary pb-1.5">
                    <span className="text-text-muted">Monthly cost</span>
                    <span className="font-medium">{sys.monthly}</span>
                  </div>
                  <div className="flex justify-between border-b border-bg-tertiary pb-1.5">
                    <span className="text-text-muted">Plant sites</span>
                    <span className="font-medium">{sys.sites}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Beginner rating</span>
                      <span className="font-medium">{sys.beginner}/10</span>
                    </div>
                    <StarBar rating={sys.beginner} />
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-text-muted">Lava rock compatible?</span>
                    <span className="font-medium">{sys.lava ? "\u2705 Yes" : "\u274c No"}</span>
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-green-light/50 p-3 text-sm font-medium text-green-dark">
                  {sys.best}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other 3 systems */}
        <div className="grid gap-6 md:grid-cols-3">
          {systems.slice(2).map((sys) => (
            <div key={sys.name} className="overflow-hidden rounded-2xl border border-bg-tertiary bg-bg-secondary shadow-sm">
              <div className="bg-bg-tertiary/50 p-4 flex items-center justify-center">
                <div className="w-full max-w-[240px]">{sys.diagram}</div>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-green-dark leading-tight">{sys.name}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${sys.badgeColor}`}>
                    {sys.badge}
                  </span>
                </div>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {sys.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-green-light px-2.5 py-0.5 text-xs font-medium text-green-dark">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between border-b border-bg-tertiary pb-1">
                    <span className="text-text-muted">Setup</span>
                    <span className="font-bold text-green-dark">{sys.cost}</span>
                  </div>
                  <div className="flex justify-between border-b border-bg-tertiary pb-1">
                    <span className="text-text-muted">Monthly</span>
                    <span className="font-medium">{sys.monthly}</span>
                  </div>
                  <div className="flex justify-between border-b border-bg-tertiary pb-1">
                    <span className="text-text-muted">Plants</span>
                    <span className="font-medium">{sys.sites}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Beginner</span>
                      <span className="font-medium">{sys.beginner}/10</span>
                    </div>
                    <StarBar rating={sys.beginner} />
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-text-muted">Lava rock?</span>
                    <span className="font-medium">{sys.lava ? "\u2705 Yes" : "\u274c No"}</span>
                  </div>
                </div>
                <div className="mt-3 rounded-xl bg-green-light/50 p-3 text-sm font-medium text-green-dark">
                  {sys.best}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
