import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState();
  function handelSetPlayerName() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value=""
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handelSetPlayerName}>Set Name</button>
      </p>
    </section>
  );
}
