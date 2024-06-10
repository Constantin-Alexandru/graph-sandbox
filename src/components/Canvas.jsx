import * as React from 'react';
import { useState } from 'react';
import '../styles/components/Canvas.css';
import Circle from './Circle';

export default function Canvas() {
  const [nodes, setNodes] = useState(new Array(0));

  function handleOnMouseUp(params) {
    setNodes([...nodes, { x: params.clientX, y: params.clientY }]);
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
