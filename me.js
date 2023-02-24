$(document).ready(function() {
    // initialize state variables
    var ap = 100;
    var hp = 100;
  
    // bind click events to attack buttons
    $('.attack-btn.arcane-sceptre').click(function() {
      if (ap >= 12) {
        hp = Math.max(hp - 14, 0);
        ap -= 12;
        renderState();
      }
    });
  
    $('.attack-btn.entangle').click(function() {
      if (ap >= 23) {
        hp = Math.max(hp - 9, 0);
        ap -= 23;
        renderState();
      }
    });
  
    $('.attack-btn.dragon-blade').click(function() {
      if (ap >= 38) {
        hp = Math.max(hp - 47, 0);
        ap -= 38;
        renderState();
      }
    });
  
    $('.attack-btn.star-fire').click(function() {
      if (ap >= 33) {
        hp = Math.max(hp - 25, 0);
        ap -= 33;
        renderState();
      }
    });
  
    // render initial state
    renderState();
  
    // function to render state changes to the DOM
    function renderState() {
      // update AP and HP text
      $('.ap-text').text(ap + ' AP');
      $('.hp-text').text(hp + ' HP');
  
      // update AP and HP meters
      $('#ap-meter').val(ap);
      $('#hp-meter').val(hp);
  
      // check for win/lose conditions
      if (hp == 0) {
        $('.freaky-fungus').removeClass('walk').addClass('dead');
        $('.attack-btn').attr('disabled', true);
      } else if (ap == 0) {
        $('.freaky-fungus').removeClass('walk').addClass('jump');
        $('.attack-btn').attr('disabled', true);
      }
  
      // regenerate HP if HP falls below 50
      if (hp < 50) {
        setInterval(function() {
          hp = Math.min(hp + 1, 100);
          renderState();
        }, 1000);
      }
    }
  });
  