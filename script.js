$(document).ready(function() {
    var imageWidth = $('.image').first().width(); // Širina slike
    var animationSpeed = 500; // Brzina animacije
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

        $slider.css('left', imageWidth);

        $slider.animate({ 'left': 0 });

        $firstImage.fadeIn(animationSpeed, function() {
            $slider.append($firstImage);
        })
    }

    // Klik na strelicu za pomicanje u lijevo
    $('#previous').on('click', function() {
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