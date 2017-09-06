$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  $('.list-group .list-group-item').click(function(){
    $('.row-offcanvas-left').removeClass('active');
  })
});