import React from 'react'  ; 
import { useState ,  useEffect  } from 'react';
import  './counter.css'  ; 
import History from './History';

import {Button  , Box , Typography } from  '@mui/material'
 

const Counter = () => {

    const  [count  , setcount  ]     = useState(0)  ; 
    const [isRunning, setIsRunning] = useState(false);
    const  [history , setHistory ]  =  useState([])  ; 


    useEffect(() => {
      let timer;
      if (isRunning) {
        timer = setInterval(() => {
          setcount((prevCount) => prevCount + 1);
        }, 1000);
      } else if (!isRunning && count !== 0) {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [isRunning, count]);

    const start = () => {
      setIsRunning(true);
    };

    const stop = () => {
      setIsRunning(false);
    };

    const reset = () => {
      setcount(0);
      setIsRunning(false);
      setHistory([...history ,  count  ])   ; 

    };

    const clearHistory = () => {
      setHistory([]);
    };



  return (
    <>
      <div className="main">
        <h1> Counter : </h1>
        <h2> {count} </h2>
        <div className="btns">
          <Button variant="contained" color="primary" onClick={start}>
            Start
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={stop}
            sx={{ marginLeft: "10px" }}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={reset}
            sx={{ marginLeft: "10px" }}
          >
            Reset
          </Button>
          {/* this will reset the counter to 0 */}
        </div>
      </div>
      <History history={history} clearHistory={clearHistory} />{" "}
      {/* this will display the history of all previous counts */}
      <h3 className='made'>Made with 💌 by Mayur </h3>
    </>
  );
}

export default Counter