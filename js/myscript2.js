/* myscript2.js */
$(document).ready(function () {
  var d = new Date();
  $("#cdate").html(d);

  // Get data from Local Storage (convert from string to JSON)
  cityArray = JSON.parse(localStorage.getItem("cityArray"));
  latArray = JSON.parse(localStorage.getItem("latArray"));
  lngArray = JSON.parse(localStorage.getItem("lngArray"));
  rowID = JSON.parse(localStorage.getItem("rowID"));


  // Set latitude and longitude for selected city
  var lat = latArray[rowID];
  var lon = lngArray[rowID];

  // Get API key from https://home.openweathermap.org/

  // Build api string
  var apiURI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=484e47e5a69dfcd6d1d089e84051d0d5`;

  // Get JSON data from remote server and display data
  $.ajax({
    type: "GET",
    url: apiURI,
    dataType: "jsonp",
    success: function (response) {
      console.log(response); //For confirming data worked
      $(".dataCity").html(response.name);
      $(".dataTemp").html((response.main.temp - 273.15).toFixed(0) + "°C");
      $(".dataWind").html(response.wind.speed);
      $(".dataHum").html(response.main.humidity + "%"); //specifying metric
      $(".dataPress").html(response.main.pressure + "mbars");
    }
  });

});

/*
 The Kelvin scale is an absolute, thermodynamic temperature scale
 using as its null point absolute zero, the temperature at which
 all thermal motion ceases in the classical description of thermodynamics.
  To get Celsius, subtract 273.15 from Kelvin temp
*/


