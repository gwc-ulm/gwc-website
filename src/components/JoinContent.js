import React from "react";
import "./JoinContentStyle.css";

import hqQR from "../assets/hero pics/hq.png";      
import registerQR from "../assets/hero pics/qr.png"; 
import { ArrowRight } from "lucide-react"; 

const JoinContent = () => {
  return (
    <div className="join-container">

      <p className="join-description">
        <strong>Girls Who Code at ULM</strong> is more than just a coding club—it’s a community where students come together to grow, inspire, and support one another
        in their tech journey. Through workshops, events, and outreach, we aim
        to close the gender gap in technology while fostering leadership,
        collaboration, and confidence.
      </p>

      <p className="join-instruction">
        📲 Scan these QR codes or click the right arrow to sign up for the
        organization.
      </p>

      <div className="qr-grid">
        {/* HQ QR Code */}
        <div className="qr-card">
          <img src={hqQR} alt="Girls Who Code HQ QR" className="qr-img" />
          <div className="qr-label">
            <span>Join Girls Who Code HQ</span>
            <a href="https://hq.girlswhocode.com/login/?showTab=signup&qrClubCode=true&redirect=%2Fjoin-program%2FqrCodeInvitation%2FCL63242"><ArrowRight className="arrow-icon desktop-arrow" /></a>
          </div>
        </div>

        {/* Registration QR Code */}
        <div className="qr-card">
          <img
            src={registerQR}
            alt="Girls Who Code ULM Registration QR"
            className="qr-img"
          />
          <div className="qr-label">
            <span>Register for GWC @ ULM</span>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DDuWkDCw-0SpWp41mvT2aA3KYAb3H9NEhZK7aVOZgI1UQkpVUFlQSVQ5M0FMQ0ZIU1Y4U0lIQktOQS4u&origin=QRCode"><ArrowRight className="arrow-icon desktop-arrow" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinContent;