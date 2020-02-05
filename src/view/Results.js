import React, { Fragment } from "react";

function Results(props) {
  const testje = props.test;
  // console.log(testje);
  const handleChange = event => {
    console.log(event.target.value);
    props.onChangeTestLower(event.target.value);
  };
  return (
    <Fragment>
      <p>{testje}</p>
      <input onChange={handleChange}></input>
    </Fragment>
  );
}
export default Results;
