$(document).ready(function() {
    // Širina slike
    var animationSpeed = 500; // Brzina animacije
    var isAnimating = false;
    var currentSlide = 0; // Trenutna slika

    var $topSlider = $('.top-slider');
    var $bottomSlider = $('.bottom-slider');

    // Funkcija za pomicanje slika u lijevo
    function moveLeft($slider) {
        var $lastImage = $slider.children().last();
        $slider.css('left', -imageWidth);
        $slider.animate({ 'left': 0 });
        $lastImage.fadeOut(500, function() {
            $slider.prepend($lastImage);

            $lastImage.fadeIn(animationSpeed, function() {
                $lastImage.show();
            })
        });
    }

    // Funkcija za pomicanje slika u desno
    function moveRight($slider) {
        var $firstImage = $slider.children().first();
        var imageWidth = $firstImage.first().width();

        $slider.css('left', 0).animate({ 'left': -imageWidth }, animationSpeed, function() {
            $slider.append($firstImage);
            $firstImage.css('opacity', 0).animate({ 'opacity': 1 });
            $('#previous').css('pointer-events', 'auto');
            $slider.css('left', '0px');
        });
    }

    // Klik na strelicu za pomicanje u lijevo
    $('#previous').on('click', function() {

        $('#previous').css('pointer-events', 'none');
        moveRight($topSlider);
        moveRight($bottomSlider);
    });

    // Klik na strelicu za pomicanje u desno
    $('#next').on('click', function() {
        moveLeft($topSlider);
        moveLeft($bottomSlider);
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