export const GameOver = ({winner,...porps}) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && winner !=="Draw" ? <p>{winner} won!</p>:<p>It's Draw</p>}
            <p><button {...porps} >Rematch!</button></p>
        </div>
    );
};
