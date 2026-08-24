import {Header} from '../Header/Header'
import {Footer} from '../assets/Footer'
import './privacypolicy.css'

export function PrivacyPolicy(){
return(
<>
<Header/>
<main className="privacy-page">
  <h1 className="privacy-title">Privacy Policy</h1>
  <div className="privacy-card">
    <p className="last-updated"><em>Last updated: 22nd of August, 2026</em></p>

    <p className="privacy-intro">AbelRates is a demo project for viewing live currency and crypto exchange rates. This page explains what happens with your data when you use it.</p>

    <section>
      <h2>What We Collect</h2>
      <ul>
        <li>Basic usage info (pages visited, browser type)</li>
        <li>Any info you type in, if the app has forms (e.g. name/email)</li>
      </ul>
    </section>

    <section>
      <h2>What We Don't Do</h2>
      <ul>
        <li>We don't sell your data</li>
        <li>We don't store payment or wallet details (this is a demo, no real transactions happen)</li>
        <li>We don't share your info with third parties for marketing</li>
      </ul>
    </section>

    <section>
      <h2>Third-Party Data</h2>
      <p>Exchange rates are pulled from a public currency API. We don't control how that API handles data on their end.</p>
    </section>

    <section>
      <h2>Cookies</h2>
      <p>This site may use basic cookies (e.g. to remember dark mode). You can clear/block these in your browser anytime.</p>
    </section>

    <section>
      <h2>Changes</h2>
      <p>This policy may be updated as the project develops.</p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>Questions? Reach out at <a href="mailto:Odukoyaayomde5029@gmail.com">Odukoyaayomde5029@gmail.com</a>.</p>
    </section>

    <p className="disclaimer"><em>Note: AbelRates is a personal/demo project built for learning purposes. This is not a real financial service, and this policy is a simplified placeholder — not legal advice.</em></p>
  </div>
</main>
<Footer/>
</>
)
}
