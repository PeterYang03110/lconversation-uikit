import $ from 'jquery';
import './jquery-3.5.1.min.js';

$(document).ready(function() {
  /**/
  /* uikit nav generate */
  /**/
  jQuery('.uikit__section').each(function() {
    jQuery('#uikit-nav').append('<a href="#' + jQuery(this).attr('id') + '" class="uikit-nav__link">' + jQuery(this).find('h1').eq(0).text() + '</a>');
    
    jQuery(this).find('.uikit__subsection').each(function() {
      if (jQuery(this).find('h2').length) {
        jQuery('#uikit-nav').append('<a href="#' + jQuery(this).attr('id') + '" class="uikit-nav__sublink">' + jQuery(this).find('h2').eq(0).text() + '</a>');
      }
    });
  });
  jQuery('#uikit-nav').on('click', '.uikit-nav__link', function() {
    var trgt = jQuery(jQuery(this).attr('href'));
    jQuery(this).addClass('active').siblings().removeClass('active');
    trgt.addClass('active').siblings().removeClass('active');
  });
  
  
  /**/
  /* source code generate */
  /**/
  var srcCd = '';
  jQuery('.uikit-example').each(function() {
    srcCd = $(this).html();
    srcCd = srcCd.replaceAll('              <', '<');
    jQuery(this).after('<pre class="uikit-source"><code></code></pre>');
    jQuery(this).next('.uikit-source').find('code').text(srcCd);
  });
  jQuery('.uikit-source').append('<button type="button" title="Copy source code" class="uikit-source__copy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><line x1="10.5" y1="1.5" x2="5.5" y2="14.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><polyline points="3.5 4.5 0.5 7.5 3.5 10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline><polyline points="12.5 4.5 15.5 7.5 12.5 10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline></svg></button>');
  jQuery('.uikit-source').append('<button type="button" title="Expand/collapse" class="uikit-source__expand"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><line x1="15.5" y1="0.5" x2="0.5" y2="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="15.5" y1="15.5" x2="0.5" y2="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><polyline points="10.5 6 8 3.5 5.5 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline><polyline points="10.5 10 8 12.5 5.5 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline></g></svg></button>');
  
  
  /**/
  /* source copy button */
  /**/
  jQuery('.uikit-source__copy').on('click', function() {
    var rng = document.createRange();
    var slctn = window.getSelection();
    var elmnt = $(this).siblings('code')[0];
    rng.selectNodeContents(elmnt);
    slctn.removeAllRanges();
    slctn.addRange(rng);
    document.execCommand('copy');
    alert('Source code copied to clipboard.');
  });
  
  
  /**/
  /* source expand button */
  /**/
  jQuery('.uikit-source__expand').on('click', function() {
    $(this).parent().toggleClass('active');
  });
});