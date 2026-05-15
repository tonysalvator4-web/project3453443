const phases = [
  {
    phase: 'PHASE 1',
    title: 'Patient Zero',
    status: 'INFECTED',
    items: [
      '☣ Deploy the $HWO smart contract',
      '🐀 Assemble the rat council',
      '👁 Leak classified documents to CT forums',
      '☣ Launch stealth website',
      '🔴 First 100 wallets infected',
    ],
  },
  {
    phase: 'PHASE 2',
    title: 'Outbreak',
    status: 'SPREADING',
    items: [
      '⚠ CoinGecko & CoinMarketCap listing',
      '🐀 10,000 rat holders',
      '☣ Viral Twitter/X campaign',
      '👁 Partnership with shadow organizations',
      '🔴 DEX volume dominance achieved',
    ],
  },
  {
    phase: 'PHASE 3',
    title: 'Pandemic',
    status: 'INCOMING',
    items: [
      '☣ CEX listings begin',
      '🐀 100,000 infected wallets',
      '👁 $HWO merch drop for the order',
      '⚠ Rat NFT collection released',
      '🔴 World media picks up the signal',
    ],
  },
  {
    phase: 'PHASE 4',
    title: 'New World Order',
    status: 'CLASSIFIED',
    items: [
      '👁 Tier-1 CEX listing [REDACTED]',
      '☣ $HWO becomes the reserve currency',
      '🐀 1,000,000 rats in the order',
      '⚠ Central banks panic',
      '🔴 The Order is complete',
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="section-label">CLASSIFIED // OPERATION HWO</div>
        <h2 className="section-title">INFECTION <span className="text-red-500">ROADMAP</span></h2>
        <div className="roadmap-grid mt-12">
          {phases.map((p, i) => (
            <div key={p.phase} className={`roadmap-card ${i === 0 ? 'roadmap-card--active' : ''}`}>
              <div className="roadmap-phase-label">{p.phase}</div>
              <div className={`roadmap-status roadmap-status--${p.status.toLowerCase().replace(' ', '-')}`}>
                {p.status}
              </div>
              <h3 className="roadmap-title">{p.title}</h3>
              <ul className="roadmap-list">
                {p.items.map((item) => (
                  <li key={item} className="roadmap-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
