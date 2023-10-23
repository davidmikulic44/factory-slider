$(document).ready(function() {
    $('#next').hover(
    function() {
        $(this).css('background-image', 'url(assets/arrow-blue-right.png');
        $(this).css('border', '1px solid #134880');
        $(this).css('cursor', 'pointer');
    },

    function() {
        $(this).css('background-image', 'url(assets/arrow-gray-right.png');
        $(this).css('border', '1px solid #47494C');
    }
    )

    $('#previous').hover(
        function(){
            $(this).css('background-image', 'url(assets/arrow-blue-left.png');
            $(this).css('border', '1px solid #134880');
            $(this).css('cursor', 'pointer');
        },
        function(){
            $(this).css('background-image', 'url(assets/arrow-gray-left.png');
            $(this).css('border', '1px solid #47494C');
        }
    )

});