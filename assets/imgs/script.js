

$('.sidebar').first()
  .sidebar('attach events', '.sidebarbutton')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('toggle')
;
$('.sidebarbutton')
  .removeClass('disabled')
;


$('.special.cards .image').dimmer({
  // As hover is not working on mobile, you might use click on those devices as fallback
    on: 'ontouchstart' in document.documentElement ? 'click' : 'hover'
  });



// For Clock

setInterval(function() {
  var today = dayjs();
  $('#clockdisplay').text(today.format('h:mm:ss'));
} , 1000);

// For Skill Bars

$('#example1').progress();
$('#example2').progress();
$('#example3').progress();
$('#example4').progress();
$('#example5').progress();
$('#example6').progress();
$('#example7').progress();
$('#example8').progress();
$('#example9').progress();
$('#example10').progress("complete", (true));




// For Countdown Clock




// For "Show Me" Section
$('.menu .item')
  .tab()
;


// For Resume background ---- Thank You Anastasia Mayer (codepen)

