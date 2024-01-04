import { Op, PosNeg } from './enums'

export type TCalculatorButton = {
    setCalcState: (inputValue:string | undefined) => void,
    displayValue: string, 
    variant: string
};

export type TCalculatorState = {
    screenValue: string, 
    currentValue: number,
    prevValue: number,    
    currentOp: Op    
};