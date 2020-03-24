var cityArray = new Array();
var latArray = new Array();
var lngArray = new Array();
var rowID;

// Load data from JSON and save to Local Storage
$(document).ready(function () {
    console.log("jQuery works");
    $.getJSON("dataFiles/cities.json", function (data) {
        console.log(data);

        $("#cityList").html(""); //To refresh the append.

        for (let x = 0; x < data.cities.length; x++) {
            //build arrays
            cityArray[x] = data.cities[x].cityName;
            latArray[x] = data.cities[x].cityLat;
            lngArray[x] = data.cities[x].cityLng;

            // display city
            $("#cityList").append(
                `
                    <li li-id='${x}'>
                        <a href='weather.html'>${data.cities[x].cityName}</a>
                    </li>
                `
            ); //end of append
        } //end of loop
        //It's taking the array and turning it into a big string for local storage
        localStorage.setItem("cityArray", JSON.stringify(cityArray));
        localStorage.setItem("latArray", JSON.stringify(latArray));
        localStorage.setItem("lngArray", JSON.stringify(lngArray));
    }); //Remember: data param holds the JSON contents
}); //end of .ready

// Find the row selected and save to Local Storage
$(document).on("click", '#cityList >li', function () {
    //This grabs the closest li element clicked and sets an id.
    localStorage.setItem("rowID", $(this).closest("li").attr("li-id"));
}); //end of click event

