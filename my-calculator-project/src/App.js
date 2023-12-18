import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Input, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function evaluateExpression() {
    const expression = inputRef.current.value;
    try {
      setResult(eval(expression));
    } catch (error) {
      alert("Invalid expression");
    }
  }

  function handleNumberClick(number, e) {
    e.preventDefault();
    inputRef.current.value += number;
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Simplest Working Calculator</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <p ref={resultRef} className="result-display">
              {result}
            </p>
            <Input
              innerRef={inputRef}
              type="text"
              placeholder="Type an expression"
              className="mb-3"
            />
            <Row>
              {[7, 8, 9, "+"].map((number) => (
                <Col key={number}>
                  <Button
                    block
                    color="primary"
                    onClick={(e) => handleNumberClick(number, e)}
                  >
                    {number}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {[4, 5, 6, "-"].map((number) => (
                <Col key={number}>
                  <Button
                    block
                    color="primary"
                    onClick={(e) => handleNumberClick(number, e)}
                  >
                    {number}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {[1, 2, 3, "*"].map((number) => (
                <Col key={number}>
                  <Button
                    block
                    color="primary"
                    onClick={(e) => handleNumberClick(number, e)}
                  >
                    {number}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {[0, "/"].map((number) => (
                <Col key={number}>
                  <Button
                    block
                    color="primary"
                    onClick={(e) => handleNumberClick(number, e)}
                  >
                    {number}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <Button
                  block
                  color="success"
                  onClick={evaluateExpression}
                  className="mt-3"
                >
                  =
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  color="warning"
                  onClick={resetInput}
                  className="mt-3"
                >
                  Reset Input
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  color="danger"
                  onClick={resetResult}
                  className="mt-3"
                >
                  Reset Result
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
