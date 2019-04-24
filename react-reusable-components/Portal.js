import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="ui active modal">
          <div className="header"> Header of the portal</div>
          <div className="scrolling content">
            // put the content here
          </div>
          <div className="actions">
            <Link to="/" className="ui red button">button</Link>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
