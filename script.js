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

  var departureCityEl = $("#departureCity").val();
  var destinationCityEl = $("#destinationCity").val();
  var departureInput = "";
  var destinationInput = "";

  // Get Departure city from input box
  var getdepartureCity = {
    async: true,
    crossDomain: true,
    url:
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/us/GBP/en-GB/?query=" +
      departureCityEl,
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "473028eaf3mshe44936fe64e187ep12d58fjsn591246548720",
    },
  };

  $.ajax(getdepartureCity).done(function (response) {
    event.preventDefault();
    console.log(response);
    departureInput = response.Places[0].PlaceId;
    console.log(departureInput, "this is the departure");

    $.ajax(getdestinationCity).done(function (response) {
      event.preventDefault();
      console.log(response);
      destinationInput = response.Places[0].PlaceId;
      console.log(destinationInput, "this is the departure");

      // Get quotes
      var settings = {
        async: true,
        crossDomain: true,
        url:
          "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" +
          departureInput +
          "/" +
          destinationInput +
          "/anytime?inboundpartialdate=anytime",
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "473028eaf3mshe44936fe64e187ep12d58fjsn591246548720",
        },
      };

      $.ajax(settings).done(function (response) {
        event.preventDefault();
        console.log(departureInput, destinationInput);
        console.log(response, "this is the quote response");
      });
    });
  });

  // Get Destination city from input box
  var getdestinationCity = {
    async: true,
    crossDomain: true,
    url:
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/us/GBP/en-GB/?query=" +
      destinationCityEl,
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "473028eaf3mshe44936fe64e187ep12d58fjsn591246548720",
    },
  };
});
