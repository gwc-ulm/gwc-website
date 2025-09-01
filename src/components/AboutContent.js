import "./AboutContentStyle.css";

import img1 from "../assets/hero pics/3.jpg";
import img2 from "../assets/hero pics/2.jpg";

const AboutContent = () => {
  return (
    <div className="about-container">
      <div
        className="about-overlay"
      >
        <div className="about-grid">
          {/* Left side - Images */}
          <div className="about-images">
            <img src={img1} alt="Group" className="about-img-1" />
            <img src={img2} alt="Members" className="about-img-2" />
          </div>

          {/* Right side - Text */}
          <div className="about-text">
            <h2 className="about-quote">
              "Empowering women in tech, one line of code at a time!"
            </h2>

            <div className="mission-box">
              <h3>OUR MISSION</h3>
              <ul>
                <li>➤ Empowering Girls in Tech Field</li>
                <li>➤ Building a Supportive Community</li>
                <li>➤ Teaching Coding Skills</li>
                <li>➤ Promoting Leadership and Confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;