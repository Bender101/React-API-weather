import "./input.css";
import { useState, useRef } from "react";
import React from "react";

export default function Input({ setСities }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const handleOnClick = (e) => {
    setСities((prev) => [...prev, inputValue]);
    inputRef.current.focus();
    setInputValue("");
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="input-wrapper">
      <input onChange={handleOnChange} className="input" value={inputValue} ref={inputRef} />
      <button className="button" onClick={handleOnClick}>
        +
      </button>
    </div>
  );
}
