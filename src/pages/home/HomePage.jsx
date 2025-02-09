import React from "react";
import "./home.css"; // Import the external CSS file
import Footer from "../../components/footer/Footer"; // Assuming this is a footer component
import Card from "../../components/cards/Card";
import cardsData from "../../constants/cards-data";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Banner-style Background */}
      <div className=" hero-section">
        <div className="hero-50 hero-overlay">
          <h1>SECURE BYTES</h1>
          <p className="protect-your-cloud-services">
            Protect Your Cloud Services
          </p>
          <p>
            We are committed to revolutionizing cloud security with
            state-of-the-art solutions that safeguard your digital assets in an
            ever-evolving cyber landscape. Our advanced security protocols,
            powered by the latest technology, ensure your cloud environment is
            resilient, scalable, and protected from both current and emerging
            threats. Our dedication to excellence has earned us industry
            recognition for our innovative approach to cloud security.
          </p>
          <button
            onClick={() => window.open("mailto:info@securebytes.com")}
            className="contact-us"
          >
            Contact Us
          </button>
        </div>

        <div className="hero-50 hero-image">
          <img src={"/security-shield.png"} alt="d" />
        </div>
      </div>

      {/* About Section with Image */}
      <div className="about-section">
        <div className="about-text">
          <h2>Why Choose SecureBytes?</h2>
          <p>
            SecureBytes specializes in providing top-notch cybersecurity
            services for cloud platforms such as AWS, Azure, and GCP. We focus
            on examining cloud architecture and performing in-depth security
            posture reviews to ensure your cloud infrastructure is secure. Our
            mission is to help you identify security loopholes from an
            attacker's perspective and remediate them effectively.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/cloud.png" // Replace with your actual image URL
            alt="Cloud Security"
          />
        </div>
      </div>
      <div>
        <center>
          <p className="services-title">SERVICES</p>
        </center>
      </div>
      <div className="card-grid">
        {cardsData?.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
