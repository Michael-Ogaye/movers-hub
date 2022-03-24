// Business Logic
function ContactMover(
  name,
  number,
  movingFrom,
  movingTo,
  date,
  houseSize,
  message
) {
  this.name = name;
  this.number = number;
  this.movingFrom = movingFrom;
  this.movingTo = movingTo;
  this.date = date;
  this.houseSize = houseSize;
  this.message = message;
}

//User Interface Logic
$(document).ready(function () {
  $("#submitBtn").click(function (event) {
    event.preventDefault();

    //collecting user inputs
    var clientName = $("#name").val();
    var pNumber = $("#tel").val();
    var currentLocation = $("#moving-from").val();
    var destination = $("#moving-to").val();
    var movingDate = $("#date-picker").val();
    var numberOfRooms = $("#rooms").val();
    var additionalInfo = $("#message").val()

    //Creates an object instance
    var bookMover = new ContactMover(
      clientName,
      pNumber,
      currentLocation,
      destination,
      movingDate,
      numberOfRooms,
      additionalInfo
    );

    localStorage.setItem("ls_clientName", clientName);
    localStorage.setItem("ls_pNumber", pNumber);
    localStorage.setItem("ls_currentLocation", currentLocation);
    localStorage.setItem("ls_destination", destination);
    localStorage.setItem("ls_movingDate", movingDate);
    localStorage.setItem("ls_numberOfRooms", numberOfRooms);
    localStorage.setItem("ls_additionalInfo", additionalInfo);

    window.location.href = "tracking.html";

    $("#contactForm").trigger("reset");

  });

  // Disable previous dates
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  $("#date-picker").attr("min", today);
});