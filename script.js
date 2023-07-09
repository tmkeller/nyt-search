const APIkey = "WrB1zbsUayijQqUnzNy7tinYsH6U1Tp4";
const AppID = "42cb5969-6f50-4bdd-8ddb-1d207e52757e";
const search = $("#search").val();
const amount = $("#amount").val();
const startYear = $("#startYear").val();
const endYear = $("#endYear").val();

const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${APIkey}`;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
});
