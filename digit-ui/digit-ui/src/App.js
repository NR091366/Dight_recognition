import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [digit, setDigit] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setDigit(null);
  };
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.digit !== undefined) {
        setDigit(data.digit);
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Server error: " + err.message);
    }
  };
  return (
    <div className="main-container">
      <header>
        <h1>Digit Recognizer</h1>
      </header>
      <div className="card">
        <p>Upload a handwritten digit (image or PDF) to predict:</p>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Predict Digit</button>
        {digit !== null && (
          <div className="result-box">
            <span>Predicted Digit:</span>
            <h2>{digit}</h2>
          </div>
        )}
      </div>
      <footer>
        <p>© 2025 Niveditha Prasad R | All rights reserved</p>
      </footer>
    </div>
  );
}
export default App;
