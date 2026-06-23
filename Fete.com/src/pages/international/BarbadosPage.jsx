export default function BarbadosPage({ onBack }) {
  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
          CROP OVER
          <span className="country-page-flag" aria-label="Barbados flag">🇧🇧</span>
        </h1>
      </header>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>
    </section>
  )
}