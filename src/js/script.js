"use strict";

$(document).ready(function () {
  var $topSlider = $('.top-slider');
  var $bottomSlider = $('.bottom-slider');
  var moveImagesRight = function moveImagesRight($slider) {
    var $lastImage = $slider.children().last();
    var imageWidth = $lastImage.width();
    $('#next').css({
      'pointer-events': 'none'
    });
    $lastImage.css({
      'opacity': 1,
      'width': imageWidth
    }).animate({
      'opacity': 0,
      'width': 0
    }, function () {
      $slider.prepend($lastImage);
      $lastImage.css({
        'opacity': 1,
        'width': imageWidth
      });
      $slider.css({
        'left': -imageWidth
      }).animate({
        'left': 0
      });
      $('#next').css({
        'pointer-events': 'auto'
      });
    });
  };
  var moveImagesLeft = function moveImagesLeft($slider) {
    var $firstImage = $slider.children().first();
    var imageWidth = $firstImage.width();
    $('#previous').css({
      'pointer-events': 'none'
    });
    $slider.css({
      'left': 0
    }).animate({
      'left': -imageWidth
    }, function () {
      $slider.append($firstImage);
      $firstImage.css({
        width: 0
      }).animate({
        width: imageWidth
      });
      $firstImage.css({
        opacity: 0
      }).animate({
        opacity: 1
      }, 700);
      $('#previous').css({
        'pointer-events': 'auto'
      });
    });
  };
  $('#previous').on('click', function () {
    moveImagesLeft($topSlider);
    moveImagesLeft($bottomSlider);
  });
  $('#next').on('click', function () {
    moveImagesRight($topSlider);
    moveImagesRight($bottomSlider);
  });
});