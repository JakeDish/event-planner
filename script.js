// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
var hour = ""
var text = ""

  $(".saveBtn").click(function () {
    let hour = $(this).parent().attr('id')
    let text = $(this).siblings('.description').val()

    localStorage.setItem(hour, text)
    console.log(hour, text)
    $("#notification").removeClass("hidden")
    setTimeout(function () {
      $("#notification").addClass("hidden")
    }, 3500);
    
  });





    

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
function setHours() {
  var now = dayjs().hour();
  $('.time-block').each(function () {
    var timeID = parseInt($(this).attr('id').split('-')[1]);

    if (timeID < now) {
      $(this).addClass('past');
    }
    else if (timeID === now) {
      $(this).removeClass('past')
      $(this).addClass('present')
    }
    else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
    })
  }

setHours()
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


var today = dayjs().format('dddd MMM D, YYYY')
console.log(today)
$("#date-today").append(today) 


})