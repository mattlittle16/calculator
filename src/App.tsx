import React, { useEffect } from 'react';
import './App.css';
import Screen from './components/Screen';
import CalculatorButton from './components/CalculatorButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCalcLogic } from './hooks/calcLogic'


const App = () => {
  const [calcState, setCalcState] = useCalcLogic();
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();

      let validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '+', '-', 'enter', '/', '.', '*', 'c', 'backspace', 'delete'];      
      let sendKey = e.key.toLowerCase();      
      
      console.log(sendKey);
      if (validKeys.includes(sendKey)) {              
        
        setCalcState(e.key.toLowerCase());
      } 
    }
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [calcState.screenValue]);


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
