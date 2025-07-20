export const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, turnIndex) => (
        <li key={`${turn.square.row}}${turn.square.colum}`}>
          {turn.player} selected ({turn.square.row},{turn.square.colum})
        </li>
      ))}
    </ol>
  );
};
