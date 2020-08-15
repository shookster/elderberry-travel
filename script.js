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
  var userInput = $(".input").val();
    $(".input").val("");
  var settings2 = {
    
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-data.p.rapidapi.com/country?format=json&name="+userInput,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "bc82f216camsh0d5edd3fce9ef67p15460fjsn388b99463a3f"
      
    }
  }
  console.log(userInput);

  $.ajax(settings2).done(function (response) {
    console.log(response);
  
      const countriesEl = $(".countries");
      const totalcasesEl = $(".confirmed");
      const newcasesEl = $(".new");
      const totaldeathsEl = $(".deaths");    
      const activecasesEl = $(".active");
      countriesEl.text(response.Countries);
      totalcasesEl.text(response.confirmed);
      newcasesEl.text(response.NewCases);
      totaldeathsEl.text(response.deaths);
      activecasesEl.text(response.active);
      console.log(totalcasesEl);
  });

});
