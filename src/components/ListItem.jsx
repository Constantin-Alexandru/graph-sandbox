import * as React from 'react';
import KeyCombo from './KeyCombo';
import '../styles/components/ListItem.css';

export default function ListItem({ items, title, children }) {
  return (
    <div className="list-item">
      <KeyCombo items={items} />
      <div className="text-container">
        <span className="list-item-title">{title}</span>
        <span className="text">{children}</span>
      </div>
    </div>
  );
}
