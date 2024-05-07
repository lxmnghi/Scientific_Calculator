import React, { useState } from 'react'
import Display from './Display'
import Keys from './Keys'

const Calculator = () => {

    const [expression, setExpression] = useState("");
    const [displayEXP, setDisplayEXP] = useState("");
    const [result, setResult] = useState("0");

    const sciFunc = {
        sin:"Math.sin",
        cos:"Math.cos",
        tan:"Math.tan",
        ln:"Math.log",
        log:"Math.log10",
        pi:"Math.PI",
        e:"Math.E",
        "^":"**",
        "√":"math.sqrt",
    }

    function calcResult () {
        if(expression.length !== 0) {
            try {
                let compute = eval(expression);
                compute = parseFloat(compute.toFixed(4));
                setResult(compute);
            } catch (e) {
                setResult("An error occurred");
    
            }
        } else {
            setResult("an error occurred");
        }
    }

    function handleButton (value) {
        // console.log(value);
        if (value === "AC"){
            setExpression("");
            setDisplayEXP("");
            setResult("0");
        }
        else if (value === "DEL"){
            setDisplayEXP(displayEXP.slice(0, -1));
            setExpression(expression.slice(0, -1));
        }
        else if (sciFunc.hasOwnProperty(value)){
            setDisplayEXP(displayEXP + value);
            setExpression(expression + sciFunc[value]);
        }

            else if (value === "!"){
                const lastNum = extractlastNum(expression);
                if(lastNum !== null){
                    const num = parseFloat(lastNum);
                    setDisplayEXP(displayEXP + value);
                    setExpression(expression.replace(lastNum, factorial(num)));
                }
            }

        else if (value === "=") calcResult();
        else {
            setExpression(expression + value);
            setDisplayEXP(displayEXP + value);   
        }
    }

    function factorial (n){
        let result = 1;
        for (let i = 1; i <= n; i++)  result *= i;
        return result;

    }


    function extractlastNum (exp) {
        const number = exp.match(/\d+/g);
        return number ? number[number.length - 1] :null;
    }

  return (
    
      <div className="calculator">
        <Display expression = {displayEXP} result = {result}/>
        <Keys handleButton={handleButton}/>
      </div>
    
  )
}

export default Calculator
