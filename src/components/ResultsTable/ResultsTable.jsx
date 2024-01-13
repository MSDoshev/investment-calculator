
import { formatter } from "../../util/investment";
export default function ResultsTable({newData}) {
 const initialInvestment = newData[0].valueEndOfYear - newData[0].interest - newData[0].annualInvestment;

 return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
      {newData.map((entry, index) => {
        const totalInterest = entry.valueEndOfYear - entry.annualInvestment * entry.year - initialInvestment;
        const totalAmountInvested = entry.valueEndOfYear - totalInterest;
        return(
         <tr key={index} className="center">
            <td>{entry.year}</td>
            <td>{formatter.format(entry.valueEndOfYear)}</td>
            <td>{formatter.format(entry.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
            
          </tr>
           )})}
      </tbody>
    </table>
  );
}
