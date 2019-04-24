constructor(props) // excutes first when the component is created, and it is not a lifecycle hook but, an ES6 feature for classes, and you have to always call "super(props)" inside constructor

getDrivedStateFromProps(props, state) // this life cycle was added with React16.3, it gets called whenever props change, only used in some rare cases
// it is ideal to initialize component state based on props that the component gets

// MAIN USAGE is to sync state to props
// NO Http requests here


render() // prepare and structure JSX Code

componentDidMount() // This will be called imadiately after render(), this is a good place to send Http requests
// don't call setState here unless it is after getting data back from an http request and storing that data inside state

shouldComponentUpdate(nextProps, nextState) // we can cancel the updating propcess with this lifecycle method
// MAIN USAGE: decide wether to continue or not

getSnapshotBeforeUpdate(prevProps, prevState) // it gets called after shouldComponentUpdate and then render, update child components props then this lifecycle method will gets called

// MAIN USAGE: Last minute DOM ops

componentWillUpdate() // this runs right before componentDidUpdate()

componentDidUpdate() // finally this lifecycle method will get called

componentDidCatch()
componentWillUnmount()
