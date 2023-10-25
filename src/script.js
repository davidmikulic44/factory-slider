$(document).ready(function() {
    var $topSlider = $('.top-slider');
    var $bottomSlider = $('.bottom-slider');


    function moveImagesRight($slider) {
        var $lastImage = $slider.children().last();
        var imageWidth = $lastImage.width();

        $lastImage.css({ 'opacity': 1, 'width': imageWidth })
            .animate({ 'opacity': 0, 'width': 0 }, 
            function() {
                $slider.prepend($lastImage);
                $lastImage.css({ 'opacity': 1, 'width': imageWidth });
                $slider.css({ 'left': -imageWidth }).animate({ 'left': 0 });
            });
    }


    function moveImagesLeft($slider) {
        var $firstImage = $slider.children().first();
        var imageWidth = $firstImage.width();

        $slider.css({ 'left': 0 })
        .animate({ 'left': -imageWidth }, 0,
         function() {
            $slider.append($firstImage);
            $firstImage.css({ 'opacity': 0, 'width': 0 })
            .animate({ 'opacity': 1, 'width': imageWidth });
        });
    }


    $('#previous').on('click', function() {
        moveImagesLeft($topSlider);
        moveImagesLeft($bottomSlider);
    });


    $('#next').on('click', function() {
        moveImagesRight($topSlider);
        moveImagesRight($bottomSlider);
    });
});