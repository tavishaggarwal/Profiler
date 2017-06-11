const $portfolio = $('#portfolio'),
$toggle = $('#toggle');

$(document).ready(function(){
    $toggle.click(function(){
        $portfolio.toggleClass('showaside');
    });
});