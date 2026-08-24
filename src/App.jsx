import { useState, useEffect } from 'react'

import { Routes, Route } from "react-router-dom";
import { Homepage } from './homepage/homepage.jsx'
import { About } from './About/about.jsx'
import { LiveCurrencyRates } from './live currency rates/livecurrency.jsx'
import { LiveCryptoRates } from './livecryptorates/livecryptorates.jsx'
import { PrivacyPolicy } from './privacy-policy/privacypolicy.jsx';
import './App.css'
import axios from "axios"


const popularCurrencies = {
  ngn: 'Nigerian Naira',
  usd: 'US Dollar',
  gbp: 'British Pound',
  eur: 'Euro',
  ghs: 'Ghanaian Cedi',
  xof: 'CFA Franc',
  zar: 'South African Rand',
  cny: 'Chinese Yuan',
  cad: 'Canadian Dollar',
  aed: 'UAE Dirham',
  inr: 'Indian Rupee',
  jpy: 'Japanese Yen',
  chf: 'Swiss Franc',
  aud: 'Australian Dollar',
  egp: 'Egyptian Pound',
  kes: 'Kenyan Shilling',
  sar: 'Saudi Riyal',
  sek: 'Swedish Krona',
  sgd: 'Singapore Dollar',
  mad: 'Moroccan Dirham',
  rub: 'Russian Ruble',
  brl: 'Brazilian Real',
  mxn: 'Mexican Peso',
  nzd: 'New Zealand Dollar',
  thb: 'Thai Baht',
  try: 'Turkish Lira',
  pkr: 'Pakistani Rupee',
  ugx: 'Ugandan Shilling',
  tzs: 'Tanzanian Shilling',
  xaf: 'CFA Franc (Central Africa)',
  dzd: 'Algerian Dinar'
}

const popularCryptos = {
  btc: 'Bitcoin',
  usdt: 'Tether',
  eth: 'Ethereum',
  bnb: 'Binance Coin',
  usdc: 'USD Coin',
  xrp: 'XRP',
  sol: 'Solana',
  ton: 'Toncoin',
  ada: 'Cardano',
  doge: 'Dogecoin',
  trx: 'Tron',
  matic: 'Polygon',
  dot: 'Polkadot',
  ltc: 'Litecoin',
  shib: 'Shiba Inu',
  avax: 'Avalanche',
  link: 'Chainlink',
  bch: 'Bitcoin Cash'
}

function App() {
  const [fetchError, setFetchError] = useState(false)
  const [nairaRates, setNairaRates] = useState({})
  const [cryptoRates, setCryptoRates] = useState({})
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true)

  async function getNGNRates() {
    setFetchError(false)
    setLoading(true)
      
    try {
      const res = await axios.get(`https://latest.currency-api.pages.dev/v1/currencies/ngn.json`)
      
      const ngnRates = res.data.ngn

      const currency = {}
      const crypto = {}

      Object.keys(popularCurrencies).forEach((code) => {
        if (ngnRates[code]) {
          currency[code] = 1 / ngnRates[code]
        }
      })

      Object.keys(popularCryptos).forEach((code) => {
        if (ngnRates[code]) {
          crypto[code] = 1 / ngnRates[code]
        }
      })

      setNairaRates(currency)
      setCryptoRates(crypto)
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to fetch NGN rates:', error)
      setFetchError(true)
    }
    finally {
  setLoading(false)
  
}
  }
  useEffect(() => {
    getNGNRates();
    const interval = setInterval(() => { getNGNRates(); }, 100000)
    return () => { clearInterval(interval); }
  },[])
 
  return (
    <Routes>
      <Route path="/" element={<Homepage popularCurrencies= {popularCurrencies} fetchError={fetchError}
      lastUpdated={lastUpdated}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/liverates" element={<LiveCurrencyRates nairaRates={nairaRates}
        fetchError={fetchError}
        lastUpdated={lastUpdated}
        popularCurrencies={popularCurrencies}
         loading={loading}
      />} />
      <Route path="/livecrypto" element={<LiveCryptoRates nairaRates={nairaRates}
        cryptoRates={cryptoRates}
        fetchError={fetchError}
        lastUpdated={lastUpdated}
        popularCryptos={popularCryptos}
         loading={loading} />} />
        <Route path="/" element={<Homepage popularCurrencies= {popularCurrencies} fetchError={fetchError}/>}
         />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
