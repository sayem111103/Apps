$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// mixitup
var containerEl = document.querySelector('.work-img-wrapper');

            var mixer = mixitup(containerEl);



$(window).on("scroll", function(){
    let sticky = $(this).scrollTop()
    if( sticky > 200 ){
        $(".navbar").addClass("navbar-sticky");
    }
    else{
        $(".navbar").removeClass("navbar-sticky");
    }
})