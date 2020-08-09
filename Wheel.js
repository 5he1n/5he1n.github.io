// slots = Array(50).fill(["game", "user"]);

const SLOTS_PER_REEL = slots.length;
const REEL_RADIUS = 80/(2*Math.tan(Math.PI/SLOTS_PER_REEL));

const slotAngle = 360 / SLOTS_PER_REEL;


var newStyle = ''
for (var i = 0; i < SLOTS_PER_REEL; i ++) {
  newStyle = newStyle +`
    .spin-`+i+` {
    transform: rotateX(`+(-3600+-(slotAngle*i))+`deg);
    }
    `;
}

for (var i = 0; i < SLOTS_PER_REEL; i++) {
  newStyle = newStyle + `
    @keyframes spin-`+i+`{
      0% { transform: rotateX(`+slotAngle+`deg); }
      100% { transform: rotateX(`+(-3600-(slotAngle*i))+`deg); }
    }
    `;
}

newStyle = newStyle + `
  #rotate {
    margin: 0 auto 0;
    width: 450px;
    height: 220px;
    padding-top: 200px;
    /* Ensure that we're in 3D space */
    transform-style: preserve-3d;
    transform: translateZ(-`+REEL_RADIUS+`px)
  }
`
      
var style = document.createElement('style');
style.innerHTML = newStyle;
document.head.appendChild(style);

function createSlots (ring) {

  slots = shuffle(slots);
	var seed = getSeed();
	

	for (var i = 0; i < SLOTS_PER_REEL; i ++) {
		var slot = document.createElement('div');
		
		slot.className = 'slot';
		
		
		// compute and assign the transform for this slot
		var transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';

		slot.style.transform = transform;

		// setup the number to show inside the slots
		// the position is randomized to 

		var content = $(slot).append('<p id="slot-'+i+'" data-owner="'+slots[i][1]+'">' + slots[i][0] + '</p>');
		
	 slot.style.fontSize = ((46*180)/measureText(slots[i][0], 46));
	 slot.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
		
		// add the poster to the row
		ring.append(slot);
	}
}

function getSeed() {
	// generate random number smaller than 13 then floor it to settle between 0 and 12 inclusive
	return Math.floor(Math.random()*(SLOTS_PER_REEL));
}

function spin(timer) {
	//var txt = 'seeds: ';
		var oldSeed = -1;
		/*
		checking that the old seed from the previous iteration is not the same as the current iteration;
		if this happens then the reel will not spin at all
		*/
		var oldClass = $('#ringMain').attr('class');
		
		if(oldClass.length > 4) {
			oldSeed = parseInt(oldClass.slice(10));
		}
		
		var seed = getSeed();
		while(oldSeed == seed) {
			seed = getSeed();
		}
		

		$('#ringMain')
			.css('animation','spin-' + seed + ' ' + (timer + 0.5) + 's cubic-bezier(0.34, 1.56, 0.64, 1)')
			.attr('class','ring spin-' + seed);
		$('.go').fadeOut();
		setTimeout(() => afterActs(), 11000);
		
		function afterActs () {
		  $('.modal-body').text('Колесо выбрало '+$('#slot-'+seed).text()+' от '+$('#slot-'+seed).data('owner'));
		  $('.info').fadeIn();
		} 
}

function measureText(string, fontSize = 10) {
  const widths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2765625, 0.271875, 0.3546875, 0.584375, 0.5421875, 0.6765625, 0.625, 0.1890625, 0.3234375, 0.3234375, 0.4171875, 0.584375, 0.2203125, 0.3234375, 0.2203125, 0.28125, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.2203125, 0.2296875, 0.584375, 0.584375, 0.584375, 0.334375, 1.0109375, 0.6671875, 0.5640625, 0.709375, 0.75, 0.5, 0.4703125, 0.740625, 0.7296875, 0.25, 0.25, 0.65625, 0.490625, 0.78125, 0.78125, 0.8234375, 0.5109375, 0.8234375, 0.6046875, 0.459375, 0.6046875, 0.709375, 0.6046875, 1.0421875, 0.709375, 0.6046875, 0.646875, 0.334375, 0.28125, 0.334375, 0.4703125, 0.553125, 0.334375, 0.428125, 0.5, 0.4390625, 0.5109375, 0.4796875, 0.25, 0.428125, 0.5, 0.2203125, 0.2203125, 0.4796875, 0.2203125, 0.771875, 0.5, 0.553125, 0.5, 0.5, 0.396875, 0.3859375, 0.334375, 0.5, 0.4390625, 0.7203125, 0.5, 0.4390625, 0.4171875, 0.334375, 0.2609375, 0.334375, 0.584375]
  const avg = 0.4916118421052632
  return string
    .split('')
    .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
    .reduce((cur, acc) => acc + cur) * fontSize
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

$(document).ready(function() {

	// initiate slots 
 	createSlots($('#ringMain'));

 	// hook start button
 	$('.go').on('click',function(){
 		var timer = 10;
 		spin(timer);
 	});
 	
 	$('.info').on('click', function() {
    $('#infoModal').modal('show')
 	});
 	
 	 $('.modalGo').on('click',function(){
    $('#infoModal').modal('hide');
    $('.info').fadeOut();
 		var timer = 10;
 		spin(timer);
 	});
 });