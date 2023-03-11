import logo from './logo.svg';
import './App.css';
import Elevator from './components/Elevator';
import { ElevatorProvider } from './Hooks/elevatorContext';
import { useContext } from 'react';
import ButtonsGroup from './components/ButtonsGroup';

function App() {
  return (
    <>
    <ElevatorProvider>
      <div className="container text-center">
        <div className='row'>
        <div className='col-1 p-5'>
            <p>9th</p>
            <p>8th</p>
            <p>7th</p>
            <p>6th</p>
            <p>5th</p>
            <p>4th</p>
            <p>3th</p>
            <p>2th</p>
            <p>1th</p>
            <p>Ground Floor</p>
          </div>
          <div className='col-1'>
            <Elevator/>
          </div>
          {/* <div className='col-1'>
            <Elevator/>
          </div>
          <div className='col-1'>
            <Elevator/>
          </div>
          <div className='col-1'>
            <Elevator/>
          </div>
          <div className='col-1'>
            <Elevator/>
          </div> */}
          <div className='col-1'>
            <ButtonsGroup/>
          </div>
        </div>
      </div>
      </ElevatorProvider>
    </>
  );
}

export default App;
