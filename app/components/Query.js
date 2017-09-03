// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from "react-router";


// Create the Main component

export default class Query extends React.Component {

  // Here we render the component
  render() {

    return (
      <div>
        <div className="panel panel-default">
		  <div className="panel-heading">
		    <h3 className="panel-title"><strong>Search</strong></h3>
		  </div>
		  <div className="panel-body">
		    
		    <form>
            <div className="form-group">
              <h5>Topic</h5>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
               
                type="text"
                className="form-control text-center"
                id="term"
                
                required
              />

              <h5>Start Year (Optional)</h5>
              <input
               
                type="text"
                className="form-control text-center"
                id="term"
                
                required
              />
              
              <h5>End Year (Optional)</h5>
              <input
               
                type="text"
                className="form-control text-center"
                id="term"
                
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>











		  </div>
		</div>
      </div>
    );
  }
}