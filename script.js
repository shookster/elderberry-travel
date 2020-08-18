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
  var priceEl = $("#price1");
  var destinationCountry = "";

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
      if (response.Places[0].CountryName == "United States") {
        destinationCountry = "USA";
      } else {
        destinationCountry = response.Places[0].CountryName;
      }

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

        $("#price0").text("Price: $" + response.Quotes[0].MinPrice);
        $("#date0").text("Date: " + response.Quotes[0].QuoteDateTime);
        $("#carrier0").text(
          "Carrier: " +
            response.Carriers.find(
              (carrier) =>
                carrier.CarrierId ==
                response.Quotes[0].OutboundLeg.CarrierIds[0]
            ).Name
        );

        $("#price1").text("Price: $" + response.Quotes[1].MinPrice);
        $("#date1").text("Date: " + response.Quotes[1].QuoteDateTime);
        $("#carrier1").text(
          "Carrier: " +
            response.Carriers.find(
              (carrier) =>
                carrier.CarrierId ==
                response.Quotes[1].OutboundLeg.CarrierIds[0]
            ).Name
        );

        $("#price2").text("Price: $" + response.Quotes[2].MinPrice);
        $("#date2").text("Date: " + response.Quotes[2].QuoteDateTime);
        $("#carrier2").text(
          "Carrier: " +
            response.Carriers.find(
              (carrier) =>
                carrier.CarrierId ==
                response.Quotes[2].OutboundLeg.CarrierIds[0]
            ).Name
        );

        $("#price3").text("Price: $" + response.Quotes[3].MinPrice);
        $("#date3").text("Date: " + response.Quotes[3].QuoteDateTime);
        $("#carrier3").text(
          "Carrier: " +
            response.Carriers.find(
              (carrier) =>
                carrier.CarrierId ==
                response.Quotes[3].OutboundLeg.CarrierIds[0]
            ).Name
        );

        $("#price4").text("Price: $" + response.Quotes[4].MinPrice);
        $("#date4").text("Date: " + response.Quotes[4].QuoteDateTime);
        $("#carrier4").text(
          "Carrier: " +
            response.Carriers.find(
              (carrier) =>
                carrier.CarrierId ==
                response.Quotes[4].OutboundLeg.CarrierIds[0]
            ).Name
        );

        // Ajax for Covid Info
        var covid = {
          async: true,
          crossDomain: true,
          url:
            "https://covid-19-data.p.rapidapi.com/country?format=json&name=" +
            destinationCountry,
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":
              "473028eaf3mshe44936fe64e187ep12d58fjsn591246548720",
          },
        };

        $.ajax(covid).done(function (response) {
          console.log(response);
          $(".countries").text(destinationCountry);
          $(".confirmed").text(response[0].confirmed);
          $(".deaths").text(response[0].deaths);
          $(".active").text(response[0].critical);
        });
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
