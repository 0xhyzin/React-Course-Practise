import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../../util/investment";

export const Result = ({ inputs }) => {
  const calculateValues = calculateInvestmentResults(inputs);
  const initialInvestment =
    calculateValues[0].valueEndOfYear -
    calculateValues[0].interest -
    calculateValues[0].annualInvestment;

  console.log(calculateValues);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Interest Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculateValues.map((yearDate) => {
          const totalInterest =
            yearDate.valueEndOfYear -
            yearDate.annualInvestment * yearDate.year -
            initialInvestment;
          const totalAmountInterest = yearDate.valueEndOfYear - totalInterest;
          return (
            <tr key={yearDate.year}>
              <td>{yearDate.year}</td>
              <td>{formatter.format(yearDate.valueEndOfYear)}</td>
              <td>{formatter.format(yearDate.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
