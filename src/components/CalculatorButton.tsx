import React from "react";
import Button from 'react-bootstrap/Button';
import { TCalculatorButton } from "../types/types";
import { PosNeg, Op } from '../types/enums'

const CalculatorButton = ( {setCalcState, displayValue, variant }: TCalculatorButton) => {    
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const op = [{ op: "+", eop: Op.Addition}, { op: "-", eop: Op.Subtraction}, 
        { op: "÷", eop: Op.Division}, { op: "x", eop: Op.Multiplicatoin}, { op: "=", eop: Op.Equals}, ];


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget);
        let val = e.currentTarget;
        
        if (val.innerHTML in num) {
            setCalcState( (prev) => { return { ...prev, screenValue: prev.screenValue + val.innerHTML }});
            console.log('num');
        }
        else if (op.find(x => x.op === val.innerHTML.toLowerCase())) {
            let cop = op.find(x => x.op === val.innerHTML.toLowerCase());
            setCalcState( (prev) => { return { ...prev, prevOp:prev.currentOp, currentOp: cop?.eop, prevValue: val.innerHTML, screenValue: cop?.eop === Op.Equals ? val.innerHTML : "" }});
            console.log('op');
        }
        else if (val.innerHTML === "+/-") {
            setCalcState( (prev) => { return { ...prev, posNeg: prev.posNeg === PosNeg.Positive ? PosNeg.Negative : PosNeg.Positive }});
            console.log('posneg');
        }
        else if (val.innerHTML === "=") {
            setCalcState( (prev) => { return { ...prev, currentOp: Op.Equals }});
            console.log('equals');
        }
    };

    return (
        <Button variant={variant} size="lg" onClick={handleClick}>{displayValue}</Button>        
    );
};

export default CalculatorButton;