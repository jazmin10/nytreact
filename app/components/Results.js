// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from "react-router";


// Create the Main component

export default class Results extends React.Component {

  // Here we render the component
  render() {

    return (
      <div>
        <div className="panel panel-default">
		  <div className="panel-heading">
		    <h3 className="panel-title"><strong>Results</strong></h3>
		  </div>
		  <div className="panel-body">
		    Panel content
		  </div>
		</div>
      </div>
    );
  }
}