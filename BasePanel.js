
import React from "react";
import Keyboard from "./Keyboard";

// Speaker, keyboard and touchpad of Laptop (base panel)
const BasePanel = ({ handlePower, handleFingerScan }) => {
  const Speaker = () => {
    return (
      <div className="basis-1/6 flex flex-col w-[90%] mb-2">
        <div className="joint basis-1/4 w-4/5 mx-auto relative border-b-4 border-x-2 border-black"></div>
        <div className="speaker basis-3/4 overflow-hidden">
          {[...Array(6)].map(() => (
            <ul key={Math.random()} className="flex gap-1">
              {[...Array(150)].map(() => (
                <li key={Math.random()} className="w-1 h-1">
                  .
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  };
 
