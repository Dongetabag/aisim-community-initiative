function SpaceIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-auto" aria-label="Room corner with outlet and thermometer">
      {/* Floor */}
      <rect x="20" y="110" width="160" height="8" rx="2" fill="#D8F3DC" />
      {/* Walls */}
      <line x1="20" y1="30" x2="20" y2="118" stroke="#2D6A4F" strokeWidth="3" />
      <line x1="20" y1="118" x2="180" y2="118" stroke="#2D6A4F" strokeWidth="3" />
      {/* Outlet */}
      <rect x="30" y="70" width="16" height="22" rx="3" fill="white" stroke="#4A4A45" strokeWidth="1.5" />
      <circle cx="35" cy="78" r="2" fill="#4A4A45" />
      <circle cx="41" cy="78" r="2" fill="#4A4A45" />
      <rect x="36" y="84" width="4" height="4" rx="1" fill="#4A4A45" />
      {/* Dimension arrows */}
      <line x1="60" y1="115" x2="140" y2="115" stroke="#C49A2A" strokeWidth="1.5" markerEnd="url(#arrowR)" markerStart="url(#arrowL)" />
      <text x="100" y="112" textAnchor="middle" fontSize="10" fill="#C49A2A" fontWeight="bold">4 ft</text>
      <line x1="155" y1="50" x2="155" y2="110" stroke="#C49A2A" strokeWidth="1.5" markerEnd="url(#arrowD)" markerStart="url(#arrowU)" />
      <text x="165" y="83" fontSize="10" fill="#C49A2A" fontWeight="bold">2 ft</text>
      {/* Thermometer */}
      <rect x="130" y="35" width="8" height="30" rx="4" fill="white" stroke="#E8663D" strokeWidth="1.5" />
      <circle cx="134" cy="60" r="6" fill="#E8663D" />
      <rect x="132" y="42" width="4" height="16" rx="2" fill="#E8663D" />
      <text x="134" y="75" textAnchor="middle" fontSize="9" fill="#E8663D" fontWeight="bold">65-80°F</text>
      {/* Area highlight */}
      <rect x="55" y="50" width="80" height="60" rx="4" fill="#2D6A4F" fillOpacity="0.08" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="4 3" />
      <defs>
        <marker id="arrowR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#C49A2A" /></marker>
        <marker id="arrowL" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto"><path d="M6,0 L0,3 L6,6" fill="#C49A2A" /></marker>
        <marker id="arrowD" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#C49A2A" /></marker>
        <marker id="arrowU" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto"><path d="M0,6 L3,0 L6,6" fill="#C49A2A" /></marker>
      </defs>
    </svg>
  );
}

function BucketIcon() {
  return (
    <svg viewBox="0 0 200 180" className="w-full h-auto" aria-label="DWC bucket cross-section showing net pot, roots, air stone, and water">
      {/* Bucket */}
      <path d="M40,40 L30,150 L170,150 L160,40 Z" fill="#1A1A1A" fillOpacity="0.08" stroke="#2D6A4F" strokeWidth="2" />
      {/* Water */}
      <path d="M35,80 L32,148 L168,148 L165,80 Z" fill="#3B82F6" fillOpacity="0.15" />
      <path d="M35,80 Q65,86 100,80 Q135,74 165,80" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Lid */}
      <rect x="35" y="36" width="130" height="6" rx="2" fill="#4A4A45" />
      {/* Net pot */}
      <path d="M80,36 L75,65 L125,65 L120,36" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      {/* Net pot holes */}
      <line x1="82" y1="50" x2="86" y2="58" stroke="#2D6A4F" strokeWidth="0.8" />
      <line x1="90" y1="50" x2="92" y2="58" stroke="#2D6A4F" strokeWidth="0.8" />
      <line x1="108" y1="50" x2="110" y2="58" stroke="#2D6A4F" strokeWidth="0.8" />
      <line x1="116" y1="50" x2="118" y2="58" stroke="#2D6A4F" strokeWidth="0.8" />
      {/* LECA pebbles */}
      <circle cx="88" cy="48" r="4" fill="#C49A2A" fillOpacity="0.6" stroke="#C49A2A" strokeWidth="0.8" />
      <circle cx="100" cy="45" r="5" fill="#C49A2A" fillOpacity="0.6" stroke="#C49A2A" strokeWidth="0.8" />
      <circle cx="112" cy="48" r="4" fill="#C49A2A" fillOpacity="0.6" stroke="#C49A2A" strokeWidth="0.8" />
      <circle cx="95" cy="55" r="3.5" fill="#C49A2A" fillOpacity="0.6" stroke="#C49A2A" strokeWidth="0.8" />
      <circle cx="106" cy="54" r="3.5" fill="#C49A2A" fillOpacity="0.6" stroke="#C49A2A" strokeWidth="0.8" />
      {/* Plant */}
      <line x1="100" y1="38" x2="100" y2="22" stroke="#2D6A4F" strokeWidth="2" />
      <ellipse cx="90" cy="18" rx="12" ry="8" fill="#22C55E" fillOpacity="0.7" />
      <ellipse cx="110" cy="18" rx="12" ry="8" fill="#22C55E" fillOpacity="0.7" />
      <ellipse cx="100" cy="12" rx="10" ry="7" fill="#40916C" fillOpacity="0.7" />
      {/* Roots */}
      <path d="M90,65 Q85,90 82,115" fill="none" stroke="#8B6F47" strokeWidth="1.2" />
      <path d="M95,65 Q92,85 88,105" fill="none" stroke="#8B6F47" strokeWidth="1" />
      <path d="M100,65 Q100,90 100,120" fill="none" stroke="#8B6F47" strokeWidth="1.2" />
      <path d="M105,65 Q108,85 112,105" fill="none" stroke="#8B6F47" strokeWidth="1" />
      <path d="M110,65 Q115,90 118,115" fill="none" stroke="#8B6F47" strokeWidth="1.2" />
      {/* Air stone */}
      <rect x="85" y="132" width="30" height="8" rx="4" fill="#A8A8A0" stroke="#6B6B65" strokeWidth="1" />
      {/* Bubbles */}
      <circle cx="92" cy="122" r="2.5" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="100" cy="116" r="3" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="107" cy="120" r="2" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="96" cy="108" r="2" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="104" cy="105" r="2.5" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="0.5" />
      {/* Air tube */}
      <path d="M115,136 Q140,136 145,130 Q150,124 155,124" fill="none" stroke="#A8A8A0" strokeWidth="2" strokeDasharray="3 2" />
      {/* Labels */}
      <text x="172" y="84" fontSize="8" fill="#3B82F6" fontWeight="bold">Water</text>
      <text x="172" y="138" fontSize="8" fill="#6B6B65" fontWeight="bold">Air stone</text>
      <text x="128" y="52" fontSize="8" fill="#C49A2A" fontWeight="bold">LECA</text>
      <text x="128" y="100" fontSize="8" fill="#8B6F47" fontWeight="bold">Roots</text>
      <text x="158" y="124" fontSize="8" fill="#A8A8A0" fontWeight="bold">Air pump</text>
    </svg>
  );
}

function MediaIcon() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto" aria-label="LECA clay pebbles vs lava rocks comparison">
      {/* LECA side */}
      <text x="55" y="16" textAnchor="middle" fontSize="11" fill="#2D6A4F" fontWeight="bold">LECA</text>
      <rect x="15" y="22" width="80" height="80" rx="10" fill="#FDE68A" fillOpacity="0.3" stroke="#C49A2A" strokeWidth="1.5" />
      {/* LECA pebbles - smooth round */}
      <circle cx="38" cy="45" r="9" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="1" />
      <circle cx="60" cy="42" r="10" fill="#C49A2A" fillOpacity="0.4" stroke="#C49A2A" strokeWidth="1" />
      <circle cx="75" cy="55" r="8" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="1" />
      <circle cx="45" cy="62" r="8" fill="#C49A2A" fillOpacity="0.45" stroke="#C49A2A" strokeWidth="1" />
      <circle cx="30" cy="75" r="9" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="1" />
      <circle cx="62" cy="72" r="10" fill="#C49A2A" fillOpacity="0.4" stroke="#C49A2A" strokeWidth="1" />
      <circle cx="80" cy="82" r="7" fill="#C49A2A" fillOpacity="0.5" stroke="#C49A2A" strokeWidth="1" />
      <text x="55" y="115" textAnchor="middle" fontSize="9" fill="#22C55E" fontWeight="bold">Recommended</text>
      <text x="55" y="127" textAnchor="middle" fontSize="8" fill="#4A4A45">Smooth, lightweight</text>

      {/* VS */}
      <text x="100" y="68" textAnchor="middle" fontSize="12" fill="#8A8A82" fontWeight="bold">vs</text>

      {/* Lava rock side */}
      <text x="145" y="16" textAnchor="middle" fontSize="11" fill="#2D6A4F" fontWeight="bold">Lava Rock</text>
      <rect x="105" y="22" width="80" height="80" rx="10" fill="#E8663D" fillOpacity="0.1" stroke="#E8663D" strokeWidth="1.5" />
      {/* Lava rocks - jagged irregular */}
      <path d="M125,40 L118,48 L122,55 L132,52 L136,42 Z" fill="#8B6F47" fillOpacity="0.5" stroke="#8B6F47" strokeWidth="0.8" />
      <path d="M140,38 L135,44 L138,52 L148,50 L152,40 L146,36 Z" fill="#8B6F47" fillOpacity="0.45" stroke="#8B6F47" strokeWidth="0.8" />
      <path d="M115,56 L110,64 L116,70 L124,66 L122,58 Z" fill="#8B6F47" fillOpacity="0.5" stroke="#8B6F47" strokeWidth="0.8" />
      <path d="M130,58 L126,66 L132,74 L140,70 L138,60 Z" fill="#8B6F47" fillOpacity="0.45" stroke="#8B6F47" strokeWidth="0.8" />
      <path d="M148,55 L144,62 L150,68 L158,64 L156,56 Z" fill="#8B6F47" fillOpacity="0.5" stroke="#8B6F47" strokeWidth="0.8" />
      <path d="M120,74 L116,82 L124,88 L132,84 L128,76 Z" fill="#8B6F47" fillOpacity="0.45" stroke="#8B6F47" strokeWidth="0.8" />
      <path d="M138,74 L134,82 L142,90 L150,85 L148,76 Z" fill="#8B6F47" fillOpacity="0.5" stroke="#8B6F47" strokeWidth="0.8" />
      <text x="145" y="115" textAnchor="middle" fontSize="9" fill="#E8663D" fontWeight="bold">Budget option</text>
      <text x="145" y="127" textAnchor="middle" fontSize="8" fill="#4A4A45">Cheap, heavy, sharp</text>
    </svg>
  );
}

function LightIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-auto" aria-label="LED grow light hanging above plants with timer">
      {/* Ceiling mount */}
      <line x1="60" y1="10" x2="60" y2="30" stroke="#A8A8A0" strokeWidth="1.5" />
      <line x1="140" y1="10" x2="140" y2="30" stroke="#A8A8A0" strokeWidth="1.5" />
      {/* Light panel */}
      <rect x="40" y="30" width="120" height="14" rx="3" fill="#1A1A1A" stroke="#4A4A45" strokeWidth="1.5" />
      {/* LED dots */}
      {[52,64,76,88,100,112,124,136,148].map((x) => (
        <circle key={x} cx={x} cy="37" r="2.5" fill="#FDE68A" />
      ))}
      {/* Light rays */}
      <path d="M50,44 L30,100" stroke="#FDE68A" strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M80,44 L65,100" stroke="#FDE68A" strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M100,44 L100,100" stroke="#FDE68A" strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M120,44 L135,100" stroke="#FDE68A" strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M150,44 L170,100" stroke="#FDE68A" strokeWidth="0.8" strokeDasharray="3 3" />
      {/* Light cone gradient */}
      <path d="M40,44 L20,105 L180,105 L160,44 Z" fill="#FDE68A" fillOpacity="0.06" />
      {/* Plants below */}
      <ellipse cx="60" cy="112" rx="14" ry="10" fill="#22C55E" fillOpacity="0.5" />
      <ellipse cx="100" cy="110" rx="16" ry="12" fill="#22C55E" fillOpacity="0.6" />
      <ellipse cx="140" cy="112" rx="14" ry="10" fill="#22C55E" fillOpacity="0.5" />
      {/* Height indicator */}
      <line x1="175" y1="44" x2="175" y2="105" stroke="#C49A2A" strokeWidth="1" markerEnd="url(#arrowD2)" markerStart="url(#arrowU2)" />
      <text x="183" y="78" fontSize="8" fill="#C49A2A" fontWeight="bold">18-24&quot;</text>
      {/* Timer */}
      <rect x="10" y="120" width="50" height="30" rx="4" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      <text x="35" y="133" textAnchor="middle" fontSize="7" fill="#2D6A4F" fontWeight="bold">TIMER</text>
      <text x="35" y="144" textAnchor="middle" fontSize="9" fill="#22C55E" fontWeight="bold">16h ON</text>
      <text x="120" y="140" fontSize="9" fill="#E8663D" fontWeight="bold">8h OFF</text>
      <defs>
        <marker id="arrowD2" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#C49A2A" /></marker>
        <marker id="arrowU2" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto"><path d="M0,6 L3,0 L6,6" fill="#C49A2A" /></marker>
      </defs>
    </svg>
  );
}

function NutrientsIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-auto" aria-label="Three nutrient bottles in mixing order with pH meter">
      {/* Bottle 1 - Micro */}
      <rect x="20" y="40" width="30" height="70" rx="4" fill="#E8663D" fillOpacity="0.2" stroke="#E8663D" strokeWidth="1.5" />
      <rect x="28" y="30" width="14" height="12" rx="2" fill="#E8663D" fillOpacity="0.3" stroke="#E8663D" strokeWidth="1" />
      <text x="35" y="70" textAnchor="middle" fontSize="7" fill="#E8663D" fontWeight="bold">MICRO</text>
      <text x="35" y="82" textAnchor="middle" fontSize="7" fill="#4A4A45">2.5mL</text>
      <circle cx="35" cy="25" r="10" fill="#22C55E" stroke="#22C55E" strokeWidth="1.5" />
      <text x="35" y="29" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">1</text>

      {/* Arrow 1 */}
      <path d="M55,75 L65,75" stroke="#C49A2A" strokeWidth="2" markerEnd="url(#arrowR2)" />

      {/* Bottle 2 - Gro */}
      <rect x="70" y="40" width="30" height="70" rx="4" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="1.5" />
      <rect x="78" y="30" width="14" height="12" rx="2" fill="#22C55E" fillOpacity="0.3" stroke="#22C55E" strokeWidth="1" />
      <text x="85" y="70" textAnchor="middle" fontSize="7" fill="#22C55E" fontWeight="bold">GRO</text>
      <text x="85" y="82" textAnchor="middle" fontSize="7" fill="#4A4A45">2.5mL</text>
      <circle cx="85" cy="25" r="10" fill="#22C55E" stroke="#22C55E" strokeWidth="1.5" />
      <text x="85" y="29" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">2</text>

      {/* Arrow 2 */}
      <path d="M105,75 L115,75" stroke="#C49A2A" strokeWidth="2" markerEnd="url(#arrowR2)" />

      {/* Bottle 3 - Bloom */}
      <rect x="120" y="40" width="30" height="70" rx="4" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="128" y="30" width="14" height="12" rx="2" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="1" />
      <text x="135" y="70" textAnchor="middle" fontSize="7" fill="#3B82F6" fontWeight="bold">BLOOM</text>
      <text x="135" y="82" textAnchor="middle" fontSize="7" fill="#4A4A45">2.5mL</text>
      <circle cx="135" cy="25" r="10" fill="#22C55E" stroke="#22C55E" strokeWidth="1.5" />
      <text x="135" y="29" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">3</text>

      {/* pH meter */}
      <rect x="162" y="35" width="12" height="55" rx="3" fill="white" stroke="#2D6A4F" strokeWidth="1.5" />
      <rect x="164" y="42" width="8" height="14" rx="1" fill="#D8F3DC" />
      <text x="168" y="53" textAnchor="middle" fontSize="7" fill="#22C55E" fontWeight="bold">5.9</text>
      <line x1="168" y1="90" x2="168" y2="105" stroke="#A8A8A0" strokeWidth="1.5" />
      <circle cx="168" cy="108" r="3" fill="#E8663D" fillOpacity="0.5" />

      {/* pH scale */}
      <rect x="20" y="125" width="160" height="16" rx="4" fill="#F0EDE6" stroke="#E0DDD6" strokeWidth="1" />
      <rect x="75" y="125" width="55" height="16" rx="0" fill="#22C55E" fillOpacity="0.2" />
      <text x="28" y="137" fontSize="7" fill="#DC2626">4.0</text>
      <text x="60" y="137" fontSize="7" fill="#E8663D">5.0</text>
      <text x="88" y="137" fontSize="8" fill="#22C55E" fontWeight="bold">5.5-6.5</text>
      <text x="135" y="137" fontSize="7" fill="#3B82F6">7.0</text>
      <text x="163" y="137" fontSize="7" fill="#6B6B65">8.0</text>
      <text x="100" y="155" textAnchor="middle" fontSize="9" fill="#22C55E" fontWeight="bold">pH Sweet Spot</text>

      <defs>
        <marker id="arrowR2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#C49A2A" /></marker>
      </defs>
    </svg>
  );
}

const steps = [
  {
    num: "01",
    title: "Pick a spot in your home",
    desc: "A small corner — just 2×4 feet. Spare room, basement, or large closet. Needs an electrical outlet and temps between 65–80°F.",
    icon: <SpaceIcon />,
    tip: "Basements work great — naturally cool and dark",
  },
  {
    num: "02",
    title: "Get your DWC bucket system",
    desc: "Deep Water Culture: 5-gallon bucket, net pot lid, air pump, and air stone. Roots dangle in oxygenated nutrient water. ~$25 per bucket.",
    icon: <BucketIcon />,
    tip: "Start with 4 buckets — enough for herbs and greens",
  },
  {
    num: "03",
    title: "Choose your growing media",
    desc: "LECA clay pebbles (recommended) or lava rocks fill the net pots and hold plants upright. Both are reusable.",
    icon: <MediaIcon />,
    tip: "LECA is gentler on roots. Lava rock is cheaper but rinse well",
  },
  {
    num: "04",
    title: "Set up your grow light",
    desc: "Spider Farmer SF2000 covers your 2×4 ft area. Hang 18–24 inches above plants. Timer: 16 hours on, 8 hours off.",
    icon: <LightIcon />,
    tip: "LED lights run cool and use less electricity than older types",
  },
  {
    num: "05",
    title: "Mix nutrients & plant",
    desc: "Flora Series 3-part: Micro first, then Gro, then Bloom (2.5mL each per gallon). Test pH weekly — keep it 5.5–6.5.",
    icon: <NutrientsIcon />,
    tip: "Always add Micro first — order matters for nutrient stability",
  },
];

export function GettingStarted() {
  return (
    <section id="start" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          Getting Started
        </h2>
        <p className="mb-14 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          5 Easy Steps
        </p>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`overflow-hidden rounded-2xl border border-bg-tertiary bg-bg-secondary shadow-sm md:grid md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Visual */}
              <div className={`bg-bg-tertiary/50 p-6 md:p-8 flex items-center justify-center ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}>
                <div className="w-full max-w-[280px]">
                  {step.icon}
                </div>
              </div>
              {/* Content */}
              <div className={`p-6 md:p-8 ${i % 2 === 1 ? "md:order-1" : ""}`} style={{ direction: "ltr" }}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-lg font-black text-white">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-green-dark md:text-2xl">{step.title}</h3>
                </div>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                  {step.desc}
                </p>
                <div className="rounded-xl bg-green-light/50 px-4 py-3 text-sm">
                  <span className="font-bold text-green-dark">Tip: </span>
                  <span className="text-text-secondary">{step.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
