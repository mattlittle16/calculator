import React, { useEffect, useState} from 'react';
import './App.css';
import Screen from './components/Screen';
import CalculatorButton from './components/CalculatorButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TCalculatorState } from './types/types';
import { PosNeg, Op } from './types/enums'


const App = () => {
  
  const [calcState, setCalcState] = useState<TCalculatorState>({
    screenValue: "",
    prevValue: "",
    currentOp: Op.Addition, 
    posNeg: PosNeg.Positive 
  });

  useEffect(() => {
    if (calcState.currentOp === Op.Equals) {
      console.log(calcState);

      let num1 = calcState.prevValue === undefined || calcState.prevValue === null ? 0 : +calcState.prevValue;
      let num2 = +calcState.screenValue;

      if (calcState.prevOp === Op.Addition) {
        setCalcState((prev) => { return { ...prev, screenValue: (num1 + num2).toString() }})
      } else if (calcState.prevOp === Op.Multiplicatoin) {
        setCalcState((prev) => { return { ...prev, screenValue: (num1 * num2).toString(), currentOp: Op.Subtraction }})
      }
      

    }
  }, [calcState.currentOp]);

  return <>
    <Container id="main-container">
      <Row>
        <Col>
          <Screen screenValue={calcState.screenValue} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"AC"} variant="secondary" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"+/-"} variant="secondary" />
        </Col>
        <Col></Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"÷"} variant="warning" />
        </Col>
      </Row> 
      <Row className="mt-3">
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"7"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"8"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"9"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"X"} variant="warning" />
        </Col>
      </Row> 
      <Row className="mt-3">
        <Col>
          
        </Col>
        <Col>
          
        </Col>
        <Col>
          
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"="} variant="warning" />
        </Col>
      </Row> 
      
    </Container>
  </>;
};

export default App;
