import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";

const INPUT_IDENTIFIERS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};


function App() {

   const [userInput, setUserInput] = useState(INPUT_IDENTIFIERS);

   function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: newValue,
        }
    })
    
}



  return (
    <>
      <Header />
      
      <UserInput newInput={userInput} onChangeValue={handleChange}/>
    </>
  );
}

export default App;
