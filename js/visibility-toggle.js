var clearClass = remove;

function remove() {
    $('.page-modal__side-right').each(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });
    $('.login-modal').addClass('active');
}




$('.login').on('click', clearClass);






$('.register').on('click', function() {
    $('.page-modal__side-right').each(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });
    $('.register-modal').addClass('active');
});



$('.forgottenpass').on('click', function() {
    $('.page-modal__side-right').each(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });
    $('.forgottenpass-modal').addClass('active');
});
