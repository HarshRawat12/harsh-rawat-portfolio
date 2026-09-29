import { ArrowLeft, ArrowUpRight, AudioLines, Camera, Code2, Gamepad2, Sparkles } from 'lucide-react'
import { useEffect } from 'react'
import { TechBuilds } from './PortfolioExtras'

const interests = [
  { number: '01', label: 'ALWAYS PLAYING', title: 'Music is part of the process.', detail: 'A good track can change the pace of an edit, the energy of a page or the whole direction of an idea.', className: 'music', icon: AudioLines, mark: '♫' },
  { number: '02', label: 'ALWAYS TESTING', title: 'New tech gets a test drive.', detail: 'I like opening new tools, pushing the buttons and finding out what is genuinely useful for a creative workflow.', className: 'tech', icon: Code2, mark: '↗' },
  { number: '03', label: 'ALWAYS IMAGINING', title: 'AI is a bigger sketchbook.', detail: 'Image and video models help me explore a dozen directions quickly. The interesting part is choosing the one with a point of view.', className: 'ai', icon: Sparkles, mark: '✳' },
  { number: '04', label: 'WHERE IT STARTED', title: 'The esports years still show.', detail: 'I began with thumbnails, stream graphics, animated intros and alerts for creators. That early internet energy never really left.', className: 'games', icon: Gamepad2, mark: '★' },
]

export default function SideQuest() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Side Quest — Harsh Rawat'
    return () => { document.title = previousTitle }
  }, [])

  return <div className="side-quest-page">
    <nav className="side-quest-nav" aria-label="Side Quest navigation"><a href="/" className="side-quest-home"><span>HR</span> PORTFOLIO <ArrowLeft size={15} /></a><div className="side-quest-nav-links"><a href="#better-ss">BETTER SS</a><a href="#websites">WEBSITES</a><a href="#ai-building">AI TOOLKIT</a><a href="#curiosity">ABOUT ME</a></div></nav>
    <main>
      <header className="side-quest-hero">
        <div className="grain" />
        <div className="quest-hero-copy">
          <p className="eyebrow">PERSONAL PROJECTS / PRACTICAL PROBLEM SOLVING</p>
          <h1><span>SIDE</span><em>QUEST.</em></h1>
          <h2>I design websites.<br />I build useful tools.</h2>
          <p className="side-quest-hero-copy">I combine my design skills with AI coding tools to turn everyday problems into practical solutions—for my own workflow and the people I work with.</p>
          <div className="quest-hero-actions"><a href="#websites">Explore my websites <ArrowUpRight size={17} /></a><a href="#better-ss">Meet Better SS <ArrowUpRight size={17} /></a></div>
        </div>
        <div className="quest-hero-studio" aria-hidden="true">
          <div className="quest-studio-orbit" />
          <span className="quest-studio-star">✳</span>
          <div className="quest-web-window">
            <div className="quest-window-bar"><i /><i /><i /><span>FROM MY SKETCHBOOK</span></div>
            <div className="quest-window-design"><span>DESIGN / PURPOSE / PEOPLE</span><strong>Make it work.<br /><em>Beautifully.</em></strong><div className="quest-design-landscape"><i /><b /></div><div className="quest-design-swatches"><i /><i /><i /><span>MY DESIGN DIRECTION ↗</span></div></div>
          </div>
          <div className="quest-app-window"><span><Camera size={23} /> BETTER SS</span><strong>One small tool.<br />A smoother day.</strong><div className="quest-capture-demo"><i /><b>CAPTURE → CREATE</b></div></div>
          <div className="quest-studio-note"><Sparkles size={18} /><span>HUMAN IDEAS.<br />AI CODING SUPPORT.</span></div>
        </div>
        <a className="side-quest-scroll" href="#builds">SEE WHAT I’VE BUILT ↓</a>
      </header>
      <TechBuilds />
      <section className="side-quest-interest-section" id="curiosity"><div className="side-quest-interest-heading"><p className="eyebrow">CURIOSITY, IN FOUR OPEN TABS</p><h2>There is always<br /><em>something brewing.</em></h2></div><div className="side-quest-interest-grid">{interests.map((item) => { const Icon = item.icon; return <article className={`side-quest-interest ${item.className}`} key={item.number}><div className="side-quest-interest-top"><span>{item.number} / {item.label}</span><Icon size={22} /></div><span className="side-quest-interest-mark" aria-hidden="true">{item.mark}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article> })}</div></section>
      <section className="side-quest-outro" id="why-ai"><div><p className="eyebrow">WHY AI IS PART OF THE PROCESS</p><h2>Stay curious.<br /><em>Make something useful.</em></h2><p>AI is practical support, not the whole story. It helps me test directions, solve problems and build faster, so I can spend more time making work that helps brands and people around me move forward.</p></div><div className="side-quest-outro-links"><a href="/#work">SEE THE WORK <ArrowUpRight size={17} /></a><a href="#builds">BACK TO THE BUILDS <ArrowUpRight size={17} /></a><a href="mailto:rawat.harsh200@gmail.com">SAY HELLO <ArrowUpRight size={17} /></a></div></section>
    </main>
    <footer className="side-quest-footer"><span>HARSH RAWAT © {new Date().getFullYear()}</span><a href="/">← BACK TO THE MAIN STORY</a><span>NEW DELHI, INDIA</span></footer>
  </div>
}
