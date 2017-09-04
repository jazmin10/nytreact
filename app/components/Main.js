// Include dependencies
import React from "react";
import {Link} from "react-router";

// Creates and exports the Main component
export default class Main extends React.Component {

  // Initial state setup
  constructor(props){
    super(props);
  }

  // Render the component: displays navbar and jumbotron
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
          {/* Displays search component or  savedArticles component */}
          {this.props.children}
        </div>

      </div>
    );
  }
}


