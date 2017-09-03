// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from "react-router";

import Query from "./Query";
import Results from "./Results";

// Create the Search component
export default class Search extends React.Component {

  // Render the component
  render() {
    return (
      <div>
        <Query />
        <Results />
      </div>
    );
  }
}

// export default Main;

