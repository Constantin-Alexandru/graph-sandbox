import * as React from 'react';
import { convertToScale, percentageToValue } from '../scripts/utilities';

export function Connections(params) {
  const connections = params.connections;

  const offsetVertical = percentageToValue(5, 0, window.innerHeight);
  const offsetHorizontal = percentageToValue(5, 0, window.innerWidth);

  return (
    <svg
      width={window.innerWidth - offsetHorizontal * 2}
      height={window.innerHeight - offsetVertical * 2}
      style={{ position: 'absolute', left: 0, top: 0 }}
      xmlns="https://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="33"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="black" />
        </marker>
      </defs>
      {connections.map((connection, index) => (
        <line
          key={index}
          x1={connection.point1.x}
          y1={connection.point1.y}
          x2={connection.point2.x}
          y2={connection.point2.y}
          stroke="black"
          markerEnd="url(#arrowhead)"
        />
      ))}
    </svg>
  );
}
