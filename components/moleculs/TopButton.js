import React from 'react';
import { FaArrowLeft, FaRedoAlt } from 'react-icons/fa';

function TopButton({ onBack, onRefresh }) {
  return (
    <div className="top-bar">
      <button className="btn-circle btn-left" onClick={onBack} aria-label="Go back">
        <FaArrowLeft size={16} />
      </button>
      <h1 className="brand">juicebox</h1>
      <button className="btn-circle btn-right" onClick={onRefresh} aria-label="Refresh">
        <FaRedoAlt size={16} />
      </button>
    </div>
  );
}

export default TopButton;
