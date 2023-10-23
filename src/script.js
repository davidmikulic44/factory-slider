$(document).ready(function() {
    var animationSpeed = 500;

    var $topSlider = $('.top-slider');
    var $bottomSlider = $('.bottom-slider');

    function moveImagesRight($slider) {
        var $lastImage = $slider.children().last();
        var imageWidth = $lastImage.width();

        $lastImage.css({ 'opacity': 1, 'width': imageWidth })
            .animate({ 'opacity': 0, 'width': 0 }, animationSpeed, function() {

                $slider.prepend($lastImage);
                $lastImage.css({ 'opacity': 1, 'width': imageWidth });
                $slider.css({ 'left': -imageWidth }).animate({ 'left': 0 }, animationSpeed);

                $('#next').css({ 'pointer-events': 'auto' });
            });
    }


    function moveImagesLeft($slider) {
        var $firstImage = $slider.children().first();
        var imageWidth = $firstImage.width();

        $slider.css({ 'left': 0 }).animate({ 'left': -imageWidth }, animationSpeed, function() {
            $slider.append($firstImage);
            $firstImage.css({ 'opacity': 0, 'width': 0 }).animate({ 'opacity': 1, 'width': imageWidth });

            $slider.css({ 'left': '0px' });
            $('#previous').css({ 'pointer-events': 'auto' });
        });
    }


    $('#previous').on('click', function() {
        $('#previous').css('pointer-events', 'none');
        moveImagesLeft($topSlider);
        $('#previous').css('pointer-events', 'none');
        moveImagesLeft($bottomSlider);
    });


    $('#next').on('click', function() {
        $('#next').css('pointer-events', 'none');
        moveImagesRight($topSlider);
        $('#next').css('pointer-events', 'none');
        moveImagesRight($bottomSlider);
    });

    $('#next').hover(
        function() {
            $(this).css('background-image', 'url(assets/arrow-blue-right.png');
            $(this).css('border', '1px solid var(--foreground-color-primary)');
            $(this).css('cursor', 'pointer');
        },

        function() {
            $(this).css('background-image', 'url(assets/arrow-gray-right.png');
            $(this).css('border', '1px solid var(--background-color-secondary)');
        }
    );

    $('#previous').hover(
        function() {
            $(this).css('background-image', 'url(assets/arrow-blue-left.png');
            $(this).css('border', '1px solid var(--foreground-color-primary)');
            $(this).css('cursor', 'pointer');
        },
        function() {
            $(this).css('background-image', 'url(assets/arrow-gray-left.png');
            $(this).css('border', '1px solid var(--background-color-secondary)');
        }
    );
});