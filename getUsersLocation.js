// Geolocation API Documentation:
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

// An example of getting users current location in React
  import React from 'react';
  import ReactDOM from 'react-dom';


  class App extends React.Component {
    // STATE RULES
    // 1 - Only usable with class components
    // Important Note: Technically 'State' can be used with functional components using the 'hooks' system
    // 2 - You will confuse props with state :(
    // 3 - 'State' is a JS object that contains data relevant to a component
    // 4 - Updating 'state' on a component causes the component to (almost) instantly rerender
    // 5 - State must be initialized when a component is created
    // 6 - State can ONLY be updated using the function 'setState'

    constructor(props) {
      super(props);

      this.state = { lat: null, errorMsg: '' };

      // below function is for getting user's current location
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ lat: position.coords.latitude });
        }, // first callback is the success
        err => {
          this.setState({ errorMsg: err.message });
        } // second callback is the fail(error)
      );
    }

    render() {
      if (this.state.errorMsg && !this.state.lat) {
        return <div>Error: { this.state.errorMsg }</div>
      }
      if (!this.state.errorMsg && this.state.lat) {
        return <div>Latitude: { this.state.lat } </div>
      }

      return <div>Loading!...</div>
    }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  );
