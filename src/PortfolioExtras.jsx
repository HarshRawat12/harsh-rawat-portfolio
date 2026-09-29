import { ArrowRight, ArrowUpRight, Camera, Code2, ExternalLink, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const experience = [
  {
    date: '2018 — 2020', role: 'Freelance esports designer', place: 'Independent',
    detail: 'Built YouTube thumbnails and banners, live stream identities, animated intros, pause and end screens, and custom alerts. Helped creators shape content as well as the visuals around it.',
    accent: 'orange',
  },
  {
    date: '2022 — 2023', role: 'Graphic designer', place: 'Jivo Wellness',
    detail: 'Designed social posts, GIFs, e-commerce banners, sale campaigns, product videos, A+ content and paid ad creatives for a fast-moving consumer brand.',
    accent: 'blue',
  },
  {
    date: '2023 — NOW', role: 'Social media expert & motion designer', place: 'Pure Creations',
    detail: 'Lead social media content and strategy, making static and animated posts, motion-led e-commerce videos and paid campaign creatives across brands.',
    accent: 'yellow',
  },
]

const software = [
  { name: 'Photoshop', short: 'Ps', rating: 5, tone: 'ps' },
  { name: 'After Effects', short: 'Ae', rating: 4.5, tone: 'ae' },
  { name: 'Premiere Pro', short: 'Pr', rating: 3, tone: 'pr' },
  { name: 'Illustrator', short: 'Ai', rating: 3, tone: 'ai' },
]

const imageTools = [
  'ChatGPT Images 2.5', 'Nano Banana 2', 'Nano Banana Pro', 'FLUX.2',
  'FLUX.1 Kontext', 'Seedream 5.0 Pro', 'Midjourney', 'Magnific AI',
  'Higgsfield', 'Ideogram', 'Recraft',
]

const videoTools = [
  'Veo 3.1', 'Kling 2.5 Turbo', 'Kling 3.0', 'Seedance 2.0',
  'MiniMax Hailuo', 'FLUX 3', 'Higgsfield',
]

const devModels = [
  { family: 'GEMINI', models: '3.8 Flash · 3.7 Flash · 3.6 Flash' },
  { family: 'GPT‑6', models: 'Astra · Sol · Luna' },
  { family: 'GPT‑5.6', models: 'Sol · Terra · Luna' },
  { family: 'CLAUDE', models: 'Opus 5.5 · Fable 5.1 · Sonnet 5' },
]

const websites = [
  {
    name: 'Atelier Forma', type: 'Bespoke furniture & joinery', number: '01',
    url: 'https://resonant-pastelito-b34ddd.netlify.app/',
    image: 'https://resonant-pastelito-b34ddd.netlify.app/images/project_villa.png',
    color: '#8c765e',
  },
  {
    name: 'Jai India Voyage', type: 'Travel website', number: '02',
    url: 'https://www.jaiindiavoyage.com/',
    image: 'https://www.jaiindiavoyage.com/images/Slider2.webp',
    color: '#976b3f',
  },
  {
    name: 'Lumina Dental', type: 'Dental studio concept', number: '03',
    url: 'https://leafy-malabi-9efed9.netlify.app/',
    image: 'https://leafy-malabi-9efed9.netlify.app/assets/images/hero-smile.png',
    color: '#9dbbd1',
  },
  {
    name: 'Verdemar', type: 'Landscape & pool concept', number: '04',
    url: 'https://jolly-semolina-94dcfb.netlify.app/',
    image: 'https://jolly-semolina-94dcfb.netlify.app/images/slider/saadiyat-after.png',
    color: '#547f67',
  },
  {
    name: 'Car Detailing Studio', type: 'Automotive website concept', number: '05',
    url: 'https://dummy-car-cleaning.netlify.app/',
    image: 'https://dummy-car-cleaning.netlify.app/assets/hero.png',
    color: '#323a43',
  },
  {
    name: 'Luxury Villa Interior', type: 'Architecture website concept', number: '06',
    url: 'https://luxury-villa-interior.netlify.app/',
    image: 'https://luxury-villa-interior.netlify.app/Hero/BG.png',
    color: '#8e8477',
  },
]

function ToolTags({ tools }) {
  return <div className="extra-tags">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
}

export function ExperienceSection() {
  return <section className="extra-experience" id="experience">
    <div className="extra-section-head" data-reveal>
      <p className="eyebrow">EXPERIENCE / THE ACTUAL TIMELINE</p>
      <h2>Where the work<br /><em>grew up.</em></h2>
      <p>From creator culture to e-commerce and multi-brand social storytelling.</p>
    </div>
    <div className="experience-list">
      {experience.map((item, index) => <article className={`experience-card accent-${item.accent}`} data-reveal key={item.place}>
        <span className="experience-index">0{index + 1}</span>
        <div className="experience-main"><span className="experience-date">{item.date}</span><h3>{item.role}</h3><strong>{item.place}</strong></div>
        <p>{item.detail}</p>
      </article>)}
    </div>
    <p className="experience-footnote" data-reveal>Also studying journalism and digital media, with an eye on the story behind every visual.</p>
  </section>
}

export function CreativeToolkit() {
  return <section className="extra-toolkit" id="creative-toolkit">
    <div className="extra-toolkit-head" data-reveal>
      <p className="eyebrow">HANDS-ON TOOLS / NEW FRONTIERS</p>
      <h2>Craft first. <em>Curiosity always.</em></h2>
      <p>Adobe is the daily toolkit. Generative tools widen the sketchbook, speed up exploration and create new ways to build a frame.</p>
    </div>
    <div className="extra-toolkit-grid">
      <div className="software-panel" data-reveal>
        <div className="extra-panel-kicker"><span>01 / SOFTWARE</span><span>SELF-RATED</span></div>
        <h3>The familiar<br /><em>workhorses.</em></h3>
        <div className="software-list">{software.map((item) => <div className="software-row" key={item.name}>
          <span className={`software-icon ${item.tone}`}>{item.short}</span>
          <strong>{item.name}</strong>
          <div className="software-meter" role="meter" aria-label={`${item.name} proficiency`} aria-valuemin="0" aria-valuemax="5" aria-valuenow={item.rating} aria-valuetext={`${item.rating} out of 5`}><i style={{ width: `${item.rating * 20}%` }} /></div>
          <b>{item.rating}<small>/5</small></b>
        </div>)}</div>
      </div>
      <div className="ai-panel" data-reveal>
        <div className="extra-panel-kicker"><span>02 / GENERATIVE PLAYGROUND</span><Sparkles size={15} /></div>
        <h3>More AI tools.<br /><em>More directions.</em></h3>
        <p className="ai-panel-copy">I explore imagery, edits and moving worlds across different models. The creative call is still mine: what to make, what to keep and when to stop.</p>
        <div className="ai-tool-group"><h4>IMAGE & FINISHING <span>11 TOOLS</span></h4><ToolTags tools={imageTools} /></div>
        <div className="ai-tool-group"><h4>VIDEO & MOTION <span>7 TOOLS</span></h4><ToolTags tools={videoTools} /></div>
      </div>
    </div>
  </section>
}

export function TechBuilds() {
  return <section className="extra-builds" id="builds">
    <div className="extra-builds-intro" data-reveal>
      <p className="eyebrow">DESIGNER / PROBLEM SOLVER / BUILDER</p>
      <h2>Human-led design.<br /><em>Useful things built.</em></h2>
      <p>Alongside visual and motion work, I design websites and practical tools. I start with people, purpose and a clear experience, then use AI-assisted coding to turn the idea into something useful for myself and the people I work with.</p>
    </div>
    <a className="better-ss-card" id="better-ss" href="https://better-ss-harsh-rawat-s-projects.vercel.app/" target="_blank" rel="noreferrer" data-reveal>
      <div className="better-ss-top"><span><Camera size={17} /> FEATURED BUILD / WINDOWS APP</span><ArrowUpRight size={23} /></div>
      <div className="better-ss-body"><div><span className="better-ss-icon"><Camera size={50} strokeWidth={1.5} /></span><h3>Better SS<span>.</span></h3><p>A screenshot workflow I developed: capture, annotate, pull text, record the screen and trim video in one place.</p></div><div className="better-ss-preview" aria-hidden="true"><div className="preview-top"><i /><i /><i /><span>BETTER SS</span></div><div className="preview-canvas"><div className="preview-select"><span>CAPTURE</span></div><div className="preview-tools">✎ &nbsp; ◯ &nbsp; ☐ &nbsp; T &nbsp; ↗</div></div></div></div>
      <span className="better-ss-link">EXPLORE THE APP <ArrowRight size={16} /></span>
    </a>
    <div className="site-project-head" id="websites" data-reveal><div><p className="eyebrow">WEBSITES I DESIGN & BUILD</p><h3>Designed by me.<br />Built with AI support.</h3><p>I design the layout, choose the colours and typography, and plan how people move through each website. Then I use AI to help write and refine the code that makes my design work.</p></div><span>SELECTED WEB WORK / 06</span></div>
    <div className="website-process"><p><span>01 / MY DESIGN WORK</span>Visual direction, page layouts and the experience visitors have.</p><p><span>02 / AI CODING SUPPORT</span>Turning those design decisions into a working, responsive website.</p><p><span>03 / MY FINAL CALL</span>Reviewing the result, refining the details and shaping the finished experience.</p></div>
    <div className="site-project-grid">{websites.map((site) => <a className="site-project-card" href={site.url} target="_blank" rel="noreferrer" key={site.name} style={{ '--site-color': site.color }} data-reveal>
      <div className="site-project-image"><img src={site.image} alt={`${site.name} website preview`} loading="lazy" /><span>{site.number} / 06</span><i><ExternalLink size={20} /></i></div>
      <div className="site-project-caption"><div><h4>{site.name}</h4><p>{site.type}</p></div><ArrowUpRight size={18} /></div>
    </a>)}</div>
    <div className="dev-models" id="ai-building" data-reveal><div className="dev-models-copy"><Code2 size={24} /><p className="eyebrow">AI-ASSISTED BUILDING</p><h3>My extra set<br />of hands.</h3><p>These AI systems help me research, prototype, write and debug faster. I use them to solve real creative problems and build useful solutions that help the people around me grow.</p></div><div className="dev-model-list">{devModels.map((item) => <div key={item.family}><span>{item.family}</span><strong>{item.models}</strong></div>)}</div></div>
  </section>
}

export function SideQuestTeaser() {
  const [launch, setLaunch] = useState(null)
  const [phase, setPhase] = useState('idle')
  const [progress, setProgress] = useState(0)
  const chest = useRef(null)
  const lid = useRef(null)
  const circle = useRef(null)
  const launchGuard = useRef(false)

  useEffect(() => {
    const resetOnReturn = (event) => {
      if (!event.persisted) return
      launchGuard.current = false
      setLaunch(null)
      setPhase('idle')
      setProgress(0)
    }
    window.addEventListener('pageshow', resetOnReturn)
    return () => window.removeEventListener('pageshow', resetOnReturn)
  }, [])

  useEffect(() => {
    if (!launch) return undefined
    let disposed = false
    let frame
    const animations = []
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const animate = (element, frames, duration, easing = 'ease-out') => {
      const animation = element.animate(frames, { duration, easing, fill: 'forwards' })
      animations.push(animation)
      return animation
    }
    const run = async () => {
      try {
        if (!launch.reduced) {
          animate(lid.current, [
            { transform: 'translateY(0) rotate(0deg)', offset: 0 },
            { transform: 'translateY(5px) rotate(3deg)', offset: .18 },
            { transform: 'translate(-18px, -105px) rotate(-18deg)', offset: 1 },
          ], 850, 'cubic-bezier(.2,.8,.2,1)')
          await animate(chest.current, [
            { transform: 'scale(1)' },
            { transform: 'translateY(8px) scale(.95)', offset: .2 },
            { transform: 'translateY(-8px) scale(1.04)', offset: .65 },
            { transform: 'scale(1)' },
          ], 900).finished
        }
        if (disposed) return
        setPhase('filling')
        const duration = launch.reduced ? 180 : 1200
        const fill = animate(circle.current,
          launch.reduced ? [{ opacity: 0, transform: 'scale(1)' }, { opacity: 1, transform: 'scale(1)' }]
            : [{ transform: 'scale(0)' }, { transform: 'scale(1)' }],
          duration, 'cubic-bezier(.45,0,.2,1)')
        const updateProgress = () => {
          if (disposed) return
          setProgress(Math.min(100, Math.round((Number(fill.currentTime) || 0) / duration * 100)))
          frame = requestAnimationFrame(updateProgress)
        }
        frame = requestAnimationFrame(updateProgress)
        await fill.finished
        cancelAnimationFrame(frame)
        if (disposed) return
        setProgress(100)
        setPhase('covered')
        // Hold a painted, fully covered frame before changing documents.
        await animate(circle.current, [{ opacity: 1 }, { opacity: 1 }], 180).finished
        if (!disposed) window.location.assign('/side-quest')
      } catch (error) {
        if (disposed || error.name === 'AbortError') return
        document.body.style.overflow = previousOverflow
        window.location.assign('/side-quest')
      }
    }
    run()
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      animations.forEach((animation) => animation.cancel())
      document.body.style.overflow = previousOverflow
    }
  }, [launch])

  const launchSideQuest = () => {
    if (launchGuard.current) return
    launchGuard.current = true
    const initial = chest.current.getBoundingClientRect()
    if (initial.top < 80 || initial.bottom > window.innerHeight - 30) {
      chest.current.scrollIntoView({ block: 'center', behavior: 'instant' })
    }
    const rect = chest.current.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height * .4
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) + 80
    setPhase('burst')
    setLaunch({ x, y, radius, reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches })
  }

  return <section className={`side-quest-teaser ${launch ? 'is-launching' : ''}`} id="side-quest" data-phase={phase}>
    <button type="button" className="side-quest-chest-link" onClick={launchSideQuest} aria-disabled={Boolean(launch)} aria-label="Explore more about Harsh: open Side Quest to see Better SS, website designs, and AI development tools">
      <div className="side-quest-teaser-copy" data-reveal><p className="eyebrow">SIDE QUEST / WEBSITES & USEFUL TOOLS</p><h2>Curiosity.<br /><em>Put to work.</em></h2><p>I design websites and use AI to help build solutions to everyday problems. Open the chest to explore my screenshot app, web projects and the tools that help me support the people I work with.</p><span className="side-quest-button">{launch ? 'OPENING SIDE QUEST' : 'EXPLORE MY SIDE PROJECTS'} <ArrowUpRight size={19} /></span></div>
      <div className="side-quest-visual" aria-hidden="true"><span className="quest-spark quest-spark-one">✦</span><span className="quest-spark quest-spark-two">✧</span><span className="quest-spark quest-spark-three">✦</span><div className="quest-chest" ref={chest}><div className="quest-chest-light" /><div className="quest-chest-lid" ref={lid} /><div className="quest-chest-body"><i /></div><div className="quest-burst-particles">{Array.from({ length: 12 }, (_, index) => <i key={index} style={{ '--particle-x': `${Math.cos(index * Math.PI / 6) * 180}px`, '--particle-y': `${Math.sin(index * Math.PI / 6) * 125 - 70}px`, '--particle-turn': `${index * 47}deg`, '--particle-delay': `${index % 3 * 35}ms` }} />)}</div></div><span className="side-quest-visual-label"><span className="quest-label-idle">CLICK TO OPEN</span><span className="quest-label-hover">EXPLORE MORE ABOUT HARSH <ArrowUpRight size={13} /></span></span></div>
    </button>
    {launch && createPortal(<div className="quest-transition" data-phase={phase} aria-label="Opening Side Quest" role="status">
      <div ref={circle} className="quest-transition-circle" style={{ width: launch.radius * 2, height: launch.radius * 2, left: launch.x, top: launch.y }} />
      <div className="quest-transition-label"><span>SIDE QUEST</span><strong aria-hidden="true">{progress}<small>%</small></strong><p>Websites. Tools. Useful ideas.</p></div>
    </div>, document.body)}
  </section>
}
