import React from 'react';

const Loader = (props) => {
  return (
    // Note: below class belongs to semantic-ui so you need to bring in semantic ui library
    <div class="ui active dimmer">
      <div class="ui big text loader">{ props.message }</div>
    </div>
  );
};

Loader.defaultProps = {
  message: 'Loading...'
};

export default Loader;
