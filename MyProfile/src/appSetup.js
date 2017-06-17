const $bodyWrapper = $('#bodyWrapper'),
$toggle = $('#toggle'),
$menu = $('#menu'),
$header = $('#header'),
$portfolio = $('#portfolio'),
$bio = $('#bio');

$(document).ready(function(){
    $toggle.click(function(){
        $bodyWrapper.toggleClass('showaside');
         $menu.toggleClass('hide');
         $header.toggleClass('header hide');
         $bodyWrapper.toggleClass('backgroundImage');
         $bio.toggleClass('hide');
         $portfolio.toggleClass('backgroundImage');
    });
});