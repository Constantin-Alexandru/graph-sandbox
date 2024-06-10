import * as React from 'react';
import '../styles/components/circle.css';

export default function Circle(params) {
  const x = params.coords.x;
  const y = params.coords.y;
  const value = params.value;

  return (
    <div
      className="node"
      style={{
        top: `calc(${y}px)`,
        left: `calc(${x}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <span>{value}</span>
    </div>
  );
}
