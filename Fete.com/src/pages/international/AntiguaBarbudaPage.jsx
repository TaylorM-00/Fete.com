export default function AntiguaBarbudaPage({ onBack }) {
  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
          Antigua Carnival
          <span className="country-page-flag" aria-label="Antigua and Barbuda flag">🇦🇬</span>
        </h1>
      </header>

      <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>

      <div className="country-page-header">
         <h1>
        Barbuda Caribana
          <span className="country-page-flag" aria-label="Antigua and Barbuda flag">🇦🇬</span>
        </h1>
      </div>

       <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>
    </section>

    
  )
}