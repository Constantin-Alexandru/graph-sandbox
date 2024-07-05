import * as React from 'react';
import { useState } from 'react';
import '../styles/components/Canvas.css';
import Circle from './Circle';
import { coordsOverlapAnyInArray } from '../scripts/utilities.js';

export default function Canvas() {
  const radius = 50;

  const [nodes, setNodes] = useState(new Array(0));

  function handleOnMouseUp(params) {
    const point = { x: params.clientX, y: params.clientY };

    if (coordsOverlapAnyInArray(point, nodes, radius))
      setNodes([...nodes, point]);
  }

  return (
    <div className="canvas" onMouseUp={handleOnMouseUp}>
      {nodes.length}
      {nodes.map((element, index) => (
        <Circle key={index} coords={element} value={index} />
      ))}
    </div>
  );
}
