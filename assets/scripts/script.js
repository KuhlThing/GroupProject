const headlinesGuardian = [];
const headlinesNYT = [];

// Function to call searchGuardian and SearchNYT



function searchButton() {
    let searchTerm = $('#searchBar').val();
    searchGuardian(searchTerm);
    searchNYT(searchTerm);
    
}


// Function to make AJAX call to The Guardian



function searchGuardian(searchTerm) {

    let queryURL = 'https://content.guardianapis.com/search?q=' + searchTerm + '&api-key=eea751dd-bcde-4212-9e2e-0b0f669651bb'
    
    
    
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

    
    
        for (let i = 0; i < 10; i++) {
    
            headlinesGuardian.push(response.response.results[i].webTitle);
            headlinesGuardian.push(response.response.results[i].webUrl);

            
            // console.log(response.response.results[0]);
    
            console.log(response.response.results[i].webTitle);
            console.log(response.response.results[i].webUrl);
    
                         //Then calls NTY Ajax function
    
        }
        
        // console.log(headlinesGuardian);
    });
    
    
    }
    

function searchNYT(term) {
//basic ajax call for NYT
let queryNYT = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=hecyDdGxE109y5e3hVzDPM4SnT9zYj30";


// need to change "var searchTerm" to whatever the call for the search function is.
$.ajax({
  url: queryNYT,
  method: "GET"
}).then(function(response) {
    populateResults();
});

}
function populateResults() {
    
    console.log(headlinesGuardian);
    $('#Guardian-Headlines').text(headlinesGuardian);
    // headlines.forEach(element => {
    //     $('#Guardian-Headlines').text(element);
    // });
}

$(document).ready(function () {
    $('#searchButton').click(searchButton);
});