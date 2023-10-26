$(document).ready(function() {
    let $topSlider = $('.top-slider');
    let $bottomSlider = $('.bottom-slider');


    const moveImagesRight = ($slider) => {
        const $lastImage = $slider.children().last();
        const imageWidth = $lastImage.width();
    
        $lastImage
            .css({ 'opacity': 1, 'width': imageWidth })
            .animate({ 'opacity': 0, 'width': 0 }, () => {
                $slider.prepend($lastImage);
                $lastImage.css({ 'opacity': 1, 'width': imageWidth });
                $slider.css({ 'left': -imageWidth }).animate({ 'left': 0 });
            });
    };


    const moveImagesLeft = ($slider) => {
        const $firstImage = $slider.children().first();
        const imageWidth = $firstImage.width();
    
        $slider
            .css({ 'left': 0 })
            .animate({ 'left': -imageWidth }, 0, () => {
                $slider.append($firstImage);
                $firstImage.css({ 'opacity': 0, 'width': 0 })
                    .animate({ 'opacity': 1, 'width': imageWidth });
            });
    };


    $('#previous').on('click', () => {
        moveImagesLeft($topSlider);
        moveImagesLeft($bottomSlider);
    });


    $('#next').on('click', () => {
        moveImagesRight($topSlider);
        moveImagesRight($bottomSlider);
    });
});