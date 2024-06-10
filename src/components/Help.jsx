import * as React from 'react';
import '../styles/components/Help.css';
import ListItem from './ListItem';
import {
  node_red,
  node_blue,
  ctrl_key,
  mouse_left_click,
  mouse_wheel,
  node_gray,
  edge_add,
} from '../scripts/images.js';

export default function Help({ setHelpMenu }) {
  return (
    <div className="help-menu">
      <h1 className="title">Help Menu</h1>
      <div className="close" onClick={() => setHelpMenu(false)}>
        x
      </div>
      <p className="description">
        <b>Graph Visualizer</b> allows creating, editing, serializing and
        restoring a visual representation of a generic Graph. Starting with an
        empty canvas you can use a combination of mouse clicks, moves, drags and
        wheel actions to add and remove nodes, connect them with edges,
        reposition them and customize their color and label. A context menu,
        allows editing node properties and using a few abstract datastructure
        operations to simulate typical graph algorithms.
      </p>

      <h2 className="title menu-title">
        <u>Basic Operations</u>
      </h2>
      <div className="operations">
        <ListItem items={[ctrl_key, mouse_left_click]} title={'Add a Node'}>
          On an open area on the canvas <b>[left-click]</b> while pressing the
          <b>[Ctrl]</b> key.
        </ListItem>
        <ListItem
          items={[node_blue, ctrl_key, mouse_left_click]}
          title={'Remove a Node'}
        >
          Move the cursor over a Node, then <b>[left-click]</b> while pressing
          the
          <b> [Ctrl]</b> key. Removing a Node removes all outgoing and incoming
          edges and clears the content of the auxiliary datastructures.
        </ListItem>
        <ListItem
          items={[node_blue, mouse_left_click]}
          title={'Reposition a Node'}
        >
          Point to a Node, then <b>[drag]</b> it to a new position on the
          canvas. The Node remains attached to the Graph and preserves all its
          properties.
        </ListItem>
        <ListItem
          items={[node_red, mouse_wheel]}
          title={'Change the color of a Node'}
        >
          While hovering over a Node, <b>[scroll down]</b> with the mouse wheel
          to loop through five predefined colors: [
          <span style={{ color: 'blue' }}>blue</span>,
          <span style={{ color: 'red' }}> red</span>,
          <span style={{ color: 'green' }}> green</span>,
          <span style={{ color: 'magenta' }}> magenta</span>,
          <span style={{ color: 'yellow' }}> yellow</span>] or
          <b> [scroll up]</b> to reset the color of the Node to the default
          gray.
        </ListItem>
        <ListItem
          items={[node_gray, ctrl_key, mouse_wheel]}
          title={'Change the label of a Node'}
        >
          While hovering over a Node, press the <b>[Ctrl]</b> key while
          <b> [scroll up]</b> or
          <b> [scroll down]</b> with the mouse wheel. The label of the node will
          loop through available letters in the range [1-9A-Z]. If no letter is
          available, the default &lsquo;?&rsquo; label will be used.
        </ListItem>
        <ListItem
          items={[ctrl_key, edge_add, mouse_left_click]}
          title={'Add/Remove an Edge'}
        >
          Move the cursor over a Node, then, while pressing <b>[Ctrl]</b> key,
          <b>[drag]</b> a line over another Node. A directed Edge will connect
          the first Node to the Second, or, if the Edge existed already, it will
          be removed.
        </ListItem>
      </div>
    </div>
  );
}
