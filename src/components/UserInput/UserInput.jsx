import { useState } from "react"

export default function UserInput({newInput, onChangeValue}){
    
    // const [userInput, setUserInput] = useState({
    //     initialInvestment: 0,
    //     annualInvestment: 0,
    //     expectedReturn: 0,
    //     duration: 0,
    // })

    // function handleChange(inputIdentifier, newValue){
    //     setUserInput(prevUserInput => {
    //         return{
    //             ...prevUserInput,
    //             [inputIdentifier]: newValue,
    //         }
    //     })
    // }
    // console.log(newInput);
    // console.log(onChangeValue);

    return(
        <section id="user-input">
            <div className="input-group">   
                <p>
                    <label >Initial Investment</label>
                    <input type="number" required value={newInput.initialInvestment} onChange={(event)=>onChangeValue('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input type="number" required value={newInput.annualInvestment} onChange={(event)=>onChangeValue('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">   
                <p>
                    <label >Expected Return</label>
                    <input type="number" required value={newInput.expectedReturn} onChange={(event)=>onChangeValue('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" required value={newInput.duration} onChange={(event)=>onChangeValue('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}   