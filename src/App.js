import React from 'react';
import './App.css';
import Square from './components/Square/Square'

function App() {
    
    const  handleBtnClick = () => {
        console.log('pressed')
    }
    
  return (
    <>
        <Square handleBtnClick={handleBtnClick}/>
    </>
  );
}

export default App;
