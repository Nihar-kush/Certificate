import React from "react";
import image from "../imag1.png";

export default function Certificate({ data }) {
  return (
    <div className="certificate-container">
      <div className="certificate">
        <div className="certificate-left">
          <img src={image} alt="" />
        </div>
        <div className="certificate-right">
          <div className="header">
            <h1>{data.title}</h1>
            <span className="logo">
              <img
                src="https://www.digitalguru.buzz/images/internship-fair-logo2.png"
                alt="Logo"
              />
              <p>Digital Guruji Team</p>
            </span>
          </div>
          <p className="id">DIGITAL GURUJI | ID: {data.id}</p>
          <div className="content">
            <p>This to certify that</p>
            <h2 className="name">{data.name}</h2>
            <p>
              has been selected to be a part of Digital Guruji's 3 months
              digital marketing training and internship program.
            </p>
            <b>
              He/She was adjudged to be one of the best Digital Marketing
              candidates among the batch for Nov, 2020.
            </b>
          </div>
          <div className="dates">
            <span>
              <h3>{data.issueDate}</h3>
              <p>Month of Issue</p>
            </span>
            <span>
              <h3>{data.expiryDate}</h3>
              <p>Date of Expiry</p>
            </span>
          </div>
          <div className="contact">
            <a
              href="https://www.digitalguru.buzz"
              target="_blank"
              rel="noreferrer"
            >
              www.digitalguru.buzz
            </a>
            |
            <a href="mailto: contact@digitalguru.buzz">
              contact@digitalguru.buzz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
