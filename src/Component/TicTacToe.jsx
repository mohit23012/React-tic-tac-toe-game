import React, { useState } from "react";
import crossImage from "./cross.png";
import circleImage from "./circle.png";

let data = ["", "", "", "", "", "", "", "", ""]; // act as a storage

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));

  const togle = (num, e) => {
    if (lock || board[num]) {
      return;
    }

    const newBoard = [...board];
    newBoard[num] = count % 2 === 0 ? "x" : "o";

    setBoard(newBoard);
    setCount(count + 1);
    setLock(true);
  };
  return (
    <>
      <div className=' '>
        <h1 className='mt-10 text-white font-bold text-5xl text-center'>
          Tic Tac Toe <span className='text-blue-300  '>Game</span>
        </h1>
        <div className='board flex flex-col gap-1 m-16 '>
          <div className='row1 flex gap-1 justify-center h-24'>
            <div
              onClick={(e) => {
                togle(e, 0);
              }}
              className='boxes'></div>
            <div
              onClick={(e) => {
                togle(e, 1);
              }}
              className='boxes'></div>
            <div
              onClick={(e) => {
                togle(e, 2);
              }}
              className='boxes'></div>
          </div>
          <div className='row1 flex gap-1 justify-center h-24'>
            <div
              onClick={(e) => {
                togle(e, 3);
              }}
              className='boxes'></div>
            <div
              onClick={(e) => {
                togle(e, 4);
              }}
              className='boxes'></div>
            <div
              onClick={(e) => {
                togle(e, 5);
              }}
              className='boxes'></div>
          </div>
          <div className='row1 flex gap-1 justify-center h-24'>
            <div
              onClick={(e) => {
                togle(e, 6);
              }}
              className='boxes'></div>
            <div
              onClick={(e) => {
                togle(e, 7);
              }}
              className='boxes'></div>
            <div
              onClick={(e) => {
                togle(e, 8);
              }}
              className='boxes'></div>
          </div>
        </div>

        <div className='flex justify-center my-3'>
          <button
            className='my-4   px-9 py-3 text-center bg-slate-600 rounded-full  font-semibold text-blue-300 text-lg  '
            type='reset'>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
