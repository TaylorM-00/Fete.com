export default function BelizePage({ onBack }) {
  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
          The Carnival Road March
          <span className="country-page-flag" aria-label="Belize flag">🇧🇿</span>
        </h1>
      </header>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div >

      <div className="country-page-header">
        <h1>
        El Gran Carnival de San Pedro
          <span className="country-page-flag" aria-label="Belize flag">🇧🇿</span>
        </h1>
      </div>
      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>
    </section>
  )
}