import React, { useState } from "react";
import Colm from "./colm";

const Board = () => {
  const [State, setState] = useState(Array(9).fill(null));
  const [xturn, setxturn] = useState(true);
  const Reset = () => {
    setState(Array(9).fill(null));
  };

  const CheckWinner = () => {
    const Winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let array of Winner) {
      const [a, b, c] = array;
      if (State[a] !== null && State[a] === State[b] && State[a] === State[c]) {
        return State[a];
      }
    }
    return false;
  };

  const isWinner = CheckWinner();

  const handleClick = (index) => {
    if (State[index] != null) {
      return;
    }
    const copyState = [...State];
    copyState[index] = xturn ? "X" : "O";
    setState(copyState);
    setxturn(!xturn);
  };

  return (
    <>
      <div className='flex flex-col justify-center '>
        <h1 className='flex justify-center text-white font-semibold text-2xl my-10'>
          {" "}
          Tic Tac <span className='text-sky-600 ml-2  '> Toe</span>
        </h1>
        <div>
          {isWinner ? (
            <h1 className='text-xl  text-white flex flex-col justify-center items-center  '>
              <span className='text-sky-600 font-medium'> {isWinner}</span> won
              the game{" "}
              <button
                className='flex justify-center bg-gray-800 text-sky-600 my-10 mx-12 rounded-full py-1 px-3 font-semibold text-sm w-1/5 transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:shadow-outline'
                onClick={Reset}>
                Play Again
              </button>
            </h1>
          ) : (
            <div className='box flex justify-center'>
              <div className='CONTAINER flex flex-col justify-center  p-5  m-5 w-60 '>
                <div className='row flex      '>
                  <Colm onClick={() => handleClick(0)} value={State[0]} />
                  <Colm onClick={() => handleClick(1)} value={State[1]} />
                  <Colm onClick={() => handleClick(2)} value={State[2]} />
                </div>
                <div className='row flex   '>
                  <Colm onClick={() => handleClick(3)} value={State[3]} />
                  <Colm onClick={() => handleClick(4)} value={State[4]} />
                  <Colm onClick={() => handleClick(5)} value={State[5]} />
                </div>
                <div className='row flex   '>
                  <Colm onClick={() => handleClick(6)} value={State[6]} />
                  <Colm onClick={() => handleClick(7)} value={State[7]} />
                  <Colm onClick={() => handleClick(8)} value={State[8]} />
                </div>
                <button
                  className='flex justify-center bg-gray-800 text-sky-600 my-10 mx-12  rounded-full py-1 px-3 font-semibold text-sm w-1/2 transition duration-300 transform hover:scale-105 hover:bg-gray-700'
                  onClick={Reset}>
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
