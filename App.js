import React from "react";

function LPU({ place, top, countries }) {
  return (
    <span>
      <h1 style={{
        backgroundColor: "lightblue",
        width: "fit-content"
      }}>
        {place}
      </h1>

      <h1 style={{
        backgroundColor: "lightgrey",
        width: "fit-content"
      }}>
        {top}
      </h1>

      <h1 style={{
        backgroundColor: "lightgreen",
        width: "fit-content"
      }}>lpu have students from {countries} countries</h1>
    </span>
  );
}

export default function App() {
  return (
    <div>
      <LPU place="Lpu is at jalandhar" top="lpu is one of the best university in india" countries="63" />
    </div>
  );
}


