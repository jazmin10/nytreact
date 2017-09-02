// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from "react-router";

// Create the Main component

export default class Main extends React.Component {

  constructor(props){
    super(props);
  }

  // Here we render the component
  render() {

    return (
      <div classNameName="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand" href="#">NYT Article Scrubber</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved-articles">Saved Articles</Link></li>
              </ul>
            </div>

          </div>
        </nav>

        <div className="jumbotron">
          <h1>New York Times Articles Scrubber</h1>
          <h2>Search for and annotate articles of interest!</h2>
        </div>

        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
}

// export default Main;

