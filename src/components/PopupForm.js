import React, { useState } from "react";

const PopupForm = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // ✅ show thank you message
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
        {!submitted ? (
          <>
            <h2>Get Started Today!</h2>
            <p>Fill in your details and take control of your tasks.</p>
            <form style={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              <button type="submit" style={styles.doneBtn}>Done</button>
              <button type="button" onClick={onClose} style={styles.closeBtn}>Close</button>
            </form>
          </>
        ) : (
          <>
            <h2>Thank you!</h2>
            <p>You have successfully signed up.</p>
            <p style={styles.thankYou}>
              Welcome, <strong>{formData.firstName} {formData.lastName}</strong> 🎉
            </p>
            <button type="button" onClick={onClose} style={styles.closeBtn}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popup: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "10px",
    width: "400px",
    maxWidth: "90vw",
    textAlign: "center",
  },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "10px", border: "1px solid #ccc", borderRadius: "6px" },
  doneBtn: { backgroundColor: "#e63946", color: "#fff", padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer" },
  closeBtn: { backgroundColor: "#ccc", color: "#333", padding: "8px", border: "none", borderRadius: "6px", cursor: "pointer" },
  thankYou: { marginTop: "15px", fontSize: "16px", color: "#333" },
};

export default PopupForm;