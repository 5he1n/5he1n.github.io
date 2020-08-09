// slots = Array(50).fill(["вцтфолвтфцлдвтф", "user"]);

const SLOT_HEIGHT = 80
const SLOT_WIDTH = 200
const SLOTS_PER_REEL = slots.length;
const REEL_RADIUS = SLOT_HEIGHT/(2*Math.tan(Math.PI/SLOTS_PER_REEL));
const ROTATIONS_COUNT = 10;
const DEFAULT_FONT_SIZE = 46;
const MAX_getTextWidth_WIDTH = 37;
const ROTATION_TIME = 20;
const SLOT_BORDER_SIZE = 0;
const SLOT_ANGLE = 360 / SLOTS_PER_REEL;


var newStyle = ''

for (var i = 0; i < SLOTS_PER_REEL; i ++) {
  newStyle = newStyle +`
    .spin-`+i+` {
    transform: rotateX(`+(-360*ROTATIONS_COUNT+-(SLOT_ANGLE*i))+`deg);
    }
    
    @keyframes spin-`+i+`{
      0% { transform: rotateX(`+SLOT_ANGLE+`deg); }
      100% { transform: rotateX(`+(-360*ROTATIONS_COUNT-(SLOT_ANGLE*i))+`deg); }
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
  
  .slot {
    position: absolute;
    width: `+SLOT_WIDTH+`px;
    height: `+SLOT_HEIGHT+`px;
    box - sizing: border - box;
    opacity: 0.9;
    color: rgba(0, 0, 0, 0.9);
    border: solid `+SLOT_BORDER_SIZE+`px #000;
    -webkit-backface-visibility: hidden;
       -moz-backface-visibility: hidden;
            backface-visibility: hidden;
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
		
		var transform = 'rotateX(' + (SLOT_ANGLE * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';

		slot.style.transform = transform;

		var content = $(slot).append('<p id="slot-'+i+'" data-owner="'+slots[i][1]+'">' + slots[i][0] + '</p>');
		
	 var size = ((DEFAULT_FONT_SIZE*MAX_getTextWidth_WIDTH)/getTextWidth(slots[i][0], 'regular '+DEFAULT_FONT_SIZE+' Ubuntu'));
	 if (size < DEFAULT_FONT_SIZE) {
	    slot.style.fontSize = size;
	 } else {
	    slot.style.fontSize = DEFAULT_FONT_SIZE;
	 }
	 slot.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
		
		ring.append(slot);
	}
}

function getSeed() {
	return Math.floor(Math.random()*(SLOTS_PER_REEL));
}

function spin(timer) {
		var oldSeed = -1;
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
		setTimeout(() => afterActs(), (ROTATION_TIME+1)*1000);
		
		function afterActs () {
		  $('.modal-body').text('Колесо выбрало '+$('#slot-'+seed).text()+' от '+$('#slot-'+seed).data('owner'));
		  $('.info').fadeIn();
		} 
}

function getTextWidth(text, font) {
      var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
      var context = canvas.getContext("2d");
      context.font = font;
      var metrics = context.measureText(text);
      return metrics.width;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));1
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

$(document).ready(function() {
 	createSlots($('#ringMain'));

 	$('.go').on('click',function(){
 		var timer = ROTATION_TIME;
 		spin(timer);
 	});
 	
 	$('.info').on('click', function() {
    $('#infoModal').modal('show')
 	});
 	
 	 $('.modalGo').on('click',function(){
    $('#infoModal').modal('hide');
    $('.info').fadeOut();
 		var timer = ROTATION_TIME;
 		spin(timer);
 	});
 });