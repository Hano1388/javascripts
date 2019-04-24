// 1 - passing just an empty set of brackets ([]) to the end of useEffect, useEffect will behave like 'componentDidMount'

useEffect(() => {
  // your code goes here
}, [])


// 2 - if you pass anything else, useEffect will run if any changes happen to the passed argument. For example if we pass props.user, useEffect will run whenever props.user changes

useEffect(() => {
  // your code goes here
}, [props.user]);


// 3 - useEffect => cleanup like (componentWillUnmount)
useEffect(() => {
  console.log('Component.js useEffect hook');

  // Http Request....
  setTimeout(() => {
    alert('Saved data to the cloud!');
  }, 1000);
  // for that behaviour we gonna return an anonymouse function and do the cleanup work inside it whenever the the component removed from dom, it will run
  return () => {
    console.log('Component.js removed from dom, you can do the cleanup work here');
  }
}, []);

// 4 - useEffect will run in every update even if it is not inside the component that have useEffect, if we don't pass any arguments as follows

useEffect(() => {
  console.log('Component.js useEffect hook');

  return () => {
    console.log('this will run with every update to the app');
  }
}); // no arguments are passed here 
