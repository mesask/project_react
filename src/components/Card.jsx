import React from "react";
import "./Card.css";

const Card = () => {
    // const style = {
    //     color: "blue",
    // }

  return (
    <>
    {/* <div style={style}>This is Card Component</div> */}
    <div className="card">This is Card Component</div>
    <button className="btn1">Click me</button>
    <button className="btn2">Don't Click Me</button>
    </>
  );
};

export default Card;