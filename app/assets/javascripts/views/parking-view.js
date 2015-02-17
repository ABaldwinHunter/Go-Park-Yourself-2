var View = {}

View.ParseRegulations = function(todayRegs) {
  var sideOneArray = todayRegs.sideOneCanPark;
  var sideTwoArray = todayRegs.sideTwoCanPark;
  var html = "<table id='regs_table'>"
  html += "<thead>"
  html += "<tr>"
  // html += "<td class='table_head'>Time</td>"
  html += "<td class='table_head'>" + todayRegs.sideOneName + " Side</td>"
  html += "<td class='table_head'>" + todayRegs.sideTwoName + " Side</td>"
  html += "</tr>"
  html += "</thead>"

  html += View.Colorize(sideOneArray, sideTwoArray);


  html += "</tr>"
  html += "</table>"
  return html
}


View.Colorize = function(sideOneArray, sideTwoArray) {
  var html = ""

  // for (var i = sideOneArray)
  // var html += "<tr>"
  // html += "<td class='table_time' rowspan='3'>12</td>"
  // html += "<tr>"

  for (var i = sideOneArray.length - 1; i >= 0; i--) {
    html += "<tr>"
    //this is the first column
    if (sideOneArray[i] === true) {
      html+= "<td class='can_park'></td>"
    } else {
      html+= "<td class='cant_park'></td>"
    }

    //this is the second column
    if (sideTwoArray[i] === true) {
      html+= "<td class='can_park'></td>"
    } else {
      html+= "<td class='cant_park'></td>"
    }

    html += "<tr>"
  };

  return html;


}

//data
// sideOneEnd: "4PM"
// sideOneName: "N"
// sideOneStart: "7AM"
// sideTwoEnd: "12am"
// sideTwoName: "S"
// sideTwoStart: "12am"

// View.drawParkingStatus = function(spot) {
//   var html = "<table id='regs_table'>"
//   html += "<tr>"
//   html += "<td>Day</td>"
//   html += "<td>" + spot.sideOne.Side + "</td>"
//   html += "<td>" + spot.sideTwo.Side + "</td>"
//   html += "</tr>"
//   html += "<tr>"
//   html += "<td>Mon</td>"
//   html += "<td>" + spot.sideOne.MondayStart + " to " + spot.sideOne.MondayStop + "</td>"
//   html += "<td>" + spot.sideTwo.MondayStart + " to " + spot.sideTwo.MondayStop + "</td>"
//   html += "</tr>"
//   html += "<tr>"
//   html += "<td>Tue</td>"
//   html += "<td>" + spot.sideOne.TuesdayStart + " to " + spot.sideOne.TuesdayStop + "</td>"
//   html += "<td>" + spot.sideTwo.TuesdayStart + " to " + spot.sideTwo.TuesdayStop + "</td>"
//   html += "</tr>"
//   html += "<tr>"
//   html += "<td>Wed</td>"
//   html += "<td>" + spot.sideOne.WednesdayStart + " to " + spot.sideOne.WednesdayStop + "</td>"
//   html += "<td>" + spot.sideTwo.WednesdayStart + " to " + spot.sideTwo.WednesdayStop + "</td>"
//   html += "</tr>"
//   html += "<tr>"
//   html += "<td>Thu</td>"
//   html += "<td>" + spot.sideOne.ThursdayStart + " to " + spot.sideOne.ThursdayStop + "</td>"
//   html += "<td>" + spot.sideTwo.ThursdayStart + " to " + spot.sideTwo.ThursdayStop + "</td>"
//   html += "</tr>"
//   html += "<tr>"
//   html += "<td>Fri</td>"
//   html += "<td>" + spot.sideOne.FridayStart + " to " + spot.sideOne.FridayStop + "</td>"
//   html += "<td>" + spot.sideTwo.FridayStart + " to " + spot.sideTwo.FridayStop + "</td>"
//   html += "</tr>"
//   html += "<tr>"
//   html += "<td>Sat</td>"
//   html += "<td>" + spot.sideOne.SaturdayStart + " to " + spot.sideOne.SaturdayStop + "</td>"
//   html += "<td>" + spot.sideTwo.SaturdayStart + " to " + spot.sideTwo.SaturdayStop + "</td>"
//   html += "</tr>"
//   html += "<tr>"
//   html += "<td>Sun</td>"
//   html += "<td>" + spot.sideOne.SundayStart + " to " + spot.sideOne.SundayStop + "</td>"
//   html += "<td>" + spot.sideTwo.SundayStart + " to " + spot.sideTwo.SundayStop + "</td>"
//   html += "</tr>"
//   html += "</table>"
//   return html
// }

// if (todayRegs.Suspended === false ) {
//     html += "<h2> Alternative Side Parking in effect </h2>"
//   } else {
//     html += "<h2> Alternative Side Parking not in effect</h2>"
//   }

//   html += "</h2>"
//   html += "<table id='regs_table'>"
//   html += "<tr>"
//   html += "<td>" + todayRegs.sideOneName + " Side" + "</td>"

//   if (todayRegs.sideTwoName !== undefined) {
//      html += "<td>" + todayRegs.sideTwoName + " Side" + "</td>"
//   }

//   html += "</tr>"
//   html += "<tr>"

//   if (todayRegs.sideOneStart.toUpperCase() === '12AM') {
//     html += "<td> No Parking All Day </td>"
//   } else if (todayRegs.sideOneStart === '0') {
//     html += "<td> Parking All Day! </td>"
//   } else {
//     html += "<td>" + todayRegs.sideOneStart + " to " + todayRegs.sideOneEnd + "</td>"
//   }

//   if (todayRegs.sideTwoStart !== undefined) {
//     if (todayRegs.sideTwoStart.toUpperCase() === '12AM') {
//       html += "<td> No Parking All Day </td>"
//     } else if (todayRegs.sideTwoStart === '0') {
//       html += "<td> Parking All Day! </td>"
//     } else {
//       html += "<td>" + todayRegs.sideTwoStart + " to " + todayRegs.sideTwoEnd + "</td>"
//     }
//   }