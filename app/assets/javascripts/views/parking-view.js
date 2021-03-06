var View = {}

View.Table = function() {
  return $('#table_ct')
}

View.ParseRegulations = function(todayRegs) {
  var sideOneArray = todayRegs.sideOneCanPark;
  var sideTwoArray = todayRegs.sideTwoCanPark;
  var html =  "<h5>Your vehicle is at</h5>"
  html += "<h4> " + todayRegs.Address + " </h4>"
  html += "<table id='regs_table'>"
  html += "<thead>"
  html += "<tr>"
  html += "<td class='table_head'>Time</td>"
  html += "<td class='table_head'>" + todayRegs.sideOneName + " Side<br> No Parking <br>" + View.TitleParser(todayRegs.sideOneStart, todayRegs.sideOneEnd);



  if (todayRegs.sideTwoName !== undefined) {
    html += "<td class='table_head'>" + todayRegs.sideTwoName + " Side<br> No Parking <br>" + View.TitleParser(todayRegs.sideTwoStart, todayRegs.sideTwoEnd)
  }

  html += "</tr>"
  html += "</thead>"

  html += View.ColorizeWithTime(sideOneArray, sideTwoArray);
  html += "</tr>"
  html += "</table>"
  html += View.AltSuspended(todayRegs.Suspended);

  return html
}

View.TitleParser = function(sideStart, sideEnd) {
  var html = ''
  if (sideStart == '12AM') {
    html += 'Never. Ever.  </td>'
  } else {
    html += sideStart + " to " + sideEnd + "</td>"
  }
  return html;
}

View.ColorizeWithTime = function(sideOneArray, sideTwoArray) {
  var html = '<tr>'
  var timeArray = ["10pm", "7pm", "4pm", "1pm", "10am", "7am", "4am", "1am"]
  var canParkCounter = 0

  for (var i = timeArray.length - 1; i >= 0; i--) {
    html += "<td class='table_time' rowspan='7'>" + timeArray[i]+ "</td>"
    html += "<tr>"
    for (var j = 0; j < 6; j++) {

      if (sideOneArray[canParkCounter] === true) {
        html += "<td class='can_park'></td>"
      } else {
        html += "<td class='cant_park'></td>"
      }

      if (sideTwoArray !== undefined ) {
        if (sideTwoArray[canParkCounter] === true) {
          html += "<td class='can_park'></td>"
        } else {
          html += "<td class='cant_park'></td>"
        }
      }

      html += "</tr>"
      canParkCounter++
    }
  };
  return html;

}

View.ReturnSpotHtml = function() {
  $spot = $('#table_ct').html();
  return $spot;
}

View.AltSuspended = function(suspendedStatus) {
  var html = ''
     if (suspendedStatus.Suspended === false ) {
     html += "<h5> Alternate Side Parking in effect </h5>"
   } else {
     html += "<h5> Alternate Side Parking not in effect</h5>"
   }

   return html;
}

//TO IMPLEMENT
// <h3>Alternative Side Parking in Effect!</h3>
// <h4>You need to move by <span id="move_by_time">6:00 pm</span></h4>