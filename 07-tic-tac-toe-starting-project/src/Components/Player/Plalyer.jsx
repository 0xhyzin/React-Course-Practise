import { useState } from "react";

export const Player = ({ initialName, playerSymbol, isActive,onSaveEditing }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handeEditClick() {
    setIsEditing((editting) => !editting);
    if(isEditing){
      onSaveEditing(playerSymbol,playerName)
    }
  }
  function handelNameChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active":undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            Value={playerName}
            onChange={(character) => handelNameChange(character)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handeEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
