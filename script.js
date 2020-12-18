var APIkey = "WrB1zbsUayijQqUnzNy7tinYsH6U1Tp4";
var AppID = "42cb5969-6f50-4bdd-8ddb-1d207e52757e";

var search = $("#search").val()
var amount = $("#amount").val()
var startYear = $("#startYear").val()
var endYear = $("#endYear").val()

var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${ APIkey }`;

var response;
$.ajax({
    url: queryURL,
    method: "GET"
}).then( function( response ) {
    console.log( response );
    // console.log( response.response );
    // console.log( response.response.docs );
    // var docs = response.response.docs;
    // for ( var i = 0; i < docs.length; i++ ) {
    //     console.log( docs[ i ].headline.main );
    //     console.log( docs[ i ].abstract );
    //     console.log( docs[ i ].web_url );
    // }
})