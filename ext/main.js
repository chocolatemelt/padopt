/**
 * Main js file
 */

(function($) {

  $(document).on('ready', function() {
    // perfect scrollbar
    $('#contentHolder').perfectScrollbar();
    $('#solutions').perfectScrollbar();

    // Enable slider for Path Number Scaling
    $('#num-paths').slider()
      .on('slide', function(ev){

      var $path_value_input = $(this).siblings('#num-path-value');
      $('#num-path-value').val(ev.value);
      if (ev.value <= 120) {
        $path_value_input.removeClass('medium slow');
        $path_value_input.addClass('fast');
      }
      if (ev.value > 120 && ev.value <= 250) {
        $path_value_input.removeClass('fast slow');
        $path_value_input.addClass('medium');
      }
      if (ev.value > 250) {
        $path_value_input.removeClass('fast medium');
        $path_value_input.addClass('slow');
      }
      if (ev.value > 300) {
        if ($('.slow-warning').length === 0) {
          $('<p class="slow-warning">This might take a while...</p>').insertAfter($path_value_input);
        } else {
          $('.slow-warning').removeClass('hide');
        }
      } else {
        $('.slow-warning').addClass('hide');
      }
    });
  });

  /**
   * Load + Resize events for mobile adjustments.
   */
  $(window).on('load resize', function(){
    var width = $(window).width();
    if (width < 1030 && !$('#disqus_thread').hasClass('repositioned')) {
      $('#disqus_thread').hide().css({margin: 0, maxWidth: '97%'});
      $('.glyphicon-heart-empty').on('click', function() {
       $('#disqus_thread').slideToggle();
      });
      $('#solutions').css('z-index', 1);
      $('.secondary-navbar-bottom').css('z-index', 2);
      $('.secondary-navbar-bottom').append($('#disqus_thread').addClass('repositioned'));
    }
  });

  // Tooltip
  $('a[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'bottom',
  });
})(jQuery);
