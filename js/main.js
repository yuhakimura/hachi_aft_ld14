var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
	if ( jQuery( this ).scrollTop() > navPos ) {
		jQuery( 'body' ).css( 'padding-top', navHeight );
		jQuery( '#global-nav' ).addClass( 'm_fixed' );
	} else {
		jQuery( 'body' ).css( 'padding-top', 0 );
		jQuery( '#global-nav' ).removeClass( 'm_fixed' );
	}
});

$(function($){
	$('.more-button').on('click',function(){
        if ($('.open-box').is(':hidden')){
            $('.open-box').slideDown();
            $(this).text('close');
            $(this).css('background-color','#808080');
        } else{
            $('.open-box').slideUp();
            $(this).text('more');
            $(this).css('background-color', '#fabb51');
        }
    });
})