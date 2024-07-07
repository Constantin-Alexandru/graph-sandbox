import * as React from 'react';
import { useState, useEffect } from 'react';
import '../styles/components/Canvas.css';
import Circle from './Circle';
import {
  coordsOverlapAnyInArray,
  lineAlreadyExists,
  convertToScale,
  identicalPoints,
} from '../scripts/utilities.js';
import { Connections } from './Connections.jsx';

export default function Canvas() {
  const radius = 50;

  const [mousePos, setMousePos] = useState({});
  const [connecting, setConnecting] = useState(false);
  const [nodes, setNodes] = useState(new Array(0));
  const [connections, setConnections] = useState(new Array(0));

  useEffect(() => {
    const updateMousePos = (event) => {
      const pos = {
        x: event.clientX - convertToScale(5, 0, 100, 0, window.innerWidth),
        y: event.clientY - convertToScale(5, 0, 100, 0, window.innerHeight),
      };
      if (connecting) {
        const connection = connections.pop();

        connection.point2 = pos;

        setConnections([...connections, connection]);
      }

      setMousePos(pos);
    };

    window.addEventListener('mousemove', updateMousePos);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
    };
  }, []);

  function handleOnMouseDown(event) {
    let point = {
      x: event.clientX - convertToScale(5, 0, 100, 0, window.innerWidth),
      y: event.clientY - convertToScale(5, 0, 100, 0, window.innerHeight),
    };

    if ((point = coordsOverlapAnyInArray(point, nodes, radius))) {
      setConnecting(true);
      const connection = { point1: point, point2: mousePos };
      setConnections([...connections, connection]);
    }
  }

  function handleOnMouseUp(event) {
    const point = {
      x: event.clientX - convertToScale(5, 0, 100, 0, window.innerWidth),
      y: event.clientY - convertToScale(5, 0, 100, 0, window.innerHeight),
    };

    if (connecting) {
      const node = coordsOverlapAnyInArray(point, nodes, radius);
      const connection = connections.pop();
      let existingConnection = null;

      setConnecting(false);
      if (
        !node ||
        (node.x === connection.point1.x && node.y === connection.point1.y)
      ) {
        setConnections(connections || []);
      } else {
        connection.point2 = node;
        if ((existingConnection = lineAlreadyExists(connection, connections))) {
          setConnections(
            connections.filter(
              (conn) =>
                !(
                  identicalPoints(conn.point1, existingConnection.point1) &&
                  identicalPoints(conn.point2, existingConnection.point2)
                )
            )
          );
        } else {
          setConnections([...connections, connection]);
        }
      }
    } else if (!coordsOverlapAnyInArray(point, nodes, radius))
      setNodes([...nodes, point]);
  }

  return (
    <div
      className="canvas"
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
    >
      {nodes.length}
      {connections.length}
      {nodes.map((element, index) => (
        <Circle key={index} coords={element} value={index} />
      ))}
      <Connections connections={connections} />
    </div>
  );
}
