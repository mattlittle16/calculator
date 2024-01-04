import React from "react";
import Form from 'react-bootstrap/Form';



const Screen = ({ screenValue} : {screenValue:string} ) => {

    return (
        <Form.Control size="lg" type="text" value={screenValue} readOnly={true} />        
    );
};

export default Screen;