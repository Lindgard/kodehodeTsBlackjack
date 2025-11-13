import React from "react";

// interface props {
//   text: string;
// }

//* create a proper component in TS to use

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

export default Button;
