$('.slider').slick({
  autoplay: true,
  arrows: false,
});


$('.slider').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: false,
        }
      },
    ]
  });

onclick="ga('send','pageview','/call');"