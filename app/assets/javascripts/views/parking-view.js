var View = {}

View.drawParkingStatus = function(spot) {
  var html = "<table id='regs_table'>"
  html += "<tr>"
  html += "<td>Day</td>"
  html += "<td>" + spot.sideOne.Side + "</td>"
  html += "<td>" + spot.sideTwo.Side + "</td>"
  html += "</tr>"
  html += "<tr>"
  html += "<td>Mon</td>"
  html += "<td>" + spot.sideOne.MondayStart + " to " + spot.sideOne.MondayStop + "</td>"
  html += "<td>" + spot.sideTwo.MondayStart + " to " + spot.sideTwo.MondayStop + "</td>"
  html += "</tr>"
  html += "<tr>"
  html += "<td>Tue</td>"
  html += "<td>" + spot.sideOne.TuesdayStart + " to " + spot.sideOne.TuesdayStop + "</td>"
  html += "<td>" + spot.sideTwo.TuesdayStart + " to " + spot.sideTwo.TuesdayStop + "</td>"
  html += "</tr>"
  html += "<tr>"
  html += "<td>Wed</td>"
  html += "<td>" + spot.sideOne.WednesdayStart + " to " + spot.sideOne.WednesdayStop + "</td>"
  html += "<td>" + spot.sideTwo.WednesdayStart + " to " + spot.sideTwo.WednesdayStop + "</td>"
  html += "</tr>"
  html += "<tr>"
  html += "<td>Thu</td>"
  html += "<td>" + spot.sideOne.ThursdayStart + " to " + spot.sideOne.ThursdayStop + "</td>"
  html += "<td>" + spot.sideTwo.ThursdayStart + " to " + spot.sideTwo.ThursdayStop + "</td>"
  html += "</tr>"
  html += "<tr>"
  html += "<td>Fri</td>"
  html += "<td>" + spot.sideOne.FridayStart + " to " + spot.sideOne.FridayStop + "</td>"
  html += "<td>" + spot.sideTwo.FridayStart + " to " + spot.sideTwo.FridayStop + "</td>"
  html += "</tr>"
  html += "<tr>"
  html += "<td>Sat</td>"
  html += "<td>" + spot.sideOne.SaturdayStart + " to " + spot.sideOne.SaturdayStop + "</td>"
  html += "<td>" + spot.sideTwo.SaturdayStart + " to " + spot.sideTwo.SaturdayStop + "</td>"
  html += "</tr>"
  html += "<tr>"
  html += "<td>Sun</td>"
  html += "<td>" + spot.sideOne.SundayStart + " to " + spot.sideOne.SundayStop + "</td>"
  html += "<td>" + spot.sideTwo.SundayStart + " to " + spot.sideTwo.SundayStop + "</td>"
  html += "</tr>"
  html += "</table>"
  return html
}

View.ParseRegulations = function(todaysRegulations) { //today's regulations is an array
  if (todaysRegulations[0] === 0) {
    //render table with 'All Day Parking'
  } else if (todaysRegulations[0] === '12am') {
    //render table with 'No Parking in this Spot'
  } else {
    //render table with Default values
  }
}