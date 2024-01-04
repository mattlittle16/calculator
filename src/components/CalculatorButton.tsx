import React from "react";
import Button from 'react-bootstrap/Button';
import './CalculatorButton.css'
import { TCalculatorButton } from "../types/types";

const CalculatorButton = ( {setCalcState, displayValue, variant }: TCalculatorButton) => {    

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {        
        let val = e.currentTarget;        
        setCalcState(val.innerHTML.toLowerCase());
    };

    return (
        <Button variant={variant} size="lg" className="custButton" onClick={handleClick}>{displayValue}</Button>        
    );
};

export default CalculatorButton;