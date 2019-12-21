const headline = [];
// Function to call searchGuardian and SearchNYT
function searchButton() {
    let searchTerm = $('#searchBar').val();
    searchGuardian(searchTerm);
    searchNYT(searchTerm);
}


// Function to make AJAX call to The Guardian

function searchGuardian(term) {

let queryURL = 'https://content.guardianapis.com/search?q=' + term + '&api-key=eea751dd-bcde-4212-9e2e-0b0f669651bb'



             //This must be fixed


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    for (let i = 0; i < 10; i++) {

        headline.push(response.response.results[i].webTitle);
        

        

                     //Then calls NTY Ajax function

    }console.log(headline);
});


}


function searchNYT(term) {
//basic ajax call for NYT
let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=hecyDdGxE109y5e3hVzDPM4SnT9zYj30";


// need to change "var searchTerm" to whatever the call for the search function is.
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
    console.log(response.Runtime);
    return headline;
});

}


$(document).ready(function () {
    $('#searchButton').click(searchButton);
});