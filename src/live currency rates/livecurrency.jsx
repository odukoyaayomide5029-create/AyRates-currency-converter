

import {Header} from '../Header/Header'
import {Footer} from '../assets/Footer'
import {Spinner} from '../assets/spinner'
import './livecurrencyrates.css'


export function LiveCurrencyRates({nairaRates,  popularCurrencies ,fetchError,lastUpdated,loading}){
return(
<>
<Header/>
<main className="rates-page">
  <h1 className="rates-title">Live Currency Rates</h1>
  <p className="rates-subtitle">Real-time NGN exchange rates, refreshed automatically</p>

  {lastUpdated && (
    <p className="update-time">
      <span className="pulse-dot" aria-hidden="true"></span>
      Last updated: {lastUpdated.toLocaleTimeString()}
    </p>)}

  <div className="liverates-container">
    {loading && <Spinner />}

    {!loading && fetchError && <p className="rates-error">Couldn't load live rates. Please try again later.</p>}
    {!loading && Object.entries(nairaRates).map(([code, value]) => (
      <div key={code} className="rates-container">
        <span className="currency-code">{code.toUpperCase()}</span>
        <div className="rates-text">
          <p className="currency-name">{popularCurrencies[code]}</p>
          <p className="rate-value">&#8358;{value.toFixed(2)}</p>
          <p className="per-unit">per 1 {code.toUpperCase()}</p>
        </div>
      </div>
    ))}
  </div>
</main>
<Footer/>

</>
)
}
