$(document).ready(function() {
  /**/
  /* selector */
  /**/
  $('.form-selector__select').on('click', function() {
    var ths = $(this);
    var trgt = ths.next();
      
    if (!trgt.hasClass('active')) {
      ths.addClass('active');
      trgt.addClass('active');
    }
  });
  $('.form-selector__option').on('click', function() {
    var ths = $(this);
    var drpdwn = ths.closest('.form-selector__dropdown');
    
    drpdwn.removeClass('active');
    ths.addClass('active').siblings().removeClass('active');
    
    if (ths.data('label')) {
      drpdwn.prev().html(ths.data('label')).removeClass('active');
    }
    else {
      drpdwn.prev().html(ths.html()).removeClass('active');
    }
  });
  $(document).mouseup(function(evnt)  {
    var cntnr = $('.form-selector__dropdown');
    cntnr.each(function() {
      if (!$(this).is(evnt.target) && $(this).has(evnt.target).length === 0) {
        var ths = $(this);
        ths.removeClass('active');
        ths.prev().removeClass('active');
      }
    });
  });
  
  
  /**/
  /* modal */
  /**/
  $('[data-modal-open]').on('click', function() {
    var trgt = $($(this).data('modal-open'));
    
    $('.modal').removeClass('active');
    trgt.addClass('active');
  });
  $('[data-modal-close]').on('click', function() {
    var trgt = $($(this).data('modal-close'));
    
    trgt.removeClass('active');
  });
  
  
  /**/
  /* popover */
  /**/
  $('[data-popover-open]').on('click', function() {
    var ths = $(this);
    var trgt = $(ths.data('popover-open'));
      
    if (!trgt.hasClass('active')) {
      ths.addClass('active');
      trgt.addClass('active');
    }
  });
  $('[data-popover-close]').on('click', function() {
    var ths = $(this);
    var trgt = $(ths.data('popover-close'));
    
    trgt.removeClass('active');
    $('[data-popover-open="#'+trgt.attr('id')+'"]').removeClass('active');
  });
  $(document).mouseup(function(evnt)  {
    var ppvr = $('.popover');
    ppvr.each(function() {
      if (!$(this).is(evnt.target) && $(this).has(evnt.target).length === 0) {
        var ths = $(this);
        ths.removeClass('active');
        $('[data-popover-open="#' + ths.attr('id') + '"]').removeClass('active');
      }
    });
  });
  
  
  /**/
  /* tabs */
  /**/
  $('[data-tab-open]').on('click', function(evnt) {
    var ths = $(this);
    var trgt = $(ths.data('tab-open'));
    evnt.preventDefault();
    
    ths.addClass('active').siblings().removeClass('active');
    trgt.addClass('active').siblings().removeClass('active');
  });
  
  
  /**/
  /* tags */
  /**/
  $('.tags__close').on('click', function() {
    $(this).parent().fadeOut(125);
  });
  
  
  /**/
  /* tooltip */
  /**/
  $('body').append('<div id="tooltip" class="tooltip"></div>');
  $('[data-tooltip]').hover(function() {
      var ths = $(this);
      $('#tooltip').html($(this).data('tooltip'));
      $('#tooltip').attr('class', 'tooltip active');
      $('#tooltip').css('top', ths.offset().top);
      $('#tooltip').css('left', ths.offset().left + ths.outerWidth()/2);
  }, function() {
      $('#tooltip').removeClass('active');
  });
  
  
  /**/
  /* datepicker */
  /**/
  $('.form-input--datepicker').daterangepicker({
    autoApply: true,
    singleDatePicker: true,
    locale: {
      format: 'MMMM D, YYYY',
      daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    }
  });
  $('.form-input--daterangepicker').daterangepicker({
    linkedCalendars: false,
    alwaysShowCalendars: true,
    showCustomRangeLabel: false,
    buttonClasses: 'button',
    applyButtonClasses: 'button--primary',
    cancelButtonClasses: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'This Week': [moment().subtract(6, 'days'), moment()],
      'This Month': [moment().subtract(29, 'days'), moment()],
      'This Quarter': [moment().subtract(3, 'months'), moment()],
      'This Year': [moment().subtract(12, 'months'), moment()]
    },
    locale: {
      format: 'MM/DD/YYYY',
      applyLabel: 'Apply Range',
      daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    }
  });
  
  
  /**/
  /* data table */
  /**/
  $('.data-table__row--head').on('click', '.form-checkbox__input', function() {
    var ths = $(this);
    ths.closest('.data-table__row').nextAll('.data-table__row--selectable').toggleClass('data-table__row--selected', ths.prop('checked')).find('.form-checkbox__input').prop('checked', ths.prop('checked'));
  });
  $('.data-table__row--subgroup').on('click', '.form-checkbox__input', function() {
    var ths = $(this);
    ths.closest('.data-table__row').nextUntil('.data-table__row--group, .data-table__row--subgroup', '.data-table__row--selectable').toggleClass('data-table__row--selected', ths.prop('checked')).find('.form-checkbox__input').prop('checked', ths.prop('checked'));
  });
  $('.data-table__row--selectable').on('click', '.form-checkbox__input', function() {
    var ths = $(this);
    ths.closest('.data-table__row').toggleClass('data-table__row--selected', ths.prop('checked'));
  });
  $('.data-table__subgroup-name').on('click', function() {
    var ths = $(this);
    ths.toggleClass('active');
    ths.closest('.data-table__row').nextUntil('.data-table__row--group, .data-table__row--subgroup').toggle();
  });
  

  // charts
  var ctx = document.getElementById('myChart').getContext('2d');
  // var chart = new Chart(ctx, {
  //     // The type of chart we want to create
  //     type: 'line',

  //     // The data for our dataset
  //     data: {
  //         labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //         datasets: [{ data: [2.5, 4, 2.5, 7, 4, 6, 5.5], label: 'Chats', lineTension: 0 },
  //           { data: [3.5, 3, 1, 2, 5, 4.5, 2], label: 'Calls', lineTension: 0 },
  //           { data: [5.5, 6.5, 3, 6, 2.5, 2, 7], label: 'Emails', lineTension: 0 },],
  //         colors: [
  //           {
  //               borderColor: '#acaef9',
  //               pointBorderColor: '#acaef9',
  //               pointBackgroundColor: "#FFFFFF",
  //           },
  //           {
  //               borderColor: '#5acdfc',
  //               pointBorderColor: '#5acdfc',
  //               pointBackgroundColor: "#FFFFFF",
  //           },
  //           {
  //               borderColor: '#f2a6ce',
  //               pointBorderColor: '#f2a6ce',
  //               pointBackgroundColor: "#FFFFFF",
  //           }
  //         ],
  //         legend: false,
  //     },

  //     // Configuration options go here
  //     options: {
  //       responsive: true,
  //       scales: {
  //           yAxes: [{
  //               ticks: {
  //                   display: true,
  //               }
  //           }],

  //       }
  //     }
  // });
  const chatsgradient = document.getElementById('myChart').getContext('2d').createLinearGradient(0, 0, 0, 260);
  chatsgradient.addColorStop(0, '#acaef9');
  chatsgradient.addColorStop(1, 'rgba(255,255,255,0)');

  const callsgradient = document.getElementById('myChart').getContext('2d').createLinearGradient(0, 0, 0, 260);
  callsgradient.addColorStop(0, '#5acdfc');
  callsgradient.addColorStop(1, 'rgba(255,255,255,0)');

  const emailssgradient = document.getElementById('myChart').getContext('2d').createLinearGradient(0, 0, 0, 260);
  emailssgradient.addColorStop(0, '#f2a6ce');
  emailssgradient.addColorStop(1, 'rgba(255,255,255,0)');

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [{ data: [2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 4, 2, 1, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4], label: 'Chats', lineTension: 0, backgroundColor: chatsgradient, borderColor: '#acaef9', pointBorderColor: '#acaef9', pointBackgroundColor: "#FFFFFF"},
              { data: [3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 4.5, 2, 6, 2, 5, 4.5, 2, 3.5, 3, 1, 2], label: 'Calls', lineTension: 0, backgroundColor: callsgradient, borderColor: '#5acdfc', pointBorderColor: '#5acdfc', pointBackgroundColor: "#FFFFFF"},
              { data: [5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 4, 8, 2, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5], label: 'Emails', lineTension: 0, backgroundColor: emailssgradient, borderColor: '#f2a6ce', pointBorderColor: '#f2a6ce', pointBackgroundColor: "#FFFFFF" }
          ],
          colors: [{
              backgroundColor: chatsgradient,
              borderColor: '#acaef9',
              pointBorderColor: '#acaef9',
              pointBackgroundColor: "#FFFFFF",
          },
          {
              backgroundColor: callsgradient,
              borderColor: '#5acdfc',
              pointBorderColor: '#5acdfc',
              pointBackgroundColor: "#FFFFFF",
          },
          {
              backgroundColor: emailssgradient,
              borderColor: '#f2a6ce',
              pointBorderColor: '#f2a6ce',
              pointBackgroundColor: "#FFFFFF",
          }],
          legend: false,
      },

      // Configuration options go here
      options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    display: true,
                }
            }],

        }
      }
  });
});