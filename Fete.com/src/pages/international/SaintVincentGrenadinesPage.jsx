export default function SaintVincentGrenadinesPage({ onBack }) {
  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
          Vincy Mas
          <span className="country-page-flag" aria-label="Saint Vincent and the Grenadines flag">🇻🇨</span>
        </h1>
      </header>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>
    </section>
  )
}