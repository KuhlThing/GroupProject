//basic ajax call for NYT
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +searchTerm + "&api-key=hecyDdGxE109y5e3hVzDPM4SnT9zYj30";
var searchTerm = "";
// need to change "var searchTerm" to whatever the call for the search function is.
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.Runtime);
});

