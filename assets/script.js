// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeDisplayEl = $('#currentDay');
var hour = $('#hour');
var rootEl = $('#root');
var saveBtn = $('#saveBtn')

//target <p> element for currentDay to display
var currentDayEl = $('#currentDay');
//target containter <div>
var containerEl = $('.container');
//get current time in hA format
var currentHour = dayjs().hour();
var workDayHours = [
  dayjs().hour(8).format('hA'),
  dayjs().hour(9).format('hA'),
  dayjs().hour(10).format('hA'),
  dayjs().hour(11).format('hA'),
  dayjs().hour(12).format('hA'),
  dayjs().hour(13).format('hA'),
  dayjs().hour(14).format('hA'),
  dayjs().hour(15).format('hA'),
  dayjs().hour(16).format('hA'),
  dayjs().hour(17).format('hA')
];
// Display today's day and date TODO: Update so it continuously updates the page??
$(function () {

  





//assign saveBtn click listener for user input and time stamp
document.getElementById("saveBtn");

  


  

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    for (let i = 8; i <= 17; i++) {
      var hour = document.getElementById(`hour-${i}`);
      // const time = hour.firstElementChild;
      // const event = hour.lastElementChild;
    
      if (i < currentDayEl) {
        hour.classList.add('past');
      } else if (i > currentDayEl) {
        hour.classList.add('future');
      } else {
        hour.classList.add('present');
      }
    

  
    //   event.value = localStorage.getItem(hour.id) || '';
    //   time.innerHTML = `${i}:00`;


  
    // // Calling the hourUpdater function upon document's initial "ready"

    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    var textRows = [
      $("#hour-8"),
      $("#hour-9"),
      $("#hour-10"),
      $("#hour-11"),
      $("#hour-12"),
      $("#hour-13"),
      $("#hour-14"),
      $("#hour-15"),
      $("#hour-16"),
      $("#hour-17"),
    ]
//Storing information from a click of a button 
$("button").click(function () {
    function storeValue(row, key) {
        let userInput = $(row).val(); 
        localStorage.setItem(key, userInput);
    }
    storeValue(".textarea.row.8", "key8")
    storeValue(".textarea.row.9", "key9");
    storeValue(".textarea.row.10", "key10");
    storeValue(".textarea.row.11", "key11");
    storeValue(".textarea.row.12", "key12");
    storeValue(".textarea.row.13", "key13");
    storeValue(".textarea.row.14", "key14");
    storeValue(".textarea.row.15", "key15");
    storeValue(".textarea.row.16", "key16");
    storeValue(".textarea.row.17", "key17");


    //      // Retrieve any stored data from localStorage and place it into the correct hour-row
    var hour8 = localStorage.getItem("hour-8");
    $(".textarea.row.8").val(hour8);
    
    var hour9 = localStorage.getItem("hour-9");
    $(".textarea.row.9").val(hour9);
  
    var hour10 = localStorage.getItem("hour-10");
    $(".textarea.row.10").val(hour10);
  
    var hour11 = localStorage.getItem("hour-11");
    $(".textarea.row.11").val(hour11);
    
    var hour12 = localStorage.getItem("hour-12");
    $(".textarea.row.12").val(hour12);
    
    var hour13 = localStorage.getItem("hour-13");
    $(".textarea.row.13").val(hour13);
    
    var hour14 = localStorage.getItem("hour-14");
    $(".textarea.row.14").val(hour14);
    
    var hour15 = localStorage.getItem("hour-15");
    $(".textarea.row.15").val(hour15);
    
    var hour16 = localStorage.getItem("hour-16");
    $(".textarea.row.16").val(hour16);
    
    var hour17 = localStorage.getItem("hour-17");
    $(".textarea.row.17").val(hour17);
    // TODO: Add code to display the current date in the header of the page.

    var now = dayjs().format("dddd, MMMM D, YYYY [at], HH:mm");
    timeDisplayEl.text(now);
  
  
})}})
