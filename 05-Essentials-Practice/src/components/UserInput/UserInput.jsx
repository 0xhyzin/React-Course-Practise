import { InputField } from "../InputField/InputField";
import "./UserInput.css";

export const UserInput = ({data,handelAddNumber}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
        value={data.initialInvestment}
          title="initialInvestment"
          onAddNumber={(event) =>
            handelAddNumber("initialInvestment", event.target.value)
          }
        />
        <InputField
        value={data.annualInvestment}
          title="annualInvestment"
          onAddNumber={(event) =>
            handelAddNumber("annualInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <InputField
        value={data.expectedReturn}
          title="expectedReturn"
          onAddNumber={(event) =>
            handelAddNumber("expectedReturn", event.target.value)
          }
        />
        <InputField
        value={data.duration}
          title="duration"
          onAddNumber={(event) =>
            handelAddNumber("duration", event.target.value)
          }
        />
      </div>
    </section>
  );
};
