import { useEffect, useState } from 'react'
import './homepage.css'
import axios from "axios"
import { Header } from '../Header/Header'
import { Footer } from '../assets/Footer.jsx'
import { Spinner } from '../assets/spinner'





function DisplayQuotes() {
  const [quotes, setQuotes] = useState([])
  
  const quote = [
    "The Kuwaiti Dinar is the world's most valuable currency by unit value.",
    "The US dollar makes up over half of global foreign exchange reserves.",
    "The US dollar appears in about 89% of all global currency trades.",
    "The euro is the world's second most used currency, despite being one of the youngest.",
    "About 25 countries peg their currency directly to the euro.",
    "The Swiss Franc is known as a \"safe-haven\" currency during market uncertainty.",
    "Some of the world's priciest currencies stay strong on purpose, through fixed exchange rates.",
    "A currency's price per unit doesn't determine its global influence.",
    "The British Pound is one of the oldest currencies still in use today.",
    "Four separate currencies — including the British Pound — share the exact same value as sterling.",
    "Not all money is physical — most currency today exists only as digital records.",
    "Exchange rates shift constantly, driven by trade, interest rates, and investor confidence.",
    "Some currencies are pegged, meaning their value is fixed to another currency by policy.",
    "A floating currency's value is set purely by market supply and demand.",
    "Inflation quietly erodes a currency's purchasing power over time.",
    "Central banks can influence a currency's strength through interest rate decisions.",
    "The gold standard, once the backbone of global currency, ended completely in 1971.",
    "Cryptocurrencies exist outside traditional central bank control entirely.",
    "Currency symbols like $ and £ often predate the countries that use them today.",
    "Some nations use another country's currency instead of printing their own.",
    "A stronger currency makes imports cheaper but exports more expensive.",
    "Currency trading is the largest financial market in the world by volume.",
    "Most global trade is still invoiced in US dollars, even between non-US countries.",
    "A currency's name often carries centuries of history — coins, trade routes, empires.",
    "Every exchange rate you see is a snapshot of two economies talking to each other.",
    "Naira dey talk, we dey translate.",
  "From Lagos to London — know your rate before you convert.",
  "Real-time rates, no wahala.",
  "Check am well before you swap am.",
  "Your money, your rate, your choice.",
  "Dollar dey rise, Naira dey feel am — stay updated.",
  "Convert smart, not fast.",
  "One click, correct rate, no gist.",
  "Exchange rates wey no dey lie to you.",
  "Know the rate before the rate knows you."
  ];

  useEffect(() => {
  setQuotes(quote[Math.floor(Math.random() * quote.length)])

  let interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * quote.length)
    setQuotes(quote[randomNumber])
  }, 5000)

  return () => clearInterval(interval)
}, [])
  return (
    <div className="quotes-section">
      <p className="quotes-header">Did You Know?</p>
      <p className="quotes" key={quotes}>{quotes}</p>
    </div>
  )
}
function DisplayImg(){
return(
<div className="whatweoffer" id="offers">
<div className="image-header"><h2>WHAT WE OFFER</h2></div>
<div className="img-container">
<div>
  <div className="image-wrapper"><img src="/dollar.avif" alt="Dollar banknotes" className="dollar-img"/></div>
  <ul>
  <li> Instant Conversion
No waiting, no reloads.</li>
<li> See your converted amount as you type.</li>
  </ul>
</div>
<div>
  <div className="image-wrapper"><img src="/circular-currency.avif" alt="Circular currency symbols" className="currency-img"/></div>
   <ul>
  <li> Multiple Currencies
 </li>
<li>Convert between major world currencies in seconds.</li>
  </ul>
</div>

</div>
</div>
)
}
function Calculator({popularCurrencies,lastUpdated}) {
  const [currencyNumber, setCurrencyNumber] = useState(1)

  const [currencyName, setCurrencyName] = useState('usd')
  const [currencyNames, setCurrencyNames] = useState('ngn')
  const [convertedCurr, setConvertedCurr] = useState('')
const [currencyData, setCurrencyData] = useState({})
 const [fetchError, setFetchError] = useState(false)
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false)
     const [loading, setLoading] = useState(true)
    async function getRate() {
      try{setFetchError(false)
        setLoading(true)
      const res = await axios.get(`https://latest.currency-api.pages.dev/v1/currencies/${currencyName}.json`)
      
  
      setCurrencyData(res.data[currencyName])
      console.log(res.data[currencyName])
      setHasLoadedOnce(true)}
      catch (error) {
      console.error('Failed to fetch NGN rates:', error)
      setFetchError(true)
    }
      finally {
  setLoading(false)
  
}
    }
 

  useEffect(() => {
    getRate()
  }, [currencyName])
  useEffect(() => {
    if (!currencyData[currencyNames]) return;
    
    setConvertedCurr((currencyNumber * currencyData[currencyNames]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
  }, [currencyNames, currencyData, currencyNumber, currencyName]
  )
  
  return (
    <div className="currency-calc">
     {fetchError && <p className="error-text">Couldn't load live rates. Please try again later.</p>} 
      {lastUpdated && (
    <p className="update-time">
      <span className="pulse-dot" aria-hidden="true"></span>
      Last updated: {lastUpdated.toLocaleTimeString()}
    </p>)}
      <fieldset className="from-currency-input">
  <legend>YOU SEND</legend>
  <input type="number" id="amount" placeholder="1" onChange={(e) => {
    setCurrencyNumber(e.target.value);

  }} value={currencyNumber} />
  <select
    id="currency"
    value={currencyName}
    onChange={(e) => {
      setCurrencyName(e.target.value)
    }}
  >
    {Object.entries(popularCurrencies).map(([currency,name]) => {
      return (
        <option key={currency} value={currency}>
          {currency.toUpperCase()}({name})
        </option>
      )
    })}
  </select>
</fieldset>


        <p className="conversion-rate">
           {loading && <Spinner />}
          {!loading && currencyData[currencyNames]
            ? `1 ${currencyName.toUpperCase()} = ${currencyData[currencyNames].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currencyNames.toUpperCase()}`
            : !loading && hasLoadedOnce
              ? "Loading rate..."
              : null}
        </p>
       <fieldset className="from-currency-input">
  <legend>YOU GET</legend>
  <input type="text" id="converted-amount" placeholder="1"
    value={convertedCurr} readOnly />

  <select
    id="currency"
    value={currencyNames}
    onChange={(e) => {
      setCurrencyNames(e.target.value)
    }}

  >
    {Object.entries(popularCurrencies).map(([currency,name]) => {
      return (
        <option key={currency} value={currency}>
          {currency.toUpperCase()}({name})
        </option>
      )
    })}
  </select>
</fieldset>



   </div>
  )
}


export function Homepage({popularCurrencies,lastUpdated}) {
  return (
    <>
      <Header />
      <main>
        <DisplayQuotes />
        <DisplayImg/>
        <Calculator lastUpdated={lastUpdated} popularCurrencies={popularCurrencies} />
      </main>
      <Footer />
    </>
  )
}