var slots = [];
var i = 0;

function loadWheel() {
  $('#includedContent').fadeOut("fast", function() {
    $("#includedContent").load("Wheel.html",
      function() {
        $('#includedContent').fadeIn();
      }
    );
  });
}


$('.load').on('click', function() {
  loadWheel()
  clearInterval(counterBack);
});

var counterBack = setInterval(function() {
  i++;
  if (i < 100) {
    $('.progress-bar').css('width', i + '%');
  } else {
    clearInterval(counterBack);
    loadWheel();
  }
}, 1000);

$('#form1').submit(function(e) {
  e.preventDefault();
  for (var i = 0; i < $('#countInp').val(); i ++) {
  slots.push([$('#gameInp').val(), $('#nameInp').val()]);
  }
  addAlert($('#nameInp').val()+" заказал <strong>"+$('#gameInp').val()+" x"+$('#countInp').val()+"</strong>");
});

function addAlert(message) {
  $('<div class="alert alert-success" style="display:none;">' +
    message + '</div>').prependTo('#alertbox').slideDown('slow');
}

