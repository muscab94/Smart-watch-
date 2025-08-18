import { useState } from "react";

function Quick({ show }) {
  return <div className={`absolute left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ease-in-out ${ show ? "opacity-100 visible" : "opacity-0 invisible" }`} >
      <div className="flex bg-black text-white w-[400px] h-80 gap-28 mt-5 ml-4 px-8 rounded-xl">
        <div>
          <h1 className="font-bold text-xl py-5">Categories</h1>
          <ul className="leading-9 text-[1.1em] opacity-85">
            <li>Sports</li>
            <li>Bestsellers</li>
            <li>Modern</li>
            <li>Classic</li>
            <li>Custom</li>
            <li>More</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl py-5">Tags</h1>
          <ul className="leading-9 text-[1.1em] opacity-85">
            <li>Gold</li>
            <li>Black</li>
            <li>Men</li>
            <li>Red</li>
            <li>Green</li>
            <li>Navy</li>
          </ul>
        </div>
      </div>
    </div>
}

export default Quick;
