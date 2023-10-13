import $ from 'jquery';

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
  
  
  /**/
  /* charts */
  /**/
  // Highcharts.setOptions({
  //   title: {
  //     text: ''
  //   },
  //   chart: {
  //     backgroundColor: 'rgba(255,255,255,0)',
  //     style: {
  //       fontFamily: 'halyard-text',
  //       color: '#999FAF'
  //     }
  //   },
  //   plotOptions: {
  //     series: {
  //       lineWidth: 3,
  //       borderWidth: 0,
  //       marker: {
  //         enabled: false,
  //         symbol: 'circle',
  //         states: {
  //           hover: {
  //             radiusPlus: 0,
  //             lineWidthPlus: 0
  //           }
  //         }
  //       }
  //     }
  //   },
  //   xAxis: {
  //     tickLength: 0,
  //     alignTicks: false,
  //     lineWidth: 1,
  //     lineColor: '#CCCFD7',
  //     gridLineColor: '#CCCFD7',
  //     gridLineDashStyle: 'longdash',
  //     title: {
  //       text: ''
  //     },
  //     labels: {
  //       style: {
  //         fontSize: '13px',
  //         color: '#999FAF'
  //       }
  //     }
  //   },
  //   yAxis: {
  //     alignTicks: false,
  //     lineWidth: 1,
  //     lineColor: '#CCCFD7',
  //     gridLineColor: '#CCCFD7',
  //     gridLineDashStyle: 'longdash',
  //     title: {
  //       text: ''
  //     },
  //     labels: {
  //       style: {
  //         fontSize: '13px',
  //         color: '#999FAF'
  //       }
  //     }
  //   },
  //   tooltip: {
  //     useHTML: true,
  //     shadow: false,
  //     padding: 12,
  //     borderWidth: 0,
  //     borderRadius: 4,
  //     backgroundColor: '#000F37',
  //     style: {
  //       fontSize: '13px',
  //       color: '#FFF'
  //     }
  //   },
  //   legend: {
  //     enabled: false,
  //     align: 'left',
  //     verticalAlign: 'top',
  //     margin: 16,
  //     symbolRadius: 4,
  //     itemStyle: {
  //       fontWeight: 'normal',
  //       color: '#000F37'
  //     }
  //   },
  //   credits: {
  //     enabled: false
  //   }
  // });
  
  // Highcharts.chart('chart-line', {
  //   tooltip: {
  //     shared: true,
  //     headerFormat: '<span style="display: block; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.25); font-weight: 500">{point.key}</span><table style="border-collapse: collapse;">',
  //     pointFormat: '<tr><td style="color: #B2BBCE">{series.name}: &nbsp; </td>' + '<td style="padding:0; text-align: right"><b>${point.y:.1f}</b></td></tr>',
  //     footerFormat: '</table>'
  //   },
  //   xAxis: {
  //     crosshair: true,
  //     categories: [
  //       'JAN',
  //       'FEB',
  //       'MAR',
  //       'APR',
  //       'MAY',
  //       'JUN',
  //       'JUL',
  //       'AUG',
  //       'SEP',
  //       'OCT',
  //       'NOV',
  //       'DEC'
  //     ]
  //   },
  //   series: [{
  //     name: '2020',
  //     color: '#0D8899',
  //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  //   }, {
  //     name: '2019',
  //     color: '#C1E0E5',
  //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
  //   }]
  // });
  
  // Highcharts.chart('chart-col', {
  //   chart: {
  //     type: 'column'
  //   },
  //   tooltip: {
  //     shared: true,
  //     headerFormat: '<span style="display: block; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.25); font-weight: 500">{point.key}</span><table style="border-collapse: collapse;">',
  //     pointFormat: '<tr><td style="color: #B2BBCE">{series.name}: &nbsp; </td>' + '<td style="padding:0; text-align: right"><b>${point.y:.1f}</b></td></tr>',
  //     footerFormat: '</table>'
  //   },
  //   xAxis: {
  //     crosshair: true,
  //     categories: [
  //       'JAN',
  //       'FEB',
  //       'MAR',
  //       'APR',
  //       'MAY',
  //       'JUN',
  //       'JUL',
  //       'AUG',
  //       'SEP',
  //       'OCT',
  //       'NOV',
  //       'DEC'
  //     ]
  //   },
  //   series: [{
  //     name: 'Billed',
  //     color: '#0D8899',
  //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  //   }, {
  //     name: 'Collected',
  //     color: '#C1E0E5',
  //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
  //   }]
  // });
  
  // Highcharts.chart('chart-stack-col', {
  //   chart: {
  //     type: 'column'
  //   },
  //   xAxis: {
  //     crosshair: true,
  //     categories: [
  //       'JAN',
  //       'FEB',
  //       'MAR',
  //       'APR',
  //       'MAY',
  //       'JUN',
  //       'JUL',
  //       'AUG',
  //       'SEP',
  //       'OCT',
  //       'NOV',
  //       'DEC'
  //     ]
  //   },
  //   plotOptions: {
  //     column: {
  //       stacking: 'normal',
  //     }
  //   },
  //   tooltip: {
  //     shared: true,
  //     headerFormat: '<span style="display: block; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.25); font-weight: 500">{point.key}</span><table style="border-collapse: collapse;">',
  //     pointFormat: '<tr><td style="color: #B2BBCE">{series.name}: &nbsp; </td>' + '<td style="padding:0; text-align: right"><b>${point.y:.1f}</b></td></tr>',
  //     footerFormat: '</table>'
  //   },
  //   series: [{
  //     name: 'WIP Period',
  //     color: '#0D8899',
  //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  //   }, {
  //     name: 'Before work begins',
  //     color: '#C1E0E5',
  //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
  //   }, {
  //     name: 'Invoice Pending Period',
  //     color: '#FFDC82',
  //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
  //   }]
  // });
  
  // Highcharts.chart('chart-stack-bar', {
  //   chart: {
  //     type: 'bar'
  //   },
  //   xAxis: {
  //     crosshair: true,
  //     categories: [
  //       'Ellie Turner',
  //       'Philip Lenning',
  //       'Abigail Gammins',
  //       'Christopher Munn',
  //       'Frank Patterson',
  //       'Minda Kettlehut',
  //       'Tanner Pruitt',
  //       'Matt Syter',
  //       'Allie Carter',
  //       'Felix McAllistore'
  //     ],
  //     labels: {
  //       style: {
  //         color: '#000F37'
  //       }
  //     }
  //   },
  //   plotOptions: {
  //     series: {
  //       stacking: 'normal',
  //     }
  //   },
  //   tooltip: {
  //     shared: true,
  //     headerFormat: '<span style="display: block; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.25); font-weight: 500">{point.key}</span><table style="border-collapse: collapse;">',
  //     pointFormat: '<tr><td style="color: #B2BBCE">{series.name}: &nbsp; </td>' + '<td style="padding:0; text-align: right"><b>${point.y:.1f}</b></td></tr>',
  //     footerFormat: '</table>'
  //   },
  //   legend: {
  //     enabled: true
  //   },
  //   series: [{
  //     name: 'Collected',
  //     color: '#0D8899',
  //     data: [216.4, 194.1, 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
  //   }, {
  //     name: 'Due',
  //     color: '#FFD98D',
  //     data: [98.5, 93.4, 105.0, 92.3, 83.6, 104.3, 91.2, 83.5, 106.6, 78.8]
  //   }, {
  //     name: 'Overdue',
  //     color: '#FF8C75',
  //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 92.3, 105.0, 104.3, 106.6]
  //   }, {
  //     name: 'Unbilled WIP Value',
  //     color: '#B7E1E6',
  //     data: [106.0, 104.3, 91.2, 83.6, 78.8, 98.5, 93.4, 83.5, 106.6, 92.3]
  //   }]
  // });
  
  // Highcharts.chart('chart-donut', {
  //   chart: {
  //     type: 'pie'
  //   },
  //   tooltip: {
  //     headerFormat: '<table style="border-collapse: collapse;">',
  //     pointFormat: '<tr><td style="color: #B2BBCE">{point.name}: &nbsp; </td>' + '<td style="padding:0; text-align: right"><b>${point.y:.1f}</b></td></tr>',
  //     footerFormat: '</table>'
  //   },
  //   plotOptions: {
  //     pie: {
  //       center: ['50%', '50%'],
  //       borderWidth: 0,
  //       dataLabels: {
  //         enabled: false
  //       }
  //     },
  //     series: {
  //       states: {
  //         hover: {
  //           enabled: true,
  //           halo: {
  //             size: 0
  //           }
  //         }
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Teams',
  //     innerSize: '85%',
  //     data: [{
  //       name: 'Team Name',
  //       color: '#B4BBDF',
  //       y: 3
  //     }, {
  //       name: 'Billing',
  //       color: '#FFD98D',
  //       y: 8
  //     }, {
  //       name: 'Advisory',
  //       color: '#B7E1E6',
  //       y: 8
  //     }, {
  //       name: 'Tax',
  //       color: '#01525D',
  //       y: 13
  //     }]
  //   }]
  // });
});