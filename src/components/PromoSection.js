import React from 'react';
import GetStarted from './getstarted'; // ✅ popup trigger

// ✅ Define styles first
const styles = {
  container: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: '#f5f5f5' },
  left: { flex: '1 1 300px', textAlign: 'center', marginBottom: '20px' },
  phoneImage: { maxWidth: '100%', height: 'auto', borderRadius: '20px' },
  right: { flex: '1 1 400px', paddingLeft: '40px' },
  heading: { fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#333' },
  subtext: { fontSize: '18px', marginBottom: '30px', color: '#555' },
  buttonGroup: { display: 'flex', gap: '15px' },
  signUp: { backgroundColor: '#e63946', color: '#fff', border: 'none', padding: '12px 24px', fontSize: '16px', borderRadius: '8px', cursor: 'pointer' },
  learnMore: { backgroundColor: 'transparent', color: '#e63946', border: '2px solid #e63946', padding: '10px 22px', fontSize: '16px', borderRadius: '8px', cursor: 'pointer' },
};

const PromoSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img src="promo.jpg" alt="app preview" style={styles.phoneImage} />
      </div>

      <div style={styles.right}>
        <h1 style={styles.heading}>Start Organizing Your Life Today</h1>
        <p style={styles.subtext}>
          Join us now and transform your productivity with our intuitive to-do list platform!
        </p>
        <div style={styles.buttonGroup}>
          <GetStarted /> {/* ✅ popup trigger */}
          <button style={styles.learnMore}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;