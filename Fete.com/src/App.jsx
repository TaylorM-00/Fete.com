import { useState } from 'react'
import './App.css'
import { WEST_INDIAN_COUNTRIES } from './data/internationalData'
import { US_STATES } from './data/domesticData'
import { PLANNING_SECTIONS } from './data/planningData'
import AntiguaBarbudaPage from './pages/international/AntiguaBarbudaPage'
import BahamasPage from './pages/international/BahamasPage'
import BarbadosPage from './pages/international/BarbadosPage'
import BelizePage from './pages/international/BelizePage'
import DominicaPage from './pages/international/DominicaPage'
import GrenadaPage from './pages/international/GrenadaPage'
import GuyanaPage from './pages/international/GuyanaPage'
import HaitiPage from './pages/international/HaitiPage'
import JamaicaPage from './pages/international/JamaicaPage'
import SaintKittsNevisPage from './pages/international/SaintKittsNevisPage'
import SaintLuciaPage from './pages/international/SaintLuciaPage'
import SaintVincentGrenadinesPage from './pages/international/SaintVincentGrenadinesPage'
import SurinamePage from './pages/international/SurinamePage'
import TrinidadPage from './pages/international/TrinidadPage'
import NycPage from './pages/domestic/NycPage'
import NewYorkStatePage from './pages/domestic/NewYorkStatePage'

const TABS = ['International', 'Domestic', 'Planning']

const CONTENT = {
  International: WEST_INDIAN_COUNTRIES,
  Domestic: US_STATES,
  Planning: [],
}

const INTERNATIONAL_PAGE_KEY_BY_NAME = {
  'Antigua & Barbuda': 'antigua-and-barbuda',
  Bahamas: 'bahamas',
  Barbados: 'barbados',
  Belize: 'belize',
  Dominica: 'dominica',
  Grenada: 'grenada',
  Guyana: 'guyana',
  Haiti: 'haiti',
  Jamaica: 'jamaica',
  'Saint Kitts & Nevis': 'saint-kitts-and-nevis',
  'Saint Lucia': 'saint-lucia',
  'Saint Vincent & the Grenadines': 'saint-vincent-and-the-grenadines',
  Suriname: 'suriname',
  'Trinidad & Tobago': 'trinidad',
}

function App() {
  const [activeTab, setActiveTab] = useState('International')
  const [activeSection, setActiveSection] = useState(null)
  const [activePage, setActivePage] = useState(null)
  const [domesticSearch, setDomesticSearch] = useState('')
  const normalizedDomesticSearch = domesticSearch.trim().toLowerCase()
  const items = activeTab === 'Domestic'
    ? US_STATES.filter((state) => state.toLowerCase().includes(normalizedDomesticSearch))
    : CONTENT[activeTab]
  const isNewYorkCityLabel = (value) => value === 'New York' || value === 'New York City'
  const isNewYorkStateLabel = (value) => value === 'New York State'

  if (activePage === 'grenada') {
    return <GrenadaPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'barbados') {
    return <BarbadosPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'nyc') {
    return <NycPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'new-york-state') {
    return <NewYorkStatePage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'trinidad') {
    return <TrinidadPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'belize') {
    return <BelizePage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'dominica') {
    return <DominicaPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'antigua-and-barbuda') {
    return <AntiguaBarbudaPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'bahamas') {
    return <BahamasPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'guyana') {
    return <GuyanaPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'haiti') {
    return <HaitiPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'jamaica') {
    return <JamaicaPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'saint-kitts-and-nevis') {
    return <SaintKittsNevisPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'saint-lucia') {
    return <SaintLuciaPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'saint-vincent-and-the-grenadines') {
    return <SaintVincentGrenadinesPage onBack={() => setActivePage(null)} />
  }

  if (activePage === 'suriname') {
    return <SurinamePage onBack={() => setActivePage(null)} />
  }

  return (
    <main className="page-shell">
      <header className="party-sign">
        <h1>The Adventure Starts Here</h1>
      </header>

      <nav className="page-nav" aria-label="Main navigation">
        <div className="tab-bar" role="tablist" aria-label="Pages">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => {
                setActiveTab(tab)
                setActiveSection(null)
                if (tab !== 'Domestic') {
                  setDomesticSearch('')
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {activeTab === 'Planning' && (
        <section className="planning-panel" aria-label="Planning options">
          <div className="planning-buttons">
            {PLANNING_SECTIONS.map((section) => (
              <button
                key={section.id}
                className={`planning-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <span className="planning-btn-emoji" aria-hidden="true">{section.emoji}</span>
                {section.label}
              </button>
            ))}
          </div>

          {activeSection && (
            <div className="planning-detail" key={activeSection}>
              <p>{PLANNING_SECTIONS.find(s => s.id === activeSection)?.description}</p>
            </div>
          )}
        </section>
      )}

      {items.length > 0 && activeTab !== 'Planning' && (
        <section className="location-panel" aria-label={`${activeTab} locations`}>
          {activeTab === 'Domestic' && (
            <div className="domestic-search-wrap">
              <input
                type="text"
                className="domestic-search-input"
                placeholder="Search states..."
                value={domesticSearch}
                onChange={(event) => setDomesticSearch(event.target.value)}
                aria-label="Search domestic states"
              />
            </div>
          )}
          <ul className="location-list">
            {items.map((item) => {
              const key   = typeof item === 'string' ? item : item.name
              const label = typeof item === 'string'
                ? item
                : <><span className="country-flag" aria-hidden="true">{item.flag}</span>{item.name}</>
              const internationalPageKey = typeof item !== 'string' ? INTERNATIONAL_PAGE_KEY_BY_NAME[item.name] : null
              const isClickable = (
                (activeTab === 'International' && typeof item !== 'string' && Boolean(internationalPageKey)) ||
                (activeTab === 'Domestic' && (isNewYorkCityLabel(item) || isNewYorkStateLabel(item)))
              )
              const pageKey = internationalPageKey ?? (
                isNewYorkCityLabel(item)
                  ? 'nyc'
                  : isNewYorkStateLabel(item)
                    ? 'new-york-state'
                    : null
              )
              const isTrinidad = activeTab === 'International' && typeof item !== 'string' && item.name === 'Trinidad & Tobago'
              return (
                <li key={key}
                  className={`location-item ${isClickable ? 'clickable' : ''} ${isTrinidad ? 'trinidad-item' : ''}`}
                  onClick={isClickable ? () => setActivePage(pageKey) : undefined}
                  role={isClickable ? 'button' : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  onKeyDown={isClickable ? (e) => e.key === 'Enter' && setActivePage(pageKey) : undefined}
                >
                  {label}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {items.length === 0 && activeTab === 'Domestic' && (
        <section className="location-panel" aria-label="Domestic search results">
          <div className="domestic-search-wrap">
            <input
              type="text"
              className="domestic-search-input"
              placeholder="Search states..."
              value={domesticSearch}
              onChange={(event) => setDomesticSearch(event.target.value)}
              aria-label="Search domestic states"
            />
          </div>
          <p className="no-results">No states match that search.</p>
        </section>
      )}
    </main>
  )
}

export default App
