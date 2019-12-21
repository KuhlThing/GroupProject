// Function to make AJAX call to The Guardian



var guardianURL = 'https://content.guardianapis.com/search?q=' + searchTerm + '&api-key=eea751dd-bcde-4212-9e2e-0b0f669651bb'

var searchTerm = 'trump'


$.ajax({
    url: guardianURL,
    method: "GET"
}).then(function (response) {

    for (var i = 0; i < 10; i++) {

        var foo = response.response.results[i].webTitle

        console.log(foo);

    }
});



