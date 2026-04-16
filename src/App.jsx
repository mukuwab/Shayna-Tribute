import { useState } from 'react'
import './App.css'

import shaynaPhoto from './assets/photos/shayna-main-pic.JPEG'
import mukuwaPhoto from './assets/photos/7E4982D2-B71F-40BC-BD27-2DF99EB835A2.JPG'
import zoePhoto from './assets/photos/Screenshot-2026-04-15-at-9.19.26-PM.png'
import robertJrPhoto from './assets/photos/46F2315A-952C-493E-B0A9-D39A1F395A83.JPG'
import zannyPhoto from './assets/photos/Screenshot-2026-04-15-at-8.29.56-PM.png'
import bestFriendPhoto from './assets/photos/E508B0D5-EAA5-4D4B-86AB-C4FE96B7A661_1_105_c.jpeg'
import bodyPhoto from './assets/photos/Screenshot-2026-04-16-at-12.21.15-AM.png'
import recentPhoto from './assets/photos/View-recent-photos.png'
import obituaryPhoto from './assets/photos/Screenshot-2026-04-16-at-12.40.38-AM.png'

const photoModules = import.meta.glob('./assets/photos/*', { eager: true })
const excludeFromGallery = ['shayna-main-pic', 'Screenshot-2026-04-16-at-12.28.31-AM', 'Screenshot-2026-04-16-at-12.21.15-AM', 'Screenshot-2026-04-16-at-12.40.38-AM']

const galleryPhotos = [
  shaynaPhoto,
  ...Object.entries(photoModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .filter(([path]) => !excludeFromGallery.some(name => path.includes(name)))
    .map(([, mod]) => mod.default),
]

const tributes = [
  {
    name: 'Mukuwa',
    photo: mukuwaPhoto,
    message: 'She was the only dog I knew who could light up an entire room with her smile. Even now, that smile lives on in our hearts.\n\nThough it hurts deeply to say goodbye, loving her was worth every moment, even the heartbreak.\n\nI love you, sweet girl. Rest in peace.',
  },
  { name: 'Zoe', photo: zoePhoto, message: 'I love you, Shayna.' },
  { name: 'Zanny', photo: zannyPhoto, message: 'Good dog!' },
  { name: 'Robert Jr.', photo: robertJrPhoto, message: 'Shayna was an awesome dog and I loved when she would stand on her hind legs when you come through the door! She was a cute dog.' },
  {
    name: "Shayna's Best Friend",
    photo: bestFriendPhoto,
    message: 'She was my best friend and companion for more years than I can count. We were rarely apart. Through every thunderstorm, every car alarm, every quiet night and restless one — she was there, and so was I. Whatever life brought, we faced it together.',
  },
]

function App() {
  const [tab, setTab] = useState('obituary')
  const [lightbox, setLightbox] = useState(null) // index or null

  function openLightbox(i) { setLightbox(i) }
  function closeLightbox() { setLightbox(null) }
  function prev() { setLightbox(i => (i - 1 + galleryPhotos.length) % galleryPhotos.length) }
  function next() { setLightbox(i => (i + 1) % galleryPhotos.length) }

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') prev()
    else if (e.key === 'ArrowRight') next()
    else if (e.key === 'Escape') closeLightbox()
  }

  return (
    <div className="tribute">
      <nav className="tab-nav">
        <button
          className={`tab-btn${tab === 'obituary' ? ' active' : ''}`}
          onClick={() => setTab('obituary')}
        >
          Obituary
        </button>
        <button
          className={`tab-btn${tab === 'tribute' ? ' active' : ''}`}
          onClick={() => setTab('tribute')}
        >
          Grandad's Farewell
        </button>
        <button
          className={`tab-btn${tab === 'gallery' ? ' active' : ''}`}
          onClick={() => setTab('gallery')}
        >
          Gallery
        </button>
        <button
          className={`tab-btn${tab === 'tributes' ? ' active' : ''}`}
          onClick={() => setTab('tributes')}
        >
          Tributes
        </button>
      </nav>

      {tab === 'obituary' && (
        <div className="obituary">
          <div className="obit-photo-wrap">
            <img src={obituaryPhoto} alt="Shayna" className="obit-photo" />
          </div>
          <h2 className="obit-name">Shayna</h2>
          <p className="obit-dates">2012 &ndash; April 16, 2026</p>
          <div className="obit-divider"><span className="paw">&#x1F43E;</span></div>
          <div className="obit-body">
            <p>
              Shayna, a beloved and spirited little dog who brought joy to everyone she met,
              was laid to rest peacefully on the morning of April 16, 2026, surrounded by
              the family she loved so deeply.
            </p>
            <p>
              For fourteen wonderful years, Shayna — a proud and spirited Yorkshire Terrier —
              was more than a pet. She was a true member of the family. From her very first
              day, she had a way of filling any room she entered with warmth, laughter, and an
              unmistakable energy that was entirely her own. Her loose, curly coat, her golden
              highlights, and her deep black eyes made her as beautiful on the outside as she
              was on the inside.
            </p>
            <p>
              Shayna spent her early years in the warm and loving home of Candace and her
              family, where her bold personality first began to bloom. Those formative years
              shaped the confident, spirited little soul she would remain for the rest of
              her life.
            </p>
            <p>
              Do not let her small size fool you — Shayna carried herself with the authority
              of a dog twice her height. At the dog park, she was not merely known; she was
              respected. Other dogs, regardless of their size, quickly learned to give her
              the room she commanded. She was feared as much as she was adored, and she wore
              that reputation with pride.
            </p>
            <p>
              She was a devoted companion to Grandma during the long, quiet hours of the day,
              and a faithful friend to Grandad on their morning walks and evening adventures.
              She stood on her hind legs to greet the people she loved, never missed a chance
              to ride with the windows down, and gave her love freely and without condition.
            </p>
            <p>
              Shayna is survived by her loving family, who will carry her memory in their
              hearts for the rest of their lives. She leaves behind not grief alone, but a
              legacy of joy, loyalty, and the kind of unconditional love that only the
              truest companions can give.
            </p>
            <p className="obit-closing">
              She was small in size, but enormous in spirit.<br />
              Run free, sweet girl. You will never be forgotten.
            </p>
          </div>
        </div>
      )}

      {tab === 'gallery' && (
        <div className="gallery">
          <h2 className="gallery-title">Shayna's Gallery</h2>
          <div className="gallery-grid">
            {galleryPhotos.map((src, i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
                <img src={src} alt={`Shayna ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'tributes' && (
        <div className="tributes">
          <h2 className="tributes-title">Tributes</h2>
          <p className="tributes-subtitle">Words of love from those who knew her.</p>
          <div className="tributes-list">
            {tributes.map((t, i) => (
              <div key={i} className="tribute-card">
                {t.photo && (
                  <div className="pinned-photo">
                    <div className="pin" />
                    <img src={t.photo} alt={`${t.name}'s photo`} />
                  </div>
                )}
                <div className="tribute-card-message">
                  {t.message.split('\n\n').map((para, j) => (
                    <p key={j}>"{para}"</p>
                  ))}
                </div>
                <p className="tribute-card-name">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox} onKeyDown={onKeyDown} tabIndex={0} ref={el => el?.focus()}>
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">&#x2715;</button>
          <button className="lb-prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">&#x2039;</button>
          <img
            src={galleryPhotos[lightbox]}
            alt={`Shayna ${lightbox + 1}`}
            className="lb-img"
            onClick={e => e.stopPropagation()}
          />
          <button className="lb-next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">&#x203a;</button>
          <div className="lb-counter">{lightbox + 1} / {galleryPhotos.length}</div>
        </div>
      )}

      {tab === 'tribute' && <>
      <header className="tribute-header">
        <div className="photo-frame">
          <img src={shaynaPhoto} alt="Shayna" className="shayna-photo" />
        </div>
        <h1 className="tribute-title">Shayna's Final Journey</h1>
        <div className="divider">
          <span className="paw">&#x1F43E;</span>
        </div>
      </header>

      <main className="tribute-body">
        <p>
          This beautiful story of my little girl Shayna is coming to an end.
        </p>

        <p>
          For fourteen years, she has been the life of our family — cute, playful, loving, and
          just a little arrogant in the most charming way. With her loose, curly hair and golden
          highlights around her chin and legs, she looked like a tiny creation of art. Her eyes —
          deep black pearls — sparkled with intelligence, mischief, and love. Wherever she went,
          she carried herself like she owned the world.
        </p>

        <p className="emphasis">And in many ways, she did.</p>

        <p>
          At the dog park, she ruled the community. Larger dogs learned quickly that size meant
          nothing to Shayna. She challenged bullies twice her height and never backed down. Dog
          owners would smile and say, "Here comes Ms. Shayna," as she trotted in with confidence
          and purpose. She was fearless. She was youthful. She was unforgettable.
        </p>

        <p>
          <div className="body-photo-wrap">
            <img src={bodyPhoto} alt="Shayna" className="body-photo" />
          </div>
          She changed me too. I was never a dog lover — until Shayna. She woke me every morning,
          insisting on walks and adventures. She waited for me before dark so we could go to the
          park. She turned routines into rituals and quiet days into joyful ones. Because of her,
          I walked more, laughed more, and slowed down enough to enjoy the simple moments.
        </p>

        <p>
          But during the daytime, she belonged to her favorite lady — Granny. Those were their
          hours together. Shayna would sit by the picture window watching the world go by, or
          follow Granny through the garden like a tiny supervisor. Sometimes they would go for
          drives, Shayna's face lifted into the wind, her fur dancing as she soaked in the rush
          of fresh air. Those were her moments of pure happiness.
        </p>

        <div className="scene-break" style={{ clear: 'both' }}>
          <span></span><span></span><span></span>
        </div>

        <p className="turning-point">Then, suddenly, everything changed.</p>

        <p>
          An injury to her upper vertebrae led to IVDD. Within days, our energetic, fearless
          little girl could no longer stand. She could not move. She needed help with everything.
          For two weeks we watched her in silence, lifting her gently, hand-feeding her, helping
          her rest. Her body was still, but her eyes — those black pearl eyes — followed us
          everywhere.
        </p>

        <p className="emphasis">She didn't understand.</p>

        <div className="stanza">
          <p>She didn't understand why she couldn't jump on the sofa.</p>
          <p>Why she couldn't run to the door.</p>
          <p>Why she couldn't greet us with spinning circles of joy.</p>
        </div>

        <p>
          She looked at us with the same love she always had — but now there was confusion.
          And we felt it in our hearts.
        </p>

        <p>
          The parks were gone. The runs were gone. The independence she cherished was gone.
          What remained was a fragile body and a spirit that still wanted to live the life
          she remembered.
        </p>

        <p className="emphasis">And so we faced the hardest decision a family can make.</p>

        <p>
          We loved her too much to let her live a life without quality. Too much to hold onto
          her for our sake alone. Friends who had known Shayna for years — who watched her rule
          the dog park — gently agreed. At fourteen years old, after a full and fearless life,
          the kindest gift we could give her was peace.
        </p>

        <p className="emphasis">It broke our hearts, but we chose love over selfishness.</p>

        <p>
          Granny and I will be there with her at the veterinarian, holding her gently, speaking
          softly, letting her know she is not alone. She will leave this world the same way she
          lived in it — surrounded by love.
        </p>

        <div className="scene-break">
          <span></span><span></span><span></span>
        </div>

        <div className="stanza">
          <p>We will miss her waking us in the morning.</p>
          <p>We will miss her waiting by the door.</p>
          <p>We will miss her fearless walks and proud little strut.</p>
          <p>We will miss the sound of her paws and the warmth of her presence.</p>
        </div>

        <p className="emphasis">
          But most of all, we will miss the love she gave without reservation.
        </p>

        <p>
          <div className="body-photo-wrap left">
            <img src={recentPhoto} alt="Shayna" className="body-photo" />
          </div>
          Thank God for giving us these beautiful animals to be part of our families. They love
          us completely, never asking for anything except our time, our care, and our hearts.
          And in return, they give us loyalty, companionship, and joy beyond words.
        </p>

        <p>
          To all pet owners — love them deeply. Walk them often. Hold them close. Because one
          day, we must return that love with courage, compassion, and the strength to do what
          is best for them.
        </p>
      </main>

      <footer className="tribute-footer">
        <div className="closing-words">
          <p>Shayna, you were small in size but enormous in spirit.</p>
          <p>You ruled the park, our home, and our hearts.</p>
        </div>
        <div className="final-words">
          <p>Run free again, little girl.</p>
          <p>Your journey continues… just on the other side.</p>
        </div>
        <div className="paw-footer">&#x1F43E;</div>
        <p className="tribute-signature">— Robert Bearden Dr. and Family</p>
      </footer>
      </>}
    </div>
  )
}

export default App
