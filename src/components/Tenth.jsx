import React from "react";

const Tenth = () => {
  function CountingOne(Start, last) {
    if (Start <= last) {
      document.write(Start + " ");
      CountingOne(Start + 1, last);
    }
  }
  CountingOne(1, 100);
  return (
    <div>
      <div> 1 to 100 counting but print in console</div>
    </div>
  );
};

export default Tenth;
