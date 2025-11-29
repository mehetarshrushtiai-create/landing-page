import React from "react";
import "./box.css";

function Box() {
  const platforms = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
    { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' },
    { name: 'Pinterest', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' },
    { name: 'Twitch', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Twitch_logo.svg' },
  ];

  return (
    <div className="max">
      {platforms.map((platform) => (
        <div key={platform.name} className="platform">
          <img src={platform.logo} alt={platform.name} className="logo" />
          <span>{platform.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Box;