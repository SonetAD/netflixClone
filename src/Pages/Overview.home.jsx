import React, { useState } from 'react';

export default function Overview({ overview }) {
  const [clicked, setClicked] = useState(false);

  const shortStr = (str) => {
    if (str.length > 120) {
      return str.slice(0, 120);
    }
    return str;
  };
  return (
    <div>
      <p className="grid place-items-center mx-9 sm:w-3/4 font-bold sm:place-items-start sm:m-0">
        {clicked ? overview : shortStr(overview)}
      </p>
      <span
        className="hidden sm:block font-bold   cursor-pointer  text-[10px] italic text-yellow-50"
        onClick={() => {
          setClicked((pv) => !pv);
        }}
      >
        {clicked ? 'See less' : 'See more'}
      </span>
    </div>
  );
}
