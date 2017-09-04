import axios from "axios";

import moment from "moment";

var helper = {
	// SavedArticles Component -----------------------------------------------------------------
	allArticles: function(){
		return axios.get("/articles").then(response => {
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
	},

	// Search component -----------------------------------------------------------------
	runNytSearch: function(topic, startyr, endyr) {
		// console.log("axios");
		// console.log(topic, startyr, endyr);

		var apiKey = "c72d1829061a47beb992c7a4b26251b8";

		var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}
			&q=${topic}`;

		if (startyr){
			url += `&start_date=${startyr}0101`;
		}

		if (endyr) {
			url += `&end_date=${endyr}0101`
		}

		// console.log(url);
		

		return axios.get(url).then(function(response) {
			return response.data.response.docs;
		});
	}

}

export default helper;
