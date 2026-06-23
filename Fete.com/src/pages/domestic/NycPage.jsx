const BOROUGHS = ['The Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island']

export default function NycPage({ onBack }) {
  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
          NEW YORK CITY
          <span className="country-page-flag" aria-label="New York City icon">🏙️</span>
        </h1>
      </header>

      <div className="country-page-section">
       
        <ul className="borough-list">
          {BOROUGHS.map((borough) => (
            <li key={borough} className="borough-item">
              {borough}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}