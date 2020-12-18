var APIkey = "WrB1zbsUayijQqUnzNy7tinYsH6U1Tp4";
var AppID = "42cb5969-6f50-4bdd-8ddb-1d207e52757e";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey";

$.ajax({
    url: queryURL,
    method: "GET"
}).then( function)