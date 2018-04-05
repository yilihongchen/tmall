//导航效果
{
    $(".nav_right .mytaobao").mouseenter(function () {
        $(".hidden").show();
    })
    $(".nav_right .mytaobao").mouseleave(function () {
        $(".hidden").hide();
    })
    $(".nav_right .soucangjia").mouseenter(function () {
        $(".soucang_hidden").show();
    })
    $(".nav_right .soucangjia").mouseleave(function () {
        $(".soucang_hidden").hide();
    })
    $(".nav_right .shangjia").mouseenter(function () {
        $(".zhichi_hidden").show();
    })
    $(".nav_right .shangjia").mouseleave(function () {
        $(".zhichi_hidden").hide();
    })
    $(".nav_right .wangzhan").mouseenter(function () {
        $(".wangzhan_hidden").show();
    })
    $(".nav_right .wangzhan").mouseleave(function () {
        $(".wangzhan_hidden").hide();
    })
    $(".nav_right .shoujiban").mouseenter(function () {
        $(".tianerweima_hidden").show();
    })
    $(".nav_right .shoujiban").mouseleave(function () {
        $(".tianerweima_hidden").hide();
    })
}

//leftbar
var arr=["red","yellow","blue","green", "plum","pink","#FF19BA","skyblue"];

$(".totop").click(function(){
    $("html,body").animate({scrollTop:0})
});
$(window).scroll(function(){
    let st=$(window).scrollTop();//必须是scrollTop方法
    if(st>500){
        $(".topbar").show();
    }else{
        $(".topbar").hide();
    }
    if(st>500){
        $(".leftbar").show();
    }else{
        $(".leftbar").hide();
    }
});
$(".tips").click(function(){
    let index=$(this).index(".tips");//当前元素在所有tips中的元素的索引
    let ot=$(".tmall_market").eq(index).offset().top-60;
    $("html,body").animate({scrollTop:ot},200);



});
$(".tips").each(function (index){
    $(this).mouseenter(function (){
        let color1=arr[index];
        console.log(color1);
        $(".tips").eq(index).css({"backgroundColor":color1});
    })
    $(this).mouseleave(function (){
        $(".tips").eq(index).css({"backgroundColor":"#666"});
    })
} );
$(window).scroll(function(){
    let st=$(window).scrollTop();
    $(".tmall_market").each(function(index,ele){
        if(st>=$(this).offset().top-80){
            $(".tips").removeClass("active").eq(index).addClass("active");

        }
    })
})

//rightbar
$(".zhichan").mouseenter(function(){
    $(".zhichanwenzi").show();


})
$(".zhichan").mouseleave(function(){
    $(".zhichanwenzi").hide();
})
$(".soucang").mouseenter(function(){
    $(".soucangwenzi").show();
})
$(".soucang").mouseleave(function(){
    $(".soucangwenzi").hide();
})
$(".look").mouseenter(function(){
    $(".lookwenzi").show();
})
$(".look").mouseleave(function(){
    $(".lookwenzi").hide();
})
$(".chongzhi").mouseenter(function(){
    $(".chongzhiwenzi").show();
})
$(".chongzhi").mouseleave(function(){
    $(".chongzhiwenzi").hide();
})
$(".fankui").mouseenter(function(){
    $(".fankuiwenzi").show();
})
$(".fankui").mouseleave(function(){
    $(".fankuiwenzi").hide();
})
$(".right_erweima").mouseenter(function(){
    $(".erweibox").show();
})
$(".right_erweima").mouseleave(function(){
    $(".erweibox").hide();
})



//banner
{   var arr1=["red","yellow","blue","green","#fe6700","#FEC2D4","#98FEED","plum","#36FE33","#331DFE","#47FE59","pink","orange","red","#fe6700","plum"];
    var arr2=["E8E8E8","E8E8E8","#FF557A","E8E8E8","#FF557A","E8E8E8"];
    $(".banner_nav li").each(function (index,ele) {
        $(this).mouseenter(function () {
            var colors=arr1[index];

            console.log(colors);
            $(".menu").eq(index).show();
            $(".banner_nav li").eq(index).css({"color":colors});


        })
        $(this).mouseleave(function () {
            $(".menu").eq(index).hide();
            $(".banner_nav li").eq(index).css({"color":"#fff"});
        })


    })


}

{


    const imgs=document.querySelectorAll(".bannertu li img");
    const pagers=document.querySelectorAll(".pagerbox li");
    const banner=document.querySelector("#banner");
    console.dir(imgs);
    pagers.forEach(function(ele,index){
        ele.mouseenter=function(){
            for(let i=0;i<pagers.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<pagers.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banner.onmouseenter=function(){
        clearInterval(t)
    }
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    }
    $

}

//抢购部分
$(".qianggou_top_title").mouseenter(function(){
    $(this).addClass("active").siblings(".active").removeClass("active");
    var index=$(this).index();
    $(".qianggou_bottom").removeClass("active1").eq(index).addClass("active1");
})