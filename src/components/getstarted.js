import React, { useState } from "react";
import PopupForm from "./PopupForm";

const GetStarted = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button
        style={styles.button}
        onClick={() => {
          console.log("Button clicked");
          setShowPopup(true);
        }}
      >
        Get Started
      </button>

      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </div>
  );
};

const styles = {
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default GetStarted;