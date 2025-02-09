import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="content-container">
          <div className="footer-container">
            <a href="mailto:info@securebytes.com" className="email">
              info@securebytes.com
            </a>
      
          </div>

          <div className="footer-section">
            <div className="company-name">
              <h1>SECUREBYTES</h1>
            </div>
            <p>©copyright 2025 SecureBytes. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer