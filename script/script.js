

document.addEventListener("DOMContentLoaded", function(e){
    scrollBottom();
    applyBottomBtn();
    applyRightBtn();
    interiorArti2_slide();
    youtubeBackground();
    qnaBox();
    privacyPopup();
    scroll_move();
})

const scroll_move = () => {
    $(".scroll_move").click(function(e){  
        var header_height = $('header').outerHeight(true);
        e.preventDefault();       
        $('html,body').animate({scrollTop:$(this.hash).offset().top - header_height}, 1000);
    });
}

const privacyPopup = () => {
    /* privacy popup */
    $('.privacy_view').click(function(){
        $('.f_popup_bg').addClass('on');
    })
    $('.f_popup_bg').click(function(){
        $('.f_popup_bg').removeClass('on');
    })
    $('.f_popup_bg .content_wrap').click(function(e){
        e.stopPropagation();
    })
}

const qnaBox = () => {
    $('.main .qnaArti .qnaList .qnaDiv.qBox').click(function(){
        $(this).siblings('.aBox').slideToggle();
        $(this).toggleClass('active')
    })
}

const youtubeBackground = () => {
    $('[data-vbg]').youtube_background(); // 실행
}

const interiorArti2_slide = () => {
    var swiper = new Swiper(".main .interiorArti2 .slideWrap .swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroupSkip: 4,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop : true,
        pagination: {
          el: ".main .interiorArti2 .slideWrap .swiper-pagination",
          clickable: true,
        },

        breakpoints: {
            1250: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },

    });
}

const applyRightBtn = () => {
    $('.RightFloatingSec .showHideBtn').click(function(){
        $('.RightFloatingSec').toggleClass('hide')
    })
}

const scrollBottom = () => {
    var scrollableElement = $(document);
    var isScrolledToBottom = scrollableElement.height() - $(window).scrollTop() <= $(window).height();

    if (isScrolledToBottom) {
        $('.moBottomFloatingSec').addClass('hidden');
    }else{
        $('.moBottomFloatingSec').removeClass('hidden');
    }
}

const applyBottomBtn = () => {
    $('.moBottomFloatingSec .titleBox .showHideBtn').click(function(){
        $('.moBottomFloatingSec').toggleClass('hide');
    })
}
