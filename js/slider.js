

/*****brand slider****/

$(document).ready(function (brandSlider) {

	var slideCount = $('#brand-discount-slider ul li').length;
	var slideWidth = $('#brand-discount-slider ul li').width();
	var slideHeight = $('#brand-discount-slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#brand-discount-slider').css({ width: slideWidth, height: slideHeight });

	$('#brand-discount-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#brand-discount-slider ul li:last-child').prependTo('#brand-discount-slider ul');


    function moveLeft() {
        $('#brand-discount-slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#brand-discount-slider ul li:last-child').prependTo('#brand-discount-slider ul');
            $('#brand-discount-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#brand-discount-slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#brand-discount-slider ul li:first-child').appendTo('#brand-discount-slider ul');
            $('#brand-discount-slider ul').css('left', '');
        });
    };


    $('.brand-arrow-prev').click(function () {
        moveLeft();
    });

    $('.brand-arrow-next').click(function () {
        moveRight();
    });
    

     setTimeout(moveLeft(), 500); /* works only on load for the first slider...research later*/
});

/*****brand slider****/





/***sidebar**/
$(document).ready(function() {
  $(".hide").click(function() {
    $(".menu").hide();
  });
  $(".show").click(function() {
    $(".menu").show();
  });

  $(document).on("click", "a.download-cv", function (e) {
    var link = this;
    var fileUrl = link.getAttribute("href");
    var fileName = link.getAttribute("download") || "Rahul_Kumar_CV.pdf";
    if (!fileUrl) return;

    e.preventDefault();
    fetch(fileUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("CV not found");
        return response.blob();
      })
      .then(function (blob) {
        var blobUrl = URL.createObjectURL(blob);
        var temp = document.createElement("a");
        temp.href = blobUrl;
        temp.download = fileName;
        document.body.appendChild(temp);
        temp.click();
        temp.remove();
        setTimeout(function () {
          URL.revokeObjectURL(blobUrl);
        }, 1000);
      })
      .catch(function () {
        window.location.href = fileUrl;
      });
  });
});



/***sidebar**/


AOS.init({
  duration: 1200,
})







$(document).ready(function() {
  $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


































