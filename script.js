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

// $("#searchBtn").on("click", function () {
//   console.log("button test");
// });

var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01?inboundpartialdate=2019-12-01",
  method: "GET",
  headers: {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "473028eaf3mshe44936fe64e187ep12d58fjsn591246548720",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
