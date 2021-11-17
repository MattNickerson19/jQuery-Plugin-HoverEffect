(function($){
    $.fn.imageHover = function(options){

        var settings = $.extend({
            opacity: 1,
            height: '160px',
            width: '190px',
            time: 1000
            

        }, options)

        return this.each(function(){

            

            enter()
            leave()
            


            function enter(event){

                $("img").mouseenter(function(){
                    $(this).css({"opacity": "0.7"}).animate({"height": settings.height, "width": settings.width}, settings.time);
                })

            }

            

            
            function leave(event){

                $("img").mouseleave(function(){
                    $(this).css({"opacity": settings.opacity}).animate({"height": "140px", "width": "170px"}, 1000);
                })

            }
            


        })

        
    }

    
}(jQuery));