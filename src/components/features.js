import React from "react";
import "./features.css";

const features = [
  {
    id: "01",
    title: "User-Friendly Interface",
    description: "Our platform offers seamless task management to boost your efficiency.",
  },
  {
    id: "02",
    title: "Collaborate & Share Effortlessly",
    description: "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: "03",
    title: "Effortless Collaboration",
    description: "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: "04",
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
  },
];

function Features() {
  return (
    <div className="features-container">
      <h2 className="features-heading">Transform Your Productivity</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-id">{feature.id}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;