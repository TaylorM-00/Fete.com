import { useState } from 'react'

const DATE_TABS = ['Dates', 'Dates', 'Dates', 'Dates']

export default function TrinidadPage({ onBack }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="country-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <header className="country-page-header">
        <h1>
           Trinidad and Tobago Carnival
          <span className="country-page-flag" aria-label="Trinidad and Tobago flag">🇹🇹</span>
        </h1>
      </header>

     <div className="country-page-section">
        <h2 className="section-heading">Dates</h2>
      </div>
      
    </section>
  )
}