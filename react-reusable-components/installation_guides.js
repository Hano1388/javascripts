# - Installing Redux Form

  1 - npm install --save redux-form
  2 - in reducers/index do the following wire ups

      BEFORE:
      import { combineReducers } from 'redux';
      import postsReducer from './postsReducer';

      const rootReducer = combineReducers({
        posts: postsReducer
      });

      export default rootReducer;

      AFTER:
      import { combineReducers } from 'redux';
    + import { reducer as formReducer } from 'redux-form';
      import postsReducer from './postsReducer';

      const rootReducer = combineReducers({
        posts: postsReducer,
    +   form: formReducer
      });

      export default rootReducer;

  3 - for the component that we want to use redux form inside we need to do the following configuration

      AFTER:
      import React from 'react';
      import { Field, reduxForm } from 'redux-form';

      class CreatePost extends React.Component {
        renderField(field) {
          return (
            <div className="form-group">
              <label>{field.label}</label>
              <input
                className="form-control"
                type={field.type}
                { ...field.input } // Note: this is instrea of writing [onChange = field.input.onChange, onFocus=field.input.onFocus ....and so on]
              />
              // render error messages
              {field.meta.error}
            </div>
          )
        }

        render() {
          return (
            <form name="PostsNewForm">
              <Field
                label="Title"
                name="title"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Body"
                name="body"
                type="textarea"
                component={this.renderField}
              />
            </form>
          );
        }
      }

      // Validate function will be called automatically, we just need to specify rules for each input field
      function validate() {
        const errors = {};
        if(!values.title || values.title.length < 3) {
          errors.title = "Please enter a title that is at least 3 characters";
        }
        if (!values.body) {
          errors.body = "Enter the body of your post"
        }
        // NOTE: if errors is empty, the form is fine to submit otherwise, redux form assumes form is invalid
        return errors;
      }

      export default reduxForm({
        validate,
        form: 'PostNewForm'
      })(CreatePost);
