import React from "react";

const Colm = (props) => {
  return (
    <div>
      <div
        onClick={props.onClick}
        className='COLM flex border border-stone-600   h-16 w-16  items-center justify-center'>
        <h5 className='text-sky-600 font-mono font-semibold text-3xl '>
          {props.value}{" "}
        </h5>
      </div>
    </div>
  );
};

export default Colm;
