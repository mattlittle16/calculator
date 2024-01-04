import React, { useState} from 'react';
import { TCalculatorState } from '../types/types';
import { Op } from '../types/enums'

export const useCalcLogic = () => {
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const op = [{ op: "+", eop: Op.Addition}, { op: "-", eop: Op.Subtraction}, 
        { op: "÷", eop: Op.Division}, { op: "x", eop: Op.Multiplicatoin},
        { op: "/", eop: Op.Division}, { op: "*", eop: Op.Multiplicatoin}  ];


    const [currentCalcState, setCurrentCalcState] = useState<TCalculatorState>({
        screenValue: "",
        prevValue: 0,
        currentValue: 0,
        currentOp: Op.Initial
    });
    
    const setCalcState = (inputValue:string | undefined) => {        
        if (inputValue === undefined)
            return;
        
        if (num.includes(inputValue)) {
            setCurrentCalcState((prev) => {
                return {
                    ...prev,
                    screenValue: prev.screenValue + inputValue,
                    currentValue: parseFloat((prev.screenValue + inputValue))
                }
            });        
            console.log('num');
        } else if (op.find(x => x.op === inputValue.toLowerCase())) {
            let cop = op.find(x => x.op === inputValue.toLowerCase());
            if (cop === undefined)
                return;
            
            setCurrentCalcState((prev) => {
                return {
                    ...prev,
                    currentOp: cop!.eop,
                    prevValue: prev.currentOp !== Op.Initial ? prev.prevValue : prev.currentValue, 
                    screenValue: ""                    
                }
            });
            console.log('op ' + cop!.op);
        } else if (inputValue === '+/-') {
            setCurrentCalcState((prev) => {
                return {
                    ...prev,
                    screenValue: prev.screenValue !== '' ? (prev.screenValue.indexOf('-') >= 0 ? prev.screenValue.substring(1) : '-' + prev.screenValue) : prev.screenValue, 
                    currentValue: prev.screenValue !== '' ? parseFloat((prev.screenValue.indexOf('-') >= 0 ? prev.screenValue.substring(1) : '-' + prev.screenValue)) : 0
                }
            });
            console.log('negative');
        } else if (inputValue === '=' || inputValue === 'enter') {                        
            switch(currentCalcState.currentOp) {
                case Op.Addition:                    
                    setCurrentCalcState((prev) => {                        
                        return {
                            ...prev,
                            screenValue: (prev.prevValue + prev.currentValue).toString(),
                            prevValue: prev.prevValue + prev.currentValue
                        }
                    });                
                break;

                case Op.Subtraction:                    
                    setCurrentCalcState((prev) => {                        
                        return {
                            ...prev,
                            screenValue: (prev.prevValue - prev.currentValue).toString(),
                            prevValue: prev.prevValue - prev.currentValue
                        }
                    });                
                break;

                case Op.Multiplicatoin:                    
                    setCurrentCalcState((prev) => {                        
                        return {
                            ...prev,
                            screenValue: (prev.prevValue * prev.currentValue).toString(),
                            prevValue: prev.prevValue * prev.currentValue
                        }
                    });                
                break;

                case Op.Division:                    
                    setCurrentCalcState((prev) => {                        
                        return {
                            ...prev,
                            screenValue: (prev.prevValue / prev.currentValue).toString(),
                            prevValue: prev.prevValue / prev.currentValue
                        }
                    });                
                break;

                default:
            }

            console.log('equals');
        } else if (inputValue === 'ac' || inputValue === 'c' || inputValue === 'backspace' || inputValue === 'delete') {
            setCurrentCalcState(() => {
                return { 
                    screenValue: "",
                    prevValue: 0,
                    currentValue: 0,
                    currentOp: Op.Initial
                }
            });

            console.log('ac');
        } else if (inputValue === '.') {
            setCurrentCalcState((prev) => {
                return {
                    ...prev,
                    screenValue: prev.screenValue + '.'
                }
            });

            console.log('decimal');
        } else if (inputValue === '%') {
            setCurrentCalcState((prev) => {
                return {
                    ...prev,
                    screenValue: (prev.currentValue / 100).toString(),
                    currentValue: prev.currentValue / 100
                }
            });

            console.log('%')
        }
    };

    return [ currentCalcState, setCalcState ] as const;
};
