import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [orgName, setOrgName] = useState('');
  const [certificateTitle, setCertificateTitle] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [borderColor, setBorderColor] = useState('#000000');

  const downloadCertificate = () => {
    const input = document.querySelector('.preview');
    html2canvas(input)
    .then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${recipientName}-${certificateTitle}.png`;
    link.href = imgData;
    link.click();
    });
    };
    

  return (
    <div className="container">
      <div className="form">
      <label>Name of Organisation:</label>
        <input
          type="text"
          placeholder="Name of Organisation"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
        <label>Title of Certificate:</label>
        <input
          type="text"
          placeholder="Title of Certificate"
          value={certificateTitle}
          onChange={(e) => setCertificateTitle(e.target.value)}
        />
        <label>Recipient's Name:</label>
        <input
          type="text"
          placeholder="Recipient's Name"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Background Color:</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}/>
        <br />
        <label>Border Color:</label>
        <input
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}/>
        <button onClick={downloadCertificate}>Download Certificate</button>
      </div>
      <div className="preview" style={{ backgroundColor: bgColor, border: `10px solid ${borderColor}` }}>
        <div className="header" style={{ color: borderColor }}>
          <h1>{certificateTitle}</h1>
        </div>
        <div className="body">
          <p>This certificate is presented to</p>
          <h3>{recipientName}</h3>
          <p>for completing the {certificateTitle} program at</p>
          <h3>{orgName}</h3>
          <p>on {date} at {location}</p>
        </div>
        <div className="footer" style={{ color: borderColor }}>
          <p>Signed by</p>
          <h3>{orgName}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;


