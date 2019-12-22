 $(document).ready(function(){
            var shixin = "★";
            var kongxin = "☆";
            /*var flag = false;//没有点击*/
            $(".liii").mouseenter(function(){
                /*$(this).text(shixin).prevAll().text(shixin);
                $(this).nextAll().text(kongxin);*/
                $(this).text(shixin).prevAll().text(shixin).end().nextAll().text(kongxin);
            });
            $(".comment").mouseleave(function(){
               /* if(!flag){
                    $("li").text(kongxin);
                }*/
                $(".liii").text(kongxin);
                $(".clicked").text(shixin).prevAll().text(shixin);
            });
            $(".liii").on("click",function(){
               /* $(this).text(shixin).prevAll().text(shixin);
                $(this).nextAll().text(kongxin);
                flag = true;*/
                $(this).addClass("clicked").siblings().removeClass("clicked");
            });
        });