$(document).ready(() => {
    let $topSlider = $('.top-slider');
    let $bottomSlider = $('.bottom-slider');


    const moveImagesRight = ($slider) => {
        const $lastImage = $slider.children().last();
        const imageWidth = $lastImage.width();
        
        $('#next').css({'pointer-events':  'none'});

        $lastImage
            .css({ 'opacity': 1, 'width': imageWidth })
            .animate({ 'opacity': 0, 'width': 0 }, () => {
                $slider.prepend($lastImage);

                $lastImage.css({ 'opacity': 1, 'width': imageWidth });
                $slider.css({ 'left': -imageWidth }).animate({ 'left': 0 });
                $('#next').css({'pointer-events':  'auto'});
            });
    };


    const moveImagesLeft = ($slider) => {
        const $firstImage = $slider.children().first();
        const imageWidth = $firstImage.width();
        
        $('#previous').css({'pointer-events':  'none'});
        $slider
            .css({ 'left': 0 })
            .animate({ 'left': -imageWidth }, () => {
                
                $slider.append($firstImage);
                $firstImage.css({ 'opacity': 0, 'width': 0 }, 1000)
                    .animate({ 'opacity': 1, 'width': imageWidth });
                $('#previous').css({'pointer-events':  'auto'});
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