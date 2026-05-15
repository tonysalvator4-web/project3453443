export default function Tokenomics() {
  const stats = [
    { label: 'Total Supply', value: '666,666,666,666', sub: '$HWO tokens' },
    { label: 'Liquidity Locked', value: '69%', sub: 'burned forever' },
    { label: 'Tax', value: '0 / 0', sub: 'buy / sell' },
    { label: 'Contract', value: 'RENOUNCED', sub: 'fully decentralized' },
  ];

  const alloc = [
    { label: 'Liquidity Pool', pct: 69, color: 'bg-red-700' },
    { label: 'Community Airdrop', pct: 15, color: 'bg-red-500' },
    { label: 'Marketing', pct: 10, color: 'bg-red-900' },
    { label: 'Dev Wallet', pct: 6, color: 'bg-red-950' },
  ];

  return (
    <section id="tokenomics" className="relative py-24 px-4 bg-red-950/5">
      <div className="max-w-5xl mx-auto">
        <div className="section-label">ON-CHAIN // IMMUTABLE</div>
        <h2 className="section-title">TOKENOMICS</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="alloc-card">
          <h3 className="text-red-400 font-bold tracking-widest uppercase text-sm mb-6">Token Allocation</h3>
          <div className="flex rounded overflow-hidden h-5 mb-6">
            {alloc.map((a) => (
              <div
                key={a.label}
                className={`${a.color} transition-all duration-1000`}
                style={{ width: `${a.pct}%` }}
                title={`${a.label}: ${a.pct}%`}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {alloc.map((a) => (
              <div key={a.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm flex-shrink-0 ${a.color}`} />
                <div>
                  <div className="text-white text-xs font-bold">{a.pct}%</div>
                  <div className="text-gray-500 text-xs">{a.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
