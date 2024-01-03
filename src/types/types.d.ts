import { Hundreds, Op, PosNeg } from './enums'

export type TCalculatorButton = {
    setCalcState: React.Dispatch<React.SetStateAction<TCalculatorState>>,
    displayValue: string, 
    variant: string
};

export type TCalculatorState = {
    screenValue: string, 
    currentValue: number,
    prevValue: number,
    lastValue: number,
    prevOp?: Op,
    currentOp?: Op, 
    posNeg?: PosNeg
};

