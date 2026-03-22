const crops = [
  {
    name: "Lettuce",
    emoji: "\ud83e\udd57",
    days: "30–45",
    yield: "Very High",
    difficulty: "Very Easy",
    savings: "Best Starter",
    desc: "Most forgiving hydroponic crop. Harvest outer leaves for continuous production. Grow this first to learn the basics.",
    tag: "Starter",
    tagColor: "bg-green-light text-green-dark",
  },
  {
    name: "Basil",
    emoji: "\ud83c\udf3f",
    days: "28–35",
    yield: "High",
    difficulty: "Easy",
    savings: "67%",
    desc: "Pinch above leaf nodes for bushy growth. Enormous cost savings vs grocery — $9/lb grocery vs $3/lb hydro.",
    tag: "Starter",
    tagColor: "bg-green-light text-green-dark",
  },
  {
    name: "Callaloo",
    emoji: "\ud83e\udd6c",
    days: "20–45",
    yield: "High",
    difficulty: "Easy-Medium",
    savings: "65%",
    desc: "Caribbean staple. Nearly impossible to find fresh in Springfield — closest source is Hartford (60-mile round trip). 30–50% faster than soil. Cut-and-come-again.",
    tag: "Caribbean Essential",
    tagColor: "bg-coral/15 text-coral",
  },
  {
    name: "Culantro",
    emoji: "\ud83c\udf3f",
    days: "75–90",
    yield: "Medium",
    difficulty: "Medium",
    savings: "73%",
    desc: "Shadow beni — 10x stronger than cilantro. Prefers shade = lower electricity. Germination alone takes 14–30 days. Nearly impossible fresh in Western MA.",
    tag: "Caribbean Essential",
    tagColor: "bg-coral/15 text-coral",
  },
  {
    name: "Scotch Bonnet",
    emoji: "\ud83c\udf36\ufe0f",
    days: "90–150",
    yield: "High",
    difficulty: "Medium",
    savings: "74%",
    desc: "Backbone of Caribbean hot sauce and jerk. Often unavailable in Western MA. Growing your own = year-round supply. Start seeds early — 3–4 month lead time.",
    tag: "Caribbean Essential",
    tagColor: "bg-coral/15 text-coral",
  },
  {
    name: "Thyme",
    emoji: "\ud83c\udf31",
    days: "30–60",
    yield: "Medium",
    difficulty: "Easy (cuttings)",
    savings: "75%",
    desc: "386% more fresh weight vs outdoor. Start from CUTTINGS not seeds — buy a plant and propagate. Two types: common thyme for jerk rub, big leaf thyme (Cuban oregano) for stews.",
    tag: "Caribbean Essential",
    tagColor: "bg-coral/15 text-coral",
  },
  {
    name: "Green Onions",
    emoji: "\ud83e\uddc5",
    days: "21–28",
    yield: "High",
    difficulty: "Very Easy",
    savings: "63%",
    desc: "Regrows from base after cutting. Start from grocery store scallion roots — just place in water. Fastest path to harvest.",
    tag: "Starter",
    tagColor: "bg-green-light text-green-dark",
  },
  {
    name: "Lemongrass",
    emoji: "\ud83c\udf3e",
    days: "60–90",
    yield: "Medium",
    difficulty: "Easy",
    savings: "55%",
    desc: "92% more production than soil-grown. Start from grocery store stalks — root in water for 2–3 weeks before transplanting.",
    tag: "Caribbean Addition",
    tagColor: "bg-gold-light text-gold-dark",
  },
  {
    name: "Mint",
    emoji: "\ud83c\udf3f",
    days: "21–30",
    yield: "High",
    difficulty: "Very Easy",
    savings: "60%",
    desc: "Extremely vigorous grower — keep in its own container. Great for drinks and Caribbean desserts.",
    tag: "Starter",
    tagColor: "bg-green-light text-green-dark",
  },
];

export function CropSection() {
  return (
    <section id="crops" className="bg-bg-tertiary px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          What to Grow
        </h2>
        <p className="mb-12 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          Caribbean Crops & Herbs
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {crops.map((crop) => (
            <div
              key={crop.name}
              className="rounded-2xl border border-white/60 bg-bg-secondary p-6 shadow-sm transition hover:shadow-md hover:border-green/30"
            >
              <div className="mb-3 flex items-start justify-between">
                <span className="text-4xl">{crop.emoji}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${crop.tagColor}`}>
                  {crop.tag}
                </span>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-green-dark">{crop.name}</h3>
              <div className="mb-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-green-light px-3 py-1 font-medium text-green-dark">
                  {crop.days} days
                </span>
                <span className="rounded-full bg-gold-light px-3 py-1 font-medium text-gold-dark">
                  Yield: {crop.yield}
                </span>
                {crop.savings.includes("%") ? (
                  <span className="rounded-full bg-blue/10 px-3 py-1 font-medium text-blue">
                    Save {crop.savings}
                  </span>
                ) : (
                  <span className="rounded-full bg-green-light px-3 py-1 font-medium text-green-dark">
                    {crop.savings}
                  </span>
                )}
              </div>
              <p className="text-text-secondary leading-relaxed">{crop.desc}</p>
              <p className="mt-3 text-sm text-text-muted">
                Difficulty: {crop.difficulty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
