import { useState } from "react";
import "./calculator.css"
import Button from '@mui/material/Button';

function Calculator() {
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [output, setOutput] = useState("");
    const [operation, setOperation] = useState("+");

    const handleInputChange = (value, name) => {
        if (!isNaN(value)) {
            switch (name) {
                case "firstValue": {
                    setFirstInput(value);
                    break;
                }
                case "secondValue": {
                    setSecondInput(value);
                    break;
                }
                default: {
                    break;
                }
            }
        } else if (!value) {
            alert(`please enter ${name} number`);
        } else {
            alert("please enter valid number");
        }
    };

    const handleOperation = (value) => {
        setOperation(value);
    };

    const handleCalculate = () => {
        if (
            Number.isInteger(parseInt(firstInput)) &&
            Number.isInteger(parseInt(secondInput))
        ) {
            switch (operation) {
                case "+": {
                    let add = parseInt(firstInput) + parseInt(secondInput);
                    setOutput(add);
                    break;
                }
                case "-": {
                    let subtract = parseInt(firstInput) - parseInt(secondInput);
                    setOutput(subtract);
                    break;
                }

                case "/": {
                    let divide = parseInt(firstInput) / parseInt(secondInput);
                    setOutput(divide);
                    break;
                }

                case "*": {
                    let multiply = parseInt(firstInput) * parseInt(secondInput);
                    setOutput(multiply);
                    break;
                }

                default: {
                    alert("please select operation");
                    setOutput("");
                    break;
                }
            }
        } else {
            alert("please insert proper value");
        }
    };

    const handleReset = () => {
        setFirstInput("");
        setSecondInput("");
        setOutput("");
    };
    return (

        <div className="calculatorPageWrap">
            <div className="calculatorWrap">
                <div className="header">
                    React Calculator
                </div>
                <div className="inputOutput">
                    <div className="inputWrap">
                        <input
                            value={firstInput}
                            name="firstValue"
                            placeholder="Enter First Number"
                            onChange={(event) => handleInputChange(event.target.value, event.target.name)}
                        />
                    </div>
                    <div className="inputWrap">
                        <input
                            value={secondInput}
                            name="secondValue"
                            placeholder="Enter Second Number"
                            onChange={(event) => handleInputChange(event.target.value, event.target.name)}
                        />
                    </div>


                    <div className="selectWrap">
                        <select name="operation" value={operation} onChange={(event) => handleOperation(event.target.value)}>
                            <option name="plus" value="+">Add</option>
                            <option name="subtract" value="-">Subtract</option>
                            <option name="multiply" value="*">Multiply</option>
                            <option name="divide" value="/">Divide</option>
                        </select>
                    </div>

                </div>
                <div className="outputWrap">
                <Button variant="contained" size="small" onClick={() => handleCalculate()}>Submit</Button>
                <Button variant="contained" size="small" onClick={() => handleReset()}>Reset</Button>

                <div className="output">{output}</div>
                </div>
            </div>
        </div>

    )
}

export default Calculator;