import React from 'react';
import '../Assets/css/join.css';

export const Join = () => {
  return (
    <>
      <canvas id="particleCanvas" />
      <div className="accent-lines">
        <div>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="pfp" /> {/* Changed from <a><span className="pfp" /></a> */}
      <button className="fixed">Join</button> {/* Changed from <a href="#"><span className="fixed">Join</span></a> */}
    </>
  );
};

export default Join;
