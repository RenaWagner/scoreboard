import React from "react";
import "./Player.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
    console.log(props.id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      ></div>
      <p>
        {props.name}(Score: {props.score})
        <button onClick={onClickIncrement}>Increment</button>
      </p>
    </li>
  );
}
