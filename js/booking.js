function ContactMover(name, number, movingFrom, movingTo, date, houseSize, message) {
  this.name = name;
  this.number = number;
  this.movingFrom = movingFrom;
  this.movingTo = movingTo;
  this.date = date;
  this.houseSize = houseSize;
  this.message = message;
}

ContactMover.prototype.trackBooking = function {
  return this.name + this.number + this.movingFrom + this.movingTo + this.date + this.houseSize + this.message;
}

$(document).ready(function () {

})