import { useRef, useState } from "react";
import { ResultModal } from "./ResultModal";

export const TimeChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timeActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timer = useRef();
  const dialog = useRef();

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handelOnReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handelStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((oldTimeRemaninig) => oldTimeRemaninig - 10);
    }, 10);
  }
  function handelStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remaniningTime={timeRemaining}
        onReset={handelOnReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeActive ? handelStop : handelStart}>
            {!timeActive ? "Start" : "Stop"} Challenge
          </button>
        </p>
        <p className="">
          {timeActive ? "Time is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
};
