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
    prevValue: 0,
    currentValue: 0,
    currentOp: Op.Initial, 
    prevOp: Op.Initial,
    posNeg: PosNeg.Positive
  });

  useEffect(() => {
    if (calcState.currentOp === Op.Equals) {
      console.log(calcState);

      console.log("running equals useEffect");

      if (calcState.prevOp === Op.Addition) {
        setCalcState((prev) => { return { 
          ...prev, 
          screenValue: (prev.prevValue + prev.currentValue).toString(),           
          prevValue: (prev.prevValue + prev.currentValue),
          currentOp: prev.prevOp
        }})        
      } else if (calcState.prevOp === Op.Multiplicatoin) {
        setCalcState((prev) => { return { 
          ...prev, 
          screenValue: (prev.prevValue * prev.currentValue).toString(), 
          prevValue: (prev.prevValue * prev.currentValue),          
          currentOp: prev.prevOp
        }})
      } else if (calcState.prevOp === Op.Subtraction) {
          setCalcState((prev) => { return { 
            ...prev, 
            screenValue: (prev.prevValue - prev.currentValue).toString(),             
            prevValue: (prev.prevValue - prev.currentValue),
            currentOp: prev.prevOp
          }})
      } else if (calcState.prevOp === Op.Division) {
        setCalcState((prev) => { return { 
          ...prev, 
          screenValue: (prev.prevValue / prev.currentValue).toString(), 
          prevValue: (prev.prevValue / prev.currentValue),          
          currentOp: prev.prevOp
        }})
      }          
    }
  }, [calcState.currentOp]);

  return <>
    <Container id="main-container">
      <Row>
        <Col>
          <Screen {...calcState} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"AC"} variant="secondary" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"+/-"} variant="secondary" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"%"} variant="secondary" />
        </Col>
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
          <CalculatorButton setCalcState={setCalcState} displayValue={"x"} variant="warning" />
        </Col>
      </Row> 
      <Row className="mt-3">
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"4"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"5"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"6"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"-"} variant="warning" />
        </Col>
      </Row> 
      <Row className="mt-3">
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"1"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"2"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"3"} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"+"} variant="warning" />
        </Col>
      </Row> 
      <Row className="mt-3">
        <Col>
        <CalculatorButton setCalcState={setCalcState} displayValue={"0"} variant="dark" />          
        </Col>
        <Col>          
          <CalculatorButton setCalcState={setCalcState} displayValue={"."} variant="dark" />
        </Col>
        <Col>
          <CalculatorButton setCalcState={setCalcState} displayValue={"="} variant="warning" />
        </Col>
      </Row> 
      
    </Container>
  </>;
};

export default App;
