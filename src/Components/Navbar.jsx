import React from 'react';

export default function Navbar() {
  return (
    <div className="text-white flex justify-between m-10">
      <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button type="button" className="text-white  pr-4">
          Sign in
        </button>
        <button
          type="button"
          className="bg-red-600 px-6 py-1 rounded cursor-pointer font-bold"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
