import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

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
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{counter}</span>
        <div className="buttonBox">
          <ButtonWrapper>
            <ChnageValueButton onClick={() => dispatch({ type: 'INCREMENT' })}>
              +
            </ChnageValueButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <ChnageValueButton onClick={() => dispatch({ type: 'DECREMENT' })}>
              -
            </ChnageValueButton>
          </ButtonWrapper>
        </div>
      </header>
    </div>
  );
}

export default App;
