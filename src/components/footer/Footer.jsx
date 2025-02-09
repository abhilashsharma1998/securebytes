import React from 'react'
import { Link } from 'react-router-dom';
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
            {/* <div className="footer-content-text">
              Ready to secure your cloud infrastructure?
            </div> */}
            {/* <div className="footer-content-text">Reach out to us today!</div>
            <a href="mailto:info@securebytes.com" className="email">
              info@securebytes.com
            </a>
            <Link to="" className="email">
              +1-800-SECURE
            </Link> */}
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