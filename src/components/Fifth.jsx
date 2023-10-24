import React from "react";

const Fifth = () => {
  // const sentence = "palvi go to delhi";
  // function countVowels(inputString) {
  //   let vowelCount = 0;

  //   for (let i = 0; i < inputString.length; i++) {
  //     const char = inputString[i].toLowerCase();    if (
  //       char === "a" ||
  //       char === "e" ||
  //       char === "i" ||
  //       char === "o" ||
  //       char === "u"
  //     ) {
  //       vowelCount++;
  //     }
  //   }

  //     return vowelCount;
  // }
  // console.log(vowelCount)

  function abc(str) {
    let v = 0;
    let c = 0;
    let value = str.split(" ").trim;
    for (let i = 0; i < value; i++) {
     let  vowels = [a, e, i, o, u];
      if (value[i].tolowercase.include(value)) {
        v += 1;
      } else {
        c += 1;
      }
    }
  }
  abc("Pallvi go to delhi");
  return (
    <div>
      Find how many vowels and consonent are present in this string "palvi go to
      delhi"
    </div>
  );
};

export default Fifth;
