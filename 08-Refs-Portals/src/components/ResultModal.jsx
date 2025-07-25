import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export const ResultModal = ({ targetTime, remaniningTime, onReset, ref }) => {
  const dialog = useRef();
  const userLost = remaniningTime <= 0;
  const formattedRemaniningTime = (remaniningTime / 1000).toFixed(2);
  const score = Math.round((1 - remaniningTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal (
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The Target Time was <strong>{formattedRemaniningTime} seconds.</strong>
      </p>
      <p>
        you stopped the timer with <strong> seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
};
