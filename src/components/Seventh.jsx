import React from "react";

const Seventh = () => {
  //   abc(2, 3);
  //   function abc(start, end) {
  //     let cube = 1;
  //     for (let i = start; i <= end; i++) {
  //       let result = start * cube;
  //       cube = start;
  //       console.log(result);
  //     }
  //   }
  //   abc2(2);
  //   function abc2(n) {
  //       let cube = n * n * n;
  //       console.log(cube)
  //     }
  // abc3(1, 100);
  //   function abc3(start, end) {
  //     let counting = start++
  //   for (let i = start; i <= end; i++) {
  //     if (start >= 100) {
  //       return  start++;
  //     } else {
  //       return false;
  //       }
  //   }
  //   console.log(counting);
  // }

  const [number, setNumber] = useState();
  const [power, setPower] = useState();
  const [result, setResult] = useState();
  function cube() {
    setResult(number ** power);
  }
  return (
    <div>
      find a Power of a value of Power is 2 ki power 3 than the answer is 8
      <div className="d-flex gap-4">
        <input
          type="number"
          placeholder="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="number"
          placeholder="power"
          onChange={(e) => setPower(e.target.value)}
        />
        <button onClick={cube}>Submit</button>
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default Seventh;
