import React from "react";
import "./hero.css";
import GetStarted from "./getstarted";

function Hero() {
  return (
    <div className="hero">
      <h1 className="b">Simplify Your Life with Our</h1>
      <h1 className="b1">Todo App</h1>
      <p className="b2">
        Stay organized and boost your productivity with our intuitive todo website.
      </p>
      <p className="b2">
        Experience a modern approach to task management that fits your lifestyle.
      </p>

      <div className="button-container">
        <GetStarted />
        <button className="b4">Learn More</button>
      </div>

      <div className="boxes">
        <div className="box left">
          <h1 className="c1">Organize.</h1>
          <h1 className="c2">Achieve.</h1>
          <h1 className="c3">Relax.</h1>
          <p>
            Turn clutter into clarity, chaos into control, and dreams into done.
          </p>
          <div className="classes">
            <GetStarted />
            <button className="c5">Discover Features</button>
          </div>
        </div>
        <div className="box right">
          <img src="/star.png" alt="Sample" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;