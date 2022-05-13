import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollTop() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <button
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => topFunction()}>
      <FaArrowUp fontSize={30} />
    </button>
  );
}
