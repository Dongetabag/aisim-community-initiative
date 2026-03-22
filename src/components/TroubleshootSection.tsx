function YellowLeafIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><ellipse cx="24" cy="20" rx="14" ry="16" fill="#FDE68A" stroke="#C49A2A" strokeWidth="1.5"/><line x1="24" y1="20" x2="24" y2="36" stroke="#8B6F47" strokeWidth="1.5"/><path d="M18,22 L24,20 L30,22" fill="none" stroke="#C49A2A" strokeWidth="0.8"/></svg>;
}
function BrownTipIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><ellipse cx="24" cy="20" rx="14" ry="16" fill="#22C55E" fillOpacity="0.4" stroke="#2D6A4F" strokeWidth="1.5"/><path d="M14,10 Q12,6 14,4" fill="#8B6F47" fillOpacity="0.7" stroke="#8B6F47" strokeWidth="0.8"/><path d="M34,10 Q36,6 34,4" fill="#8B6F47" fillOpacity="0.7" stroke="#8B6F47" strokeWidth="0.8"/><path d="M10,20 Q7,18 6,16" fill="#8B6F47" fillOpacity="0.7" stroke="#8B6F47" strokeWidth="0.8"/><line x1="24" y1="20" x2="24" y2="36" stroke="#8B6F47" strokeWidth="1.5"/></svg>;
}
function WiltIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><line x1="24" y1="24" x2="24" y2="40" stroke="#8B6F47" strokeWidth="1.5"/><path d="M14,22 Q18,12 24,18 Q30,24 24,22" fill="#22C55E" fillOpacity="0.3" stroke="#2D6A4F" strokeWidth="1"/><path d="M34,22 Q30,12 24,18" fill="#22C55E" fillOpacity="0.3" stroke="#2D6A4F" strokeWidth="1"/><path d="M14,22 Q12,26 14,28" fill="none" stroke="#2D6A4F" strokeWidth="0.8"/><path d="M34,22 Q36,26 34,28" fill="none" stroke="#2D6A4F" strokeWidth="0.8"/><path d="M20,40 L24,44 L28,40" fill="none" stroke="#3B82F6" strokeWidth="1" strokeLinejoin="round"/></svg>;
}
function SlowIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><line x1="24" y1="28" x2="24" y2="40" stroke="#8B6F47" strokeWidth="1.5"/><circle cx="24" cy="22" r="6" fill="#22C55E" fillOpacity="0.3" stroke="#2D6A4F" strokeWidth="1.5"/><text x="24" y="25" textAnchor="middle" fontSize="8" fill="#DC2626" fontWeight="bold">?</text><path d="M14,18 L10,14" stroke="#C49A2A" strokeWidth="1"/><path d="M34,18 L38,14" stroke="#C49A2A" strokeWidth="1"/></svg>;
}
function SlimeIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><rect x="8" y="12" width="32" height="26" rx="4" fill="#F0EDE6" stroke="#2D6A4F" strokeWidth="1.5"/><rect x="10" y="24" width="28" height="12" rx="2" fill="#22C55E" fillOpacity="0.2"/><path d="M12,22 Q20,18 28,22 Q36,26 38,22" fill="none" stroke="#22C55E" strokeWidth="1.5"/><circle cx="16" cy="28" r="2" fill="#22C55E" fillOpacity="0.3"/><circle cx="26" cy="30" r="3" fill="#22C55E" fillOpacity="0.2"/></svg>;
}
function GnatIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><circle cx="20" cy="16" r="2" fill="#4A4A45"/><path d="M20,18 L20,24" stroke="#4A4A45" strokeWidth="0.8"/><path d="M17,14 L14,10" stroke="#4A4A45" strokeWidth="0.5"/><path d="M23,14 L26,10" stroke="#4A4A45" strokeWidth="0.5"/><circle cx="32" cy="20" r="2" fill="#4A4A45"/><path d="M32,22 L32,26" stroke="#4A4A45" strokeWidth="0.8"/><circle cx="26" cy="28" r="1.5" fill="#4A4A45"/><rect x="8" y="34" width="14" height="8" rx="1" fill="#FDE68A" stroke="#C49A2A" strokeWidth="1"/><text x="15" y="40" textAnchor="middle" fontSize="4" fill="#C49A2A" fontWeight="bold">TRAP</text></svg>;
}
function LeggyIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><line x1="24" y1="10" x2="24" y2="40" stroke="#8B6F47" strokeWidth="1.5"/><circle cx="22" cy="8" r="4" fill="#22C55E" fillOpacity="0.4" stroke="#2D6A4F" strokeWidth="1"/><circle cx="26" cy="6" r="3" fill="#40916C" fillOpacity="0.4"/><path d="M8,14 Q8,8 14,8" fill="none" stroke="#FDE68A" strokeWidth="1" strokeDasharray="2 2"/><text x="8" y="20" fontSize="5" fill="#C49A2A" fontWeight="bold">LOW</text><text x="6" y="26" fontSize="5" fill="#C49A2A" fontWeight="bold">LIGHT</text></svg>;
}
function CurlIcon() {
  return <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0"><line x1="24" y1="24" x2="24" y2="40" stroke="#8B6F47" strokeWidth="1.5"/><path d="M12,18 Q14,8 24,14 Q34,20 36,10" fill="#22C55E" fillOpacity="0.3" stroke="#2D6A4F" strokeWidth="1.5"/><path d="M12,18 Q10,22 12,24" fill="none" stroke="#2D6A4F" strokeWidth="1"/><path d="M36,10 Q38,6 36,4" fill="none" stroke="#2D6A4F" strokeWidth="1"/><text x="40" y="30" fontSize="7" fill="#DC2626" fontWeight="bold">!</text></svg>;
}

const issues = [
  { symptom: "Yellow leaves (lower)", cause: "Nitrogen deficiency", fix: "Increase nutrients or check pH", icon: <YellowLeafIcon />, fixColor: "text-green" },
  { symptom: "Brown leaf tips", cause: "Nutrient burn", fix: "Dilute solution or add plain water", icon: <BrownTipIcon />, fixColor: "text-green" },
  { symptom: "Wilting despite water", cause: "Root rot (Pythium)", fix: "Check roots, lower water temp below 75°F", icon: <WiltIcon />, fixColor: "text-green" },
  { symptom: "Slow growth", cause: "pH out of range", fix: "Adjust to 5.8–6.2", icon: <SlowIcon />, fixColor: "text-green" },
  { symptom: "Green slime in reservoir", cause: "Algae — light hitting water", fix: "Cover all light leaks, use opaque containers", icon: <SlimeIcon />, fixColor: "text-green" },
  { symptom: "Tiny flies around plants", cause: "Fungus gnats", fix: "Keep medium dry on top, use yellow sticky traps", icon: <GnatIcon />, fixColor: "text-green" },
  { symptom: "Tall, leggy plants", cause: "Not enough light", fix: "Lower light or increase wattage", icon: <LeggyIcon />, fixColor: "text-green" },
  { symptom: "Leaf edges curling", cause: "Heat stress or wind burn", fix: "Move fan, check temp (65–80°F)", icon: <CurlIcon />, fixColor: "text-green" },
];

export function TroubleshootSection() {
  return (
    <section id="troubleshoot" className="bg-bg-tertiary px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-bold tracking-widest text-coral uppercase">
          Troubleshooting
        </h2>
        <p className="mb-14 text-center text-4xl font-extrabold tracking-tight text-green-dark md:text-5xl">
          Quick Fixes
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {issues.map((issue) => (
            <div
              key={issue.symptom}
              className="flex gap-4 rounded-2xl border border-white/60 bg-bg-secondary p-5 shadow-sm"
            >
              <div className="shrink-0 mt-1">{issue.icon}</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{issue.symptom}</h3>
                <p className="text-sm text-coral font-medium mb-2">Cause: {issue.cause}</p>
                <div className="rounded-lg bg-green-light/50 px-3 py-2 text-sm">
                  <span className="font-bold text-green-dark">Fix: </span>
                  <span className="text-text-secondary">{issue.fix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
