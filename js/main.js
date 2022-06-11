$(function($){
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

	$('.answer-button').on('click',function(){
        if ($('.open-box').is(':hidden')){
            $('.open-box').slideDown();
            $(this).text('閉じる');
            $(this).css('background-color','#fff');
			$(this).css('color','#000')
        } else{
            $('.open-box').slideUp();
            $(this).text('+ 正解');
            $(this).css('background-color', '#000');
			$(this).css('color','#fff')
        }
    });
})

