import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing); // schedule a state update
    setIsEditing((editing) => !editing); //immediate state update
  }
  let playerName = <span className="player-name">{name}</span>;
  //let btnCaption = "Edit";
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    //btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
