function SensorIcon() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-auto" aria-label="ESP32 sensor board connected to pH and temperature probes in a bucket">
      {/* Bucket */}
      <path d="M10,30 L5,80 L65,80 L60,30 Z" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1.5"/>
      <path d="M8,55 L6,78 L64,78 L62,55 Z" fill="#3B82F6" fillOpacity="0.1"/>
      <circle cx="35" cy="20" r="6" fill="#22C55E" fillOpacity="0.5"/>
      <circle cx="35" cy="15" r="5" fill="#40916C" fillOpacity="0.5"/>
      {/* Probes in water */}
      <line x1="25" y1="30" x2="25" y2="65" stroke="#E8663D" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="25" cy="67" r="3" fill="#E8663D" fillOpacity="0.5"/>
      <text x="17" y="74" fontSize="5" fill="#E8663D" fontWeight="bold">pH</text>
      <line x1="45" y1="30" x2="45" y2="60" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="45" cy="62" r="3" fill="#3B82F6" fillOpacity="0.5"/>
      <text x="39" y="70" fontSize="5" fill="#3B82F6" fontWeight="bold">EC</text>
      {/* Wires to ESP32 */}
      <path d="M25,30 Q25,20 55,18 Q75,16 80,25" fill="none" stroke="#E8663D" strokeWidth="1" strokeDasharray="3 2"/>
      <path d="M45,30 Q50,22 70,20 Q80,19 85,25" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 2"/>
      {/* ESP32 board */}
      <rect x="75" y="22" width="55" height="32" rx="4" fill="#1A1A1A" stroke="#4A4A45" strokeWidth="1.5"/>
      <rect x="80" y="27" width="20" height="10" rx="2" fill="#2D6A4F" fillOpacity="0.4"/>
      <text x="90" y="35" textAnchor="middle" fontSize="5" fill="#22C55E" fontWeight="bold">ESP32</text>
      {/* LED indicators */}
      <circle cx="105" y="0" cy="30" r="2" fill="#22C55E"/>
      <circle cx="110" cy="30" r="2" fill="#3B82F6"/>
      <circle cx="115" cy="30" r="2" fill="#E8663D"/>
      {/* WiFi signal */}
      <path d="M120,22 Q124,18 128,22" fill="none" stroke="#C49A2A" strokeWidth="1"/>
      <path d="M118,18 Q124,12 130,18" fill="none" stroke="#C49A2A" strokeWidth="1"/>
      <path d="M116,14 Q124,6 132,14" fill="none" stroke="#C49A2A" strokeWidth="1"/>
      {/* Temp probe */}
      <rect x="82" y="42" width="8" height="10" rx="2" fill="white" stroke="#C49A2A" strokeWidth="1"/>
      <text x="86" y="50" textAnchor="middle" fontSize="4" fill="#C49A2A" fontWeight="bold">T</text>
      <path d="M86,52 Q86,58 75,62 Q65,66 55,72" fill="none" stroke="#C49A2A" strokeWidth="1" strokeDasharray="3 2"/>
      {/* Arrow to cloud */}
      <text x="105" y="68" textAnchor="middle" fontSize="6" fill="#2D6A4F" fontWeight="bold">pH 5.9 | EC 1.4 | 72°F</text>
      <text x="105" y="80" textAnchor="middle" fontSize="6" fill="#C49A2A" fontWeight="bold">Sends data every 5 min</text>
    </svg>
  );
}

function AIBrainIcon() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-auto" aria-label="Claude AI analyzing sensor data and making nutrient decisions">
      {/* Phone/dashboard */}
      <rect x="8" y="8" width="50" height="75" rx="6" fill="white" stroke="#2D6A4F" strokeWidth="1.5"/>
      <rect x="12" y="16" width="42" height="52" rx="2" fill="#F0EDE6"/>
      {/* Dashboard bars */}
      <rect x="16" y="50" width="8" height="14" rx="1" fill="#22C55E" fillOpacity="0.5"/>
      <rect x="26" y="44" width="8" height="20" rx="1" fill="#3B82F6" fillOpacity="0.5"/>
      <rect x="36" y="38" width="8" height="26" rx="1" fill="#C49A2A" fillOpacity="0.5"/>
      {/* pH readout */}
      <text x="33" y="28" textAnchor="middle" fontSize="5" fill="#22C55E" fontWeight="bold">pH 5.9</text>
      <text x="33" y="36" textAnchor="middle" fontSize="4" fill="#4A4A45">All Good</text>
      {/* Notification dot */}
      <circle cx="52" cy="14" r="4" fill="#22C55E"/>
      {/* Arrow from phone to AI */}
      <path d="M58,45 L70,45" stroke="#C49A2A" strokeWidth="1.5" markerEnd="url(#aiArrow)"/>
      {/* AI brain */}
      <circle cx="95" cy="40" r="28" fill="#2D6A4F" fillOpacity="0.08" stroke="#2D6A4F" strokeWidth="1.5"/>
      <text x="95" y="32" textAnchor="middle" fontSize="6" fill="#2D6A4F" fontWeight="bold">Claude</text>
      <text x="95" y="40" textAnchor="middle" fontSize="6" fill="#2D6A4F" fontWeight="bold">API</text>
      {/* Neural connections */}
      <circle cx="78" cy="30" r="3" fill="#22C55E" fillOpacity="0.3" stroke="#22C55E" strokeWidth="0.8"/>
      <circle cx="112" cy="30" r="3" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="0.8"/>
      <circle cx="78" cy="50" r="3" fill="#E8663D" fillOpacity="0.3" stroke="#E8663D" strokeWidth="0.8"/>
      <circle cx="112" cy="50" r="3" fill="#C49A2A" fillOpacity="0.3" stroke="#C49A2A" strokeWidth="0.8"/>
      <line x1="81" y1="30" x2="109" y2="30" stroke="#22C55E" strokeWidth="0.5" strokeDasharray="2 2"/>
      <line x1="81" y1="50" x2="109" y2="50" stroke="#E8663D" strokeWidth="0.5" strokeDasharray="2 2"/>
      <line x1="81" y1="30" x2="109" y2="50" stroke="#C49A2A" strokeWidth="0.3"/>
      <line x1="81" y1="50" x2="109" y2="30" stroke="#3B82F6" strokeWidth="0.3"/>
      {/* Decision output */}
      <text x="95" y="52" textAnchor="middle" fontSize="4.5" fill="#4A4A45">Decides nutrients</text>
      {/* Arrow out */}
      <path d="M95,68 L95,78" stroke="#22C55E" strokeWidth="1.5" markerEnd="url(#aiArrow2)"/>
      <text x="95" y="88" textAnchor="middle" fontSize="6" fill="#22C55E" fontWeight="bold">Add 2mL FloraGro</text>
      <defs>
        <marker id="aiArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#C49A2A"/></marker>
        <marker id="aiArrow2" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#22C55E"/></marker>
      </defs>
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-auto" aria-label="3D printer making custom hydroponic parts">
      {/* Printer frame */}
      <rect x="20" y="10" width="70" height="65" rx="4" fill="white" stroke="#2D6A4F" strokeWidth="1.5"/>
      <rect x="20" y="10" width="70" height="12" rx="2" fill="#2D6A4F" fillOpacity="0.1"/>
      <text x="55" y="19" textAnchor="middle" fontSize="6" fill="#2D6A4F" fontWeight="bold">3D PRINTER</text>
      {/* Print head */}
      <rect x="40" y="28" width="16" height="8" rx="2" fill="#4A4A45"/>
      {/* Nozzle */}
      <line x1="48" y1="36" x2="48" y2="42" stroke="#E8663D" strokeWidth="1.5"/>
      {/* Part being printed */}
      <path d="M32,55 L32,42 L64,42 L64,55" fill="#22C55E" fillOpacity="0.3" stroke="#22C55E" strokeWidth="1.5"/>
      <text x="48" y="52" textAnchor="middle" fontSize="5" fill="#22C55E" fontWeight="bold">NFT Channel</text>
      {/* Print bed */}
      <rect x="25" y="55" width="60" height="4" rx="1" fill="#F0EDE6" stroke="#4A4A45" strokeWidth="1"/>
      {/* Printed parts examples */}
      <rect x="100" y="15" width="30" height="18" rx="3" fill="#F0EDE6" stroke="#22C55E" strokeWidth="1"/>
      <text x="115" y="26" textAnchor="middle" fontSize="4.5" fill="#22C55E" fontWeight="bold">Net Pot</text>
      <rect x="100" y="38" width="30" height="18" rx="3" fill="#F0EDE6" stroke="#3B82F6" strokeWidth="1"/>
      <text x="115" y="49" textAnchor="middle" fontSize="4.5" fill="#3B82F6" fontWeight="bold">Sensor</text>
      <text x="115" y="54" textAnchor="middle" fontSize="4" fill="#3B82F6">Mount</text>
      <rect x="100" y="61" width="30" height="18" rx="3" fill="#F0EDE6" stroke="#C49A2A" strokeWidth="1"/>
      <text x="115" y="72" textAnchor="middle" fontSize="4.5" fill="#C49A2A" fontWeight="bold">Drip Tray</text>
      {/* Material label */}
      <text x="70" y="82" textAnchor="middle" fontSize="6" fill="#4A4A45" fontWeight="bold">Food-safe PETG plastic</text>
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-auto" aria-label="Camera scanning a plant leaf for disease detection">
      {/* Camera */}
      <rect x="8" y="15" width="35" height="25" rx="4" fill="#1A1A1A" stroke="#4A4A45" strokeWidth="1.5"/>
      <circle cx="25" cy="27" r="8" fill="#2D6A4F" fillOpacity="0.3" stroke="#4A4A45" strokeWidth="1.5"/>
      <circle cx="25" cy="27" r="4" fill="#3B82F6" fillOpacity="0.5"/>
      {/* Scan beam */}
      <path d="M43,27 L60,18 L60,40 Z" fill="#3B82F6" fillOpacity="0.08" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3 2"/>
      {/* Leaf being scanned */}
      <ellipse cx="75" cy="28" rx="16" ry="20" fill="#22C55E" fillOpacity="0.4" stroke="#2D6A4F" strokeWidth="1.5"/>
      <path d="M75,10 L75,46" stroke="#2D6A4F" strokeWidth="0.8"/>
      <path d="M66,20 L75,28 L84,20" fill="none" stroke="#2D6A4F" strokeWidth="0.5"/>
      {/* Spots on leaf */}
      <circle cx="70" cy="22" r="2.5" fill="#C49A2A" fillOpacity="0.6"/>
      <circle cx="80" cy="32" r="2" fill="#C49A2A" fillOpacity="0.6"/>
      {/* Analysis result */}
      <rect x="98" y="10" width="38" height="40" rx="4" fill="white" stroke="#2D6A4F" strokeWidth="1"/>
      <text x="117" y="22" textAnchor="middle" fontSize="5" fill="#C49A2A" fontWeight="bold">Calcium</text>
      <text x="117" y="30" textAnchor="middle" fontSize="5" fill="#C49A2A" fontWeight="bold">Deficiency</text>
      <rect x="102" y="34" width="30" height="10" rx="2" fill="#D8F3DC"/>
      <text x="117" y="42" textAnchor="middle" fontSize="5" fill="#22C55E" fontWeight="bold">Fix: +CaMg</text>
      {/* Community dashboard */}
      <rect x="8" y="55" width="126" height="25" rx="4" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1"/>
      <text x="71" y="66" textAnchor="middle" fontSize="5" fill="#2D6A4F" fontWeight="bold">Community Dashboard — 12 growers connected</text>
      {[20,35,50,65,80,95,110,125].map((x, i) => (
        <rect key={x} x={x-4} y={70} width={8} height={3+i*0.5} rx={1} fill="#22C55E" fillOpacity={0.3+i*0.05}/>
      ))}
    </svg>
  );
}

const phases = [
  {
    phase: "Level 1",
    title: "Sensors + Monitoring",
    when: "After your first harvest",
    cost: "$30–$60 hardware",
    desc: "Add ESP32 microcontroller with pH, EC, and temperature probes. Sends readings to your phone every 5 minutes via WiFi. Know your water stats without walking to the bucket.",
    diagram: <SensorIcon />,
    border: "border-l-green",
  },
  {
    phase: "Level 2",
    title: "AI Nutrient Decisions",
    when: "Month 4+",
    cost: "$5–$10/mo API",
    desc: "Claude API analyzes your sensor data and tells you exactly what to add. n8n automation connects sensors to AI to notifications. No more guessing on nutrients.",
    diagram: <AIBrainIcon />,
    border: "border-l-blue",
  },
  {
    phase: "Level 3",
    title: "Custom 3D-Printed Parts",
    when: "When scaling up",
    cost: "$200–$400 printer",
    desc: "Print custom NFT channels, net pots, sensor mounts, and drip trays in food-safe PETG. Designed to fit your exact room dimensions — no wasted space.",
    diagram: <PrinterIcon />,
    border: "border-l-coral",
  },
  {
    phase: "Level 4",
    title: "Camera + Disease Detection",
    when: "Year 2+",
    cost: "$15–$30 camera",
    desc: "Camera with computer vision scans leaves daily. CNN model identifies nutrient deficiencies and disease before you can see them. Community dashboard connects all growers.",
    diagram: <CameraIcon />,
    border: "border-l-gold",
  },
];

export function AIUpgradePath() {
  return (
    <section id="ai" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          What Makes This Different
        </h2>
        <p className="mb-4 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          AI-Powered Growing
        </p>
        <p className="mb-14 text-center text-lg text-text-secondary max-w-2xl mx-auto">
          Start simple with buckets. Level up with sensors, AI, and 3D printing when you are ready. Each level is optional — grow at your own pace.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`overflow-hidden rounded-2xl border border-bg-tertiary border-l-4 ${p.border} bg-bg-secondary shadow-sm`}
            >
              <div className="bg-bg-tertiary/50 p-5 flex items-center justify-center">
                <div className="w-full max-w-[280px]">{p.diagram}</div>
              </div>
              <div className="p-5">
                <p className="mb-1 text-sm font-bold tracking-widest text-text-muted uppercase">
                  {p.phase} — {p.when}
                </p>
                <h3 className="mb-2 text-xl font-bold text-green-dark">{p.title}</h3>
                <p className="mb-3 text-base leading-relaxed text-text-secondary">{p.desc}</p>
                <div className="rounded-xl bg-bg-tertiary px-4 py-2 text-sm">
                  <span className="font-bold text-green-dark">Cost: </span>
                  <span className="text-text-secondary">{p.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
