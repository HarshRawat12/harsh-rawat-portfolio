import { ArrowUpRight, ChevronLeft, ChevronRight, Clapperboard, Grid3X3, Heart, Instagram, Play, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import brandMedia from './brandMedia.json'
import './brandProfiles.css'

const featured = [
  { slug: 'ariseol', accountIndex: 1, short: 'Ariseol', displayName: 'Ariseol', avatar: '/brand-showcase/profile-pictures/ariseol.jpg', strategy: ['Lead with care for the rider, not a race for top speed. Show how the brand thinks about keeping an engine healthy over the long run, with protection suited to Indian roads and everyday riding.', 'Make each post feel like a practical conversation with someone who understands their bike. Explain maintenance in clear language, bring attention back to the rider and the engine, and build trust through consistency. Keep the tone reassuring and grounded.'], pillars: ['Engine longevity', 'Indian conditions', 'Rider-first care'], closingLine: 'Care for the ride starts under the hood.', stats: { posts: '95', followers: '1,830', following: '1' }, bio: ['Smart Lubricants. Tough Protection.', '🏍️ We protect what moves India.', '🍎 Rise to Every Drive.', '#EngineOils'], website: 'linktr.ee/ariseol.india' },
  { slug: 'westin', accountIndex: 2, short: 'Westin', displayName: 'Westin Buildchem', avatar: '/brand-showcase/profile-pictures/westin.png', strategy: ['Start with the surface or site question people can see: what needs to be prepared, installed or finished? Turn that starting point into clear content that helps people understand where a building solution fits into the work.', 'Show the process alongside the finished space, so builders, applicators and homeowners can follow each step and picture the result. Keep explanations useful and confident; let application details and the quality of the finish make the story tangible.'], pillars: ['Surface problems', 'Application tips', 'Finished spaces'], closingLine: 'The right surface changes everything.', category: 'Building Materials', stats: { posts: '139', followers: '444', following: '0' }, bio: ['Complete Building Solutions | Italian Technology IT', 'Tiling solution · Decorative & Graffiti Paints · Timber · Kitchen…'] },
  { slug: 'travel-buddy', accountIndex: 4, short: 'Travel Buddy', displayName: 'TravelBuddy', avatar: '/brand-showcase/profile-pictures/travel-buddy.jpg', strategy: ['Lead with the feeling of setting out and the bag that goes along. Build stories from familiar travel moments: choosing luggage, packing for a few days away, moving through a station or arriving somewhere new.', 'Balance destination-led inspiration with close, useful views of the luggage, so the product feels easy to understand and choose. Keep the voice warm and upbeat; the bag supports the journey while the journey stays in focus.'], pillars: ['Trip inspiration', 'Luggage in use', 'Ready to go'], closingLine: 'The journey starts with what you carry.', category: 'Bags & Luggage Company', stats: { posts: '105', followers: '518', following: '106' }, bio: ['Making Your Travel Worry-free!', 'H-2, Bawana Industrial Area Sector 2, Delhi, India 110039'], website: 'www.travelbuddyindia.in' },
  { slug: 'uk-gift', accountIndex: 6, short: 'UK Gifts', avatar: '/brand-showcase/profile-pictures/uk-gift.png', avatarMode: 'contain', strategy: ['Make gifting across distance feel warm and straightforward. Put occasions like Rakhi at the center, then help people explore the range—from kids’ designs and individual styles to coordinated sets and gift pairings.', 'Keep each story easy to scan: name the occasion, show the gift clearly and surface delivery details early. The mood should feel affectionate and celebratory, while practical cues make choosing and sending a thoughtful gift feel simple.'], pillars: ['Seasonal moments', 'Gift discovery', 'Delivery clarity'], closingLine: 'Tradition, sent with love.', category: 'E-commerce website', stats: { posts: '243', followers: '750', following: '5' }, bio: ['😍Buy and Send Rakhi to India UK USA Australia Canada & Europe😍', '🟨 Exclusive Rakhi', '🟨 Kids Rakhi', '🟨 Rakhi Set', '🟨 Rakhi with Choco… more'], website: 'ukgiftsportal.co.uk' },
  { slug: 'wisdom-genie', accountIndex: 0, short: 'Wisdom Genie', avatar: '/brand-showcase/profile-pictures/wisdom-genie.png', strategy: ['Bring Lumi, Orbi, Tara and Neil into short stories that begin with curiosity. Let a character ask a question, notice a feeling or face a choice, then invite children to think through what matters to them before the story offers a conclusion.', 'Keep the spiritual thread open and non-religious, grounded in reflection and rational thought. Stories can help children consider different points of view, trust their own reasoning and understand that thoughtful decisions come from exploration—not simply labeling an answer right or wrong.'], pillars: ['Self-discovery', 'Reasoned thinking', 'Independent choices'], closingLine: 'Curiosity before conclusions.', category: 'Non-Governmental Organization (NGO)', stats: { posts: '22', followers: '8', following: '1' }, bio: ['✨ Introducing children to their inner self', '💜 Mindful stories & soulful learning', '🌙 Guided by Lumi', '👨‍👩‍👧 For conscious… more'] },
]

function orderedPosts(slug) {
  const images = brandMedia[slug].filter((item) => item.type === 'image')
  const reels = brandMedia[slug].filter((item) => item.type === 'video')
  const reelPositions = reels.map((_, index) => Math.round(((index + 1) * images.length) / (reels.length + 1)) - 1)
  const posts = []
  let reelIndex = 0
  images.forEach((post, index) => {
    posts.push(post)
    if (index === reelPositions[reelIndex]) posts.push(reels[reelIndex++])
  })
  return posts
}

export default function BrandProfiles({ accounts }) {
  const [active, setActive] = useState(0)
  const [tab, setTab] = useState('posts')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [likes, setLikes] = useState({})
  const closeButton = useRef(null)
  const current = featured[active]
  const account = accounts[current.accountIndex]
  const allPosts = orderedPosts(current.slug)
  const visiblePosts = tab === 'reels' ? allPosts.filter((post) => post.type === 'video') : allPosts
  const selected = selectedIndex === null ? null : visiblePosts[selectedIndex]
  const selectedKey = `${current.slug}-${selected?.src}`

  const selectProfile = (index) => {
    setActive(index)
    setTab('posts')
    setSelectedIndex(null)
  }

  useEffect(() => {
    if (!selected) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const handleKey = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowLeft') setSelectedIndex((index) => (index - 1 + visiblePosts.length) % visiblePosts.length)
      if (event.key === 'ArrowRight') setSelectedIndex((index) => (index + 1) % visiblePosts.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', handleKey) }
  }, [selected, visiblePosts.length])

  return <section className="brand-showcase" id="brand-profiles" style={{ '--profile-accent': account.color, '--profile-ink': account.ink }}>
    <div className="brand-showcase-heading" data-reveal>
      <div><p className="eyebrow">SOCIAL, UP CLOSE</p><h2>Step inside<br /><em>the feed.</em></h2></div>
      <p>Five brands, five visual languages. Switch accounts, explore the posts, and open a reel to see the work in motion.</p>
    </div>

    <div className="brand-switcher" role="tablist" aria-label="Featured brand profiles">
      {featured.map((profile, index) => {
        const item = accounts[profile.accountIndex]
        return <button key={profile.slug} type="button" role="tab" aria-selected={active === index} aria-controls="featured-profile" className={`brand-switch ${active === index ? 'active' : ''}`} style={{ '--switch-accent': item.color }} onClick={() => selectProfile(index)}>
          <span className={`brand-switch-image ${profile.avatarMode === 'contain' ? 'uk-gift-avatar' : ''}`}><img src={profile.avatar} alt="" loading="lazy" /></span>
          <span><strong>{profile.short}</strong><small>{item.lane}</small></span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      })}
    </div>

    <div className="brand-experience" id="featured-profile" role="tabpanel" aria-label={`${account.name} profile preview`}>
      <aside className="brand-editorial" data-watermark={current.displayName || account.name}>
        <span className="brand-editorial-index">0{active + 1} / 05 &nbsp;·&nbsp; FEATURED ACCOUNT</span>
        <div className="brand-editorial-images" aria-hidden="true">
          <img src={brandMedia[current.slug][3].src} alt="" loading="lazy" />
          <img src={brandMedia[current.slug][7].src} alt="" loading="lazy" />
          <img src={brandMedia[current.slug][0].src} alt="" loading="lazy" />
        </div>
        <div className="brand-editorial-copy">
        <h3>{current.displayName || account.name}</h3>
          <p>{account.lane}</p>
          <div className="brand-strategy"><span className="brand-strategy-label">SOCIAL MEDIA STRATEGY</span><div className="brand-strategy-copy">{current.strategy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="brand-strategy-pillars">{current.pillars.map((pillar) => <span key={pillar}>{pillar}</span>)}</div></div>
        </div>
        <div className="brand-editorial-bottom"><span>THE BRAND IN A LINE</span><p>{current.closingLine}</p></div>
      </aside>

      <div className="instagram-profile">
        <div className="instagram-topbar"><div className="instagram-wordmark"><Instagram size={20} /><span>instagram</span></div><span>PORTFOLIO PREVIEW <i>●</i></span></div>
        <div className="instagram-profile-head">
          <div className={`instagram-avatar ${current.avatarMode === 'contain' ? 'uk-gift-avatar' : ''}`} aria-label={`${account.name} profile picture`}><img src={current.avatar} alt="" /></div>
          <div className="instagram-profile-info">
            <div className="instagram-name-row"><h3>{account.handle.replace('@', '')}</h3><a className="instagram-follow" href={account.url} target="_blank" rel="noopener noreferrer">Follow <ArrowUpRight size={15} /></a></div>
            <div className="instagram-stats"><span><strong>{current.stats?.posts || '—'}</strong> posts</span><span><strong>{current.stats?.followers || '—'}</strong> followers</span><span><strong>{current.stats?.following || '—'}</strong> following</span></div>
            <div className="instagram-bio"><strong>{current.displayName || account.name}</strong>{current.category && <span>{current.category}</span>}{current.bio ? <div className="instagram-bio-copy">{current.bio.map((line) => <span key={line}>{line}</span>)}</div> : <small>Bio and account counts coming soon.</small>}{current.website && <a href={`https://${current.website}`} target="_blank" rel="noopener noreferrer">{current.website} ↗</a>}</div>
          </div>
        </div>
        <div className="instagram-view-tabs" role="tablist" aria-label={`${account.name} media`}>
          <button type="button" role="tab" aria-selected={tab === 'posts'} onClick={() => { setTab('posts'); setSelectedIndex(null) }}><Grid3X3 size={15} /> POSTS</button>
          <button type="button" role="tab" aria-selected={tab === 'reels'} onClick={() => { setTab('reels'); setSelectedIndex(null) }}><Clapperboard size={15} /> REELS</button>
        </div>
        <div className="instagram-grid" role="tabpanel" aria-label={tab === 'posts' ? 'Selected posts and reels' : 'Selected reels'}>
          {visiblePosts.map((post, index) => <button type="button" className="instagram-tile" onClick={() => setSelectedIndex(index)} key={post.src} aria-label={`Open ${post.type === 'video' ? 'reel' : 'post'} ${index + 1} from ${account.name}`}>
            <img src={post.poster || post.src} alt={`${account.name} ${post.type === 'video' ? 'reel preview' : 'social media post'}`} loading="lazy" />
            {post.type === 'video' && <span className="instagram-reel-mark"><Play size={17} fill="currentColor" /></span>}
            <span className="instagram-tile-hover"><Instagram size={24} /> VIEW {post.type === 'video' ? 'REEL' : 'POST'}</span>
          </button>)}
        </div>
        <p className="instagram-preview-note">Selected portfolio work · Open any post to explore</p>
      </div>
    </div>

    {selected && <div className="instagram-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedIndex(null) }}>
      <div className="instagram-modal" role="dialog" aria-modal="true" aria-label={`${account.name} ${selected.type === 'video' ? 'reel' : 'post'} preview`}>
        <button ref={closeButton} type="button" className="instagram-modal-close" aria-label="Close post" onClick={() => setSelectedIndex(null)}><X size={22} /></button>
        <div className="instagram-modal-media">{selected.type === 'video' ? <video key={selected.src} src={selected.src} poster={selected.poster} controls autoPlay playsInline /> : <img src={selected.src} alt={`${account.name} social media post`} />}</div>
        <div className="instagram-modal-side">
          <div className="instagram-modal-author"><div className={`instagram-mini-avatar ${current.avatarMode === 'contain' ? 'uk-gift-avatar' : ''}`}><img src={current.avatar} alt="" /></div><div><strong>{account.handle}</strong><small>Portfolio preview</small></div><a href={account.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${account.name} on Instagram`}><ArrowUpRight size={19} /></a></div>
          <p>Selected work for {current.displayName || account.name}.</p>
          <div className="instagram-modal-actions"><button type="button" aria-label={likes[selectedKey] ? 'Unlike post' : 'Like post'} aria-pressed={Boolean(likes[selectedKey])} onClick={() => setLikes((previous) => ({ ...previous, [selectedKey]: !previous[selectedKey] }))}><Heart size={23} fill={likes[selectedKey] ? '#ed4956' : 'none'} color={likes[selectedKey] ? '#ed4956' : 'currentColor'} /></button><span>{selectedIndex + 1} / {visiblePosts.length}</span></div>
          <div className="instagram-modal-nav"><button type="button" onClick={() => setSelectedIndex((index) => (index - 1 + visiblePosts.length) % visiblePosts.length)}><ChevronLeft size={19} /> Previous</button><button type="button" onClick={() => setSelectedIndex((index) => (index + 1) % visiblePosts.length)}>Next <ChevronRight size={19} /></button></div>
        </div>
      </div>
    </div>}
  </section>
}
