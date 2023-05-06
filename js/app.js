$(function(){
    //*jquery code

    let searchIcon = $(`.searchIcon`)
    let searchBar = $(`.search`)



    searchIcon.click(function(){

        searchBar.toggleClass(`show`)
        if(searchBar.hasClass(`show`) == true){
            searchIcon.html(`<i class="fa-sharp fa-solid fa-xmark"></i>`)
        }else{
            searchIcon.html(`<i class="fa-solid fa-magnifying-glass"></i>`)

        }
      



    })

    //*menu fixed

    let navbar = $(`.navbar`)
    let backToTop = $(`.backToTop`)

    $(window).scroll(function(){
        let scrollTopValue = $(window).scrollTop()

        if(scrollTopValue > 800){
          navbar.addClass(`menuFixed`)
          backToTop.addClass(`showBtn`)
        }else{
            navbar.removeClass(`menuFixed`)
            backToTop.removeClass(`showBtn`)
        }
    
    })

    //*backtotop Button
    let button = $(`.backToTop button`)

    button.click(function(){

        $(`html,body`).animate({
            scrollTop:0
        },500)
    })

})


    $(window).on(`load`,function(){
        $(`.preloader`).delay(1000).fadeOut()

    })





    


