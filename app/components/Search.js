// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from "react-router";

import Query from "./Query";
import Results from "./Results";

import helper from "./utils/helpers";

// Create the Search component
export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topic: "",
      startyr: "",
      endyr: "",
      results: []
    }

    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(topic, startyr, endyr) {
    // console.log(topic, startyr, endyr);

    this.setState({topic: topic, startyr: startyr, endyr: endyr});

  }

  componentDidUpdate(prevProps, prevState){
    // console.log("updated");
    if (prevState.topic !== this.state.topic || prevState.startyr !== this.state.startyr 
      || prevState.endyr !== this.state.endyr) {
      // console.log("find articles");
      helper.runNytSearch(this.state.topic, this.state.startyr, this.state.endyr).then(response => {
      // console.log(response);

        var articleLimit = 5;

        var newResults = [];

        for (let j=0; j < articleLimit; j++){
          newResults.push(response[j]);
        }
        console.log(newResults);
        this.setState({results: newResults});
      });
    }
  }
  
  // Render the component
  render() {
    if (this.state.results.length !== 0) {
      return (
        <div>
          <Query setSearch={this.setSearch}/>
          <Results />
        </div>
      );
    }

    return (
      <div>
        <Query setSearch={this.setSearch}/>
      </div>
    );
  }
}

// export default Main;

