import React, { useState } from "react";

const Second = () => {
  const [value1, setValue1] = useState({
    firstName: "Dalip",
    lastName: "Singh",
    phoneNo: "9494949494",
    male: "male",
    Female: "female",
  });
  const formSubmission = (event) => {
    event.preventDefault();
    console.log(value1);
    setValue1("");
  };
  return (
    <div>
      <h5 className="py-5">
        Fill the details here and check console for those details after click on
        submit
      </h5>
      <form
        action=""
        onSubmit={formSubmission}
        className="d-flex flex-column w-70 gap-3 justify-content-center align-items-center"
      >
        <input
          type="text"
          placeholder={value1.firstName}
          onChange={(e) => setValue1({ ...value1, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder={value1.lastName}
          onChange={(e) => setValue1({ ...value1, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder={value1.phoneNo}
          onChange={(e) => setValue1({ ...value1, phoneNo: e.target.value })}
        />

        <div className="d-flex gap-2">
          <div>
            <input
              type="radio"
              id="html"
              name="fav_language"
              defaultValue="HTML"
            />
            &nbsp; <label htmlFor="html">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="css"
              name="fav_language"
              defaultValue="CSS"
            />
            &nbsp; <label htmlFor="css">Female</label>
          </div>
        </div>
        <input type="submit" />
      </form>
      <div className="d-flex gap-3 justify-content-center py-5">
        <div>
          <h2>firstName</h2>
          <h26>{value1.firstName}</h26>
        </div>
        <div>
          <h2>lastName</h2>
          <h25>{value1.lastName}</h25>
        </div>
        <div>
          <h2>phoneNo</h2>
          <h5>{value1.phoneNo}</h5>
        </div>
      </div>
    </div>
  );
};

export default Second;
