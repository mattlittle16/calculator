import React from "react";
import Form from 'react-bootstrap/Form';
import { TCalculatorState } from "../types/types";


const Screen = ({ screenValue } : TCalculatorState) => {

    return (
        <Form.Control size="lg" type="text" value={screenValue} readOnly={true} />        
    );
};

export default Screen;