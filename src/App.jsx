import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowUpRight, Download, Instagram, Mail, MapPin, MessageCircle, Pause, Play, Sparkles, Volume2, VolumeX } from 'lucide-react'
import Matter from 'matter-js'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { index: '01', title: 'Nandi', line: 'A brand character with main-character energy.', image: '/work/nandi.jpg', color: '#d8e4e3', url: 'https://www.behance.net/gallery/247767517/Nandi-Brand-Character-Trimurti-Products', size: 'wide', safe: true },
  { index: '02', title: 'Ariseol', line: 'Turning engine oil into a feed worth following.', image: '/work/ariseol.jpg', color: '#ef4743', url: 'https://www.behance.net/gallery/248220673/Ariseol-Social-Media-Design', size: 'standard' },
  { index: '03', title: 'Lay’s AI Shoot', line: 'A product shoot created without a studio—or a potato budget.', image: '/work/lays.jpg', color: '#e9a821', url: 'https://www.behance.net/gallery/237113251/Lays-AI-Product-Shoot', size: 'standard' },
  { index: '04', title: 'boAt', line: 'Loud product. Louder visual.', image: '/work/boat.jpg', color: '#cb3460', url: 'https://www.behance.net/gallery/237112815/Boat-Ad-Banner', size: 'wide' },
  { index: '05', title: 'Web, remixed', line: 'Interfaces that remember they are allowed to have a personality.', image: '/work/website.png', color: '#486ecf', url: 'https://www.behance.net/gallery/238365395/Website-Design', size: 'standard' },
  { index: '06', title: 'Product in motion', line: 'Because sometimes the still frame simply refuses to do the job.', image: '/work/motion.jpg', color: '#7566bc', url: 'https://www.behance.net/gallery/217189455/Product-Info-Motion-Graphics', size: 'standard' },
]

const films = [
  { id: 'cbafsj_WS80', eyebrow: 'SHOWREEL · PURE CREATIONS', title: 'PureCreations — Work Highlights' },
  { id: 'gujq8S9YtR8', eyebrow: 'MOTION EDIT · CYBER STORY', title: 'India’s Cyber Apocalypse 2026' },
  { id: 'uyGUvlYMNRs', eyebrow: 'BRAND CASE STUDY · FOUNDER CONTENT', title: 'Why Kingfisher’s Branding Failed' },
]

const cosmeticEdits = [
  { title: 'Beauty Campaign Cut', note: 'Product rhythm · Beauty edit', src: '/media/feels.webm', poster: '/media/feels.webp' },
  { title: 'Texture & Detail', note: 'Macro edit · Product story', src: '/media/render.webm', poster: '/media/render.webp' },
  { title: 'M Series 01', note: 'Cosmetic reel · Social cut', src: '/media/m-series.webm', poster: '/media/m-series.webp' },
  { title: 'AI-Assisted Film', note: 'Generative visual · Beauty', src: '/media/ai-generated.webm', poster: '/media/ai-generated.webp' },
]

const socialWorlds = [
  { name: 'The Wisdom Genie', handle: '@the.wisdom.genie', lane: 'Wisdom · Culture', color: '#f36f45', ink: '#fff7e8', x: 8, y: 12, size: 'large', url: 'https://www.instagram.com/the.wisdom.genie/' },
  { name: 'Ariseol India', handle: '@ariseol.india', lane: 'Automotive · Social', color: '#ffc52f', ink: '#12110d', x: 37, y: 6, size: 'small', url: 'https://www.instagram.com/ariseol.india/' },
  { name: 'Westin Buildchem', handle: '@westin.buildchem', lane: 'Buildchem · Brand', color: '#315cba', ink: '#fff7e8', x: 66, y: 11, size: 'medium', url: 'https://www.instagram.com/westin.buildchem/' },
  { name: 'Spaces by IBAX', handle: '@spacesby_ibax', lane: 'Interiors · Spaces', color: '#dfb7aa', ink: '#12110d', x: 18, y: 53, size: 'small', url: 'https://www.instagram.com/spacesby_ibax/' },
  { name: 'Travel Buddy India', handle: '@travelbuddyindia.in', lane: 'Travel · Community', color: '#89c8de', ink: '#12110d', x: 44, y: 57, size: 'large', url: 'https://www.instagram.com/travelbuddyindia.in/' },
  { name: 'Miira Lights', handle: '@miiralights', lane: 'Lighting · Product', color: '#f4e7a1', ink: '#12110d', x: 76, y: 48, size: 'small', url: 'https://www.instagram.com/miiralights/' },
  { name: 'UK Gifts Portal', handle: '@uk_gifts_portal', lane: 'Gifting · Commerce', color: '#9c73c8', ink: '#fff7e8', x: 4, y: 76, size: 'medium', url: 'https://www.instagram.com/uk_gifts_portal/' },
  { name: 'Audio Sculptors', handle: '@audiosculptors', lane: 'Sound · Culture', color: '#25231e', ink: '#fff7e8', x: 69, y: 76, size: 'large', url: 'https://www.instagram.com/audiosculptors/' },
]

function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDone(true); return undefined }
    const start = performance.now()
    let frame
    const run = (now) => {
      const value = Math.min(100, Math.round(((now - start) / 1200) * 100))
      setProgress(value)
      if (value < 100) frame = requestAnimationFrame(run)
      else setTimeout(() => setDone(true), 250)
    }
    frame = requestAnimationFrame(run)
    return () => cancelAnimationFrame(frame)
  }, [])

  return <div className={`preloader ${done ? 'done' : ''}`} aria-hidden="true"><div className="loader-sticker">HR<span>FM</span></div><p>TUNING THE PORTFOLIO…</p><div className="loader-count">{String(progress).padStart(3, '0')}</div><div className="loader-line"><i style={{ transform: `scaleX(${progress / 100})` }} /></div></div>
}

function Cursor() {
  const cursor = useRef()
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    const node = cursor.current
    const move = (event) => {
      gsap.to(node, { x: event.clientX, y: event.clientY, duration: 0.15, ease: 'power2.out' })
      const link = event.target.closest('[data-cursor]')
      node.classList.toggle('active', Boolean(link))
      node.querySelector('span').textContent = link?.dataset.cursor || ''
    }
    const reset = () => { node.classList.remove('active'); node.querySelector('span').textContent = '' }
    window.addEventListener('pointermove', move)
    window.addEventListener('scroll', reset, { passive: true })
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('scroll', reset) }
  }, [])
  return <div className="cursor" ref={cursor}><span /></div>
}

function TapePlayer({ activeAudio, activateAudio, deactivateAudio }) {
  const audio = useRef()
  const [playing, setPlaying] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [duration, setDuration] = useState(265)

  useEffect(() => {
    if (activeAudio !== 'hero' && audio.current && !audio.current.paused) audio.current.pause()
  }, [activeAudio])

  const toggle = async () => {
    if (!audio.current) return
    if (audio.current.paused) {
      activateAudio('hero')
      try { await audio.current.play(); setPlaying(true) } catch { setPlaying(false) }
    } else { audio.current.pause(); deactivateAudio('hero'); setPlaying(false) }
  }

  const elapsed = Math.floor(seconds)
  const time = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`
  const total = `${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}`
  const progress = duration ? (seconds / duration) * 100 : 0

  return <div className="music-cluster"><div className="song-thought thought-one">OPEN ROAD<br />ZERO PLAN</div><div className="song-thought thought-two">NO UMBRELLA<br />STILL DANCING</div><div className="song-thought thought-three">PROFESSIONALLY<br />UNBOTHERED</div><div className={`tape-player ${playing ? 'playing' : ''}`}><audio ref={audio} src="/audio/matargashti.mp3" preload="metadata" onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 265)} onTimeUpdate={(event) => setSeconds(event.currentTarget.currentTime)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => { setPlaying(false); deactivateAudio('hero') }} /><div className="tape-reel reel-left"><i /><b /><em /></div><div className="tape-screen"><span>HARSH FM · SIDE A</span><strong>MATARGASHTI — MOHIT CHAUHAN</strong><div className="tape-progress"><i style={{ width: `${progress}%` }} /><b style={{ left: `${progress}%` }} /></div><div className="tape-time"><span>{time}</span><span>{total}</span></div><button type="button" onClick={toggle} aria-label={playing ? 'Pause Matargashti' : 'Play Matargashti'}>{playing ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}</button></div><div className="tape-reel reel-right"><i /><b /><em /></div></div></div>
}

function CosmeticCard({ edit, activeAudio, activateAudio, deactivateAudio }) {
  const video = useRef()
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (activeAudio !== edit.src && video.current && !video.current.muted) {
      video.current.muted = true
      setMuted(true)
    }
  }, [activeAudio, edit.src])

  useEffect(() => {
    const node = video.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) node.play().catch(() => {})
      else node.pause()
    }, { threshold: 0.25 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const toggleSound = () => {
    if (muted) {
      activateAudio(edit.src)
      video.current.muted = false
      video.current.play().catch(() => {})
      setMuted(false)
    } else {
      video.current.muted = true
      deactivateAudio(edit.src)
      setMuted(true)
    }
  }

  return <article className="cosmetic-card" data-reveal><video ref={video} src={edit.src} poster={edit.poster} autoPlay muted={muted} loop playsInline preload="metadata" /><div className="cosmetic-shade" /><button type="button" className={muted ? '' : 'sound-on'} onClick={toggleSound} aria-label={muted ? `Unmute ${edit.title}` : `Mute ${edit.title}`}>{muted ? <VolumeX /> : <Volume2 />}</button><div className="cosmetic-copy"><span>{edit.note}</span><h3>{edit.title}</h3></div></article>
}

function FilmCard({ film, duplicate }) {
  const frame = useRef()
  const command = (name) => frame.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: name, args: [] }), '*')
  return <a href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" rel="noreferrer" className="film-card" data-cursor="YOUTUBE ↗" draggable="false" tabIndex={duplicate ? -1 : undefined} onDragStart={(event) => event.preventDefault()} onMouseEnter={() => command('pauseVideo')} onMouseLeave={() => command('playVideo')}><iframe ref={frame} src={`https://www.youtube.com/embed/${film.id}?autoplay=1&mute=1&loop=1&playlist=${film.id}&controls=0&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`} title={`${film.title} muted preview${duplicate ? ' duplicate' : ''}`} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" tabIndex="-1" /><span className="film-play"><ArrowUpRight size={20} /></span><div><small>{film.eyebrow}</small><h3>{film.title}</h3></div></a>
}

function FilmRail() {
  const windowRef = useRef()
  const track = useRef()
  const firstSet = useRef()
  const rail = useRef({ offset: 0, width: 1, dragging: false, moved: false, pointerId: null, startX: 0, startOffset: 0, lastTime: 0 })

  useLayoutEffect(() => {
    const state = rail.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame
    let previous = performance.now()
    const measure = () => { state.width = firstSet.current?.offsetWidth || 1 }
    const normalize = () => {
      while (state.offset <= -state.width) state.offset += state.width
      while (state.offset > 0) state.offset -= state.width
    }
    const render = () => { normalize(); if (track.current) track.current.style.transform = `translate3d(${state.offset}px,0,0)` }
    const tick = (now) => {
      const hovering = window.matchMedia('(hover:hover)').matches && track.current?.matches(':hover')
      if (!reduceMotion && !state.dragging && !hovering) state.offset -= 0.34 * Math.min(2, (now - previous) / 16.67)
      previous = now
      render()
      frame = requestAnimationFrame(tick)
    }
    measure()
    const observer = new ResizeObserver(measure)
    if (firstSet.current) observer.observe(firstSet.current)
    frame = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(frame); observer.disconnect() }
  }, [])

  const down = (event) => {
    if (event.button !== 0) return
    const state = rail.current
    state.dragging = true
    state.moved = false
    state.pointerId = event.pointerId
    state.startX = event.clientX
    state.startOffset = state.offset
    state.lastTime = performance.now()
    event.currentTarget.setPointerCapture(event.pointerId)
    event.currentTarget.classList.add('is-dragging')
  }
  const move = (event) => {
    const state = rail.current
    if (!state.dragging || state.pointerId !== event.pointerId) return
    const distance = event.clientX - state.startX
    if (Math.abs(distance) > 5) state.moved = true
    state.offset = state.startOffset + distance
    if (state.moved) event.preventDefault()
  }
  const up = (event) => {
    const state = rail.current
    if (!state.dragging || state.pointerId !== event.pointerId) return
    state.dragging = false
    event.currentTarget.classList.remove('is-dragging')
    try { event.currentTarget.releasePointerCapture(event.pointerId) } catch { /* pointer already released */ }
  }
  const click = (event) => {
    if (rail.current.moved) { event.preventDefault(); event.stopPropagation() }
    rail.current.moved = false
  }

  return <div className="film-window" ref={windowRef} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onClickCapture={click}><div className="film-track" ref={track}>{[0, 1].map((duplicate) => <div className="film-set" ref={duplicate === 0 ? firstSet : undefined} aria-hidden={duplicate === 1} key={duplicate}>{films.map((film) => <FilmCard film={film} duplicate={duplicate === 1} key={`${duplicate}-${film.id}`} />)}</div>)}</div></div>
}

function SocialCard({ account, index, setOrbRef, grab, move, release, didDrag }) {
  return <a ref={(node) => setOrbRef(index, node)} className={`social-orb ${account.size}`} style={{ '--left': `${account.x}%`, '--top': `${account.y}%`, '--orb': account.color, '--orb-ink': account.ink, '--delay': `${index * -0.7}s` }} href={account.url} target="_blank" rel="noreferrer" draggable="false" onDragStart={(event) => event.preventDefault()} onPointerDown={(event) => grab(event, index)} onPointerMove={move} onPointerUp={release} onPointerCancel={release} onContextMenu={(event) => event.preventDefault()} onClick={(event) => { if (didDrag(index)) { event.preventDefault(); event.stopPropagation() } }} data-cursor="VISIT ↗"><span className="social-float"><Instagram /><small>{account.lane}</small><strong>{account.name}</strong><em>{account.handle}</em><i>↗</i></span></a>
}

function SocialPlayground() {
  const arena = useRef()
  const orbRefs = useRef([])
  const physics = useRef({ engine: null, runner: null, bodies: [] })
  const drag = useRef({ active: false, index: -1, pointerId: null, moved: false, startX: 0, startY: 0, offsetX: 0, offsetY: 0, lastX: 0, lastY: 0, lastAt: 0, vx: 0, vy: 0 })

  useLayoutEffect(() => {
    const { Engine, Runner, Bodies, Body, Composite, Events } = Matter
    let resizeFrame
    const destroy = () => {
      const current = physics.current
      if (current.runner) Runner.stop(current.runner)
      if (current.engine) { Composite.clear(current.engine.world, false); Engine.clear(current.engine) }
      current.engine = null
      current.runner = null
      current.bodies = []
      orbRefs.current.forEach((node) => {
        if (!node) return
        node.classList.remove('physics')
        node.style.removeProperty('left')
        node.style.removeProperty('top')
        node.style.removeProperty('transform')
      })
    }
    const build = () => {
      destroy()
      if (!arena.current || window.matchMedia('(max-width:760px)').matches) return
      const width = arena.current.clientWidth
      const height = arena.current.clientHeight
      const engine = Engine.create()
      engine.gravity.x = 0
      engine.gravity.y = 0
      const bodies = orbRefs.current.map((node, index) => {
        const radius = node.offsetWidth / 2
        const x = Math.max(radius + 5, Math.min(width - radius - 5, width * (socialWorlds[index].x / 100) + radius))
        const y = Math.max(radius + 5, Math.min(height - radius - 5, height * (socialWorlds[index].y / 100) + radius))
        const body = Bodies.circle(x, y, radius, { restitution: 0.93, friction: 0.001, frictionAir: 0.012, density: 0.001, label: `social-${index}` })
        node.classList.add('physics')
        Body.setVelocity(body, { x: index % 2 ? 0.34 : -0.34, y: index % 3 ? -0.22 : 0.22 })
        return body
      })
      const wall = 90
      const walls = [Bodies.rectangle(width / 2, -wall / 2, width + wall * 2, wall, { isStatic: true }), Bodies.rectangle(width / 2, height + wall / 2, width + wall * 2, wall, { isStatic: true }), Bodies.rectangle(-wall / 2, height / 2, wall, height + wall * 2, { isStatic: true }), Bodies.rectangle(width + wall / 2, height / 2, wall, height + wall * 2, { isStatic: true })]
      Composite.add(engine.world, [...bodies, ...walls])
      const sync = () => bodies.forEach((body, index) => {
        const node = orbRefs.current[index]
        if (!node) return
        const radius = node.offsetWidth / 2
        node.style.left = '0px'
        node.style.top = '0px'
        node.style.transform = `translate3d(${body.position.x - radius}px,${body.position.y - radius}px,0)`
      })
      Events.on(engine, 'afterUpdate', sync)
      const runner = Runner.create()
      Runner.run(runner, engine)
      physics.current = { engine, runner, bodies }
      sync()
    }
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(build)
    })
    if (arena.current) observer.observe(arena.current)
    build()
    return () => { cancelAnimationFrame(resizeFrame); observer.disconnect(); destroy() }
  }, [])

  const spotlight = (event) => {
    const rect = arena.current.getBoundingClientRect()
    arena.current.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    arena.current.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }
  const grab = (event, index) => {
    if (window.matchMedia('(max-width:760px)').matches || (event.button !== 0 && event.button !== 2)) return
    const body = physics.current.bodies[index]
    if (!body) return
    if (event.button === 2) event.preventDefault()
    const rect = arena.current.getBoundingClientRect()
    drag.current = { active: true, index, pointerId: event.pointerId, moved: false, startX: event.clientX, startY: event.clientY, offsetX: event.clientX - rect.left - body.position.x, offsetY: event.clientY - rect.top - body.position.y, lastX: event.clientX, lastY: event.clientY, lastAt: performance.now(), vx: 0, vy: 0 }
    Matter.Body.setStatic(body, true)
    event.currentTarget.setPointerCapture(event.pointerId)
    event.currentTarget.classList.add('dragging')
  }
  const move = (event) => {
    spotlight(event)
    const state = drag.current
    if (!state.active || state.pointerId !== event.pointerId) return
    event.preventDefault()
    const body = physics.current.bodies[state.index]
    const node = orbRefs.current[state.index]
    if (!body || !node) return
    const rect = arena.current.getBoundingClientRect()
    const radius = node.offsetWidth / 2
    const x = Math.max(radius, Math.min(rect.width - radius, event.clientX - rect.left - state.offsetX))
    const y = Math.max(radius, Math.min(rect.height - radius, event.clientY - rect.top - state.offsetY))
    const now = performance.now()
    const elapsed = Math.max(8, now - state.lastAt)
    state.vx = ((event.clientX - state.lastX) / elapsed) * 16.67
    state.vy = ((event.clientY - state.lastY) / elapsed) * 16.67
    state.lastX = event.clientX
    state.lastY = event.clientY
    state.lastAt = now
    if (Math.abs(event.clientX - state.startX) + Math.abs(event.clientY - state.startY) > 5) state.moved = true
    Matter.Body.setPosition(body, { x, y })
  }
  const release = (event) => {
    const state = drag.current
    if (!state.active || state.pointerId !== event.pointerId) return
    const body = physics.current.bodies[state.index]
    if (body) {
      Matter.Body.setStatic(body, false)
      Matter.Body.setVelocity(body, { x: Math.max(-9, Math.min(9, state.vx)), y: Math.max(-9, Math.min(9, state.vy)) })
    }
    orbRefs.current[state.index]?.classList.remove('dragging')
    state.active = false
    try { event.currentTarget.releasePointerCapture(event.pointerId) } catch { /* pointer already released */ }
  }
  const didDrag = (index) => {
    const moved = drag.current.index === index && drag.current.moved
    drag.current.moved = false
    return moved
  }

  return <section className="social-worlds" id="social"><div className="social-heading" data-reveal><p className="eyebrow">SOCIAL MEDIA, BUT NEVER ONE-SIZE-FITS-ALL</p><h2>Eight feeds.<br /><em>Eight different worlds.</em></h2><p>I’ve shaped content across automotive, interiors, travel, gifting, lighting, audio and culture. Left-drag or right-drag a world and throw it into another. Click one to visit its feed.</p></div><div className="social-arena" ref={arena} onPointerMove={spotlight} onContextMenu={(event) => event.preventDefault()}><div className="arena-core"><span>GRAB · THROW<br />WATCH THEM COLLIDE</span><i /></div>{socialWorlds.map((account, index) => <SocialCard account={account} index={index} setOrbRef={(orbIndex, node) => { orbRefs.current[orbIndex] = node }} grab={grab} move={move} release={release} didDrag={didDrag} key={account.handle} />)}</div></section>
}

function ProjectCard({ project }) {
  const image = useRef()
  const card = useRef()
  const move = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = card.current.getBoundingClientRect()
    gsap.to(image.current, { x: ((event.clientX - rect.left) / rect.width - 0.5) * 14, y: ((event.clientY - rect.top) / rect.height - 0.5) * 14, scale: 1.055, duration: 0.45 })
  }
  const leave = () => gsap.to(image.current, { x: 0, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' })
  return <a ref={card} href={project.url} target="_blank" rel="noreferrer" className={`project-card ${project.size} ${project.safe ? 'nandi-safe' : ''}`} style={{ '--card-color': project.color }} onMouseMove={move} onMouseLeave={leave}><div className="project-visual" data-cursor="OPEN"><img ref={image} src={project.image} alt={`${project.title} project cover`} loading="lazy" /><span className="project-index">{project.index}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.line}</p></div></div></a>
}

function App() {
  const root = useRef()
  const [time, setTime] = useState('')
  const [activeAudio, setActiveAudio] = useState(null)
  const activateAudio = (source) => setActiveAudio(source)
  const deactivateAudio = (source) => setActiveAudio((current) => current === source ? null : current)

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(new Date()))
    update(); const timer = setInterval(update, 30000); return () => clearInterval(timer)
  }, [])

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const context = gsap.context(() => {
      gsap.from('.floating-nav', { y: -60, opacity: 0, duration: 1, delay: 1.35, ease: 'back.out(1.4)' })
      gsap.from('.hero-kicker, .hero-title span, .tape-player, .hero-side, .hero-topline', { y: 50, opacity: 0, stagger: 0.09, duration: 1.05, delay: 1.35, ease: 'power3.out' })
      gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } })
      gsap.to('.cloud-one', { xPercent: 18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.cloud-two', { xPercent: -20, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.hero-title', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.utils.toArray('[data-reveal]').forEach((element) => gsap.from(element, { y: 55, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 87%' } }))
      gsap.utils.toArray('.project-card').forEach((card, index) => gsap.from(card, { y: 70, opacity: 0, rotate: index % 2 ? 1.6 : -1.6, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%' } }))
      gsap.to('.arena-core i', { rotate: 360, duration: 18, repeat: -1, ease: 'none' })
    }, root)
    return () => context.revert()
  }, [])

  return <div ref={root}>
    <Preloader /><Cursor /><div className="scroll-progress" />
    <nav className="floating-nav" aria-label="Main navigation"><a href="#top" className="mini-avatar" aria-label="Harsh Rawat home">HR</a><a href="#work">Work</a><a href="#films">Motion</a><a href="#social">Social</a><a href="/Harsh-Rawat-CV.pdf" download className="nav-action" aria-label="Download Harsh Rawat résumé"><Download size={15} /><span>Résumé</span></a><a href="https://wa.me/919899780749?text=Hi%20Harsh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk." target="_blank" rel="noreferrer" className="nav-action whatsapp" aria-label="Message Harsh on WhatsApp"><MessageCircle size={16} /><span>WhatsApp</span></a><a href="#contact" className="nav-cta"><Mail size={16} /> Work with me</a></nav>
    <main>
      <section className="hero" id="top"><div className="grain" /><div className="hero-topline"><span><MapPin size={18} /> NEW DELHI, INDIA</span><span>IST {time}</span></div><div className="sun"><i /></div><div className="tool-sticker sticker-pr">Ps</div><div className="tool-sticker sticker-ae">Ae</div><div className="cloud cloud-one" /><div className="cloud cloud-two" /><div className="hero-side">DESIGN&nbsp; / &nbsp;MOTION&nbsp; / &nbsp;STORY</div><div className="hero-content"><p className="hero-kicker"><i /> HELLO, I’M HARSH RAWAT. A—</p><h1 className="hero-title"><span>Designer who</span><span>makes <em>noise.</em></span></h1><TapePlayer activeAudio={activeAudio} activateAudio={activateAudio} deactivateAudio={deactivateAudio} /></div><div className="hero-scroll"><span>Scroll for the good stuff</span><ArrowDown size={18} /></div><svg className="paper-wave" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true"><path d="M0 76C163 5 256 178 443 93C617 14 695 197 884 101C1063 9 1200 145 1440 53V180H0Z" /></svg></section>

      <section className="intro" id="about"><div className="status-pill"><span className="mini-avatar">HR</span> Available for work <i /></div><div className="intro-copy" data-reveal><p className="eyebrow">THE PERSON BEHIND THE TIMELINE</p><h2>I make things people<br />don’t want to <em>skip.</em></h2><p>My route runs through e-commerce campaigns, social content systems, motion and founder-led video. Different formats, same obsession: earn the next second of attention.</p></div></section>

      <section className="work" id="work"><div className="work-heading" data-reveal><p className="eyebrow">SELECTED WORK · 2022—NOW</p><h2>A FEW THINGS I’VE<br /><em>THROWN INTO THE WORLD.</em></h2><p>Tap a card. It won’t bite. Probably.</p></div><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.title} />)}</div><a className="behance-button" href="https://www.behance.net/harsh_rawat" target="_blank" rel="noreferrer" data-cursor="MORE"><Sparkles /><span>See the full Behance archive</span><ArrowUpRight /></a></section>

      <section className="films" id="films"><div className="film-heading" data-reveal><p className="eyebrow">WHEN THE FRAME STARTS MOVING</p><h2>Editing with a<br /><em>point of view.</em></h2><p>The reel never stops—until something catches your eye. Click and drag the films in either direction, or click one to watch the full cut on YouTube.</p></div><FilmRail /></section>

      <section className="cosmetics"><div className="cosmetic-heading" data-reveal><p className="eyebrow">COSMETIC EDITING · SOUND OPTIONAL</p><h2>Beauty edits with<br /><em>good timing.</em></h2><p>Four compact experiments in product texture, rhythm and polish. They begin muted—use the sound button on any reel when you want the full cut.</p></div><div className="cosmetic-grid">{cosmeticEdits.map((edit) => <CosmeticCard edit={edit} activeAudio={activeAudio} activateAudio={activateAudio} deactivateAudio={deactivateAudio} key={edit.src} />)}</div></section>

      <SocialPlayground />

      <section className="story"><div className="story-head" data-reveal><p className="eyebrow">THE LORE, IF YOU’RE STILL READING</p><h2>Started with pixels.<br />Stayed for the <em>big ideas.</em></h2></div><div className="story-board"><article className="story-card card-cream" data-reveal><span>2022—23</span><h3>E-commerce brain</h3><p>At Jivo Wellness: paid creatives, A+ content, banners, GIFs and product storytelling built to move people toward “buy”.</p><b>01</b></article><article className="story-card card-process" data-reveal><span>THE WAY I WORK</span><div className="process-words"><i>IDEA</i><i>DESIGN</i><i>MOTION</i></div><p>One thought, pushed through every format it deserves.</p></article><article className="story-card card-blue" data-reveal><span>2023—NOW</span><h3>Strategy meets motion</h3><p>At Pure Creations: shaping content systems, brand stories, motion graphics and founder-led video from idea to final export.</p><b>02</b></article><article className="story-card card-quote" data-reveal><p>“Good design gets attention. Great design knows what to do with it.”</p><span>— MY WORKING THEORY</span></article><article className="story-card card-orange" data-reveal><span>2024</span><h3>Journalism + digital media</h3><p>A degree that sharpened the part of design I care about most: finding the story before decorating the frame.</p><b>03</b></article></div></section>

      <section className="toolbox"><div className="toolbox-copy" data-reveal><p className="eyebrow">SERVICES / SKILLS / USEFUL OBSESSIONS</p><h2>MY CREATIVE<br /><em>OPERATING SYSTEM.</em></h2></div><div className="tool-list">{['Art direction', 'Graphic design', 'Motion graphics', 'Video editing', 'Content strategy', 'Brand systems'].map((item, index) => <div data-reveal key={item}><span>0{index + 1}</span><strong>{item}</strong><i>↗</i></div>)}</div></section>

      <section className="contact" id="contact"><div className="grain" /><div className="contact-sun"><i /></div><p className="eyebrow">OPEN TO FULL-TIME ROLES & BRAVE BRIEFS</p><h2>LET’S MAKE THE<br />INTERNET <em>LESS BORING.</em></h2><p className="contact-copy">Need a designer who can think, write, animate and still name the final file properly? That sounds oddly specific. We should talk.</p><div className="contact-actions"><a href="mailto:rawat.harsh200@gmail.com" className="contact-button" data-cursor="MAIL"><Mail /><span>rawat.harsh200@gmail.com</span><ArrowUpRight /></a><a href="https://wa.me/919899780749?text=Hi%20Harsh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk." target="_blank" rel="noreferrer" className="contact-button contact-whatsapp" data-cursor="CHAT"><MessageCircle /><span>Chat on WhatsApp</span><ArrowUpRight /></a></div><div className="contact-bottom"><span>HARSH RAWAT © {new Date().getFullYear()}</span><div><a href="https://www.behance.net/harsh_rawat" target="_blank" rel="noreferrer">BEHANCE ↗</a><a href="#top">TOP ↑</a></div><span>NEW DELHI · INDIA</span></div></section>
    </main>
  </div>
}

export default App
