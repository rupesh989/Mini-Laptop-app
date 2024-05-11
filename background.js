
import React from "react";
import Particles from "react-tsparticles";

// Live Background of project
const Background = () => {
  return (
    <div className="absolute -z-10">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#02113d",
            },
          },
   ,
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
