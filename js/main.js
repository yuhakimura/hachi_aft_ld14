$(function($){

    //ハンバーガーメニューの動き
    const ham = $('#js-hamburger');
    const nav = $('#js-nav');
    ham.on('click', function (){
        ham.toggleClass('active');
        nav.toggleClass('active');
    })

    //PC版グローバルメニューを出したり消したりする
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

    //fadeinさせる
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 800; // フェードの時間(ms)

    //左からの場合
    // フェード前のcssを定義
    $(".scroll-fade-side").css({
        opacity: 0,
        transform: "translateX(-" + fade_move + "px)",
        transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
        const scroll_top = $(this).scrollTop();
        const scroll_bottom = scroll_top + $(this).height();
        const fade_position = scroll_bottom - fade_bottom;
        $(".scroll-fade-side").each(function () {
            const this_position = $(this).offset().top;
            if (fade_position > this_position) {
                $(this).css({
                    opacity: 1,
                    transform: "translateX(0)",
                });
            }
        });
    });

    //右からの場合
    $(".scroll-fade-side-2").css({
        opacity: 0,
        transform: "translateX(" + fade_move + "px)",
        transition: fade_time + "ms",
    });
    $(window).on("scroll load", function () {
        const scroll_top = $(this).scrollTop();
        const scroll_bottom = scroll_top + $(this).height();
        const fade_position = scroll_bottom - fade_bottom;
        $(".scroll-fade-side-2").each(function () {
            const this_position = $(this).offset().top;
            if (fade_position > this_position) {
                $(this).css({
                    opacity: 1,
                    transform: "translateX(0)",
                });
            }
        });
    });

    //下からの場合
    $(".fadein").css({
        opacity: 0,
        transform: "translateY(" + fade_move + "px)",
        transition: fade_time + "ms",
    });
    $(window).on("scroll load", function () {
        const scroll_top = $(this).scrollTop();
        const scroll_bottom = scroll_top + $(this).height();
        const fade_position = scroll_bottom - fade_bottom;
        $(".fadein").each(function () {
            const this_position = $(this).offset().top;
            if (fade_position > this_position) {
                $(this).css({
                    opacity: 1,
                    transform: "translateY(0)",
                });
            }
        });
    });

    //examplesの正解を出す
	$('.answer-button').on('click',function(){
        if ($('.open-box').is(':hidden')){
            $('.open-box').slideDown();
            $(this).html('&minus; 閉じる');
            $(this).css('background-color','#fff');
			$(this).css('color','#000')
        } else{
            $('.open-box').slideUp();
            $(this).html('&plus; 正解');
            $(this).css('background-color', '#000');
			$(this).css('color','#fff')
        }
    });

    //SP版でVoicesのテキスト部分を出す
	$('.more-button').on('click',function(){
        if ($('.open-box-text').is(':hidden')){
            $('.open-box-text').slideDown();
            $(this).html('&minus; CLOSE')
        } else{
            $('.open-box-text').slideUp();
            $(this).html('&plus; MORE')
        }
    });
})

