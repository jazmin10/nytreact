// Include React
import React from "react";

import helper from "./utils/helpers";

// Create the SavedArticles component
export default class SavedArticles extends React.Component {

  // Inital state setup
  constructor(props) {
    super(props);

    this.state = {
      results: [] // array that holds articles saved in the database
    }

    this.removeArticle = this.removeArticle.bind(this);
  }

  // During initial load...
  componentDidMount() {

    // Grab the saved articles from the database
    helper.allArticles().then(data => {
      
      this.setState({results: data}); // set articles from the db to the results array
    });
  }

  // This method will remove saved articles 
  removeArticle(event){

    // Delete the article from the dabase
    helper.removeArticle(event.target.value).then( () => {

      // Grab articles from the db in order to re-render component
      helper.allArticles().then(data => this.setState({results: data}));
    });
  }

  // Render the component
  render() {

    // If there are articles saved...
    if (this.state.results.length !== 0) {
      return (
        <div>
          <div className="panel panel-default">

            <div className="panel-heading">
              <h3 className="panel-title"><strong>Saved Articles</strong></h3>
            </div>

            <div className="panel-body">
          {/* for each article saved in the database render in a well */}
              {this.state.results.map(search => {
                return (
                  <div className="well" key={search._id}>
                    <h4>{search.title}</h4>
                    <button value={search._id} className="btn btn-default btn-danger" onClick={this.removeArticle}>delete</button>
                    <a href={search.url} target="_blank"><button className="btn btn-default btn-primary">view article</button></a>
                    <p>Saved on: {search.date}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      );
    }

    // If there no articles, notify the user there are no articles saved
    return (
      <div className="panel panel-default">
        <div className="panel-body">
        No saved articles! Head to the Search page.
        </div>
      </div>
    );

  }
}

// export default Main;

