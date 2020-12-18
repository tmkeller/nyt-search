var APIkey = "WrB1zbsUayijQqUnzNy7tinYsH6U1Tp4";
var AppID = "42cb5969-6f50-4bdd-8ddb-1d207e52757e";

<<<<<<< HEAD
=======
var search = $("#search").val()
var amount = $("#amount").val()
var startYear = $("#startYear").val()
var endYear = $("#endYear").val()
>>>>>>> ec2f3d29250d4cb4aae33eb47298c7a51e2a5893

var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${ APIkey }`;

$.ajax({
    url: queryURL,
    method: "GET"
}).then( function( response ) {
    console.log( response );
})