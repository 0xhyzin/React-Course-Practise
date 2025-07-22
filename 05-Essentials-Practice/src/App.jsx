import { useState } from "react";
import { Header } from "./components/Header/Header";
import { UserInput } from "./components/UserInput/UserInput";
import { Result } from "./components/Result/Result";
function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 0,
  });

  const inputIsValid = data.duration >= 1;

  function handelAddNumber(type, value) {
    setData((oldData) => {
      return {
        ...oldData,
        [type]: +value,
      };
    });
  }
  return (
    <main>
      <Header />
      <UserInput data={data} handelAddNumber={handelAddNumber} />
      {!inputIsValid && <p>Please enter  valid input date</p> }
      {inputIsValid && <Result inputs={data} />}
    </main>
  );
}

export default App;
