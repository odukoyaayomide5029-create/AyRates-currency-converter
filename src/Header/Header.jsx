import {Link, NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { Home, Menu, X } from 'lucide-react'
import './header.css'

export function Header() {
  const [nightMode, setNightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
    if (nightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [nightMode]);

  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="logo">AY</span>
        <span className="name">AYRates</span>
      </Link>

      <nav className="nav">
        <NavLink to="/About" className="nav-link">About Us</NavLink>
        <Link to="/" className="home-icon" aria-label="Home">
          <Home size={24} />
        </Link>
        <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={26} />
        </button>
      </nav>

      <div className={`side-panel-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <div className="side-panel" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>

          <p className="panel-brand">
            <span className="panel-logo">AY</span>
            AYRates
          </p>

          <Link to="/liverates" onClick={() => setMenuOpen(false)}>Live Currency Rates</Link>
           <Link to="/livecrypto" onClick={() => setMenuOpen(false)}>Live Crypto Rates</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
           <Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>


          <label className="night-toggle">
            <span className="toggle-label">Night Mode</span>
            <span className={`switch ${nightMode ? 'on' : ''}`}>
              <input
                type="checkbox"
                checked={nightMode}
                onChange={() => setNightMode(!nightMode)}
              />
              <span className="knob"></span>
            </span>
          </label>
        </div>
      </div>
    </header>
  )
}
