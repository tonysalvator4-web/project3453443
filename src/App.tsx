import { useEffect, useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import CountdownTimer from './components/CountdownTimer';
import InfectionCounter from './components/InfectionCounter';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-mono">
      <ParticleCanvas />

      {/* WARNING BANNER */}
      <div className="warning-banner fixed top-0 left-0 right-0 z-50 bg-red-950 border-b-2 border-red-700 py-2 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          <span className="text-red-300 text-xs font-bold tracking-widest uppercase inline-block animate-marquee">
            ⚠ WARNING: NO VACCINE AVAILABLE &nbsp;•&nbsp; THE INFECTION HAS BEGUN &nbsp;•&nbsp; ☣ BIOHAZARD LEVEL 5 &nbsp;•&nbsp; RESISTANCE IS FUTILE &nbsp;•&nbsp; THEY CANNOT STOP WHAT IS COMING &nbsp;•&nbsp; ⚠ WARNING: NO VACCINE AVAILABLE &nbsp;•&nbsp; THE INFECTION HAS BEGUN &nbsp;•&nbsp; ☣ BIOHAZARD LEVEL 5 &nbsp;•&nbsp; RESISTANCE IS FUTILE &nbsp;•&nbsp; THEY CANNOT STOP WHAT IS COMING &nbsp;•&nbsp; ⚠ WARNING: NO VACCINE AVAILABLE &nbsp;•&nbsp; THE INFECTION HAS BEGUN &nbsp;•&nbsp;
          </span>
        </div>
      </div>

      {/* NAV */}
      <nav className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur border-b border-red-900/50' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-red-500 font-black text-sm tracking-widest uppercase">$HWO</span>
          <div className="hidden md:flex gap-8 text-xs tracking-widest text-gray-500 uppercase">
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-red-400 transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-red-400 transition-colors">Roadmap</a>
            <a href="#socials" className="hover:text-red-400 transition-colors">Socials</a>
          </div>
          <a href="#join" className="text-xs border border-red-700 text-red-400 px-4 py-2 hover:bg-red-900/40 transition-all tracking-widest uppercase">
            Join Order
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="logo-pulse-ring" />
          <img
            src="/5e93d3ec-2561-49d8-97ba-254902fa16b6.png"
            alt="Hantavirus World Order"
            className="logo-img relative z-10 w-60 md:w-80 lg:w-96 mb-8 select-none"
          />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-white leading-none hero-title mb-1">
            HANTAVIRUS
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.15em] text-red-600 leading-none mb-4">
            WORLD ORDER
          </h2>
          <p className="text-red-400 tracking-[0.5em] text-xs md:text-sm uppercase mb-6">
            $HWO — The Coin That Infects The World
          </p>

          <p className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed mb-10 px-4">
            They engineered the virus. We engineered the token.
            The <span className="text-red-400">New World Order</span> thought they could control the narrative.{' '}
            <span className="text-red-300 font-bold">They were wrong.</span>
          </p>

          <CountdownTimer />

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center" id="join">
            <a href="#" className="join-btn relative px-10 py-4 text-sm font-black tracking-widest uppercase overflow-hidden group">
              <span className="relative z-10">☣ JOIN THE ORDER</span>
            </a>
            <a href="#" className="px-10 py-4 text-sm font-bold tracking-widest uppercase border border-red-800 text-red-400 hover:border-red-500 hover:text-red-200 hover:bg-red-950/40 transition-all duration-300">
              BUY $HWO
            </a>
          </div>

          <InfectionCounter />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about" className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="section-label">CLASSIFIED // LEVEL 5</div>
          <h2 className="section-title">WHAT IS <span className="text-red-500">$HWO</span>?</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: '☣',
                title: 'The Infection Protocol',
                body: '$HWO is a decentralized meme token built on the virus of truth. Carried by rats, spread by shadowy elites, and unleashed upon the masses — just like they planned. Except this time, we are the pathogen.',
              },
              {
                icon: '👁',
                title: 'The New World Order',
                body: "They control the banks, the media, the vaccines. But they can't control the blockchain. $HWO is the financial virus that bypasses every firewall, every gatekeeper, every institution.",
              },
              {
                icon: '🐀',
                title: 'Carried by Rats',
                body: 'The original vectors. Rats spread the plague that toppled empires. Our community of degenerates and truth-seekers will spread $HWO across every wallet, every exchange, every corner of the globe.',
              },
              {
                icon: '⚠',
                title: 'No Antidote Exists',
                body: "Once $HWO enters your portfolio, there's no going back. The infection spreads. The order rises. Central banks can't print a vaccine for decentralized chaos. You have been warned.",
              },
            ].map((c) => (
              <div key={c.title} className="info-card">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="text-red-400 font-bold tracking-widest uppercase mb-3 text-sm">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Tokenomics />
      <Roadmap />

      {/* SOCIALS */}
      <section id="socials" className="relative py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label">CONNECT // SPREAD THE VIRUS</div>
          <h2 className="section-title">JOIN THE <span className="text-red-500">NETWORK</span></h2>
          <p className="text-gray-500 text-sm mt-4 mb-12 tracking-wide">Every follower is a new host. Every share is a new infection vector.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Telegram', icon: '✈', handle: '@HWO_Official' },
              { label: 'Twitter/X', icon: '✕', handle: '@HantavirusWO' },
              { label: 'Discord', icon: '◈', handle: 'HWO Server' },
              { label: 'DexTools', icon: '◉', handle: 'View Chart' },
            ].map((s) => (
              <a key={s.label} href="#" className="social-card group">
                <div className="text-3xl mb-3 group-hover:text-red-400 transition-colors duration-300">{s.icon}</div>
                <div className="text-white font-bold text-xs tracking-widest uppercase">{s.label}</div>
                <div className="text-gray-600 text-xs mt-1">{s.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-red-900/20 py-10 px-4 text-center">
        <div className="text-red-900 text-2xl tracking-widest mb-4">☣ ☣ ☣</div>
        <p className="text-gray-700 text-xs tracking-widest uppercase">
          © 2026 Hantavirus World Order | $HWO is a meme token for entertainment purposes only.
        </p>
        <p className="text-gray-800 text-xs mt-2 tracking-wider">
          Not financial advice. Do your own research. The rats are not responsible for your portfolio.
        </p>
      </footer>
    </div>
  );
}
