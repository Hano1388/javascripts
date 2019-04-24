import React, { Component } from 'react';

export default ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  return ComposedComponent;
}


// Usage:
// In some other location, where we want to use this higher-order-component
import ComposedComponent // This is my HOC
import Resources // This the component I want to wrap

const Wrapped = ComposedComponent(Resources);

// then in render method
<Wrapped />
