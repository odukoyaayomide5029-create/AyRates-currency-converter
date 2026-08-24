import './about.css'
import { Header } from '../Header/Header'
import {Footer} from '../assets/Footer'

export function About(){
return(
  
<div className="about-us-page">
  <Header/>
<h1>ABOUT US</h1>
<div className="about-text">
<p>AY Rates is a gift card and cryptocurrency exchange platform built to make trading simple, fast, and stress-free. We know how frustrating it can be to deal with unreliable exchangers, unclear rates, and delayed payments — so we built a platform that puts transparency and trust first.

Our mission is to give every user real-time rates, secure transactions, and fast payouts they can actually rely on. Whether you're converting a gift card into cash or exchanging crypto, AY Rates connects you to accurate pricing and a smooth process from start to finish — no guesswork, no unnecessary delays.

We're built with Nigerians in mind, understanding the specific challenges of trading here and designing around them. At AY Rates, our goal is simple: make exchange easy, fair, and something you can trust every single time.</p>
</div>
<Footer/>
</div>
)
}