import React from 'react';
import GetStarted from './getstarted'; // ✅ make sure casing matches

// ✅ Define styles first
const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '40px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontFamily: 'Arial, sans-serif',
  },
  section: { flex: '1 1 200px', marginBottom: '30px' },
  logo: { fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' },
  newsletter: { display: 'flex', marginTop: '10px' },
  input: { flex: 1, padding: '10px', borderRadius: '4px 0 0 4px', border: 'none' },
  joinBtn: { backgroundColor: '#e63946', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' },
  disclaimer: { fontSize: '12px', marginTop: '10px', color: '#aaa' },
  list: { listStyle: 'none', padding: 0, lineHeight: '1.8' },
  bottom: { width: '100%', borderTop: '1px solid #444', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: '#aaa' },
  legalLinks: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <h2 style={styles.logo}>do List</h2>
        <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
        <div style={styles.newsletter}>
          <GetStarted /> {/* ✅ popup trigger */}
        </div>
        <p style={styles.disclaimer}>
          By subscribing, you consent to our Privacy Policy and agree to receive updates.
        </p>
      </div>
      {/* other sections unchanged */}
      <div style={styles.bottom}>
        <p>© 2024 Osumare. All rights reserved.</p>
        <div style={styles.legalLinks}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Settings</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;