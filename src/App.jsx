import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import {calculateInvestmentResults} from './util/investment'

const INPUT_IDENTIFIERS = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12,
};


function App() {

   const [userInput, setUserInput] = useState(INPUT_IDENTIFIERS);

   function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }
    })
    
}
  
  let data = calculateInvestmentResults(userInput);
  
  return (
    <>
      <Header />
      
      <UserInput newInput={userInput} onChangeValue={handleChange}/>

      <ResultsTable newData={data}/>
    </>
  );
}

export default App;
