/* NYT React Search - New York Times Article Search Application
Initializing Query component */

// Include React
import React from "react";

// Creates and exports the Main component
export default class Query extends React.Component {

	// Initial state setup
	constructor(props){
		super(props);

		this.state = {
			topic: "",
			startyr: "",
			endyr: ""
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// This function will capture user input
	handleChange(event) {

		// As the input field changes, capture the change
		var newState = {};
		newState[event.target.id] = event.target.value;

		// Set the topic, startyr, or endyr to the the change that was captured
		this.setState(newState);
	}	

	// When the Submit button is clicked...
	handleSubmit(event) {
		event.preventDefault();

		// This function sets the search parameters in the Search component
		this.props.setSearch(this.state.topic, this.state.startyr, this.state.endyr);

		// Empty user input
		this.setState({topic: "", startyr: "", endyr: ""});
	}

  	// Render the component: displays the search form 
  	// For each input field provide the handleChange function in order to capture user input
  	render() {

	    return (
	    	<div>
	        <div className="panel panel-default">

						<div className="panel-heading">
			    		<h3 className="panel-title"><strong>SEARCH</strong></h3>
			  		</div>

			  		<div className="panel-body">
				    	<form onSubmit={this.handleSubmit}>
		            <div className="form-group">

		            	<h5>TOPIC</h5>
		            	<input
		               	value={this.state.topic}
		                type="text"
		                className="form-control"
		                id="topic"
		                onChange={this.handleChange}
		                required
		              />

	              	<h5>START YEAR (Optional)</h5>
	              	<input
		               	value={this.state.startyr}
		                type="text"
		                className="form-control"
		                id="startyr"
		                onChange={this.handleChange}
				          />

		              <h5>END YEAR (Optional)</h5>
			            <input
			            	value={this.state.endyr}
			            	type="text"
			              className="form-control"
		                id="endyr"
		                onChange={this.handleChange}			               
		              />
		              <br />

				          <button className="btn btn-primary" type="submit">Submit</button>
		            </div>
		          </form>
			  		</div>
			  		
					</div>
	    	</div>
	    );
  	}
}