// Function to make AJAX call to The Guardian

function searchGuardian() {

var guardianURL = 'https://content.guardianapis.com/search?q=' + searchTerm + '&api-key=eea751dd-bcde-4212-9e2e-0b0f669651bb'



var searchTerm = ('#searchBar').val();              //This must be fixed


$.ajax({
    url: guardianURL,
    method: "GET"
}).then(function (response) {

    for (var i = 0; i < 10; i++) {

        var headline = response.response.results[i].webTitle
        

        console.log(headline);

        searchNYT();                //Then calls NTY Ajax function

    }
});


}


function searchNYT() {
//basic ajax call for NYT
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +searchTerm + "&api-key=hecyDdGxE109y5e3hVzDPM4SnT9zYj30";


// need to change "var searchTerm" to whatever the call for the search function is.
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.Runtime);
});

}
