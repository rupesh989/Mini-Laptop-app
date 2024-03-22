
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
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 50,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
           
