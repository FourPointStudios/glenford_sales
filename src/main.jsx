import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Cable,
  Check,
  ExternalLink,
  Headphones,
  Mail,
  Menu,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import './styles.css'

const AMAZON_STORE = 'https://www.amazon.com/s?me=A3ADPBNFV3XPSC&marketplaceID=ATVPDKIKX0DER'

const products = [
  {
    asin: 'B07SZHNRVN',
    fit: 'double',
    fitLabel: 'Double muff',
    connector: 'Female 4-pin XLR',
    system: 'Clear-Com',
    title: 'Clear-Com Double-Muff Headset',
    description: 'Full over-ear coverage with a female four-pin XLR connector for compatible Clear-Com intercom equipment.',
    image: '/images/double-muff-headset.webp',
    alt: 'Double-muff communication headset with boom microphone',
    imageMode: 'headset-only',
    url: 'https://www.amazon.com/Double-Intercom-Headphones-Connector-Clearcom/dp/B07SZHNRVN/',
  },
  {
    asin: 'B09H3V45W4',
    fit: 'double',
    fitLabel: 'Double muff',
    connector: 'Male 5-pin XLR',
    system: 'RTS stereo',
    title: 'RTS Double-Muff Stereo Headset',
    description: 'Double-muff stereo monitoring with a male five-pin XLR connector for compatible RTS intercom equipment.',
    image: '/images/double-muff-headset.webp',
    alt: 'Double-muff stereo communication headset with boom microphone',
    imageMode: 'full-product',
    url: 'https://www.amazon.com/Double-Intercom-Headphones-Connector-Stereo/dp/B09H3V45W4/',
  },
  {
    asin: 'B09B1J3TQ1',
    fit: 'single',
    fitLabel: 'Single muff',
    connector: 'Male 5-pin XLR',
    system: 'Intercom',
    title: 'Male 5-Pin Single-Muff Headset',
    description: 'One-ear monitoring with a male five-pin XLR connector. Verify the connector and pinout required by your system.',
    image: '/images/single-muff-headset.jpg',
    alt: 'Single-muff communication headset with boom microphone',
    imageMode: 'headset-only',
    url: 'https://www.amazon.com/Single-Intercom-Headset-Clearcom-Headphone/dp/B09B1J3TQ1/',
  },
  {
    asin: 'B09F3VLZ6N',
    fit: 'single',
    fitLabel: 'Single muff',
    connector: 'Female 4-pin XLR',
    system: 'Clear-Com',
    title: 'Clear-Com Single-Muff Headset',
    description: 'Single-ear coverage with a female four-pin XLR connector for compatible Clear-Com intercom equipment.',
    image: '/images/single-muff-headset.jpg',
    alt: 'Single-muff communication headset with boom microphone and female four-pin XLR connector',
    imageMode: 'full-product',
    url: 'https://www.amazon.com/Clearcom-Intercom-Headset-Connector-Headphone/dp/B09F3VLZ6N/',
  },
  {
    asin: 'B0CD4QNL6N',
    fit: 'single',
    fitLabel: 'Single muff',
    connector: 'Male 4-pin XLR',
    system: 'RTS',
    title: 'RTS Single-Muff Headset',
    description: 'One-ear monitoring with an installed male four-pin XLR connector for compatible RTS intercom equipment.',
    image: '/images/single-muff-headset.jpg',
    alt: 'Single-muff communication headset with boom microphone',
    imageMode: 'headset-only',
    url: 'https://www.amazon.com/Single-Intercom-Headphones-Connector-Installed/dp/B0CD4QNL6N/',
  },
]

const faqs = [
  {
    question: 'How do I choose between a 4-pin and 5-pin XLR headset?',
    answer: 'Match the headset connector and wiring requirements to the exact intercom equipment you use. Confirm the connector gender, pin count and system documentation before ordering.',
  },
  {
    question: 'What is the difference between single-muff and double-muff headsets?',
    answer: 'A single-muff headset covers one ear and leaves the other open to the room. A double-muff headset covers both ears for greater acoustic isolation.',
  },
  {
    question: 'Where are Glenford Sales headsets purchased?',
    answer: 'This website helps you compare configurations, then sends you to the corresponding Amazon listing for current pricing, availability, checkout and fulfillment.',
  },
  {
    question: 'Does GlenfordSales.com show current prices and inventory?',
    answer: 'No. Current pricing, availability, delivery estimates and marketplace policies are shown on the linked Amazon product pages.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const visibleProducts = useMemo(
    () => (filter === 'all' ? products : products.filter((product) => product.fit === filter)),
    [filter],
  )

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="market-strip">Professional communication headsets | Purchase through trusted marketplaces</div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Glenford Sales home" onClick={closeMenu}>
          <span className="brand-mark">GS</span>
          <span>
            <strong>Glenford Sales</strong>
            <small>Communication headsets</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} id="primary-navigation" aria-label="Primary navigation">
          <a href="#products" onClick={closeMenu}>Compare headsets</a>
          <a href="#fit-guide" onClick={closeMenu}>Fit guide</a>
          <a href="#faq" onClick={closeMenu}>Questions</a>
          <a className="store-button" href={AMAZON_STORE} target="_blank" rel="noopener noreferrer">
            Amazon store <ExternalLink size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="page-shell hero-content">
            <p className="eyebrow">Comfort. Function. Price.</p>
            <h1 id="hero-title">Professional Communication Headsets</h1>
            <p>Compare single-muff and double-muff headsets with clearly labeled 4-pin and 5-pin XLR connector options.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">Compare five models</a>
              <a className="button button-secondary" href={AMAZON_STORE} target="_blank" rel="noopener noreferrer">
                Browse Amazon <ExternalLink size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="compatibility" aria-label="Headset range highlights">
          <div className="page-shell compatibility-grid">
            <div><Headphones aria-hidden="true" /><span><strong>Single + double muff</strong><small>Choose the coverage you need</small></span></div>
            <div><Cable aria-hidden="true" /><span><strong>4-pin + 5-pin XLR</strong><small>Connector options clearly labeled</small></span></div>
            <div><SlidersHorizontal aria-hidden="true" /><span><strong>Multiple configurations</strong><small>Compare before leaving the site</small></span></div>
            <div><ShoppingBag aria-hidden="true" /><span><strong>Amazon checkout</strong><small>Current pricing and fulfillment</small></span></div>
          </div>
        </section>

        <section className="products section-pad" id="products" aria-labelledby="products-title">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Five current configurations</p>
                <h2 id="products-title">Choose by coverage and connector.</h2>
              </div>
              <p>Use the labels below to narrow the range. Confirm your equipment's connector gender, pin count and wiring requirements before ordering.</p>
            </div>

            <div className="filter-bar" aria-label="Filter headset models">
              <span>Show:</span>
              <div className="segment" role="group" aria-label="Headset coverage filter">
                <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>All models</button>
                <button type="button" aria-pressed={filter === 'single'} onClick={() => setFilter('single')}>Single muff</button>
                <button type="button" aria-pressed={filter === 'double'} onClick={() => setFilter('double')}>Double muff</button>
              </div>
            </div>

            <div className="product-grid" aria-live="polite">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.asin}>
                  <div className={`product-image ${product.imageMode}`}>
                    <img src={product.image} alt={product.alt} loading="lazy" />
                  </div>
                  <div className="product-copy">
                    <div className="product-tags" aria-label="Product attributes">
                      <span>{product.fitLabel}</span>
                      <span>{product.connector}</span>
                    </div>
                    <p className="system-label">{product.system}</p>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a className="product-link" href={product.url} target="_blank" rel="noopener noreferrer">
                      View on Amazon <ExternalLink size={16} aria-hidden="true" />
                    </a>
                    <small className="asin">Amazon ASIN: {product.asin}</small>
                  </div>
                </article>
              ))}
            </div>

            <p className="marketplace-note">Prices, inventory, delivery estimates, returns and marketplace terms are provided by Amazon and may change.</p>
          </div>
        </section>

        <section className="fit-guide" id="fit-guide" aria-labelledby="guide-title">
          <div className="page-shell fit-grid">
            <div className="fit-image">
              <img src="/images/single-muff-headset.jpg" alt="Close view of a single-muff communication headset and four-pin XLR connector" loading="lazy" />
            </div>
            <div className="fit-copy">
              <p className="section-kicker">A quick fit guide</p>
              <h2 id="guide-title">Three details make the decision clearer.</h2>
              <ol>
                <li><span>01</span><div><h3>Choose ear coverage</h3><p>Single muff keeps one ear open to the room. Double muff covers both ears for more acoustic isolation.</p></div></li>
                <li><span>02</span><div><h3>Match the connector</h3><p>Confirm whether your equipment requires a male or female XLR connection and whether it uses four or five pins.</p></div></li>
                <li><span>03</span><div><h3>Verify the system</h3><p>Check the equipment documentation or existing headset pinout. Similar-looking connectors do not by themselves confirm compatibility.</p></div></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="why section-pad" aria-labelledby="why-title">
          <div className="page-shell why-grid">
            <div>
              <p className="section-kicker">A focused product guide</p>
              <h2 id="why-title">Specialist products without a complicated storefront.</h2>
            </div>
            <div className="why-points">
              <p><Check size={19} aria-hidden="true" /><span>Compare the five primary configurations in one place.</span></p>
              <p><Check size={19} aria-hidden="true" /><span>Go directly to the matching Amazon listing.</span></p>
              <p><Check size={19} aria-hidden="true" /><span>Use Amazon for current pricing, checkout and fulfillment information.</span></p>
            </div>
          </div>
        </section>

        <section className="faq section-pad" id="faq" aria-labelledby="faq-title">
          <div className="page-shell faq-grid">
            <div>
              <p className="section-kicker">Buying questions</p>
              <h2 id="faq-title">Before you order</h2>
              <p className="faq-intro">Still unsure which configuration matches your equipment? Ask before ordering.</p>
              <a className="text-link" href="mailto:glenfordsales@hotmail.com?subject=Headset%20compatibility%20question">
                <Mail size={17} aria-hidden="true" /> Email Glenford Sales
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="store-cta" aria-labelledby="store-title">
          <div className="page-shell store-grid">
            <div>
              <p className="section-kicker">Ready to shop?</p>
              <h2 id="store-title">Browse all Glenford Sales listings on Amazon.</h2>
            </div>
            <a className="button button-dark" href={AMAZON_STORE} target="_blank" rel="noopener noreferrer">
              Visit the Amazon store <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand">
            <span className="brand-mark">GS</span>
            <span><strong>Glenford Sales</strong><small>Communication headsets</small></span>
          </div>
          <div>
            <span>Product questions</span>
            <a href="mailto:glenfordsales@hotmail.com">glenfordsales@hotmail.com</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Glenford Sales</p>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
