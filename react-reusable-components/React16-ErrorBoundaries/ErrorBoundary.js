// Creating Error Boundary. In src/ErrorBoundary/ create ErrorBoundary.js file as follows or any name that you like
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

// Usage: only use it when you are sure that a component might fail sometime, just import it and wrap the component with it
// for example:
  import React from 'react';
  import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

  class App extends React.Component {
    // in the following case we know that error might occure at some point, so we gonna add error boundary to our component
    const randomNumber = Math.random();
    if (randomNumber > 0.7) {
      throw new Error('Something went wrong');
    }

    render() {
      return (
        <ErrorBoundary> //Note: if we are mapping throw a list the key element should go to the top element
          // The rest of the component will be here
        </ErrorBoundary>
      )
    }
  }

export default App;

// NOTE: error boundary is a great tool that has been added to React16, it serves our app very well in production because, it only shows a custom error to the user for the component that has error and the rest of the application works fine.
