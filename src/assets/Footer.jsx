import {Link} from 'react-router-dom'

export function Footer(){
return(
<footer className="site-footer">
  <div className="footer-brand">
    <h3>AY Rates</h3>
    <p>Live currency exchange rates, updated in real time.</p>
  </div>

  <div className="footer-links">
     <div className="footer-column">
      <h4>Legal</h4>
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
       
      </ul>
    </div>
    <div className="footer-column">
      <h4>Site</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
     
      </ul>
    </div>

    <div className="footer-column">
      <h4>Connect</h4>
      <ul>
        <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="mailto:odukoyaayomide5029@gmail.com">Email</a></li>
      </ul>
    </div>

   
  </div>

  <div className="footer-bottom">
    <p>&copy; 2026 AY Rates. Demo project — not a live financial service.</p>
  </div>
</footer>
)
}