
// 监听浏览器,针对不同分辨率计算font-size
// 然后根据设计稿比如尺寸是640尺寸 rem = 设计稿的字体大小 / 100 ; 16px —> 0.16rem


(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth<=320){
                docEl.style.fontSize = '50px';
            }
            else if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }
            else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


$(function()
{
// 切换的导航和轮播图
    $(".tt1").find(".tt1a").each(function(index)
    {
        $(this).click(function()
        {
            $(".tt1").find(".tt1a").removeClass("show").eq(index).addClass("show");
            $(".banner").hide().eq(index).show();
        })
    });

// 2 更多下拉菜单
    $(".xiala").hide();
    $(".gdxl").click(function()
    {   
        
        $(".xiala").slideToggle(500);
    });

// index的留言切换，先放这里。
    // $(".liuyan").hide();
    // $(".liuyan2").click(function()
    // {
    //     $(".hzly").hide();
    //     $(".liuyan").show();
    // })


// 3 侧边栏
    $(".top1").click(function()
    {
        $(".aside").animate({left:"0rem"},1000);
        $(".con").animate({left:"3.75rem"},1000);
        $(".conall").show();
        $(".conall").bind('touchmove', function(event) {
             event.preventDefault();
         });
    });

    $(".conall").click(function(){
        $(".aside").animate({left:"-3.75rem"},1000);
        $(".con").animate({left:"0rem"},1000);
        $(".conall").hide();
        $(".conall").bind('touchmove', function(event) {
             event.preventDefault();
         });
    });


// 内容部分第二大块的切换
   $(".sect1").find("li").each(function(index)
    {
        $(this).click(function()
        {
            $(".sect1").find("li").removeClass("on").eq(index).addClass("on");
            $(".sect2").hide().eq(index).show();
        })
    });



    // 最下面的返回按钮
     $(".gotop").hide();
    $(window).scroll(function(event) 
    {
        
        $(window).scrollTop()>400? $(".gotop").show():$(".gotop").hide()
    });

     $(".gotop").click(function()
    {   
        $("html,body").animate({"scrollTop":"0"},1000);
        
    });

})





