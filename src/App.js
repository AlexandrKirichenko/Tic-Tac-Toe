import React from 'react';
import './App.scss';
import Square from './components/Square/Square'

function App() {
    const  handleBtnClick = (value) => {
        console.log('pressed', value)
    }
    
  return (
    <>
        <Square handleBtnClick={handleBtnClick}/>
    </>
  );
}

export default App;