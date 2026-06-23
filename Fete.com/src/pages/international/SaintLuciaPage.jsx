export default function SaintLuciaPage({ onBack }) {
  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
          Lucian Carnival
          <span className="country-page-flag" aria-label="Saint Lucia flag">🇱🇨</span>
        </h1>
      </header>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>
    </section>
  )
}