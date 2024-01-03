import React from "react";
import Button from 'react-bootstrap/Button';
import './CalculatorButton.css'
import { TCalculatorButton } from "../types/types";
import { PosNeg, Op } from '../types/enums'

const CalculatorButton = ( {setCalcState, displayValue, variant }: TCalculatorButton) => {    
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const op = [{ op: "+", eop: Op.Addition}, { op: "-", eop: Op.Subtraction}, 
        { op: "÷", eop: Op.Division}, { op: "x", eop: Op.Multiplicatoin},  ];


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {        
        let val = e.currentTarget;
        
        if (val.innerHTML in num) {
            setCalcState( (prev) => { return { 
                ...prev, 
                screenValue: prev.screenValue + val.innerHTML,
                currentValue: prev.posNeg === PosNeg.Negative ? 0 - +(prev.screenValue + val.innerHTML).substring(2) : +(prev.screenValue + val.innerHTML)
            }});
            console.log('num');
        }
        else if (op.find(x => x.op === val.innerHTML.toLowerCase())) {
            let cop = op.find(x => x.op === val.innerHTML.toLowerCase());
            console.log(cop);
            setCalcState( (prev) => { return { 
                ...prev, 
                prevOp: prev.currentOp, 
                currentOp: cop?.eop,
                prevValue: prev.currentValue,                
                currentValue: 0,
                screenValue: prev.posNeg === PosNeg.Negative ? "- " : ""
            }});
            console.log('op');
        }
        else if (val.innerHTML === "+/-") {
            setCalcState( (prev) => { return { 
                ...prev, 
                posNeg: prev.posNeg === PosNeg.Positive ? PosNeg.Negative : PosNeg.Positive, 
                screenValue: prev.posNeg === PosNeg.Positive ? '- ' + prev.screenValue : prev.screenValue.substring(2),
                currentValue: prev.posNeg === PosNeg.Positive ? 0-prev.currentValue : Math.abs(prev.currentValue)
            }});
            console.log('posneg');
        }
        else if (val.innerHTML === "=") {
            setCalcState( (prev) => { return { 
                ...prev, 
                currentOp: Op.Equals, 
                prevOp: prev.currentOp, 
                lastValue: prev.prevOp === Op.Initial ? prev.currentValue : prev.lastValue
            }});
            console.log('equals');
        } else if (val.innerHTML === "AC") {
            setCalcState( () => { return { 
                screenValue: "",
                prevValue: 0,
                currentValue: 0,
                lastValue: 0,
                currentOp: Op.Initial, 
                prevOp: Op.Initial,
                posNeg: PosNeg.Positive
             }});
            console.log('ac');
        } else if (val.innerHTML === ".") {
            setCalcState( (prev) => { return { 
                ...prev,
                screenValue: prev.screenValue + "."            
            }});
            console.log('.');
    }

    };

    return (
        <Button variant={variant} size="lg" className="custButton" onClick={handleClick}>{displayValue}</Button>        
    );
};

export default CalculatorButton;