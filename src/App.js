import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const ChnageValueButton = styled.button`
  display: inline-flex;

  justify-content: center;
  align-self: start;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const [result, setResult] = useState(0);

  const handlePlus = () => {
    setResult((curr) => curr + 1);
  };

  const handleMinus = () => {
    setResult((curr) => curr - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{result}</span>
        <div className="buttonBox">
          <ButtonWrapper>
            <ChnageValueButton onClick={handlePlus}>+</ChnageValueButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <ChnageValueButton onClick={handleMinus}>-</ChnageValueButton>
          </ButtonWrapper>
        </div>
      </header>
    </div>
  );
}

export default App;
