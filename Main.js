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
  addSlot($('#nameInp').val(), $('#gameInp').val(), $('#countInp').val());
});

function addSlot(name, game, q) {
  for (var i = 0; i < q; i++) {
    slots.push([game, name]);
  }
  addAlert(name + " заказал <strong>" + game + " x" + q + "</strong>");
}

function addAlert(message) {
  $('<div class="alert alert-success" style="display:none;">' +
    message + '</div>').prependTo('#alertbox').slideDown('slow');
}