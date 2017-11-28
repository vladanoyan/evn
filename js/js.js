// counter
function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}
// counter
$(document).ready(function(){

    $('.ourSecondCarousel').owlCarousel({
        items:1,
        autoPlay : 5500,
        stopOnHover : true,
        center:true,
        navigation:false,
        pagination:false,
        goToFirstSpeed : 1300,
        singleItem : true,
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,
        nav:true,
        transitionStyle:"fade",
        video: true,
    });

    $('.ourNewCarouselProduct').owlCarousel({
    	loop: true,
        items:1,
        dots:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
   
$('.homeSlider').owlCarousel({
    	loop: true,
        items:1,
		animateOut: 'fadeOut',
		dots:false,

    });


    // navbar
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');

    });
    // navbar



/*contact form*/

$('#contact-form').bootstrapValidator({
//        live: 'disabled',
    message: 'This value is not valid',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        Name: {
            validators: {
                notEmpty: {
                    message: 'The Name is required and cannot be empty'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email address is required'
                },
                emailAddress: {
                    message: 'The email address is not valid'
                }
            }
        },
        Message: {
            validators: {
                notEmpty: {
                    message: 'The Message is required and cannot be empty'
                }
            }
        }
    }
});

/*contact form*/
});