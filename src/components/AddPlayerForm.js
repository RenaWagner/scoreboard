import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  const addPlayer = () => {
    props.addPlayer(name);
    set_name("");
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}
