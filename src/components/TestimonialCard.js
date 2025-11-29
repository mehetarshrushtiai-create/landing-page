import React from 'react';

const TestimonialCard = ({ name, role, quote, image }) => {
  return (
    <div style={styles.card}>
      <div style={styles.textSection}>
        <h2 style={styles.title}>Customer Testimonials</h2>
        <p style={styles.quote}>"{quote}"</p>
        <p style={styles.name}>{name}</p>
        <p style={styles.role}>{role}</p>
      </div>
      <div style={styles.imageSection}>
        <img src={image} alt={`${name}`} style={styles.image} />
      </div>
      <div style={styles.nav}>
        <button style={styles.arrow}>&lt;</button>
        <button style={styles.arrow}>&gt;</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '700px',
    margin: 'auto',
    position: 'relative',
    backgroundColor: '#f9f9f9',
  },
  textSection: {
    flex: 1,
    paddingRight: '20px',
  },
  title: {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#333',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '18px',
    marginBottom: '10px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  role: {
    color: '#777',
    fontSize: '14px',
  },
  imageSection: {
    flexShrink: 0,
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  nav: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  },
  arrow: {
    margin: '0 5px',
    fontSize: '18px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default TestimonialCard;