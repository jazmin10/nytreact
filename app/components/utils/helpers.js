import axios from "axios";

import moment from "moment";

var helper = {
	allArticles: function(){
		return axios.get("/articles").then(function(response){
			// response.data.date = moment(response.date, moment.ISO_8601).format("MMM DD YYYY hh:mm A");
			for (let i=0; i < response.data.length; i++){
				// console.log(response.data[i].date);
				response.data[i].date = moment(response.data[i].date, moment.ISO_8601).format("MMM DD YYYY, hh:mm A");
				// console.log(response.data[i].date)
			}
			// console.log(response.data);

			return response.data;
		});
	},

	removeArticle: function(id){
		return axios.delete("/delete-article/" + id);
	}
}

export default helper;