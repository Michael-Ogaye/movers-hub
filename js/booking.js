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
};

ContactMover.prototype.trackBooking = function () {
  return (
    this.name +
    this.number +
    this.movingFrom +
    this.movingTo +
    this.date +
    this.houseSize +
    this.message
  );
};

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
    var additionalInfo = $("#message").val();

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

    console.log(bookMover.trackBooking());

  });

  // Disable previous dates
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  $("#date-picker").attr("min", today);
});