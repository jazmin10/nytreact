// Include React
import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from "react-router";


// Create the Main component

export default class Query extends React.Component {

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

	handleChange(event) {
		
		var newState = {};
		newState[event.target.id] = event.target.value;

		this.setState(newState);
	}	

	handleSubmit(event) {
		event.preventDefault();

		this.props.setSearch(this.state.topic, this.state.startyr, this.state.endyr);

		this.setState({topic: "", startyr: "", endyr: ""});
	}

  	// Here we render the component
  	render() {

	    return (
	    	<div>
	        <div className="panel panel-default">

				<div className="panel-heading">
			    	<h3 className="panel-title"><strong>Search</strong></h3>
			  	</div>

			  	<div className="panel-body">
			    
			    	<form onSubmit={this.handleSubmit}>
	            	<div className="form-group">

		            	<h5>Topic</h5>
		            	<input
			               	value={this.state.topic}
			                type="text"
			                className="form-control"
			                id="topic"
			                onChange={this.handleChange}
			                required
		              	/>

		              	<h5>Start Year (Optional)</h5>
		              	<input
			               	value={this.state.startyr}
			                type="text"
			                className="form-control"
			                id="startyr"
			                onChange={this.handleChange}
			            />

	              		<h5>End Year (Optional)</h5>
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