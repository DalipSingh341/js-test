import React from "react";

const Ninth = () => {
  function abc(n) {
    for (let i = 0; i < n.length - 1; i++) {
      let a = n[i] + n[i + 1];
      console.log(a)
      }
    }
  abc([9, 23, -6, 8, 4, 10, 6]);
  return <div>find some of an array with loop</div>;
};

export default Ninth;
