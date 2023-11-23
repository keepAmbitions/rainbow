"use client";
import { useMemo, useState, useEffect } from 'react';

const A = () => {
  const handleClick = () => {
    // todo something
  };
  const [count, setCount] = useState(1);
  useMemo(()=>{
    setCount(pre=>pre*2)
    handleClick();
  },[])
  return <div onClick={handleClick}>{count}</div>;
};
const B = () => {
  return (
    <div
      onClick={() => {
        // todo something
      }}
    >
      {count}
    </div>
  );
};

export default A;
