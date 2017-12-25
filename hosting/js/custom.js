$(function() {
    /*
    *
    * Modal Window
    *
    */

    $('.btn_login').click(function(event) {
        event.preventDefault();
        $('.modalwindow').show();
        $('.overlay').show();
        $('body').css('overflow', 'hidden');
    })

    $('.overlay, .material-icons').click(function(event) {
        event.preventDefault();
        $('.modalwindow').hide();
        $('.overlay').hide();
        $('body').css('overflow', '');
    })

    $(document).bind('click keydown', function (event) {
      if (event.keyCode == 27) {
        $('.modalwindow').hide();
        $('.overlay').hide();
      }
    });


    /*
    *
    * Scrol
    *
    */

    $('nav a').on('click',function (event) {
      event.preventDefault();
        var ellClick = $(this).attr('href');
        var distScroll = $(ellClick ).offset().top;
        $('html, body').animate(
            {'scrollTop':distScroll},1500);
    })

    /*
    *
    * Scroll Heder
    *
    */
    $(document).scroll(function() {
        var headheight = $('.nav-container').innerHeight();

        if( $(document).scrollTop() > headheight+100){
            $('.nav-container').addClass('container-hiden');
        }
        if ($(document).scrollTop()>headheight+600) {
          $('.nav-container').removeClass('container-hiden');
          $('.nav-container').addClass('nav-container__fix');
        }
    })

    /*
    *
    * Show more
    *
    */

    $('.btn_blue').on('click', function (event) {
      event.preventDefault();
      $('.post-showmore').slideToggle();
    })

    /*
    *
    * Map
    *
    */
    $(window).load(function(){
      var map;
      var mapContainer= $('#map')[0];
      var adressCenter = {lat: 40.708340, lng: -74.007163};
      var mapInfoText = $('.map__info-text').html();

      map = new google.maps.Map(mapContainer, {
        center: adressCenter,
        zoom: 17,
        disableDefaultUI: true // навигация
      });

      var marker = new google.maps.Marker({
        position: adressCenter,
        map: map,
        title: '100 William Street New York'
      });

      var infowindow = new google.maps.InfoWindow({
        content: mapInfoText
      });
      infowindow.open(map, marker);

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

    });

    // $('#map').mousemove(function () {
    //   $('.map-content').hide();
    // })
    // $('#map').mouseout(function () {
    //   $('.map-content').show();
    // })
    /*
    *
    * Slick Slider
    *
    */
    $(document).ready(function(){
      $('.testimonials').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true
      });
    });


    /*
    *
    * Button Up
    *
    */

    $('body').append('<button class="btn-up"/>');

    $('.btn-up').click(function () {
      $('html, body').animate({'scrollTop': 0},1000);
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 400){
        $('.btn-up').addClass('btn-up__active');
      } else {
        $('.btn-up').removeClass('btn-up__active');
      }
    })



});
