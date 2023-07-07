import React, {useState} from "react"
import "./Calc.css"

export default function Calculator() {

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
       let input=e.target.value;
       if(num === 0){
            setNum(input);
        }else{
            setNum(num + input)
        }
    }

    function clear(e) {
        setNum(0);
    }

    function reverse(e){
        setNum(num*-1);
    }

    function porcentage(e){
        setNum(num/100);
    }

    function operatorHandler(e){
        let operatorInput=e.target.value
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        if (operator === "/") {
            setNum (parseFloat(oldNum) / parseFloat(num))
        } else if(operator === "*") {
            setNum (parseFloat(oldNum) * parseFloat(num))
        } else if (operator === "-") {
            setNum (parseFloat(oldNum) - parseFloat(num))
        } else if (operator === "+") {
            setNum (parseFloat(oldNum) + parseFloat(num))
        }
    }

    return (
        <div className="wrapper">
            <h1 className="result">{num}</h1>
            <button className="bt" onClick={clear}>C</button>
            <button className="bt" onClick={reverse}>+/-</button>
            <button className="bt" onClick={porcentage}>%</button>
            <button className="bt" onClick={operatorHandler} value="/">/</button>
            <button className="bt" onClick={inputNum} value={7}>7</button>
            <button className="bt" onClick={inputNum} value={8}>8</button>
            <button className="bt" onClick={inputNum} value={9}>9</button>
            <button className="bt" onClick={operatorHandler} value="*">*</button>
            <button className="bt" onClick={inputNum} value={4}>4</button>
            <button className="bt" onClick={inputNum} value={5}>5</button>
            <button className="bt" onClick={inputNum} value={6}>6</button>
            <button className="bt" onClick={operatorHandler} value="-">-</button>
            <button className="bt" onClick={inputNum} value={1}>1</button>
            <button className="bt" onClick={inputNum} value={2}>2</button>
            <button className="bt" onClick={inputNum} value={3}>3</button>
            <button className="bt" onClick={operatorHandler} value="+">+</button>
            <button className="bt" onClick={inputNum} value={0}>0</button>
            <button className="bt" onClick={inputNum} value=".">.</button>
            <button className="bt big" onClick={calculate}>=</button>
        </div>
    )
}