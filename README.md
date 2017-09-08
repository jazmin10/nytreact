# Let's MERN

### Overview
The NYT Article Scrubber is my first MongoDB, Express, React, and Node application, as well as my first single page application. The application allows users to search for New York Times articles by topic, start year(optional), and end year(optional). Once results are returned, users can save the articles and later remove them if they wish.

### Guidelines
1. The articles should be saved to MongoDB with the following fields:
   * title - title of the article from the New York Times
   * date - publication date and time of the article
   * url - url of the article
2. Express routes to grab saved articles, save an article, and delete an article
3. Use npm react-router package to create the Single Page Application
4. Include the following React components:
   * Main - contains the main layout and navigation
   * Search - queries the NYT API for articles. Holds the following components:
       * Query - search form
       * Results - displays API search results
   * Saved - displays the saved articles that were stored in the database


### Preview
![web-sample](https://media.giphy.com/media/NwxMDE5uEu0Ni/giphy.gif)
