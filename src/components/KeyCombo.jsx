import * as React from 'react';
import { plus_sign } from '../scripts/images.js';
import '../styles/components/KeyCombo.css';

export default function KeyCombo({ items }) {
  const items_length = items.length;
  return (
    <div className="images-container">
      {items.map((element, index) =>
        index < items_length - 1 ? (
          <React.Fragment key={index}>
            <img className="image" src={element} alt="Key Element" />
            <img className="image" src={plus_sign} alt="Plus Sign" />
          </React.Fragment>
        ) : (
          <img key={index} className="image" src={element} alt="Key Element" />
        )
      )}
    </div>
  );
}
