import "./WhyInkBliss.css";

import privacyImage from "./images/privacy.jpg";
import accessImage from "./images/accessimage.png";
import creativeImage from "./images/creativeimage.jpeg";
import shareImage from "./images/shareimage.jpg";

const WhyInkBliss = () => {
  return (
    <section id="landingWhyInkbliss">
      <h1>
        Why InkBliss <span>?</span>
      </h1>
      <div className="why-ink-bliss-grid">
        <div className="privacy-image">
          <img src={privacyImage} alt="Ilustration_image" />
        </div>
        <div className="privacy-text">
          <h1>Privacy Matters Most</h1>
          <p>
            Unlock the Power of Your Personal Vault: Keep your data secure with
            a 4-digit PIN, even when sharing your device.
          </p>
        </div>
        <div className="access-from-anywhere-text">
          <h1>Access From Anywhere</h1>
          <p>
            Your Data, Your Way: Access Anywhere, Anytime, AnyDevice Using
            Credentials.
          </p>
        </div>
        <div className="access-from-anywhere-image">
          <img src={accessImage} alt="Ilustration_image" />
        </div>
        <div className="creative-playground-image">
          <img src={creativeImage} alt="Ilustration_image" />
        </div>
        <div className="creative-playground-text">
          <h1>Creative Playground</h1>
          <p>Where Ideas Take Flight: Your Creative Playground Awaits.</p>
        </div>
        <div className="share-with-a-click-text">
          <h1>Share on a Click</h1>
          <p>Share Your Musings with a Single Click!</p>
        </div>
        <div className="share-with-a-click-image">
          <img src={shareImage} alt="Ilustration_image" />
        </div>
      </div>
    </section>
  );
};

export default WhyInkBliss;
