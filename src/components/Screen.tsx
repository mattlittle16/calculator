import React from "react";

const Screen = ({
    screenValue
}:{
    screenValue:number
}) => {

    return (
        <input type="text" value={screenValue} readOnly={true} />
    );
};

export default Screen;