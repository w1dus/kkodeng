

document.addEventListener("DOMContentLoaded", function(e){
    scrollBottom();
    applyBottomBtn();
    applyRightBtn();
})

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
