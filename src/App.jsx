import { useState } from 'react'
import shaynaPhoto from './assets/photos/shayna-main-pic.JPEG'
import './App.css'

function App() {
  const [tab, setTab] = useState('tribute')

  return (
    <div className="tribute">
      <nav className="tab-nav">
        <button
          className={`tab-btn${tab === 'tribute' ? ' active' : ''}`}
          onClick={() => setTab('tribute')}
        >
          Tribute
        </button>
        <button
          className={`tab-btn${tab === 'gallery' ? ' active' : ''}`}
          onClick={() => setTab('gallery')}
        >
          Gallery
        </button>
      </nav>

      {tab === 'gallery' && (
        <div className="coming-soon">
          <span className="coming-soon-paw">&#x1F43E;</span>
          <h2>Coming Soon</h2>
          <p>Photos of Shayna will be added here.</p>
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

        <div className="scene-break">
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
      </footer>
      </>}
    </div>
  )
}

export default App
