import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [phase, setPhase] = useState('closed')
  const settleTimerRef = useRef(null)

  const whatsappLink =
    'https://wa.me/40752291659?text=O%20s%C4%83%20fiu%20al%C4%83turi%20de%20tine%20%C3%AEn%20aceast%C4%83%20zi%20important%C4%83%21'

  useEffect(() => {
    return () => {
      if (settleTimerRef.current) clearTimeout(settleTimerRef.current)
    }
  }, [])

  const openEnvelope = () => {
    if (phase !== 'closed') return

    setPhase('opening')

    // Wait until the full reveal animation finishes before settling into the final state
    settleTimerRef.current = setTimeout(() => {
      setPhase('front')
      settleTimerRef.current = null
    }, 2400)
  }

  const onEnvelopeKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openEnvelope()
    }
  }

  const letterVisible = phase !== 'closed'

  return (
    <main className="page-shell">
      <section className="invitation-experience" aria-label="Invitație aniversare Cati">
        <header className="hero-copy">
          <p className="eyebrow">Te invit la o seară specială</p>
          <h1>Patruzeci de primăveri</h1>
          <p className="subtitle">O sărbătoare intimă, alături de cei dragi.</p>
        </header>

        <div
          className={`envelope-scene ${phase}`}
          onClick={openEnvelope}
          onKeyDown={onEnvelopeKeyDown}
          role="button"
          tabIndex={0}
          aria-label={
            phase === 'closed' ? 'Apasă pentru a deschide plicul' : 'Invitația este deschisă'
          }
        >
          <div className="envelope-core" aria-hidden="true">
            <div className="envelope-pocket" />
            <div className="envelope-front" />

            {letterVisible && (
              <article className="letter" aria-hidden={phase === 'closed'}>
                <div className="letter-inner">
                  <div className="ornament" aria-hidden="true">
                    <span className="ornament-line" />
                    <svg
                      className="ornament-mark"
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <path d="M12 1l1.8 7.2L21 10l-7.2 1.8L12 19l-1.8-7.2L3 10l7.2-1.8L12 1z" />
                    </svg>
                    <span className="ornament-line" />
                  </div>

                  <h2 className="letter-title">Aniversare</h2>
                  <p className="letter-name">CATI</p>
                  <p className="letter-age">— 40 de ani —</p>

                  <div className="letter-divider" />

                  <p className="letter-date">7 MAI 2026 </p>
                  <p className="letter-day">JOI</p>

                  <p className="letter-location">
                    Strada Lăzăturii nr. 122
                    <br />
                    Tocile
                  </p>

                  <p className="letter-rsvp">Confirmarea se face până în 28 Aprilie</p>
                </div>
              </article>
            )}

            <div className="envelope-flap">
              {phase === 'closed' && (
                <div className="wax-seal" aria-hidden="true">
                  <span>C</span>
                </div>
              )}
            </div>
          </div>

          <p className="hint">
            {phase === 'closed' ? 'Apasă plicul pentru a deschide invitația' : 'Te aștept cu drag'}
          </p>
        </div>

        <a
          className={`confirm-button ${phase === 'front' ? 'is-visible' : ''}`}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          tabIndex={phase === 'front' ? 0 : -1}
          aria-hidden={phase !== 'front'}
        >
          <span className="confirm-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
              <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.46 2.04 7.76L.5 31.5l7.95-2.02A15.43 15.43 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.13c-2.51 0-4.86-.69-6.88-1.88l-.49-.29-4.72 1.2 1.26-4.6-.32-.5A12.5 12.5 0 1 1 28.5 16 12.5 12.5 0 0 1 16 28.63zm7.18-9.36c-.39-.2-2.32-1.14-2.68-1.27-.36-.13-.62-.2-.88.2s-1.01 1.27-1.24 1.53c-.23.27-.46.3-.85.1-.39-.2-1.65-.61-3.14-1.94a11.8 11.8 0 0 1-2.18-2.71c-.23-.39 0-.6.17-.8.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.27.07-.5-.03-.69-.1-.2-.88-2.13-1.21-2.91-.32-.77-.65-.66-.88-.67h-.75c-.26 0-.69.1-1.05.49-.36.39-1.38 1.34-1.38 3.27 0 1.93 1.41 3.79 1.6 4.05.2.27 2.78 4.24 6.74 5.95.94.41 1.68.65 2.25.83.95.3 1.81.26 2.49.16.76-.11 2.32-.95 2.65-1.86.33-.92.33-1.7.23-1.86-.1-.16-.36-.26-.75-.46z" />
            </svg>
          </span>
          Confirmă prin WhatsApp
        </a>
      </section>
    </main>
  )
}

export default App
