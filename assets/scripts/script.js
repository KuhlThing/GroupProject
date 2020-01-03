let headlinesGuardian = [];
let URLsGuardian = [];
let headlinesNYT = [];
let URLsNYT = [];

function emptyDivAndArrays() {
    $('#newsSource1').text("NYT Headlines");
    $('#newsSource2').text("Guardian Headlines");
    headlinesGuardian = [];
    URLsGuardian = [];
    headlinesNYT = [];
    URLsNYT = [];
}



// Search Button function that calls both AJAX functions and Street Fighter scene

function searchButton() {
    displayStreetFighterScene();
    var searchTerm = $('#searchBar').val();
    searchGuardian(searchTerm);
    searchNYT(searchTerm);
    emptyDivAndArrays();
    
    



// Function to make AJAX call to The Guardian

function searchGuardian(searchTerm) {

    let queryURL = 'https://content.guardianapis.com/search?q=' + searchTerm + '&editions?q=uk&api-key=eea751dd-bcde-4212-9e2e-0b0f669651bb'

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        for (let i = 0; i < 10; i++) {

            // For Loop creates 10 results, each including the headline and the URL.
            // Results are pushed into arrays (one for headlines, one for URLs)

            headlinesGuardian.push(response.response.results[i].webTitle);
            URLsGuardian.push(response.response.results[i].webUrl);
        }
    });
    
}



// Funtion to make AJAX call to New York Times

function searchNYT(searchTerm) {
    let queryNYT = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=hecyDdGxE109y5e3hVzDPM4SnT9zYj30";

    $.ajax({
        url: queryNYT,
        method: "GET"
    }).then(function (response) {
        
        for (i = 0; i < 10; i++) {

            // For Loop creates 10 results, including both headlines and URLs
            // Results are pushedinto arrays (one for headlines, one for URLs)

            headlinesNYT.push(response.response.docs[i].headline.main);
            URLsNYT.push(response.response.docs[i].web_url);
        }


        populateResults();          // calls function to populate results from within the NYT Ajax function
    });
}



// Function to populate search results on the HTML page

function populateResults() {

    for (j = 0; j < headlinesGuardian.length; j++) {
        
        // For Loop renders search results arrays by using headline as link title, URL as link source
        // Each array index is appended into proper div on HTML page

        $('#newsSource2').append('<p><a href=' + URLsGuardian[j] + '>' + headlinesGuardian[j] + '</a></p>');
    }


    for (k = 0; k < headlinesNYT.length; k++) {

        // For Loop renders search results arrays by using headline as link title, URL as link source
        // Each array index is appended into proper div on HTML page

        $('#newsSource1').append('<p><a href=' + URLsNYT[k] + '>' + headlinesNYT[k] + '</a></p>');
    }
    
    
}



function displayStreetFighterScene() {
    $('#street-fighter-gif').show();
    setTimeout(function () {
        $('#street-fighter-gif').hide()
    }, 500);
}



// Function to ensure document is ready before calling functions, and event listener on search button

$(document).ready(function () {
    $('#searchButton').click(searchButton);
    $('#street-fighter-gif').hide();
});
