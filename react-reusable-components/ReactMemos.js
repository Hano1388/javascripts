// React.memo is used to wrap functional components and it works instead of react lifecycle hook (shouldComponentUpdate), whenever props change it will rerender the functional component only.

export default React.memo(ComponentName);


// NOTE: it's important to prevent unnecessary updates by using 'React.memo' for functional components and 'shouldComponentUpdate' for class based components but, not always, in some cases when our component depends on parent component to update we don't need to wrap it with 'React.memo' or add 'shouldComponentUpdate' to it

// NOTE: for class components, if the component needs to render based on any of the props that we have, then we can simply extend the component from PureComponent and that will take care of the complete props check  and we won't need to use 'shouldComponentUpdate'
