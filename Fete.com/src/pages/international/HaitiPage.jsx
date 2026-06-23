export default function HaitiPage({ onBack }) {
  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
          Kanaval des Fleurs 
          <span className="country-page-flag" aria-label="Haiti flag">🇭🇹</span>
        </h1>
      </header>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>

      <div className="country-page-header">
        <h1>
          RARA
          <span className="country-page-flag" aria-label="Haiti flag">🇭🇹</span>
        </h1>
      </div>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>


    <div className="country-page-header">
      <h1>
          Jacmel Kanaval
          <span className="country-page-flag" aria-label="Haiti flag">🇭🇹</span>
        </h1>
    </div>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>
    </section>
  )
}