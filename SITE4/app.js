$(function(){
    $('nav h1').fadeIn('slow')
    $(window).scroll(function(){
        var top = $(window).scrollTop()
        if(top > 90) {
            $('nav').fadeOut()
        }else{
            $('nav').fadeIn()
        }
    })
    $('main h1').hide().show('fast', callback)
    function callback(){
        $('main span').hide().show('slow',imgShow)
    }
    function imgShow() {
        $('img').show('slow',showWebSitesTypes)
        $('img').css('transform', 'translate(0px)')
    }
   function showWebSitesTypes(){
       $('.styleWebSites').show('slow')
       $('.styleWebSites').css('margin-top','-40px')
   }
})
function mainColor(){
    const body = document.body
    body.style.background = '#20c997'
}
function shoppingColor(){
    const body = document.body
    body.style.background = '#9ACFDD'
}
function cookingColor(){
    const body = document.body
    body.style.background = '#dc3545'
}
function photograpyColor(){
    const body = document.body
    body.style.background = '#202731'
}