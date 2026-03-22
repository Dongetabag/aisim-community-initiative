const roi = [
  { crop: "Thyme", emoji: "🌱", grocery: 12.00, hydro: 3.00, savings: 75, breakeven: "4 mo" },
  { crop: "Scotch Bonnet", emoji: "🌶️", grocery: 11.50, hydro: 3.00, savings: 0, breakeven: "8 mo", note: "Rarely available" },
  { crop: "Culantro", emoji: "🌿", grocery: 15.00, hydro: 4.00, savings: 73, breakeven: "6 mo" },
  { crop: "Basil", emoji: "🌿", grocery: 9.00, hydro: 3.00, savings: 67, breakeven: "4 mo" },
  { crop: "Callaloo", emoji: "🥬", grocery: 11.50, hydro: 4.00, savings: 65, breakeven: "5 mo", note: "60-mi trip to Hartford" },
  { crop: "Green Onions", emoji: "🧅", grocery: 3.00, hydro: 1.10, savings: 63, breakeven: "5 mo" },
  { crop: "Lettuce", emoji: "🥗", grocery: 3.25, hydro: 2.80, savings: 14, breakeven: "18 mo", note: "Learning crop" },
];

function SavingsBar({ grocery, hydro, maxPrice }: { grocery: number; hydro: number; maxPrice: number }) {
  const groceryWidth = (grocery / maxPrice) * 100;
  const hydroWidth = (hydro / maxPrice) * 100;
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className="w-14 text-xs text-text-muted shrink-0">Store</span>
        <div className="flex-1 h-5 bg-bg-tertiary rounded-full overflow-hidden">
          <div className="h-full bg-red/20 rounded-full flex items-center px-2" style={{ width: `${groceryWidth}%` }}>
            <span className="text-xs font-bold text-red">${grocery.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-14 text-xs text-text-muted shrink-0">Hydro</span>
        <div className="flex-1 h-5 bg-bg-tertiary rounded-full overflow-hidden">
          <div className="h-full bg-green/20 rounded-full flex items-center px-2" style={{ width: `${hydroWidth}%` }}>
            <span className="text-xs font-bold text-green">${hydro.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ROISection() {
  const maxPrice = 16;
  return (
    <section id="roi" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          Your Savings
        </h2>
        <p className="mb-4 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          Grocery vs Hydro
        </p>
        <p className="mb-12 text-center text-lg text-text-secondary">
          How much you save per pound by growing at home
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roi.map((row) => (
            <div key={row.crop} className="rounded-2xl border border-bg-tertiary bg-bg-secondary p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{row.emoji}</span>
                  <h3 className="text-lg font-bold text-green-dark">{row.crop}</h3>
                </div>
                {row.note === "Rarely available" ? (
                  <span className="rounded-full bg-coral/15 px-3 py-1 text-sm font-bold text-coral">
                    Rarely available
                  </span>
                ) : (
                  <span className="rounded-full bg-green-light px-3 py-1 text-sm font-bold text-green-dark">
                    Save {row.savings}%
                  </span>
                )}
              </div>
              <SavingsBar grocery={row.grocery} hydro={row.hydro} maxPrice={maxPrice} />
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-text-muted">Pays for itself in</span>
                <span className="font-bold text-coral">{row.breakeven}</span>
              </div>
              {row.note === "Learning crop" && (
                <div className="mt-2 rounded-lg bg-gold-light px-3 py-1.5 text-xs font-medium text-gold-dark text-center">
                  Learning crop — grow for experience, not savings
                </div>
              )}
              {row.note === "60-mi trip to Hartford" && (
                <div className="mt-2 rounded-lg bg-coral/10 px-3 py-1.5 text-xs font-medium text-coral text-center">
                  Nearest source: Hartford (60-mi round trip)
                </div>
              )}
            </div>
          ))}

          {/* Summary card */}
          <div className="rounded-2xl border-2 border-green bg-green-light/30 p-5 flex flex-col items-center justify-center text-center">
            <svg viewBox="0 0 80 80" className="w-20 h-20 mb-3" aria-label="Dollar sign with downward arrow showing savings">
              <circle cx="40" cy="40" r="36" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="2"/>
              <text x="40" y="35" textAnchor="middle" fontSize="24" fill="#22C55E" fontWeight="bold">$</text>
              <path d="M30,48 L40,58 L50,48" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-2xl font-extrabold text-green-dark">54–75%</p>
            <p className="text-sm text-text-secondary mt-1">Average savings across all crops</p>
            <p className="text-sm text-text-muted mt-2">Breakeven in 4–8 months</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-text-muted leading-relaxed">
          MA has some of the highest electricity rates in the US. Savings are highest on crops you can{"'"}t buy locally. Lettuce savings are minimal after electricity costs.
        </p>
      </div>
    </section>
  );
}
