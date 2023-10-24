import React from "react";

const Sixth = () => {
  function numbers(n) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n.length; i++) {
      if (n % 2 == 0) {
        return (odd += 1);
      } else {
        return (even += 1);
      }
    }
    console.log(even, odd);
  }
  numbers([9, 11, 12, 13, 14, 15, 18]);
  return <div>find how many odd and even number present are in the array</div>;
};

export default Sixth;
