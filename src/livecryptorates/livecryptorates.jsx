

import {Header} from '../Header/Header'
import {Footer} from '../assets/Footer'
import {Spinner} from '../assets/spinner'
import './livecryptorates.css'


export function LiveCryptoRates({cryptoRates, popularCryptos ,fetchError,lastUpdated,loading}){
return(
<>
<Header/>
<main className="crypto-page">
  <h1 className="rates-title">Live Crypto Rates</h1>
  <p className="rates-subtitle">Crypto prices in Nigerian Naira, refreshed automatically</p>

  {lastUpdated && (
    <p className="update-time">
      <span className="pulse-dot" aria-hidden="true"></span>
      Last updated: {lastUpdated.toLocaleTimeString()}
    </p>)}

  <div className="liverates-container">
    {loading && <Spinner />}

    {!loading && fetchError && <p className="rates-error">Couldn't load live rates. Please try again later.</p>}
    {!loading && Object.entries(cryptoRates).map(([code, value]) => (
      <div key={code} className="rates-container">
        <span className="currency-code">{code.toUpperCase()}</span>
        <div className="rates-text">
          <p className="currency-name">{popularCryptos[code]}</p>
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
