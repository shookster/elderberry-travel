// function displayFlight() {
//   // console.log(savedCities);
//   var APIkey = "473028eaf3mshe44936fe64e187ep12d58fjsn591246548720";

//   var queryURL =
//     "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm" +
//     city +
//     "&appid=" +
//     APIkey;

//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {});
// }

$(".searchBtn").on("click", function () {
  console.log("button test");
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/anytime?inboundpartialdate=anytime",
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "473028eaf3mshe44936fe64e187ep12d58fjsn591246548720",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/help/countries?format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "bc82f216camsh0d5edd3fce9ef67p15460fjsn388b99463a3f"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Create a new table row element
  var tRow = $("<tr>");
​
  // Methods run on jQuery selectors return the selector they we run on
  // This is why we can create and save a reference to a td in the same statement we update its text
  var countriesTd = $("<td>").text(response.Countries);
  var totalcasesTd = $("<td>").text(response.TotalCases);
  var newcasesTd = $("<td>").text(response.NewCases);
  var totaldeathsTd = $("<td>").text(response.TotalDeaths);    
  var activecasesTd = $("<td>").text(response.ActiveCases);
 });